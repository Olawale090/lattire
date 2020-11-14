"use strict";
import { usercartdata } from "./usercart.js";

let customerdata = new usercartdata();
document.onload = customerdata.navbardata();
console.log(customerdata);


export const delivery = function (){
    this.address = document.querySelector(".customeraddressdata");
    // this.deliveryInterval;
    this.pickpoints = document.querySelector(".pickpointsdata");
};

delivery.prototype = {
    deliverytab(){
        let xhr = new XMLHttpRequest();
            xhr.open('POST','../php/customerCompleteData.php', true);
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

            xhr.onload = ()=>{
                if (xhr.status === 200) {
                    
                    let data = JSON.parse(xhr.responseText);
                    this.address.textContent = data.customerlocation;
                    // this.pickpoints.textContent = data.customerlocation;
                    // this.userimage = data.customername;

                }
            };

            xhr.onerror = (error)=>{
                console.error(error);
            };

            xhr.send();

    }
};

let deliverydata = new delivery();
document.onload = deliverydata.deliverytab();
console.log(deliverydata);