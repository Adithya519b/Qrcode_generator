let input = document.getElementById("input");
//let file = document.getElementById("file");
let qrimg = document.getElementById("qrimg");
let qrcode = document.querySelector(".qrcode"); // fixed
let get = document.getElementById("get");

function generateqr() {
   /* if (file.value) {
        
        
    qrcode.classList.add("show");
    qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +encodeURIComponent(file.value);
        
    }
else */if(input.value){
    qrcode.classList.add("show");
    qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +encodeURIComponent(input.value);
}
}
