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
    loadAllCartedProduct (){
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

                                <div class="product_tag" id="product_tag${data[i].product_id}">
                                    <button class="cart_remove_btn delete_${data[i].product_name}cart${i}" id="delete_cart${data[i].product_id}">
                                        x
                                        <div name="cart_pr_name"> </div>
                                        <div name="cart_cust_email"> </div>
                                    </button>
                                    <img src="${path}" alt="product image" class="product_pics" load="lazy">
                                    <footer class="product_details prod_${data[i].product_name}">
                                        <h3 class="spec_prd_name" data-productname="${data[i].product_name}"> ${data[i].product_name} </h3>
                                        ${data[i].product_details}
                                    </footer>

                                    <a class="first_button product_full_details specific_product" href="../php/product_full_detail.php?product=${data[i].product_name}"> Get full detail </a>
        
                                    <footer class="button_holders">
                                        <button type="submit" class="price prod_btn btn">${data[i].product_price} </button>
                                        
                                        <button type="submit" class="product_cart Add_to_cart btn" id="order_product${data[i].product_id}" 
                                            data-productid = "${data[i].product_id}"
                                            data-productname="${data[i].product_name}" 
                                            data-customeremail="${data[i].customer_email}"
                                            data-productcategory="${data[i].product_category}"
                                            data-productdetails="${data[i].product_details}"
                                            data-productprice="${data[i].product_price}"
                                            data-productpicdir="${path}">  
                                            
                                            Order
                                        </button>

                                        <div name="customer_email"> </div>
                                        <div name="product_id"> </div>
                                        <div name="product_name"> </div>
                                        <div name="product_category"> </div>
                                        <div name="product_details"> </div>
                                        <div name="product_price"> </div>
                                        <div name="product_pic_dir"> </div>
                                    
                                    </footer>
                                </div> 
                            
                            `;
                    }

                }else{
                    console.log("error occured");
                }
            }
            xhr.send();
            return{
                
                delete_product:function(){

                    let notifier = document.querySelector(".notifier");
                    let errorNotifier = document.querySelector(".action_failed");

                    xhr.onload=()=>{
                        if(xhr.status==200){

                            let data = JSON.parse(xhr.responseText);

                            data.forEach(p => {

                                var productCardHolder = document.getElementById(`product_tag${p.product_id}`);
                                var deleteBtn = document.getElementById(`delete_cart${p.product_id}`);

                                deleteBtn.addEventListener("click",()=>{

                                    productCardHolder.style.display = "none";

                                    let productName = deleteBtn.dataset.productname;
                                    let customerEmail = deleteBtn.dataset.customeremail;
                                

                                    const xhr = new XMLHttpRequest(); 
                                    xhr.open('POST','../php/delete_from_cart.php', true);
                                    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

                                    let params = "cart_pr_name="+productName +"&cart_cust_email="+customerEmail;

                                    xhr.onload=function(){
                                        if(xhr.status==200){
                                            notifier.innerHTML = xhr.responseText;
                                            notifier.style.animationPlayState = "running";
                                        }else{
                                            errorNotifier.innerHTML = xhr.responseText;
                                            errorNotifier.style.animationPlayState = "running";
                                        }
                                    }

                                    
                                    xhr.send(params);

                                });

                                errorNotifier.style.animationPlayState = "paused";

                            }); 
                                
                        }
                    }

                    
                },

                order_product:function(){
                    let notifier = document.querySelector(".notifier");
                    let errorNotifier = document.querySelector(".action_failed");
                    xhr.onload=()=>{
                        if(xhr.status==200){

                            let data = JSON.parse(xhr.responseText);

                            data.forEach(p => {

                                var productCardHolder = document.getElementById(`product_tag${p.product_id}`);
                                var orderBtn = document.getElementById(`order_product${p.product_id}`);

                                orderBtn.addEventListener("click",()=>{

                                    productCardHolder.style.display = "none";
                                    let customerEmail = orderBtn.dataset.customeremail;
                                    let productId = orderBtn.dataset.productid;
                                    let productName = orderBtn.dataset.productname;
                                    let productCategory = orderBtn.dataset.productcategory;
                                    let productDetails = orderBtn.dataset.productdetails;
                                    let productPrice = orderBtn.dataset.productprice;
                                    let productPicture = orderBtn.dataset.productpicdir;
                                    
                                

                                    const xhr = new XMLHttpRequest(); 
                                    xhr.open('POST','../php/customer_order.php', true);
                                    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

                                    let params = `customer_email=${customerEmail}&product_id=${productId}&product_name=${productName}&product_category=${productCategory}&product_details=${productDetails}&product_price=${productPrice}&product_pic_dir=${productPicture}`;

                                    xhr.onload=()=>{
                                        if(xhr.status==200){
                                            console.log(xhr.responseText);
                                        }else{
                                            errorNotifier.innerHTML = xhr.responseText;
                                        }
                                    }

                                    xhr.send(params);

                                });

                            });
                            
                            
                                
                        }
                    }
                    
                    return{
                        remove_product_by_order:function(){
                            
                            xhr.onload=()=>{
                                if(xhr.status==200){
        
                                    let data = JSON.parse(xhr.responseText);
        
                                    data.forEach(p => {
        
                                        var productCardHolder = document.getElementById(`product_tag${p.product_id}`);
                                        var orderBtn = document.getElementById(`order_product${p.product_id}`);
        
                                        orderBtn.addEventListener("click",()=>{
        
                                            productCardHolder.style.display = "none";
        
                                            let productName = orderBtn.dataset.productname;
                                            let customerEmail = orderBtn.dataset.customeremail;
                                        
        
                                            const xhr = new XMLHttpRequest(); 
                                            xhr.open('POST','../php/delete_from_cart.php', true);
                                            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        
                                            let params = "cart_pr_name="+productName +"&cart_cust_email="+customerEmail;
        
                                            xhr.onload=()=>{
                                                if(xhr.status==200){
                                                    notifier.innerHTML = xhr.responseText;
                                                    notifier.style.animationPlayState = "running";
                                                }else{
                                                    errorNotifier.innerHTML = xhr.responseText;
                                                    errorNotifier.style.animationPlayState = "running";
                                                }
                                            }
        
                                            xhr.send(params);
        
                                        });
        
                                    }); 
                                        
                                }
                            }                            
                        }   
                    }
                },
            }

            

            
    }
}

let cartedLoader = new cart_loader();
window.onload = cartedLoader.loadAllCartedProduct();

setTimeout(function(){
    cartedLoader.loadAllCartedProduct().delete_product();
    cartedLoader.loadAllCartedProduct().order_product().remove_product_by_order();
},1000);


const product_slide = function(){
    this.first_categ_carrier = document.querySelector(".product_scroll");
    this.scrollDownBtn = document.getElementById("scroll_down");
    this.scrollUpBtn = document.getElementById("scroll_up");
};

product_slide.prototype = {

    scrollProductDown(){
        this.scrollDownBtn.addEventListener('click',()=>{
            this.first_categ_carrier.scrollTop +=100;
        });
    },

    scrollProductUp(){
        this.scrollUpBtn.addEventListener('click',()=>{
            this.first_categ_carrier.scrollTop -=100;
        });
    }

};

const product_slider = new product_slide();
product_slider.scrollProductDown();
product_slider.scrollProductUp();