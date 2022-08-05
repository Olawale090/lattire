"use strict";

const cartingWearProducts = function(){
    this.firstPicker = document.getElementById('WearscartID0');
    this.secondPicker = document.getElementById('WearscartID1');
    this.thirdPicker = document.getElementById('WearscartID2');
    this.fourthPicker = document.getElementById('WearscartID3');
    this.fifthPicker = document.getElementById('WearscartID4');
    this.sixthPicker = document.getElementById('WearscartID5');

    this.notifier = document.querySelector(".notifier");
    this.errorNotifier = document.querySelector(".action_failed");
}

cartingWearProducts.prototype = {
    firstProductCarter(){

        this.firstPicker.addEventListener('click',()=>{

            var productId = this.firstPicker.dataset.productid;
            var productCateg = this.firstPicker.dataset.productcateg;
            var productName = this.firstPicker.dataset.productname;
            var productDetails = this.firstPicker.dataset.productdetails;
            var productPrice = this.firstPicker.dataset.productprice;
            var productPicDir = this.firstPicker.dataset.productpicdir;

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','php/usercart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cartID="+productId +"&cartCateg="+productCateg+"&cartName="+productName+"&cartDetails="+productDetails+"&cartPrice="+productPrice+"&cartPic="+productPicDir;

            xhr.onload=()=>{
                if(xhr.status==200){
                    this.notifier.innerHTML = xhr.responseText;
                    this.notifier.style.animationPlayState = "running";
                }else{
                    this.errorNotifier.innerHTML = xhr.responseText;
                    this.errorNotifier.style.animationPlayState = "running";
                }
            }

            xhr.send(params);
        });
    },

    secondProductCarter(){

        this.secondPicker.addEventListener('click',()=>{
        
            var productId = this.secondPicker.dataset.productid;
            var productCateg = this.secondPicker.dataset.productcateg;
            var productName = this.secondPicker.dataset.productname;
            var productDetails = this.secondPicker.dataset.productdetails;
            var productPrice = this.secondPicker.dataset.productprice;
            var productPicDir = this.secondPicker.dataset.productpicdir;

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','php/usercart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cartID="+productId +"&cartCateg="+productCateg+"&cartName="+productName+"&cartDetails="+productDetails+"&cartPrice="+productPrice+"&cartPic="+productPicDir;

            xhr.onload=()=>{
                if(xhr.status==200){
                    this.notifier.innerHTML = xhr.responseText;
                    this.notifier.style.animationPlayState = "running";
                }else{
                    this.errorNotifier.innerHTML = xhr.responseText;
                    this.errorNotifier.style.animationPlayState = "running";
                }
            }

            xhr.send(params);
        });
    },

    thirdProductCarter(){

        this.thirdPicker.addEventListener('click',()=>{
        
            var productId = this.thirdPicker.dataset.productid;
            var productCateg = this.thirdPicker.dataset.productcateg;
            var productName = this.thirdPicker.dataset.productname;
            var productDetails = this.thirdPicker.dataset.productdetails;
            var productPrice = this.thirdPicker.dataset.productprice;
            var productPicDir = this.thirdPicker.dataset.productpicdir;

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','php/usercart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cartID="+productId +"&cartCateg="+productCateg+"&cartName="+productName+"&cartDetails="+productDetails+"&cartPrice="+productPrice+"&cartPic="+productPicDir;

            xhr.onload=()=>{
                if(xhr.status==200){
                    this.notifier.innerHTML = xhr.responseText;
                    this.notifier.style.animationPlayState = "running";
                }else{
                    this.errorNotifier.innerHTML = xhr.responseText;
                    this.errorNotifier.style.animationPlayState = "running";
                }
            }

            xhr.send(params);
        });
    },

    fourthProductCarter(){

        this.fourthPicker.addEventListener('click',()=>{
        
            var productId = this.fourthPicker.dataset.productid;
            var productCateg = this.fourthPicker.dataset.productcateg;
            var productName = this.fourthPicker.dataset.productname;
            var productDetails = this.fourthPicker.dataset.productdetails;
            var productPrice = this.fourthPicker.dataset.productprice;
            var productPicDir = this.fourthPicker.dataset.productpicdir;

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','php/usercart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cartID="+productId +"&cartCateg="+productCateg+"&cartName="+productName+"&cartDetails="+productDetails+"&cartPrice="+productPrice+"&cartPic="+productPicDir;

            xhr.onload=()=>{
                if(xhr.status==200){
                    this.notifier.innerHTML = xhr.responseText;
                    this.notifier.style.animationPlayState = "running";
                }else{
                    this.errorNotifier.innerHTML = xhr.responseText;
                    this.errorNotifier.style.animationPlayState = "running";
                }
            }

            xhr.send(params);
        });
    },

    fifthProductCarter(){

        this.fifthPicker.addEventListener('click',()=>{
        
            var productId = this.fifthPicker.dataset.productid;
            var productCateg = this.fifthPicker.dataset.productcateg;
            var productName = this.fifthPicker.dataset.productname;
            var productDetails = this.fifthPicker.dataset.productdetails;
            var productPrice = this.fifthPicker.dataset.productprice;
            var productPicDir = this.fifthPicker.dataset.productpicdir;

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','php/usercart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cartID="+productId +"&cartCateg="+productCateg+"&cartName="+productName+"&cartDetails="+productDetails+"&cartPrice="+productPrice+"&cartPic="+productPicDir;

            xhr.onload=()=>{
                if(xhr.status==200){
                    this.notifier.innerHTML = xhr.responseText;
                    this.notifier.style.animationPlayState = "running";
                }else{
                    this.errorNotifier.innerHTML = xhr.responseText;
                    this.errorNotifier.style.animationPlayState = "running";
                }
            }

            xhr.send(params);
        });
    },

    sixthProductCarter(){

        this.sixthPicker.addEventListener('click',()=>{
        
            var productId = this.sixthPicker.dataset.productid;
            var productCateg = this.sixthPicker.dataset.productcateg;
            var productName = this.sixthPicker.dataset.productname;
            var productDetails = this.sixthPicker.dataset.productdetails;
            var productPrice = this.sixthPicker.dataset.productprice;
            var productPicDir = this.sixthPicker.dataset.productpicdir;

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','php/usercart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cartID="+productId +"&cartCateg="+productCateg+"&cartName="+productName+"&cartDetails="+productDetails+"&cartPrice="+productPrice+"&cartPic="+productPicDir;

            xhr.onload=()=>{
                if(xhr.status==200){
                    this.notifier.innerHTML = xhr.responseText;
                    this.notifier.style.animationPlayState = "running";
                }else{
                    this.errorNotifier.innerHTML = xhr.responseText;
                    this.errorNotifier.style.animationPlayState = "running";
                }
            }

            xhr.send(params);
        });
    }
}

