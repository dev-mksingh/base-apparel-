const mailId = document.querySelector('#mailId');
const submit = document.querySelector('.btn');
const remark = document.querySelector('.remark');
mailId.value='';
submit.addEventListener('click', function(evt){
    evt.preventDefault();
    if(mailId.value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/!=true) || mailId.value===''){
        remark.textContent = `Please provide a valid email`;
    }
})