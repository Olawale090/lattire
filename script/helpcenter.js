"use strict";

const menu = function(){
    this.payment = document.querySelector(".payment");
    this.refund = document.querySelector(".refund");
    this.addToCart = document.querySelector(".addtocart");
    this.removeFromCart = document.querySelector(".removefromcart");
    this.delivery = document.querySelector(".delivery");
    this.bullets = document.querySelector(".bullets");

    this.signinBtn = document.querySelector(".signin_link");
}

menu.prototype = {

    paymentTabLoaded(){
        window.addEventListener('load',()=>{
            this.payment.style.backgroundColor = '#4675f8';
            this.payment.style.color = "white";
            this.bullets.textContent = `How to pay: Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sequi excepturi atque ipsa ducimus sint voluptatem natus omnis in aperiam recusandae voluptatibus earum accusantium hic eum nulla ab, iure et.
                Officiis modi natus voluptate sequi voluptates quidem praesentium! Minus vero minima illo dolore. Magni, laudantium nobis. Esse, quia. Quibusdam temporibus iste adipisci quas sunt eaque, quasi dolores unde enim suscipit.
                Aspernatur qui ipsam enim, veritatis incidunt asperiores nihil porro eveniet, numquam nobis necessitatibus deleniti, quis alias quas animi odio excepturi consequuntur rem aliquid rerum libero quo quod minus dolor? Saepe!
                Enim, ipsam. Ipsum et impedit est pariatur necessitatibus debitis laudantium ea mollitia ducimus voluptatem, nobis dolore quasi repudiandae eligendi quisquam voluptate assumenda! Dolorem, quibusdam tempore saepe iste tenetur necessitatibus fugit.
                Nobis dignissimos natus vitae ducimus ipsa qui quod possimus illo quos, corrupti ab id aperiam accusamus odio saepe. Illum cupiditate perspiciatis tempore officia expedita enim provident ullam, sed accusantium. Fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sequi excepturi atque ipsa ducimus sint voluptatem natus omnis in aperiam recusandae voluptatibus earum accusantium hic eum nulla ab, iure et.
                Officiis modi natus voluptate sequi voluptates quidem praesentium! Minus vero minima illo dolore. Magni, laudantium nobis. Esse, quia. Quibusdam temporibus iste adipisci quas sunt eaque, quasi dolores unde enim suscipit.
                Aspernatur qui ipsam enim, veritatis incidunt asperiores nihil porro eveniet, numquam nobis necessitatibus deleniti, quis alias quas animi odio excepturi consequuntur rem aliquid rerum libero quo quod minus dolor? Saepe!
                Enim, ipsam. Ipsum et impedit est pariatur necessitatibus debitis laudantium ea mollitia ducimus voluptatem, nobis dolore quasi repudiandae eligendi quisquam voluptate assumenda! Dolorem, quibusdam tempore saepe iste tenetur necessitatibus fugit.
                Nobis dignissimos natus vitae ducimus ipsa qui quod possimus illo quos, corrupti ab id aperiam accusamus odio saepe. Illum cupiditate perspiciatis tempore officia expedita enim provident ullam, sed accusantium. Fugit!`;
            })
    },

    paymentTab(){
        this.payment.addEventListener('click',()=>{
            this.payment.style.backgroundColor = '#4675f8';
            this.payment.style.color = "white";
            this.bullets.textContent = `How to pay: Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sequi excepturi atque ipsa ducimus sint voluptatem natus omnis in aperiam recusandae voluptatibus earum accusantium hic eum nulla ab, iure et.
            Officiis modi natus voluptate sequi voluptates quidem praesentium! Minus vero minima illo dolore. Magni, laudantium nobis. Esse, quia. Quibusdam temporibus iste adipisci quas sunt eaque, quasi dolores unde enim suscipit.
            Aspernatur qui ipsam enim, veritatis incidunt asperiores nihil porro eveniet, numquam nobis necessitatibus deleniti, quis alias quas animi odio excepturi consequuntur rem aliquid rerum libero quo quod minus dolor? Saepe!
            Enim, ipsam. Ipsum et impedit est pariatur necessitatibus debitis laudantium ea mollitia ducimus voluptatem, nobis dolore quasi repudiandae eligendi quisquam voluptate assumenda! Dolorem, quibusdam tempore saepe iste tenetur necessitatibus fugit.
            Nobis dignissimos natus vitae ducimus ipsa qui quod possimus illo quos, corrupti ab id aperiam accusamus odio saepe. Illum cupiditate perspiciatis tempore officia expedita enim provident ullam, sed accusantium. Fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sequi excepturi atque ipsa ducimus sint voluptatem natus omnis in aperiam recusandae voluptatibus earum accusantium hic eum nulla ab, iure et.
            Officiis modi natus voluptate sequi voluptates quidem praesentium! Minus vero minima illo dolore. Magni, laudantium nobis. Esse, quia. Quibusdam temporibus iste adipisci quas sunt eaque, quasi dolores unde enim suscipit.
            Aspernatur qui ipsam enim, veritatis incidunt asperiores nihil porro eveniet, numquam nobis necessitatibus deleniti, quis alias quas animi odio excepturi consequuntur rem aliquid rerum libero quo quod minus dolor? Saepe!
            Enim, ipsam. Ipsum et impedit est pariatur necessitatibus debitis laudantium ea mollitia ducimus voluptatem, nobis dolore quasi repudiandae eligendi quisquam voluptate assumenda! Dolorem, quibusdam tempore saepe iste tenetur necessitatibus fugit.
            Nobis dignissimos natus vitae ducimus ipsa qui quod possimus illo quos, corrupti ab id aperiam accusamus odio saepe. Illum cupiditate perspiciatis tempore officia expedita enim provident ullam, sed accusantium. Fugit!`;
        })
    },

    refundTab(){
        this.refund.addEventListener('click',()=>{
            this.payment.style.backgroundColor = '#FBC04C';
            this.payment.style.color = "black";
            this.bullets.textContent = `Our customer refund: Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sequi excepturi atque ipsa ducimus sint voluptatem natus omnis in aperiam recusandae voluptatibus earum accusantium hic eum nulla ab, iure et.
            Officiis modi natus voluptate sequi voluptates quidem praesentium! Minus vero minima illo dolore. Magni, laudantium nobis. Esse, quia. Quibusdam temporibus iste adipisci quas sunt eaque, quasi dolores unde enim suscipit.
            Aspernatur qui ipsam enim, veritatis incidunt asperiores nihil porro eveniet, numquam nobis necessitatibus deleniti, quis alias quas animi odio excepturi consequuntur rem aliquid rerum libero quo quod minus dolor? Saepe!
            Enim, ipsam. Ipsum et impedit est pariatur necessitatibus debitis laudantium ea mollitia ducimus voluptatem, nobis dolore quasi repudiandae eligendi quisquam voluptate assumenda! Dolorem, quibusdam tempore saepe iste tenetur necessitatibus fugit.
            Nobis dignissimos natus vitae ducimus ipsa qui quod possimus illo quos, corrupti ab id aperiam accusamus odio saepe. Illum cupiditate perspiciatis tempore officia expedita enim provident ullam, sed accusantium. Fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sequi excepturi atque ipsa ducimus sint voluptatem natus omnis in aperiam recusandae voluptatibus earum accusantium hic eum nulla ab, iure et.
            Officiis modi natus voluptate sequi voluptates quidem praesentium! Minus vero minima illo dolore. Magni, laudantium nobis. Esse, quia. Quibusdam temporibus iste adipisci quas sunt eaque, quasi dolores unde enim suscipit.
            Aspernatur qui ipsam enim, veritatis incidunt asperiores nihil porro eveniet, numquam nobis necessitatibus deleniti, quis alias quas animi odio excepturi consequuntur rem aliquid rerum libero quo quod minus dolor? Saepe!
            Enim, ipsam. Ipsum et impedit est pariatur necessitatibus debitis laudantium ea mollitia ducimus voluptatem, nobis dolore quasi repudiandae eligendi quisquam voluptate assumenda! Dolorem, quibusdam tempore saepe iste tenetur necessitatibus fugit.
            Nobis dignissimos natus vitae ducimus ipsa qui quod possimus illo quos, corrupti ab id aperiam accusamus odio saepe. Illum cupiditate perspiciatis tempore officia expedita enim provident ullam, sed accusantium. Fugit!`;
        })
    },


    removeFromCartTab(){
        this.removeFromCart.addEventListener('click',()=>{
            this.payment.style.backgroundColor = '#FBC04C';
            this.payment.style.color = "black";
            this.bullets.textContent = `How to remove from cart: Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sequi excepturi atque ipsa ducimus sint voluptatem natus omnis in aperiam recusandae voluptatibus earum accusantium hic eum nulla ab, iure et.
            Officiis modi natus voluptate sequi voluptates quidem praesentium! Minus vero minima illo dolore. Magni, laudantium nobis. Esse, quia. Quibusdam temporibus iste adipisci quas sunt eaque, quasi dolores unde enim suscipit.
            Aspernatur qui ipsam enim, veritatis incidunt asperiores nihil porro eveniet, numquam nobis necessitatibus deleniti, quis alias quas animi odio excepturi consequuntur rem aliquid rerum libero quo quod minus dolor? Saepe!
            Enim, ipsam. Ipsum et impedit est pariatur necessitatibus debitis laudantium ea mollitia ducimus voluptatem, nobis dolore quasi repudiandae eligendi quisquam voluptate assumenda! Dolorem, quibusdam tempore saepe iste tenetur necessitatibus fugit.
            Nobis dignissimos natus vitae ducimus ipsa qui quod possimus illo quos, corrupti ab id aperiam accusamus odio saepe. Illum cupiditate perspiciatis tempore officia expedita enim provident ullam, sed accusantium. Fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sequi excepturi atque ipsa ducimus sint voluptatem natus omnis in aperiam recusandae voluptatibus earum accusantium hic eum nulla ab, iure et.
            Officiis modi natus voluptate sequi voluptates quidem praesentium! Minus vero minima illo dolore. Magni, laudantium nobis. Esse, quia. Quibusdam temporibus iste adipisci quas sunt eaque, quasi dolores unde enim suscipit.
            Aspernatur qui ipsam enim, veritatis incidunt asperiores nihil porro eveniet, numquam nobis necessitatibus deleniti, quis alias quas animi odio excepturi consequuntur rem aliquid rerum libero quo quod minus dolor? Saepe!
            Enim, ipsam. Ipsum et impedit est pariatur necessitatibus debitis laudantium ea mollitia ducimus voluptatem, nobis dolore quasi repudiandae eligendi quisquam voluptate assumenda! Dolorem, quibusdam tempore saepe iste tenetur necessitatibus fugit.
            Nobis dignissimos natus vitae ducimus ipsa qui quod possimus illo quos, corrupti ab id aperiam accusamus odio saepe. Illum cupiditate perspiciatis tempore officia expedita enim provident ullam, sed accusantium. Fugit!`;
        
        })
    },

    addToCartTab(){
        this.addToCart.addEventListener('click',()=>{
            this.payment.style.backgroundColor = '#FBC04C';
            this.payment.style.color = "black";
            this.bullets.textContent = `How to add products to cart: Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sequi excepturi atque ipsa ducimus sint voluptatem natus omnis in aperiam recusandae voluptatibus earum accusantium hic eum nulla ab, iure et.
            Officiis modi natus voluptate sequi voluptates quidem praesentium! Minus vero minima illo dolore. Magni, laudantium nobis. Esse, quia. Quibusdam temporibus iste adipisci quas sunt eaque, quasi dolores unde enim suscipit.
            Aspernatur qui ipsam enim, veritatis incidunt asperiores nihil porro eveniet, numquam nobis necessitatibus deleniti, quis alias quas animi odio excepturi consequuntur rem aliquid rerum libero quo quod minus dolor? Saepe!
            Enim, ipsam. Ipsum et impedit est pariatur necessitatibus debitis laudantium ea mollitia ducimus voluptatem, nobis dolore quasi repudiandae eligendi quisquam voluptate assumenda! Dolorem, quibusdam tempore saepe iste tenetur necessitatibus fugit.
            Nobis dignissimos natus vitae ducimus ipsa qui quod possimus illo quos, corrupti ab id aperiam accusamus odio saepe. Illum cupiditate perspiciatis tempore officia expedita enim provident ullam, sed accusantium. Fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sequi excepturi atque ipsa ducimus sint voluptatem natus omnis in aperiam recusandae voluptatibus earum accusantium hic eum nulla ab, iure et.
            Officiis modi natus voluptate sequi voluptates quidem praesentium! Minus vero minima illo dolore. Magni, laudantium nobis. Esse, quia. Quibusdam temporibus iste adipisci quas sunt eaque, quasi dolores unde enim suscipit.
            Aspernatur qui ipsam enim, veritatis incidunt asperiores nihil porro eveniet, numquam nobis necessitatibus deleniti, quis alias quas animi odio excepturi consequuntur rem aliquid rerum libero quo quod minus dolor? Saepe!
            Enim, ipsam. Ipsum et impedit est pariatur necessitatibus debitis laudantium ea mollitia ducimus voluptatem, nobis dolore quasi repudiandae eligendi quisquam voluptate assumenda! Dolorem, quibusdam tempore saepe iste tenetur necessitatibus fugit.
            Nobis dignissimos natus vitae ducimus ipsa qui quod possimus illo quos, corrupti ab id aperiam accusamus odio saepe. Illum cupiditate perspiciatis tempore officia expedita enim provident ullam, sed accusantium. Fugit!`;
        
        })
    },

    deliveryTab(){
        this.delivery.addEventListener('click',()=>{
            this.payment.style.backgroundColor = '#FBC04C';
            this.payment.style.color = "black";
            this.bullets.textContent = ` Delivery: Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sequi excepturi atque ipsa ducimus sint voluptatem natus omnis in aperiam recusandae voluptatibus earum accusantium hic eum nulla ab, iure et.
            Officiis modi natus voluptate sequi voluptates quidem praesentium! Minus vero minima illo dolore. Magni, laudantium nobis. Esse, quia. Quibusdam temporibus iste adipisci quas sunt eaque, quasi dolores unde enim suscipit.
            Aspernatur qui ipsam enim, veritatis incidunt asperiores nihil porro eveniet, numquam nobis necessitatibus deleniti, quis alias quas animi odio excepturi consequuntur rem aliquid rerum libero quo quod minus dolor? Saepe!
            Enim, ipsam. Ipsum et impedit est pariatur necessitatibus debitis laudantium ea mollitia ducimus voluptatem, nobis dolore quasi repudiandae eligendi quisquam voluptate assumenda! Dolorem, quibusdam tempore saepe iste tenetur necessitatibus fugit.
            Nobis dignissimos natus vitae ducimus ipsa qui quod possimus illo quos, corrupti ab id aperiam accusamus odio saepe. Illum cupiditate perspiciatis tempore officia expedita enim provident ullam, sed accusantium. Fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sequi excepturi atque ipsa ducimus sint voluptatem natus omnis in aperiam recusandae voluptatibus earum accusantium hic eum nulla ab, iure et.
            Officiis modi natus voluptate sequi voluptates quidem praesentium! Minus vero minima illo dolore. Magni, laudantium nobis. Esse, quia. Quibusdam temporibus iste adipisci quas sunt eaque, quasi dolores unde enim suscipit.
            Aspernatur qui ipsam enim, veritatis incidunt asperiores nihil porro eveniet, numquam nobis necessitatibus deleniti, quis alias quas animi odio excepturi consequuntur rem aliquid rerum libero quo quod minus dolor? Saepe!
            Enim, ipsam. Ipsum et impedit est pariatur necessitatibus debitis laudantium ea mollitia ducimus voluptatem, nobis dolore quasi repudiandae eligendi quisquam voluptate assumenda! Dolorem, quibusdam tempore saepe iste tenetur necessitatibus fugit.
            Nobis dignissimos natus vitae ducimus ipsa qui quod possimus illo quos, corrupti ab id aperiam accusamus odio saepe. Illum cupiditate perspiciatis tempore officia expedita enim provident ullam, sed accusantium. Fugit!`;
        
        })
    }
}

const helpcenterMenu = new menu();
helpcenterMenu.paymentTabLoaded();
helpcenterMenu.paymentTab();
helpcenterMenu.refundTab();
helpcenterMenu.addToCartTab();
helpcenterMenu.deliveryTab();
helpcenterMenu.removeFromCartTab();

let signinValidation = function(){
    this.signinBtn = document.querySelector(".signin_link");
};

signinValidation.prototype = {
     
    validateUserRegistration(){

        let xhr = new XMLHttpRequest();
            xhr.open('POST','../php/customerCompleteData.php', true);
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

            xhr.onload = ()=>{
                if (xhr.status === 200) {
                    
                    let data = JSON.parse(xhr.responseText); 

                    if(data.customername !== ""){

                        this.signinBtn.style.display = "none";
                        
                    }

                    console.log(data);
                }
            };

            xhr.onerror = (error)=>{
                console.error(error);
            };

            xhr.send();

    },
};

let keepBtn = new signinValidation();
keepBtn.validateUserRegistration();