const cartingPhoneProducts = function(){
    this.firstPicker = document.getElementById('PhonescartID0');
    this.secondPicker = document.getElementById('PhonescartID1');
    this.thirdPicker = document.getElementById('PhonescartID2');
    this.fourthPicker = document.getElementById('PhonescartID3');
    this.fifthPicker = document.getElementById('PhonescartID4');
    this.sixthPicker = document.getElementById('PhonescartID5');

    this.notifier = document.querySelector(".notifier");
    this.errorNotifier = document.querySelector(".action_failed");
}

cartingPhoneProducts.prototype = {
    firstProductCarter(){

        this.firstPicker.addEventListener('click',()=>{

            var productId = this.firstPicker.dataset.productid;
            var productCateg = this.firstPicker.dataset.productcateg;
            var productName = this.firstPicker.dataset.productname;
            var productDetails = this.firstPicker.dataset.productdetails;
            var productPrice = this.firstPicker.dataset.productprice;
            var productPicDir = this.firstPicker.dataset.productpicdir;

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','php/usercart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cartID="+productId +"&cartCateg="+productCateg+"&cartName="+productName+"&cartDetails="+productDetails+"&cartPrice="+productPrice+"&cartPic="+productPicDir;

            xhr.onload=()=>{
                if(xhr.status==200){
                    this.notifier.innerHTML = xhr.responseText;
                    this.notifier.style.animationPlayState = "running";
                }else{
                    this.errorNotifier.innerHTML = xhr.responseText;
                    this.errorNotifier.style.animationPlayState = "running";
                }
            }

            xhr.send(params);
        });
    },

    secondProductCarter(){

        this.secondPicker.addEventListener('click',()=>{
        
            var productId = this.secondPicker.dataset.productid;
            var productCateg = this.secondPicker.dataset.productcateg;
            var productName = this.secondPicker.dataset.productname;
            var productDetails = this.secondPicker.dataset.productdetails;
            var productPrice = this.secondPicker.dataset.productprice;
            var productPicDir = this.secondPicker.dataset.productpicdir;

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','php/usercart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cartID="+productId +"&cartCateg="+productCateg+"&cartName="+productName+"&cartDetails="+productDetails+"&cartPrice="+productPrice+"&cartPic="+productPicDir;

            xhr.onload=()=>{
                if(xhr.status==200){
                    this.notifier.innerHTML = xhr.responseText;
                    this.notifier.style.animationPlayState = "running";
                }else{
                    this.errorNotifier.innerHTML = xhr.responseText;
                    this.errorNotifier.style.animationPlayState = "running";
                }
            }

            xhr.send(params);
        });
    },

    thirdProductCarter(){

        this.thirdPicker.addEventListener('click',()=>{
        
            var productId = this.thirdPicker.dataset.productid;
            var productCateg = this.thirdPicker.dataset.productcateg;
            var productName = this.thirdPicker.dataset.productname;
            var productDetails = this.thirdPicker.dataset.productdetails;
            var productPrice = this.thirdPicker.dataset.productprice;
            var productPicDir = this.thirdPicker.dataset.productpicdir;

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','php/usercart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cartID="+productId +"&cartCateg="+productCateg+"&cartName="+productName+"&cartDetails="+productDetails+"&cartPrice="+productPrice+"&cartPic="+productPicDir;

            xhr.onload=()=>{
                if(xhr.status==200){
                    this.notifier.innerHTML = xhr.responseText;
                    this.notifier.style.animationPlayState = "running";
                }else{
                    this.errorNotifier.innerHTML = xhr.responseText;
                    this.errorNotifier.style.animationPlayState = "running";
                }
            }

            xhr.send(params);
        });
    },

    fourthProductCarter(){

        this.fourthPicker.addEventListener('click',()=>{
        
            var productId = this.fourthPicker.dataset.productid;
            var productCateg = this.fourthPicker.dataset.productcateg;
            var productName = this.fourthPicker.dataset.productname;
            var productDetails = this.fourthPicker.dataset.productdetails;
            var productPrice = this.fourthPicker.dataset.productprice;
            var productPicDir = this.fourthPicker.dataset.productpicdir;

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','php/usercart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cartID="+productId +"&cartCateg="+productCateg+"&cartName="+productName+"&cartDetails="+productDetails+"&cartPrice="+productPrice+"&cartPic="+productPicDir;

            xhr.onload=()=>{
                if(xhr.status==200){
                    this.notifier.innerHTML = xhr.responseText;
                    this.notifier.style.animationPlayState = "running";
                }else{
                    this.errorNotifier.innerHTML = xhr.responseText;
                    this.errorNotifier.style.animationPlayState = "running";
                }
            }

            xhr.send(params);
        });
    },

    fifthProductCarter(){

        this.fifthPicker.addEventListener('click',()=>{
        
            var productId = this.fifthPicker.dataset.productid;
            var productCateg = this.fifthPicker.dataset.productcateg;
            var productName = this.fifthPicker.dataset.productname;
            var productDetails = this.fifthPicker.dataset.productdetails;
            var productPrice = this.fifthPicker.dataset.productprice;
            var productPicDir = this.fifthPicker.dataset.productpicdir;

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','php/usercart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cartID="+productId +"&cartCateg="+productCateg+"&cartName="+productName+"&cartDetails="+productDetails+"&cartPrice="+productPrice+"&cartPic="+productPicDir;

            xhr.onload=()=>{
                if(xhr.status==200){
                    this.notifier.innerHTML = xhr.responseText;
                    this.notifier.style.animationPlayState = "running";
                }else{
                    this.errorNotifier.innerHTML = xhr.responseText;
                    this.errorNotifier.style.animationPlayState = "running";
                }
            }

            xhr.send(params);
        });
    },

    sixthProductCarter(){

        this.sixthPicker.addEventListener('click',()=>{
        
            var productId = this.sixthPicker.dataset.productid;
            var productCateg = this.sixthPicker.dataset.productcateg;
            var productName = this.sixthPicker.dataset.productname;
            var productDetails = this.sixthPicker.dataset.productdetails;
            var productPrice = this.sixthPicker.dataset.productprice;
            var productPicDir = this.sixthPicker.dataset.productpicdir;

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','php/usercart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cartID="+productId +"&cartCateg="+productCateg+"&cartName="+productName+"&cartDetails="+productDetails+"&cartPrice="+productPrice+"&cartPic="+productPicDir;

            xhr.onload=()=>{
                if(xhr.status==200){
                    this.notifier.innerHTML = xhr.responseText;
                    this.notifier.style.animationPlayState = "running";
                }else{
                    this.errorNotifier.innerHTML = xhr.responseText;
                    this.errorNotifier.style.animationPlayState = "running";
                }
            }

            xhr.send(params);
        });
    }
}

