"use strict";
export const usercartdata = function(){
    this.username = document.querySelector(".pr_username");
    this.userimage = document.querySelector(".userimg_container");
    this.login_required = document.querySelector(".user_login_required");
};

usercartdata.prototype = {
    navbardata(){
        let xhr = new XMLHttpRequest();
            xhr.open('POST','../php/customerCompleteData.php', true);
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

            xhr.onload = ()=>{
                if (xhr.status === 200) {

                    try {

                        let data = JSON.parse(xhr.responseText);
                    
                        this.username.textContent = data.customername;
                        this.userimage.style.backgroundImage =`url(${data.customerpicdir})`;
                        this.userimage.style.backgroundSize = 'cover';
                        this.login_required.style.display = 'none';

                    } catch (error) {
                        console.warn("Customer signin required");
                        window.open("../links/login.html","_Self");
                    }
                    
                   

                }
            };

            xhr.onerror = (error)=>{
                console.error(error);
            };

            xhr.send();

    }
};

let usercart = new usercartdata();
document.onload = usercart.navbardata();


const cart_loader = function(){
    this.firstBatch = document.querySelector(".first_batch");
    this.categoryTitle = document.querySelector(".category_title");
    this.scroller = document.querySelector(".product_scroll");
}

cart_loader.prototype = {
    loadFirstCartedProduct (){
        let xhr = new XMLHttpRequest();
            xhr.open('POST','../php/usercartLoader.php', true);
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

            xhr.onload=()=>{
                if(xhr.status==200){
                    let data = JSON.parse(xhr.responseText);
                    // this.categoryTitle.innerHTML = data[0].product_category;

                    for (let i = 0; i < data.length; i++) {

                        let path = data[i].productpicdir;
                        // let newpath = path.slice(3);

                        this.scroller.innerHTML += `

                                <div class="product_tag" id="product_tag${[i]}">
                                    <button class="cart_remove_btn" id="delete_cart${[i]}" data-productName="${data[i].product_name}" data-customeremail="${data[i].customer_email}">
                                        x
                                        <div name="cart_pr_name"> </div>
                                        <div name="cart_cust_email"> </div>
                                    </button>
                                    <img src="${path}" alt="product image" class="product_pics" load="lazy">
                                    <footer class="product_details prod_${data[i].product_name}">
                                        <h3 class="spec_prd_name" data-productname="${data[i].product_name}"> ${data[i].product_name} </h3>
                                        ${data[i].product_details}
                                    </footer>

                                    <a class="first_button product_full_details ${data[i].product_name} specific_product" href="../php/product_full_detail.php?product=${data[i].product_name}"> Get full detail </a>
        
                                    <footer class="button_holders">
                                        <button type="submit" class="price prod_btn btn">${data[i].product_price} </button>
                                        
                                        <button type="submit" class="product_cart Add_to_cart btn">  
                                            Order
                                        
                                        </button>
                                    
                                    </footer>
                                </div> 
                            
                            `;
                    }
                }else{
                    console.log("error occured");
                }
            }

            xhr.send();
    }
}

let cartedLoader = new cart_loader();
window.onload = cartedLoader.loadFirstCartedProduct();


const product_slide = function(){
    this.first_categ_carrier = document.getElementById("first_categ");
    this.firstRightScroll = document.getElementById("first_categ_rightBtn");
    this.firstLeftScroll = document.getElementById("first_categ_leftBtn");
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

};

const product_slider = new product_slide();

product_slider.first_scroll_to_right();
product_slider.first_scroll_to_left();