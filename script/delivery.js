"use strict";

export const delivery = function (){
    this.name = document.querySelector(".username");
    this.address = document.querySelector(".customeraddressdata");

    // this.deliveryInterval;

    this.pickpoints = document.querySelector(".pickpointsdata");
    this.userimage = document.querySelector(".userimg_container");

};

delivery.prototype = {
    deliverytab(){
        let xhr = new XMLHttpRequest();
            xhr.open('POST','../php/customerCompleteData.php', true);
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

            xhr.onload = ()=>{
                if (xhr.status === 200) {
                    
                    let data = JSON.parse(xhr.responseText);
                    
                    this.name.textContent = data.customername;
                    this.address.textContent = data.customerlocation;
                    this.pickpoints.textContent = data.customerlocation;
                    this.userimage.style.backgroundImage = `url(${data.customerpicdir})`;
                    this.userimage.style.backgroundSize = 'cover';

                    if(data.customername !== ""){

                        this.signinBtn.style.display = "none";
                        
                    }

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
