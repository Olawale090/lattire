"use strict";
const product_full_details_navbar_data = function(){
    this.username = document.querySelector(".username");
    this.userimage = document.querySelector(".userimg_container");
    this.suggestionName = document.querySelector(".suggestionusername");
};

product_full_details_navbar_data.prototype = {
    customerDetailsNavbar(){
        let xhr = new XMLHttpRequest();
            xhr.open('POST','../php/customerCompleteData.php', true);
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

            xhr.onload = ()=>{
                if (xhr.status === 200) {
                    try {

                        let data = JSON.parse(xhr.responseText);
                        this.username.textContent = data.customername;
                        this.suggestionName.innerHTML = data.customername;
                        this.userimage.style.backgroundImage = `url("${data.customerpicdir}")`;
                        this.userimage.style.backgroundSize = "cover";

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

let product_data = new product_full_details_navbar_data();
document.onload = product_data.customerDetailsNavbar();
var product_details_widget = function () {
    this.menu = document.querySelector(".prod_details_menu");
    this.mobileProductList = document.querySelector(".mobile_product_list");
}

product_details_widget.prototype = {
    display_toggle(){
        this.menu.addEventListener('click',() => {
            try {
                if (this.mobileProductList.classList.contains("mobile_hide_toggle")) {

                    this.mobileProductList.classList.replace("mobile_hide_toggle","mobile_display");
    
                } else {
    
                    this.mobileProductList.classList.replace("mobile_display","mobile_hide_toggle");
    
                }
            } catch (error) {
                alert(error);
            }
        })
    }
};

const widget = new product_details_widget();
widget.display_toggle();