const cartingElectronicsProducts = function(){
    this.firstPicker = document.getElementById('ElectronicscartID0');
    this.secondPicker = document.getElementById('ElectronicscartID1');
    this.thirdPicker = document.getElementById('ElectronicscartID2');
    this.fourthPicker = document.getElementById('ElectronicscartID3');
    this.fifthPicker = document.getElementById('ElectronicscartID4');
    this.sixthPicker = document.getElementById('ElectronicscartID5');

    this.notifier = document.querySelector(".notifier");
    this.errorNotifier = document.querySelector(".action_failed");
}

cartingElectronicsProducts.prototype = {
    firstProductCarter(){

        this.firstPicker.addEventListener('click',()=>{

            var productId = this.firstPicker.dataset.productid;
            var productCateg = this.firstPicker.dataset.productcateg;
            var productName = this.firstPicker.dataset.productname;
            var productDetails = this.firstPicker.dataset.productdetails;
            var productPrice = this.firstPicker.dataset.productprice;
            var productPicDir = this.firstPicker.dataset.productpicdir;

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','php/usercart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cartID="+productId +"&cartCateg="+productCateg+"&cartName="+productName+"&cartDetails="+productDetails+"&cartPrice="+productPrice+"&cartPic="+productPicDir;

            xhr.onload=()=>{
                if(xhr.status==200){
                    this.notifier.innerHTML = xhr.responseText;
                    this.notifier.style.animationPlayState = "running";
                }else{
                    this.errorNotifier.innerHTML = xhr.responseText;
                    this.errorNotifier.style.animationPlayState = "running";
                }
            }

            xhr.send(params);
        });
    },

    secondProductCarter(){

        this.secondPicker.addEventListener('click',()=>{
        
            var productId = this.secondPicker.dataset.productid;
            var productCateg = this.secondPicker.dataset.productcateg;
            var productName = this.secondPicker.dataset.productname;
            var productDetails = this.secondPicker.dataset.productdetails;
            var productPrice = this.secondPicker.dataset.productprice;
            var productPicDir = this.secondPicker.dataset.productpicdir;

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','php/usercart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cartID="+productId +"&cartCateg="+productCateg+"&cartName="+productName+"&cartDetails="+productDetails+"&cartPrice="+productPrice+"&cartPic="+productPicDir;

            xhr.onload=()=>{
                if(xhr.status==200){
                    this.notifier.innerHTML = xhr.responseText;
                    this.notifier.style.animationPlayState = "running";
                }else{
                    this.errorNotifier.innerHTML = xhr.responseText;
                    this.errorNotifier.style.animationPlayState = "running";
                }
            }

            xhr.send(params);
        });
    },

    thirdProductCarter(){

        this.thirdPicker.addEventListener('click',()=>{
        
            var productId = this.thirdPicker.dataset.productid;
            var productCateg = this.thirdPicker.dataset.productcateg;
            var productName = this.thirdPicker.dataset.productname;
            var productDetails = this.thirdPicker.dataset.productdetails;
            var productPrice = this.thirdPicker.dataset.productprice;
            var productPicDir = this.thirdPicker.dataset.productpicdir;

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','php/usercart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cartID="+productId +"&cartCateg="+productCateg+"&cartName="+productName+"&cartDetails="+productDetails+"&cartPrice="+productPrice+"&cartPic="+productPicDir;

            xhr.onload=()=>{
                if(xhr.status==200){
                    this.notifier.innerHTML = xhr.responseText;
                    this.notifier.style.animationPlayState = "running";
                }else{
                    this.errorNotifier.innerHTML = xhr.responseText;
                    this.errorNotifier.style.animationPlayState = "running";
                }
            }

            xhr.send(params);
        });
    },

    fourthProductCarter(){

        this.fourthPicker.addEventListener('click',()=>{
        
            var productId = this.fourthPicker.dataset.productid;
            var productCateg = this.fourthPicker.dataset.productcateg;
            var productName = this.fourthPicker.dataset.productname;
            var productDetails = this.fourthPicker.dataset.productdetails;
            var productPrice = this.fourthPicker.dataset.productprice;
            var productPicDir = this.fourthPicker.dataset.productpicdir;

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','php/usercart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cartID="+productId +"&cartCateg="+productCateg+"&cartName="+productName+"&cartDetails="+productDetails+"&cartPrice="+productPrice+"&cartPic="+productPicDir;

            xhr.onload=()=>{
                if(xhr.status==200){
                    this.notifier.innerHTML = xhr.responseText;
                    this.notifier.style.animationPlayState = "running";
                }else{
                    this.errorNotifier.innerHTML = xhr.responseText;
                    this.errorNotifier.style.animationPlayState = "running";
                }
            }

            xhr.send(params);
        });
    },

    fifthProductCarter(){

        this.fifthPicker.addEventListener('click',()=>{
        
            var productId = this.fifthPicker.dataset.productid;
            var productCateg = this.fifthPicker.dataset.productcateg;
            var productName = this.fifthPicker.dataset.productname;
            var productDetails = this.fifthPicker.dataset.productdetails;
            var productPrice = this.fifthPicker.dataset.productprice;
            var productPicDir = this.fifthPicker.dataset.productpicdir;

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','php/usercart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cartID="+productId +"&cartCateg="+productCateg+"&cartName="+productName+"&cartDetails="+productDetails+"&cartPrice="+productPrice+"&cartPic="+productPicDir;

            xhr.onload=()=>{
                if(xhr.status==200){
                    this.notifier.innerHTML = xhr.responseText;
                    this.notifier.style.animationPlayState = "running";
                }else{
                    this.errorNotifier.innerHTML = xhr.responseText;
                    this.errorNotifier.style.animationPlayState = "running";
                }
            }

            xhr.send(params);
        });
    },

    sixthProductCarter(){

        this.sixthPicker.addEventListener('click',()=>{
        
            var productId = this.sixthPicker.dataset.productid;
            var productCateg = this.sixthPicker.dataset.productcateg;
            var productName = this.sixthPicker.dataset.productname;
            var productDetails = this.sixthPicker.dataset.productdetails;
            var productPrice = this.sixthPicker.dataset.productprice;
            var productPicDir = this.sixthPicker.dataset.productpicdir;

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','php/usercart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cartID="+productId +"&cartCateg="+productCateg+"&cartName="+productName+"&cartDetails="+productDetails+"&cartPrice="+productPrice+"&cartPic="+productPicDir;

            xhr.onload=()=>{
                if(xhr.status==200){
                    this.notifier.innerHTML = xhr.responseText;
                    this.notifier.style.animationPlayState = "running";
                }else{
                    this.errorNotifier.innerHTML = xhr.responseText;
                    this.errorNotifier.style.animationPlayState = "running";
                }
            }

            xhr.send(params);
        });
    }
}

