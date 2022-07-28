"use strict";

const delete_cart = function(){
    this.firstDeleteBtn = document.getElementById("delete_cart0");
    this.productCardHolder = document.getElementById("product_tag0")
    

    this.secondDeleteBtn = document.getElementById("delete_cart1");
    this.secondProductCardHolder = document.getElementById("product_tag1")
    

    this.thirdDeleteBtn = document.getElementById("delete_cart2");
    this.thirdProductCardHolder = document.getElementById("product_tag2")
    

    this.fourthDeleteBtn = document.getElementById("delete_cart3");
    this.fourthProductCardHolder = document.getElementById("product_tag3");
    

    this.fifthDeleteBtn = document.getElementById("delete_cart4");
    this.fifthProductCardHolder = document.getElementById("product_tag4");

    this.sixthDeleteBtn = document.getElementById("delete_cart5");
    this.sixthProductCardHolder = document.getElementById("product_tag5")
}

delete_cart.prototype = {
    removeFirstProductFromCart (){
        this.firstDeleteBtn.addEventListener("click",()=>{
            this.productCardHolder.style.display = "none";

            let productName = this.firstDeleteBtn.dataset.productname;
            let customerEmail = this.firstDeleteBtn.dataset.customeremail;
           

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','../php/delete_from_cart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cart_pr_name="+productName +"&cart_cust_email="+customerEmail;

            xhr.onload=()=>{
                if(xhr.status==200){
                    console.log(xhr.responseText);
                }else{
                    console.log("error occured");
                }
            }

            xhr.send(params);
           
        })
    },
    removeSecondProductFromCart(){
        this.secondDeleteBtn.addEventListener("click",()=>{

            this.secondProductCardHolder.style.display = "none";

            let productName = this.secondDeleteBtn.dataset.productname;
            let customerEmail = this.secondDeleteBtn.dataset.customeremail;
           

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','../php/delete_from_cart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cart_pr_name="+productName +"&cart_cust_email="+customerEmail;

            xhr.onload=()=>{
                if(xhr.status==200){
                    console.log(xhr.responseText);
                }else{
                    console.log("error occured");
                }
            }

            xhr.send(params);
    
        })
    },
    removeThirdProductFromCart(){
        this.thirdDeleteBtn.addEventListener("click",()=>{

            this.thirdProductCardHolder.style.display = "none";

            let productName = this.thirdDeleteBtn.dataset.productname;
            let customerEmail = this.thirdDeleteBtn.dataset.customeremail;
           

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','../php/delete_from_cart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cart_pr_name="+productName +"&cart_cust_email="+customerEmail;

            xhr.onload=()=>{
                if(xhr.status==200){
                    console.log(xhr.responseText);
                }else{
                    console.log("error occured");
                }
            }

            xhr.send(params);
    
        })
    },
    removeFourthProductFromCart(){
        this.fourthDeleteBtn.addEventListener("click",()=>{

            this.fourthProductCardHolder.style.display = "none";

            let productName = this.fourthDeleteBtn.dataset.productname;
            let customerEmail = this.fourthDeleteBtn.dataset.customeremail;
           

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','../php/delete_from_cart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cart_pr_name="+productName +"&cart_cust_email="+customerEmail;

            xhr.onload=()=>{
                if(xhr.status==200){
                    console.log(xhr.responseText);
                }else{
                    console.log("error occured");
                }
            }

            xhr.send(params);
    
        })
    },
    removeFifthProductFromCart(){
        this.fifthDeleteBtn.addEventListener("click",()=>{

            this.fifthProductCardHolder.style.display = "none";

            let productName = this.fifthDeleteBtn.dataset.productname;
            let customerEmail = this.fifthDeleteBtn.dataset.customeremail;
           

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','../php/delete_from_cart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cart_pr_name="+productName +"&cart_cust_email="+customerEmail;

            xhr.onload=()=>{
                if(xhr.status==200){
                    console.log(xhr.responseText);
                }else{
                    console.log("error occured");
                }
            }

            xhr.send(params);
    
        })
    },
    removeSixthProductFromCart(){
        this.sixthDeleteBtn.addEventListener("click",()=>{

            this.sixthProductCardHolder.style.display = "none";

            let productName = this.sixthDeleteBtn.dataset.productname;
            let customerEmail = this.sixthDeleteBtn.dataset.customeremail;
           

            const xhr = new XMLHttpRequest(); 
            xhr.open('POST','../php/delete_from_cart.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let params = "cart_pr_name="+productName +"&cart_cust_email="+customerEmail;

            xhr.onload=()=>{
                if(xhr.status==200){
                    console.log(xhr.responseText);
                }else{
                    console.log("error occured");
                }
            }

            xhr.send(params);
    
        })
    }
}



setTimeout(function(){
    const cartDelete = new delete_cart();
    cartDelete.removeFirstProductFromCart();
    cartDelete.removeSecondProductFromCart();
    cartDelete.removeThirdProductFromCart();
    cartDelete.removeFourthProductFromCart();
    cartDelete.removeFifthProductFromCart();
    cartDelete.removeSixthProductFromCart();
},1000)