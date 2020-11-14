"use strict";
import { usercartdata } from "./usercart.js";

let customerdata = new usercartdata();
document.onload = customerdata.navbardata();
console.log(customerdata);

export const suggestiondata = function(){
    this.suggusername = document.querySelector(".suggestionusername");
};

suggestiondata.prototype = {
    suggestiontab(){
        let xhr = new XMLHttpRequest();
            xhr.open('POST','../php/customerCompleteData.php', true);
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

            xhr.onload = ()=>{
                if (xhr.status === 200) {
                    
                    let data = JSON.parse(xhr.responseText);
                    this.suggusername.textContent = data.customername;
                    // this.userimage = data.customername;

                }
            };

            xhr.onerror = (error)=>{
                console.error(error);
            };

            xhr.send();

    }
};

let suggestion = new suggestiondata();
document.onload = suggestion.suggestiontab();
console.log(suggestion);


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