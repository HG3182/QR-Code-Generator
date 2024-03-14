let Text = document.getElementById("Text");
let imgbox = document.getElementById("imgbox");
let qrimg = document.getElementById("qrimg");

function generateQRCode(){
    qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(Text.value);
    qrimg.style.display = "inline";
}
