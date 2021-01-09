"use strict";

const main_product_loader = function(){

    this.firstBatch = document.querySelector(".first_batch");
    this.categoryTitle = document.querySelector(".category_title");
    this.product_carrier = document.querySelector(".category");

    this.secondBatch = document.querySelector(".second_batch");
    this.categoryTitle2 = document.querySelector(".category_title2");

    this.scroller = document.querySelector(".product_scroll");

};

main_product_loader.prototype = {

    fetchFirstProductSection(){

        const xhr = new XMLHttpRequest();
            
        xhr.open('GET','php/main_product_loader.php', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');


        xhr.onload = ()=> {
                
                if (xhr.status === 200) {

                    let data = JSON.parse(xhr.responseText);

                    for (let i = 0; i < data.length; i++) {

                        let path = data[i].productpicdir;
                        let newpath = path.slice(3);

                        this.categoryTitle.innerHTML = `${data[i].product_category}`;


                        this.scroller.innerHTML += `

                            <div class="product_tag">
                                <img src="${newpath}" alt="product image" class="product_pics">
                                <footer class="product_details">
                                    <h3> ${data[i].product_name} </h3>
                                    ${data[i].product_details}
                                    <br><a class="product_full_details specific_product" href="links/product_full_detail.html"> Get full detail </a>
                                </footer>
                                <footer class="button_holders">
                                    <button type="submit" class="price prod_btn btn">${data[i].product_price} </button>

                                    <button type="submit" class="product_cart Add_to_cart btn">  
                                        <div class="cart_icon"></div> Add to cart
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

    fetchSecondProductSection(){

        const xhr = new XMLHttpRequest();
            
        xhr.open('GET','php/second_product_loader.php', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');


        xhr.onload = ()=> {
                
            if (xhr.status === 200) {

                let section = document.createElement('section');
                section.setAttribute('class', 'category card');

                let scroller = document.createElement('div');
                scroller.setAttribute('class','product_scroll');

                this.secondBatch.appendChild(section);
                section.appendChild(scroller);

                let data = JSON.parse(xhr.responseText);

                console.log(data);
                

                for (let i = 0; i < data.length; i++) {

                    let path = data[i].productpicdir;
                    let newpath = path.slice(3);

                    this.categoryTitle2.innerHTML = `${data[i].product_category}`;


                    scroller.innerHTML += `

                        <div class="product_tag">
                            <img src="${newpath}" alt="product image" class="product_pics">
                            <footer class="product_details">
                                <h3> ${data[i].product_name} </h3>
                                ${data[i].product_details}
                                <br><a class="product_full_details specific_product" href="links/product_full_detail.html"> Get full detail </a>
                            </footer>
                            <footer class="button_holders">
                                <button type="submit" class="price prod_btn btn">${data[i].product_price} </button>

                                <button type="submit" class="product_cart Add_to_cart btn">  
                                    <div class="cart_icon"></div> Add to cart
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
        

    }

};

const loader = new main_product_loader();
loader.fetchFirstProductSection();
loader.fetchSecondProductSection();

const product_slide = function(){

    this.first_categ_carrier = document.getElementById("first_categ");
    this.first_right_scroll = document.getElementById("first_categ_rightBtn");
    this.first_left_scroll = document.getElementById("first_categ_leftBtn");

    this.second_right_scroll = document.getElementById("second_categ_rightBtn");

    this.third_categ_carrier = document.getElementById("third_categ");
    this.third_right_scroll = document.getElementById("third_right_scroll");
    this.third_left_scroll = document.getElementById("third_left_scroll");


};

product_slide.prototype = {

    first_scroll_to_right(){

        console.dir(this.third_right_scroll);
    
        this.first_right_scroll.addEventListener('click',()=>{

            // this.first_categ_carrier.scrollLeft +=400;
            console.log("they are coming...");

        });

    },

    first_scroll_to_left(){

        this.first_left_scroll.addEventListener('click',()=>{
            
            this.first_categ_carrier.scrollLeft -=400;

        });
    },

    second_scroll_to_right(){

        console.dir(this.second_right_scroll);
    
        this.second_right_scroll.addEventListener('click',()=>{

            // this.first_categ_carrier.scrollLeft +=400;
            console.log("second button...");

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
    }


};

const product_slider = new product_slide();

product_slider.first_scroll_to_right();
product_slider.first_scroll_to_left();

// product_slider.second_scroll_to_right();

product_slider.third_scroll_to_right();
product_slider.third_scroll_to_left();




