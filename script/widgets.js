"use strict";

var uiWidgets = function(){
    this.menuBtn = document.querySelector("#homeMenu");
    this.productMenu = document.querySelector(".product_list");
    this.toggle = document.querySelector(".menu_toggle");
    this.miniMenu = document.querySelector("#minor_menu");
    this.details;
}

uiWidgets.prototype = {
    menu(){
        this.menuBtn.addEventListener("click",()=>{
            if (this.productMenu.classList.contains("hide_toggle")) {

                this.productMenu.classList.replace("hide_toggle","menu_toggle");

            } else {

                this.productMenu.classList.replace("menu_toggle","hide_toggle");

            }

        });
    
    },

    minorMenu(){
        this.miniMenu.addEventListener("click",()=>{
            alert("Get minor menu");
        })
    }
};


var widget = new uiWidgets();

widget.menu();
widget.minorMenu();
