"use strict";
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