"use strict";

const delete_cart = function(delBtnID){ 
    this.deleteBtn = document.getElementById("delete_cart0");
    // this.productCardHolder = document.getElementById("product_tag0");
    
}

delete_cart.prototype = {
    removeProductFromCart (){
       
        // var eraser = document.getElementsByClassName(specificCartEraser);
        // console.log(specificCartEraser);
        console.log(this.deleteBtn);
        console.log(this.deleteBtn.dataset.delproductname);
        console.log(this.all.length);

        this.deleteBtn.addEventListener("click",()=>{
            // var specificCartEraser = this.deleteBtn.dataset.delProductName;
            alert("working");

            // this.productCardHolder.style.display = "none";

            // let productName = this.deleteBtn.dataset.productname;
            // let customerEmail = this.deleteBtn.dataset.customeremail;
           

            // const xhr = new XMLHttpRequest(); 
            // xhr.open('POST','../php/delete_from_cart.php', true);
            // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            // let params = "cart_pr_name="+productName +"&cart_cust_email="+customerEmail;

            // xhr.onload=()=>{
            //     if(xhr.status==200){
            //         console.log(xhr.responseText);
            //     }else{
            //         console.log("error occured");
            //     }
            // }

            // xhr.send(params);
           
        })
    }
}


// setTimeout(function(){
//     // var delID = "delete_cart0";
//     const wearCartDelete = new delete_cart();
//           wearCartDelete.removeProductFromCart();
// },1000)