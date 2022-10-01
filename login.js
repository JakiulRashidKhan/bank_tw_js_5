// step1 submit
document.getElementById('submit').addEventListener('click',function(){
    // step2 email
    const userEmail =document.getElementById('user-email') ;
    const email = userEmail.value;
    // step3 password
    const userPassword =document.getElementById('user-password') ;
    const password = userPassword.value;
    console.log(email,password)
    // varification
    if(email =='abc@gmail.com' && password == '123')
    {
        window.location.href ='bank.html'
    }
    else{
        alert('invalid user');
    }
});