const cartingFurnitureProducts = function(){
    this.firstPicker = document.getElementById('FurniturecartID0');
    this.secondPicker = document.getElementById('FurniturecartID1');
    this.thirdPicker = document.getElementById('FurniturecartID2');
    this.fourthPicker = document.getElementById('FurniturecartID3');
    this.fifthPicker = document.getElementById('FurniturecartID4');
    this.sixthPicker = document.getElementById('FurniturecartID5');

    this.notifier = document.querySelector(".notifier");
    this.errorNotifier = document.querySelector(".action_failed");
}

cartingFurnitureProducts.prototype = {
    firstProductCarter(){

        this.firstPicker.addEventListener('click',()=>{

            var productId = this.firstPicker.dataset.productid;
            var productCateg = this.firstPicker.dataset.productcateg;
            var productName = this.firstPicker.dataset.productname;
            var productDetails = this.firstPicker.dataset.productdetails;
            var productPrice = this.firstPicker.dataset.productprice;
            var productPicDir = this.firstPicker.dataset.productpicdir;

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','php/usercart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cartID="+productId +"&cartCateg="+productCateg+"&cartName="+productName+"&cartDetails="+productDetails+"&cartPrice="+productPrice+"&cartPic="+productPicDir;

            xhr.onload=()=>{
                if(xhr.status==200){
                    this.notifier.innerHTML = xhr.responseText;
                    this.notifier.style.animationPlayState = "running";
                }else{
                    this.errorNotifier.innerHTML = xhr.responseText;
                    this.errorNotifier.style.animationPlayState = "running";
                }
            }

            xhr.send(params);
        });
    },

    secondProductCarter(){

        this.secondPicker.addEventListener('click',()=>{
        
            var productId = this.secondPicker.dataset.productid;
            var productCateg = this.secondPicker.dataset.productcateg;
            var productName = this.secondPicker.dataset.productname;
            var productDetails = this.secondPicker.dataset.productdetails;
            var productPrice = this.secondPicker.dataset.productprice;
            var productPicDir = this.secondPicker.dataset.productpicdir;

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','php/usercart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cartID="+productId +"&cartCateg="+productCateg+"&cartName="+productName+"&cartDetails="+productDetails+"&cartPrice="+productPrice+"&cartPic="+productPicDir;

            xhr.onload=()=>{
                if(xhr.status==200){
                    this.notifier.innerHTML = xhr.responseText;
                    this.notifier.style.animationPlayState = "running";
                }else{
                    this.errorNotifier.innerHTML = xhr.responseText;
                    this.errorNotifier.style.animationPlayState = "running";
                }
            }

            xhr.send(params);
        });
    },

    thirdProductCarter(){

        this.thirdPicker.addEventListener('click',()=>{
        
            var productId = this.thirdPicker.dataset.productid;
            var productCateg = this.thirdPicker.dataset.productcateg;
            var productName = this.thirdPicker.dataset.productname;
            var productDetails = this.thirdPicker.dataset.productdetails;
            var productPrice = this.thirdPicker.dataset.productprice;
            var productPicDir = this.thirdPicker.dataset.productpicdir;

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','php/usercart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cartID="+productId +"&cartCateg="+productCateg+"&cartName="+productName+"&cartDetails="+productDetails+"&cartPrice="+productPrice+"&cartPic="+productPicDir;

            xhr.onload=()=>{
                if(xhr.status==200){
                    this.notifier.innerHTML = xhr.responseText;
                    this.notifier.style.animationPlayState = "running";
                }else{
                    this.errorNotifier.innerHTML = xhr.responseText;
                    this.errorNotifier.style.animationPlayState = "running";
                }
            }

            xhr.send(params);
        });
    },

    fourthProductCarter(){

        this.fourthPicker.addEventListener('click',()=>{
        
            var productId = this.fourthPicker.dataset.productid;
            var productCateg = this.fourthPicker.dataset.productcateg;
            var productName = this.fourthPicker.dataset.productname;
            var productDetails = this.fourthPicker.dataset.productdetails;
            var productPrice = this.fourthPicker.dataset.productprice;
            var productPicDir = this.fourthPicker.dataset.productpicdir;

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','php/usercart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cartID="+productId +"&cartCateg="+productCateg+"&cartName="+productName+"&cartDetails="+productDetails+"&cartPrice="+productPrice+"&cartPic="+productPicDir;

            xhr.onload=()=>{
                if(xhr.status==200){
                    this.notifier.innerHTML = xhr.responseText;
                    this.notifier.style.animationPlayState = "running";
                }else{
                    this.errorNotifier.innerHTML = xhr.responseText;
                    this.errorNotifier.style.animationPlayState = "running";
                }
            }

            xhr.send(params);
        });
    },

    fifthProductCarter(){

        this.fifthPicker.addEventListener('click',()=>{
        
            var productId = this.fifthPicker.dataset.productid;
            var productCateg = this.fifthPicker.dataset.productcateg;
            var productName = this.fifthPicker.dataset.productname;
            var productDetails = this.fifthPicker.dataset.productdetails;
            var productPrice = this.fifthPicker.dataset.productprice;
            var productPicDir = this.fifthPicker.dataset.productpicdir;

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','php/usercart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cartID="+productId +"&cartCateg="+productCateg+"&cartName="+productName+"&cartDetails="+productDetails+"&cartPrice="+productPrice+"&cartPic="+productPicDir;

            xhr.onload=()=>{
                if(xhr.status==200){
                    this.notifier.innerHTML = xhr.responseText;
                    this.notifier.style.animationPlayState = "running";
                }else{
                    this.errorNotifier.innerHTML = xhr.responseText;
                    this.errorNotifier.style.animationPlayState = "running";
                }
            }

            xhr.send(params);
        });
    },

    sixthProductCarter(){

        this.sixthPicker.addEventListener('click',()=>{
        
            var productId = this.sixthPicker.dataset.productid;
            var productCateg = this.sixthPicker.dataset.productcateg;
            var productName = this.sixthPicker.dataset.productname;
            var productDetails = this.sixthPicker.dataset.productdetails;
            var productPrice = this.sixthPicker.dataset.productprice;
            var productPicDir = this.sixthPicker.dataset.productpicdir;

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','php/usercart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cartID="+productId +"&cartCateg="+productCateg+"&cartName="+productName+"&cartDetails="+productDetails+"&cartPrice="+productPrice+"&cartPic="+productPicDir;

            xhr.onload=()=>{
                if(xhr.status==200){
                    this.notifier.innerHTML = xhr.responseText;
                    this.notifier.style.animationPlayState = "running";
                }else{
                    this.errorNotifier.innerHTML = xhr.responseText;
                    this.errorNotifier.style.animationPlayState = "running";
                }
            }

            xhr.send(params);
        });
    }
}


