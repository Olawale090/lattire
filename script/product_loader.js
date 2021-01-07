"use strict";

const main_product_loader = function(){

    this.firstBatch = document.querySelector(".first_batch");
    this.categoryTitle = document.querySelector(".category_title");

    this.secondBatch = document.querySelector(".second_batch");
    this.categoryTitle2 = document.querySelector(".category_title2");

};

main_product_loader.prototype = {

    fetchFirstProductSection(){

        const xhr = new XMLHttpRequest();
            
        xhr.open('GET','php/main_product_loader.php', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');


        xhr.onload = ()=> {
                
                if (xhr.status === 200) {

                    let section = document.createElement('section');
                    section.setAttribute('class', 'category card');

                    let scroller = document.createElement('div');
                    scroller.setAttribute('class','product_scroll');

                    this.firstBatch.appendChild(section);
                    section.appendChild(scroller);

                    let data = JSON.parse(xhr.responseText);

                    console.log(data);
                    

                    for (let i = 0; i < data.length; i++) {

                        let path = data[i].productpicdir;
                        let newpath = path.slice(3);

                        this.categoryTitle.innerHTML = `${data[i].product_category}`;


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

    this.product_carrier = document.querySelector(".category");

    this.right_scroll = document.querySelector(".right_scroll");

    this.left_scroll = document.querySelector(".left_scroll");


};

product_slide.prototype = {

    scroll_to_right(){

        this.right_scroll.addEventListener('click',()=>{

            // this.product_carrier.addEventListener('scroll',(event)=>{

            //     console.dir(event);
            //     console.dir(this.product_carrier);
    
            // });

            this.product_carrier.scrollBy (20);
            console.log(this.product_carrier.scrollBy());
        });
        
    }


};

const product_slider = new product_slide();
product_slider.scroll_to_right();

