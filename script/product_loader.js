"use strict";

const main_product_loader = function(){

    this.firstBatch = document.querySelector(".first_batch");
    this.categoryTitle = document.querySelector(".category_title");

    this.secondBatch = document.querySelector(".second_batch");
    this.categoryTitle2 = document.querySelector(".category_title2");

    this.thirdBatch = document.querySelector(".third_batch");
    this.categoryTitle3 = document.querySelector(".category_title3");

    this.fourthBatch = document.querySelector(".fourth_batch");
    this.categoryTitle4 = document.querySelector(".category_title4");

    this.fifthBatch = document.querySelector(".fifth_batch");
    this.categoryTitle5 = document.querySelector(".category_title5");

    this.product_carrier = document.querySelector(".category");
    this.scroller = document.querySelector(".product_scroll");

};

main_product_loader.prototype = {

    fetchFirstProductSection(){

        const xhr = new XMLHttpRequest();
            
        xhr.open('GET','php/main_product_loader.php', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');


        xhr.onload = ()=> {
                
                if (xhr.status === 200) {

                    var data = JSON.parse(xhr.responseText);

                    if(window.Worker){
                
                        var lattireWorker = new Worker("script/fetcherworker.js");
                        var myObject = {lattireData:data};

                        lattireWorker.postMessage(myObject);

                        lattireWorker.onmessage = function(e){
                            console.warn("Web Worker...");
                            console.time("working on time");

                            for (let i = 0; i < e.data.result.length; i++) {

                                let path = e.data.result[i].productpicdir;
                                let newpath = path.slice(3);

                                var categoryTitle = document.querySelector(".category_title");
                                categoryTitle.innerHTML = `${e.data.result[i].product_category}`;

                                var scroller = document.querySelector(".product_scroll");
                                scroller.innerHTML += `

                                    <div class="product_tag">
                                        <img src="${newpath}" alt="product image" class="product_pics" load="lazy">
                                        <footer class="product_details prod_${e.data.result[i].product_name}">
                                            <h3 class="spec_prd_name" data-productname="${e.data.result[i].product_name}"> ${e.data.result[i].product_name} </h3>
                                            ${e.data.result[i].product_details}
                                        </footer>

                                        <a class="first_button product_full_details ${e.data.result[i].product_name} specific_product" href="php/product_full_detail.php?product=${e.data.result[i].product_name}"> Get full detail </a>
            
                                        <footer class="button_holders">
                                            <button type="submit" class="price prod_btn btn">${e.data.result[i].product_price} </button>

                                            <button type="submit" class="product_cart Add_to_cart btn" id="${e.data.result[i].product_category}cartID${i}" data-productid="${e.data.result[i].id}" data-productcateg="${e.data.result[i].product_category}"
                                                data-productname="${e.data.result[i].product_name}"
                                                data-productdetails="${e.data.result[i].product_details}"
                                                data-productprice="${e.data.result[i].product_price}"
                                                data-productpicdir="${e.data.result[i].productpicdir}">  

                                                <div class="cart_icon" name="cartID"></div> Add to cart
                                                <div class="cart_icon" name="cartCateg"></div>
                                                <div class="cart_icon" name="cartName"></div>
                                                <div class="cart_icon" name="cartDetails"></div>
                                                <div class="cart_icon" name="cartPrice"></div>
                                                <div class="cart_icon" name="cartPic"></div>

                                            </button>
                                        </footer>
                                    </div> 
                            
                                `;
                                        
                            }

                            console.timeEnd("working on time");
                                    
                        }   
                                
                    }

    
                } else if (xhr.status === 404) {
    
                    alert("PAGE NOT FOUND");

                    console.error ("THE PHP FILE DIRECTORY PASSED IS INCORRECT");
    
                }
            
        };

        xhr.onerror = (error)=>{
            console.error("error found: "+ error);
            alert("error found: " + error);
        };

        xhr.send();
        

    },

    fetchSecondProductSection(){

        const xhr = new XMLHttpRequest();
            
        xhr.open('GET','php/second_product_loader.php', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');


        xhr.onload = ()=> {
                
            if (xhr.status === 200) {

                let secondScroller = document.querySelector(".second_scroll");

                let data = JSON.parse(xhr.responseText);

                for (let i = 0; i < data.length; i++) {

                    let path = data[i].productpicdir;
                    let newpath = path.slice(3);

                    this.categoryTitle2.innerHTML = `${data[i].product_category}`;


                    secondScroller.innerHTML += `

                    <div class="product_tag">
                        <img src="${newpath}" alt="product image" class="product_pics" load="lazy">
                        <footer class="product_details prod_${data[i].product_name}">
                            <h3 class="spec_prd_name" data-productname="${data[i].product_name}"> ${data[i].product_name} </h3>
                            ${data[i].product_details}
                        </footer>

                        <a class="first_button product_full_details ${data[i].product_name} specific_product" href="php/product_full_detail.php?product=${data[i].product_name}"> Get full detail </a>

                        <footer class="button_holders">
                            <button type="submit" class="price prod_btn btn">${data[i].product_price} </button>

                            <button type="submit" class="product_cart Add_to_cart btn" id="${data[i].product_category}cartID${i}" data-productid="${data[i].id}" data-productcateg="${data[i].product_category}"
                                data-productname="${data[i].product_name}"
                                data-productdetails="${data[i].product_details}"
                                data-productprice="${data[i].product_price}"
                                data-productpicdir="${data[i].productpicdir}">  

                                <div class="cart_icon" name="cartID"></div> Add to cart
                                <div class="cart_icon" name="cartCateg"></div>
                                <div class="cart_icon" name="cartName"></div>
                                <div class="cart_icon" name="cartDetails"></div>
                                <div class="cart_icon" name="cartPrice"></div>
                                <div class="cart_icon" name="cartPic"></div>

                            </button>
                        </footer>
                    </div> 
                    
                    `;
                    
                    
                }
                
            } else if (xhr.status === 404) {

                alert("PAGE NOT FOUND");

                console.error ("THE PHP FILE DIRECTORY PASSED IS INCORRECT");

            }
        
        };

        xhr.onerror = (error)=>{
            console.error("error found: "+ error);
            alert("error found: " + error);
        };

        xhr.send();
        

    },

    fetchThirdProductSection(){

        const xhr = new XMLHttpRequest();
            
        xhr.open('GET','php/third_product_loader.php', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');


        xhr.onload = ()=> {
                
            if (xhr.status === 200) {

                let thirdScroller = document.querySelector(".third_scroll");

                let data = JSON.parse(xhr.responseText);

                for (let i = 0; i < data.length; i++) {

                    let path = data[i].productpicdir;
                    let newpath = path.slice(3);

                    this.categoryTitle3.innerHTML = `${data[i].product_category}`;


                    thirdScroller.innerHTML += `

                    <div class="product_tag">
                        <img src="${newpath}" alt="product image" class="product_pics" load="lazy">
                        <footer class="product_details prod_${data[i].product_name}">
                            <h3 class="spec_prd_name" data-productname="${data[i].product_name}"> ${data[i].product_name} </h3>
                            ${data[i].product_details}
                        </footer>

                        <a class="first_button product_full_details ${data[i].product_name} specific_product" href="php/product_full_detail.php?product=${data[i].product_name}"> Get full detail </a>

                        <footer class="button_holders">
                            <button type="submit" class="price prod_btn btn">${data[i].product_price} </button>

                            <button type="submit" class="product_cart Add_to_cart btn" id="${data[i].product_category}cartID${i}" data-productid="${data[i].id}" data-productcateg="${data[i].product_category}"
                                data-productname="${data[i].product_name}"
                                data-productdetails="${data[i].product_details}"
                                data-productprice="${data[i].product_price}"
                                data-productpicdir="${data[i].productpicdir}">  

                                <div class="cart_icon" name="cartID"></div> Add to cart
                                <div class="cart_icon" name="cartCateg"></div>
                                <div class="cart_icon" name="cartName"></div>
                                <div class="cart_icon" name="cartDetails"></div>
                                <div class="cart_icon" name="cartPrice"></div>
                                <div class="cart_icon" name="cartPic"></div>

                            </button>
                        </footer>
                    </div> 
                    
                    `;
                    
                    
                }
                
            } else if (xhr.status === 404) {

                alert("PAGE NOT FOUND");

                console.error ("THE PHP FILE DIRECTORY PASSED IS INCORRECT");

            }
        
        };

        xhr.onerror = (error)=>{
            console.error("error found: "+ error);
            alert("error found: " + error);
        };

        xhr.send();
        

    },

    fetchFourthProductSection(){

        const xhr = new XMLHttpRequest();
            
        xhr.open('GET','php/fourth_product_loader.php', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');


        xhr.onload = ()=> {
                
            if (xhr.status === 200) {

                let fourthScroller = document.querySelector(".fourth_scroll");

                let data = JSON.parse(xhr.responseText);

                for (let i = 0; i < data.length; i++) {

                    let path = data[i].productpicdir;
                    let newpath = path.slice(3);

                    this.categoryTitle4.innerHTML = `${data[i].product_category}`;


                    fourthScroller.innerHTML += `

                    <div class="product_tag">
                        <img src="${newpath}" alt="product image" class="product_pics" load="lazy">
                        <footer class="product_details prod_${data[i].product_name}">
                            <h3 class="spec_prd_name" data-productname="${data[i].product_name}"> ${data[i].product_name} </h3>
                            ${data[i].product_details}
                        </footer>

                        <a class="first_button product_full_details ${data[i].product_name} specific_product" href="php/product_full_detail.php?product=${data[i].product_name}"> Get full detail </a>

                        <footer class="button_holders">
                            <button type="submit" class="price prod_btn btn">${data[i].product_price} </button>

                            <button type="submit" class="product_cart Add_to_cart btn" id="${data[i].product_category}cartID${i}" data-productid="${data[i].id}" data-productcateg="${data[i].product_category}"
                                data-productname="${data[i].product_name}"
                                data-productdetails="${data[i].product_details}"
                                data-productprice="${data[i].product_price}"
                                data-productpicdir="${data[i].productpicdir}">  

                                <div class="cart_icon" name="cartID"></div> Add to cart
                                <div class="cart_icon" name="cartCateg"></div>
                                <div class="cart_icon" name="cartName"></div>
                                <div class="cart_icon" name="cartDetails"></div>
                                <div class="cart_icon" name="cartPrice"></div>
                                <div class="cart_icon" name="cartPic"></div>

                            </button>
                        </footer>
                    </div> 
                    
                    `;
                    
                    
                }
                
            } else if (xhr.status === 404) {

                alert("PAGE NOT FOUND");

                console.error ("THE PHP FILE DIRECTORY PASSED IS INCORRECT");

            }
        
        };

        xhr.onerror = (error)=>{
            console.error("error found: "+ error);
            alert("error found: " + error);
        };

        xhr.send();
        

    },

    fetchFifthProductSection(){

        const xhr = new XMLHttpRequest();
            
        xhr.open('GET','php/fifth_product_loader.php', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');


        xhr.onload = ()=> {
                
            if (xhr.status === 200) {

                let fifthScroller = document.querySelector(".fifth_scroll");

                let data = JSON.parse(xhr.responseText);

                for (let i = 0; i < data.length; i++) {

                    let path = data[i].productpicdir;
                    let newpath = path.slice(3);

                    this.categoryTitle5.innerHTML = `${data[i].product_category}`;


                    fifthScroller.innerHTML += `

                    <div class="product_tag">
                        <img src="${newpath}" alt="product image" class="product_pics" load="lazy">
                        <footer class="product_details prod_${data[i].product_name}">
                            <h3 class="spec_prd_name" data-productname="${data[i].product_name}"> ${data[i].product_name} </h3>
                            ${data[i].product_details}
                        </footer>

                        <a class="first_button product_full_details ${data[i].product_name} specific_product" href="php/product_full_detail.php?product=${data[i].product_name}"> Get full detail </a>

                        <footer class="button_holders">
                            <button type="submit" class="price prod_btn btn">${data[i].product_price} </button>

                            <button type="submit" class="product_cart Add_to_cart btn" id="${data[i].product_category}cartID${i}" data-productid="${data[i].id}" data-productcateg="${data[i].product_category}"
                                data-productname="${data[i].product_name}"
                                data-productdetails="${data[i].product_details}"
                                data-productprice="${data[i].product_price}"
                                data-productpicdir="${data[i].productpicdir}">  

                                <div class="cart_icon" name="cartID"></div> Add to cart
                                <div class="cart_icon" name="cartCateg"></div>
                                <div class="cart_icon" name="cartName"></div>
                                <div class="cart_icon" name="cartDetails"></div>
                                <div class="cart_icon" name="cartPrice"></div>
                                <div class="cart_icon" name="cartPic"></div>

                            </button>
                        </footer>
                    </div> `;
                    
                    
                }
                
            } else if (xhr.status === 404) {

                alert("PAGE NOT FOUND");

                console.error ("THE PHP FILE DIRECTORY PASSED IS INCORRECT");

            }
        
        };

        xhr.onerror = (error)=>{
            console.error("error found: "+ error);
            alert("error found: " + error);
        };

        xhr.send();
        

    }

};

const loader = new main_product_loader();
loader.fetchFirstProductSection();
loader.fetchSecondProductSection();
loader.fetchThirdProductSection();
loader.fetchFourthProductSection();
loader.fetchFifthProductSection();


/**
 * PRODUCT SLIDING FROM LEFT TO RIGHT 
 * CLASS IS PLACED BELOW
 * EACH SECTION CONTAINING PRODUCT SCROLL BUTTON
 *  */ 

const product_slide = function(){

    this.first_categ_carrier = document.getElementById("first_categ");
    this.firstRightScroll = document.getElementById("first_categ_rightBtn");
    this.firstLeftScroll = document.getElementById("first_categ_leftBtn");

    this.second_categ_carrier = document.getElementById("second_categ");
    this.secondRightScroll = document.getElementById("second_categ_rightBtn");
    this.secondLeftScroll = document.getElementById("second_categ_leftBtn");

    this.third_categ_carrier = document.getElementById("third_categ");
    this.third_right_scroll = document.getElementById("third_right_scroll");
    this.third_left_scroll = document.getElementById("third_left_scroll");

    this.fourth_categ_carrier = document.getElementById("fourth_categ");
    this.fourth_right_scroll = document.getElementById("fourth_right_scroll");
    this.fourth_left_scroll = document.getElementById("fourth_left_scroll");

    this.fifth_categ_carrier = document.getElementById("fifth_categ");
    this.fifth_right_scroll = document.getElementById("fifth_right_scroll");
    this.fifth_left_scroll = document.getElementById("fifth_left_scroll");
};

product_slide.prototype = {

    first_scroll_to_right(){
    
        this.firstRightScroll.addEventListener('click',()=>{

            this.first_categ_carrier.scrollLeft +=400;
            this.first_categ_carrier.style.animationName = "scroller";

        });

    },

    first_scroll_to_left(){

        this.firstLeftScroll.addEventListener('click',()=>{
            
            this.first_categ_carrier.scrollLeft -=400;

        });
    },

    second_scroll_to_right(){
    
        this.secondRightScroll.addEventListener('click',()=>{

            this.second_categ_carrier.scrollLeft += 400;

        });

    },

    second_scroll_to_left(){
    
        this.secondLeftScroll.addEventListener('click',()=>{

            this.second_categ_carrier.scrollLeft -= 400;

        });

    },

    third_scroll_to_right(){

        this.third_right_scroll.addEventListener('click',()=>{

            this.third_categ_carrier.scrollLeft +=400;

        });
        
    },

    third_scroll_to_left(){
        this.third_left_scroll.addEventListener('click',()=>{

            this.third_categ_carrier.scrollLeft -=400;

        });
    },

    fourth_scroll_to_right(){

        this.fourth_right_scroll.addEventListener('click',()=>{

            this.fourth_categ_carrier.scrollLeft +=400;

        });
        
    },

    fourth_scroll_to_left(){
        this.fourth_left_scroll.addEventListener('click',()=>{

            this.fourth_categ_carrier.scrollLeft -=400;

        });
    },

    fifth_scroll_to_right(){

        this.fifth_right_scroll.addEventListener('click',()=>{

            this.fifth_categ_carrier.scrollLeft +=400;

        });
        
    },

    fifth_scroll_to_left(){
        this.fifth_left_scroll.addEventListener('click',()=>{

            this.fifth_categ_carrier.scrollLeft -=400;

        });
    }

};

const product_slider = new product_slide();

product_slider.first_scroll_to_right();
product_slider.first_scroll_to_left();

product_slider.second_scroll_to_right();
product_slider.second_scroll_to_left();

product_slider.third_scroll_to_right();
product_slider.third_scroll_to_left();

product_slider.fourth_scroll_to_right();
product_slider.fourth_scroll_to_left();

product_slider.fifth_scroll_to_right();
product_slider.fifth_scroll_to_left();