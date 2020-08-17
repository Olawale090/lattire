"use strict";

var admin_widgets = function () {
    this.menu = document.querySelector(".admin_account_menu_btn");
    this.menuList = document.querySelector(".admin_account_menu");
    this.list = document.querySelector(".admin_account_list");
}

admin_widgets.prototype = {
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
    }
};

const admin_widget = new admin_widgets();
admin_widget.display_toggle();