const cartingOfficeProducts = function(){
    this.firstPicker = document.getElementById('OfficecartID0');
    this.secondPicker = document.getElementById('OfficecartID1');
    this.thirdPicker = document.getElementById('OfficecartID2');
    this.fourthPicker = document.getElementById('OfficecartID3');
    this.fifthPicker = document.getElementById('OfficecartID4');
    this.sixthPicker = document.getElementById('OfficecartID5');

    this.notifier = document.querySelector(".notifier");
    this.errorNotifier = document.querySelector(".action_failed");
}

cartingOfficeProducts.prototype = {
    firstProductCarter(){

        this.firstPicker.addEventListener('click',()=>{

            var productId = this.firstPicker.dataset.productid;
            var productCateg = this.firstPicker.dataset.productcateg;
            var productName = this.firstPicker.dataset.productname;
            var productDetails = this.firstPicker.dataset.productdetails;
            var productPrice = this.firstPicker.dataset.productprice;
            var productPicDir = this.firstPicker.dataset.productpicdir;

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','php/usercart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cartID="+productId +"&cartCateg="+productCateg+"&cartName="+productName+"&cartDetails="+productDetails+"&cartPrice="+productPrice+"&cartPic="+productPicDir;

            xhr.onload=()=>{
                if(xhr.status==200){
                    this.notifier.innerHTML = xhr.responseText;
                    this.notifier.style.animationPlayState = "running";
                }else{
                    this.errorNotifier.innerHTML = xhr.responseText;
                    this.errorNotifier.style.animationPlayState = "running";
                }
            }

            xhr.send(params);
        });
    },

    secondProductCarter(){

        this.secondPicker.addEventListener('click',()=>{
        
            var productId = this.secondPicker.dataset.productid;
            var productCateg = this.secondPicker.dataset.productcateg;
            var productName = this.secondPicker.dataset.productname;
            var productDetails = this.secondPicker.dataset.productdetails;
            var productPrice = this.secondPicker.dataset.productprice;
            var productPicDir = this.secondPicker.dataset.productpicdir;

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','php/usercart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cartID="+productId +"&cartCateg="+productCateg+"&cartName="+productName+"&cartDetails="+productDetails+"&cartPrice="+productPrice+"&cartPic="+productPicDir;

            xhr.onload=()=>{
                if(xhr.status==200){
                    this.notifier.innerHTML = xhr.responseText;
                    this.notifier.style.animationPlayState = "running";
                }else{
                    this.errorNotifier.innerHTML = xhr.responseText;
                    this.errorNotifier.style.animationPlayState = "running";
                }
            }

            xhr.send(params);
        });
    },

    thirdProductCarter(){

        this.thirdPicker.addEventListener('click',()=>{
        
            var productId = this.thirdPicker.dataset.productid;
            var productCateg = this.thirdPicker.dataset.productcateg;
            var productName = this.thirdPicker.dataset.productname;
            var productDetails = this.thirdPicker.dataset.productdetails;
            var productPrice = this.thirdPicker.dataset.productprice;
            var productPicDir = this.thirdPicker.dataset.productpicdir;

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','php/usercart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cartID="+productId +"&cartCateg="+productCateg+"&cartName="+productName+"&cartDetails="+productDetails+"&cartPrice="+productPrice+"&cartPic="+productPicDir;

            xhr.onload=()=>{
                if(xhr.status==200){
                    this.notifier.innerHTML = xhr.responseText;
                    this.notifier.style.animationPlayState = "running";
                }else{
                    this.errorNotifier.innerHTML = xhr.responseText;
                    this.errorNotifier.style.animationPlayState = "running";
                }
            }

            xhr.send(params);
        });
    },

    fourthProductCarter(){

        this.fourthPicker.addEventListener('click',()=>{
        
            var productId = this.fourthPicker.dataset.productid;
            var productCateg = this.fourthPicker.dataset.productcateg;
            var productName = this.fourthPicker.dataset.productname;
            var productDetails = this.fourthPicker.dataset.productdetails;
            var productPrice = this.fourthPicker.dataset.productprice;
            var productPicDir = this.fourthPicker.dataset.productpicdir;

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','php/usercart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cartID="+productId +"&cartCateg="+productCateg+"&cartName="+productName+"&cartDetails="+productDetails+"&cartPrice="+productPrice+"&cartPic="+productPicDir;

            xhr.onload=()=>{
                if(xhr.status==200){
                    this.notifier.innerHTML = xhr.responseText;
                    this.notifier.style.animationPlayState = "running";
                }else{
                    this.errorNotifier.innerHTML = xhr.responseText;
                    this.errorNotifier.style.animationPlayState = "running";
                }
            }

            xhr.send(params);
        });
    },

    fifthProductCarter(){

        this.fifthPicker.addEventListener('click',()=>{
        
            var productId = this.fifthPicker.dataset.productid;
            var productCateg = this.fifthPicker.dataset.productcateg;
            var productName = this.fifthPicker.dataset.productname;
            var productDetails = this.fifthPicker.dataset.productdetails;
            var productPrice = this.fifthPicker.dataset.productprice;
            var productPicDir = this.fifthPicker.dataset.productpicdir;

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','php/usercart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cartID="+productId +"&cartCateg="+productCateg+"&cartName="+productName+"&cartDetails="+productDetails+"&cartPrice="+productPrice+"&cartPic="+productPicDir;

            xhr.onload=()=>{
                if(xhr.status==200){
                    this.notifier.innerHTML = xhr.responseText;
                    this.notifier.style.animationPlayState = "running";
                }else{
                    this.errorNotifier.innerHTML = xhr.responseText;
                    this.errorNotifier.style.animationPlayState = "running";
                }
            }

            xhr.send(params);
        });
    },

    sixthProductCarter(){

        this.sixthPicker.addEventListener('click',()=>{
        
            var productId = this.sixthPicker.dataset.productid;
            var productCateg = this.sixthPicker.dataset.productcateg;
            var productName = this.sixthPicker.dataset.productname;
            var productDetails = this.sixthPicker.dataset.productdetails;
            var productPrice = this.sixthPicker.dataset.productprice;
            var productPicDir = this.sixthPicker.dataset.productpicdir;

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','php/usercart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cartID="+productId +"&cartCateg="+productCateg+"&cartName="+productName+"&cartDetails="+productDetails+"&cartPrice="+productPrice+"&cartPic="+productPicDir;

            xhr.onload=()=>{
                if(xhr.status==200){
                    this.notifier.innerHTML = xhr.responseText;
                    this.notifier.style.animationPlayState = "running";
                }else{
                    this.errorNotifier.innerHTML = xhr.responseText;
                    this.errorNotifier.style.animationPlayState = "running";
                }
            }

            xhr.send(params);
        });
    }
}




