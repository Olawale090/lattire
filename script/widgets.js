"use strict";

var uiWidgets = function(){
    this.menuBtn = document.querySelector("#homeMenu");
    this.productMenu = document.querySelector(".product_list");
    this.toggle = document.querySelector(".menu_toggle");
    this.miniMenu = document.querySelector("#minor_menu");
    this.mobileProductList = document.querySelector(".mobile_product_list");
    this.navBar = document.querySelector(".mainbar");
    // this.details = document.querySelector("");
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
            if (this.mobileProductList.classList.contains("mobile_hide_toggle")) {

                this.mobileProductList.classList.replace("mobile_hide_toggle","mobile_display");

            } else {

                this.mobileProductList.classList.replace("mobile_display","mobile_hide_toggle");

            }
        })
    },

    scrollEffect(){
        window.addEventListener('scroll',function () {
            alert(window.pageXOffset);
            if (window.pageYOffset >=40) {
                this.navBar.style.backgroundColor = "red";
                alert("Greater than 40")
            }
        })
        
    },
};


var widget = new uiWidgets();

widget.menu();
widget.minorMenu();
widget.scrollEffect();


var carousel = function(){
    this.slides = document.querySelector('.hero');
    this.nextBtn = document.querySelector('.next');
    this.prevBtn = document.querySelector('.previous');
    this.images = ["background-bags-bows-1050244.jpg","bargain-blouse-bright-1078958.jpg","assorted-blurred-background-boutique-994523.jpg","adorable-animal-bow-1663409.jpg","bag-boutique-business-336372.jpg"];
    this.counter = 0;
}

carousel.prototype.firstload = function(){
    this.slides.style.backgroundImage = `url('assets/pics/${this.images[this.counter]}`;
}

carousel.prototype.nextslide = function (){
        this.counter +=1;
        this.slides.style.backgroundImage = `url('assets/pics/${this.images[this.counter]}`;

        if(this.counter >= this.images.length){
            this.counter = 0;
            this.slides.style.backgroundImage = `url('assets/pics/${this.images[this.counter]}`;
        };
}

carousel.prototype.previousslide = function(){
   
    if(this.counter <= this.images.length){
        this.counter -= 1;
        this.slides.style.backgroundImage = `url('../assets/pics/${this.images[this.counter]}`;
    } 
    
    if (this.counter < 0){
        this.counter = this.images.length-1;
        this.slides.style.backgroundImage = `url('../assets/pics/${this.images[this.counter]}`;
    }

}

var Carousel = new carousel();
    Carousel.firstload();

    setInterval(function(){
        Carousel.nextslide()
    },3000);
