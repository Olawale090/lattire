"use strict";
var user_account = function () {
    this.menu = document.querySelector(".user_account_menu_btn");
    this.menuList = document.querySelector(".user_account_menu");
}

user_account.prototype = {
    display_toggle(){
        this.menu.addEventListener('click',() => {
            try {
                if (this.menuList.classList.contains("mobile_hide_toggle")) {
    
                    this.menuList.classList.replace("mobile_hide_toggle","mobile_display");
    
                } else {
    
                    this.menuList.classList.replace("mobile_display","mobile_hide_toggle");
    
                }
            } catch (error) {
                alert(error);
            }
        })
    }
};

const user_account_widget = new user_account();
user_account_widget.display_toggle();