setTimeout(function(){

    var wearCarter = new cartingWearProducts();
        wearCarter.firstProductCarter();
        wearCarter.secondProductCarter();
        wearCarter.thirdProductCarter();
        wearCarter.fourthProductCarter();
        wearCarter.fifthProductCarter();
        wearCarter.sixthProductCarter();

    var phoneCarter = new cartingPhoneProducts();
        phoneCarter.firstProductCarter();
        phoneCarter.secondProductCarter();
        phoneCarter.thirdProductCarter();
        phoneCarter.fourthProductCarter();
        phoneCarter.fifthProductCarter();
        phoneCarter.sixthProductCarter();

    var electronicsCarter = new cartingElectronicsProducts();
        electronicsCarter.firstProductCarter();
        electronicsCarter.secondProductCarter();
        electronicsCarter.thirdProductCarter();
        electronicsCarter.fourthProductCarter();
        electronicsCarter.fifthProductCarter();
        electronicsCarter.sixthProductCarter();

    var furnitureCarter = new cartingFurnitureProducts();
        furnitureCarter.firstProductCarter();
        furnitureCarter.secondProductCarter();
        furnitureCarter.thirdProductCarter();
        furnitureCarter.fourthProductCarter();
        furnitureCarter.fifthProductCarter();
        furnitureCarter.sixthProductCarter();

    var officeCarter = new cartingOfficeProducts();
        officeCarter.firstProductCarter();
        officeCarter.secondProductCarter();
        officeCarter.thirdProductCarter();
        // officeCarter.fourthProductCarter();
        // officeCarter.fifthProductCarter();
        // officeCarter.sixthProductCarter();

},1000);


