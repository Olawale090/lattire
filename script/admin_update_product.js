"use strict";"use strict";

var administrator_update = function(){
    this.category = document.querySelector(".product_category");
    this.name = document.querySelector(".product_name");
    this.details = document.querySelector(".product_details");
    this.price = document.querySelector(".product_price");
    this.quantity = document.querySelector(".product_quantity");
    this.type = document.querySelector(".Dress_type");
    this.size = document.querySelector(".Dress_size");
    this.material = document.querySelector(".Dress_material");
    this.maker = document.querySelector(".Dress_maker");

    this.productUpdateBtn = document.querySelector(".update_submit_btn");
    this.productImageContainer = document.querySelector(".product_image_uploaded");
    this.imageUploadBtn = document.querySelector(".upload_btn");

    //widget
    this.menu = document.querySelector(".admin_account_menu_btn");
    this.menuList = document.querySelector(".admin_account_menu");
    this.list = document.querySelector(".admin_account_list");
};

administrator_update.prototype = {

    display_toggle(){
        this.menu.addEventListener('click',() => {
            try {
                if (this.menuList.classList.contains("mobile_hide_toggle")) {
    
                    this.menuList.classList.replace("mobile_hide_toggle","mobile_display");
    
                } else {
    
                    this.menuList.classList.replace("mobile_display","mobile_hide_toggle");
                    this.list.style.pointerEvents = 'all';
    
                }
            } catch (error) {
                alert(error);
            }
        })
    },

    adminLoadData(){

        window.onload = ()=>{

            let xhr = new XMLHttpRequest();
            xhr.open('POST','../php/adminCompleteData.php', true);
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

            let admin_pic_holder = document.querySelector(".admin_img_container");
            let admin_username = document.querySelector(".username");

            xhr.onload = ()=>{

                if (xhr.status === 200) {
                    let data = JSON.parse(xhr.responseText);
                    console.log(data);
                    console.log(data.adminpicdir);
                    admin_username.textContent = data.username;
                    admin_pic_holder.style.backgroundImage = `url('${data.adminpicdir}')`;

                }

            };

            xhr.onerror = (error)=>{
                console.error("error found ",error);
            };

            xhr.send();
        };
    },

    updateProduct(){

        this.productUpdateBtn.addEventListener('click',(event)=>{

            event.preventDefault();

            let param = `product_category=${this.category.value}&product_name=${this.name.value}&product_details=${this.details.value} 
            &product_price=${this.price.value}&product_quantity=${this.quantity.value}&dress_type=${this.type.value}
            &dress_size=${this.size.value}&dress_material=${this.material.value}&dress_maker=${this.maker.value}`;

            let xhr = new XMLHttpRequest();
            xhr.open('POST','../php/admin_update_product.php', true);
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

            // let form = document.querySelector(".product_upload_form");

            // let formData = new FormData(form);

            xhr.onload = ()=>{
                if (xhr.status === 200) {
                    
                    console.log(this.name);
                    alert(xhr.responseText);
                    console.log(xhr.responseText);

                } else if(xhr.status === 404) {

                    console.error("PAGE NOT FOUND");

                }
                
            };

            xhr.onerror = ()=>{

                console.error("Error occurred in passing the data ");
            
            };

            xhr.send(param); 

        },false);
    }
};

var adminProductUpload = new administrator_update();
adminProductUpload.display_toggle();
adminProductUpload.adminLoadData();
adminProductUpload.updateProduct();
