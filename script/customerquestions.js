"use strict";
import { usercartdata } from "./usercart.js";

setTimeout(function(){
    let customerdata = new usercartdata();
    customerdata.navbardata();
},2000);


export const chatusername = function(){
    this.chatusername = document.querySelector(".chatusername");
};

chatusername.prototype = {
    chatbubble(){
        let xhr = new XMLHttpRequest();
            xhr.open('POST','../php/customerCompleteData.php', true);
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

            xhr.onload = ()=>{
                if (xhr.status === 200) {
                    
                    let data = JSON.parse(xhr.responseText);
                    this.chatusername.textContent = data.customername;
                    // this.userimage = data.customername;

                }
            };

            xhr.onerror = (error)=>{
                console.error(error);
            };

            xhr.send();

    }
};

let chatbox = new chatusername();
document.onload = chatbox.chatbubble();
