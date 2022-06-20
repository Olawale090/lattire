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
    },

    adminLoadData(){
        window.onload = ()=>{
            
            let xhr = new XMLHttpRequest();
            xhr.open('POST','../php/adminCompleteData.php', true);
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

            let admin_pic_holder = document.querySelector(".admin_img_container");
            let admin_username = document.querySelector(".username");
            let admin_big_pic_holder = document.querySelector(".admin_img");

            xhr.onload = ()=>{
                if (xhr.status === 200) {
                    let data = JSON.parse(xhr.responseText);
                    console.log(data);
                    console.log(data.adminpicdir);
                    admin_username.textContent = data.username;
                    admin_big_pic_holder.style.backgroundImage = `url('${data.adminpicdir}')`;
                    admin_pic_holder.style.backgroundImage = `url('${data.adminpicdir}')`;

                }
            };

            xhr.onerror = (error)=>{

                console.error("error found ",error);

            };

            xhr.send();
        };
    }
};

const admin_widget = new admin_widgets();
admin_widget.display_toggle();
admin_widget.adminLoadData();