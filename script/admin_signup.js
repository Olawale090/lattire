"use strict";

const filewidget = function () {
    this.fileBtn = document.querySelector(".admin_pic_upload");
    this.picholder = document.querySelector(".admin_pic_holder");
}

filewidget.prototype = {
    selectPicture(){
        this.fileBtn.addEventListener('change',(event)=>{
            let input = event.target;
            let reader = new FileReader();

            // console.log(event);

            reader.onload = ()=>{
                let dataurl = reader.result;
                this.picholder.style.backgroundImage = `url(${dataurl})`;
            };

            console.dir(this.fileBtn);
            
            reader.readAsDataURL(this.fileBtn.files[0]);
        }); 
    }
};

const uploadPictureWidget = new filewidget();

uploadPictureWidget.selectPicture();