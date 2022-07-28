"use strict";

const cartingProducts = function(){
    this.firstPicker = document.getElementById('cartID0');
    this.secondPicker = document.getElementById('cartID1');
    this.thirdPicker = document.getElementById('cartID2');
    this.fourthPicker = document.getElementById('cartID3');
    this.fifthPicker = document.getElementById('cartID4');
    this.sixthPicker = document.getElementById('cartID5');
}

cartingProducts.prototype = {
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
                    console.log(xhr.responseText);
                }else{
                    console.log("error occured");
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
                    console.log(xhr.responseText);
                }else{
                    console.log("error occured");
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
                    console.log(xhr.responseText);
                }else{
                    console.log("error occured");
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
                    console.log(xhr.responseText);
                }else{
                    console.log("error occured");
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
                    console.log(xhr.responseText);
                }else{
                    console.log("error occured");
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
                    console.log(xhr.responseText);
                }else{
                    console.log("error occured");
                }
            }

            xhr.send(params);
        });
    }
}


setTimeout(function() {
    var carter = new cartingProducts();
    carter.firstProductCarter();
    carter.secondProductCarter();
    carter.thirdProductCarter();
    carter.fourthProductCarter();
    carter.fifthProductCarter();
    carter.sixthProductCarter();
},1000);


