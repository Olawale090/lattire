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
            if (window.pageYOffset >=100) {
                this.navBar.style.backgroundColor = "rgb(60, 123, 240)";
            }else{
                this.navBar.style.backgroundColor = "white";
            }
        
    },
};


var widget = new uiWidgets();

widget.menu();
widget.minorMenu();

window.addEventListener('scroll',function () {
    widget.scrollEffect();
})
var carousel = function(){
    this.slides = document.querySelector('.hero');
    this.nextBtn = document.querySelector('.next');
    this.prevBtn = document.querySelector('.previous');
    this.images = ["background-bags-bows-1050244.jpg","bargain-blouse-bright-1078958.jpg","assorted-blurred-background-boutique-994523.jpg","adorable-animal-bow-1663409.jpg","bag-boutique-business-336372.jpg","IMG-20200630-WA0020.jpg","Striped Long Sleeve Crop Top & Skirt Sets (1).jpg"];
    this.counter = 0;
}

carousel.prototype = {

    firstload(){
        this.slides.style.backgroundImage = `url('assets/pics/${this.images[this.counter]}`;
    },

    nextslide(){
        this.counter +=1;
        this.slides.style.backgroundImage = `url('assets/pics/${this.images[this.counter]}`;

        if(this.counter >= this.images.length){
            this.counter = 0;
            this.slides.style.backgroundImage = `url('assets/pics/${this.images[this.counter]}`;
        };
    },

    previousslide(){
   
        if(this.counter <= this.images.length){
            this.counter -= 1;
            this.slides.style.backgroundImage = `url('../assets/pics/${this.images[this.counter]}`;
        } 
        
        if (this.counter < 0){
            this.counter = this.images.length-1;
            this.slides.style.backgroundImage = `url('../assets/pics/${this.images[this.counter]}`;
        }
    
    }

};

var Carousel = new carousel();
    Carousel.firstload();

    setInterval(function(){
        Carousel.nextslide();
    },3000);

let signinValidation = function(){
    this.signinBtn = document.querySelector(".signin_link");
    this.logoutBtn = document.querySelector(".signout_btn");
};

signinValidation.prototype = {
     
    validateUserRegistration(){

        let xhr = new XMLHttpRequest();
            xhr.open('POST','php/customerCompleteData.php', true);
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

            xhr.onload = ()=>{
                if (xhr.status === 200) {
                    
                    try {

                        let data = JSON.parse(xhr.responseText);
                        if(data.customername !== ""){
                            
                            this.signinBtn.style.display = "none";
                            this.logoutBtn.style.display = "block";
                            
                        }else{

                            console.warn("Customer name not found");

                        }


                    } catch (error) {

                        console.warn("Customer sign in required");

                    }

                    

                   
                }
            };

            xhr.onerror = (error)=>{
                console.error(error);
            };

            xhr.send();

    },

    logout(){
        this.logoutBtn.addEventListener("click",()=>{
        
            const xhr = new XMLHttpRequest();

            xhr.open('GET','php/customerlogout.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            xhr.onload = ()=>{
                if(xhr.status === 200){
                    this.signinBtn.style.display = "block";
                    this.logoutBtn.style.display = "none";
                }else{
                    console.error("ERROR OCCURED");
                }
            }


            xhr.send();
            
        },false)
    }
};

let user = new signinValidation();
user.validateUserRegistration();
user.logout();
