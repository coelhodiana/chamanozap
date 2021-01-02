let API_WHATSAPP = "https://api.whatsapp.com/send?phone=";
let phonenum = document.querySelector('#phone-num');
let sendbtn = document.querySelector('#sendbtn')


function send() {
    let phone = phonenum.value;
    let url = `${API_WHATSAPP+phone}`
    sendbtn.href = url;
}
