var userName=document.getElementById('userName')
var userEmail=document.getElementById('userEmail')
var userPass=document.getElementById('userPass')
var btnsignup=document.getElementById('btnsignup')
var Signin=document.querySelector('.Signin')
// var mail=document.getElementById('mail')
// var pass=document.getElementById('pass')


var users=[]
if (localStorage.getItem('users')!= null) {

    users= JSON.parse( localStorage.getItem('users'))
    console.log(users)
    
}
else{
    users=[]
}


function addAccount() {
    if (validateName()!=true) {
        alert(` your name must contain at least 3 characters and not more of 15 characters`)

    }
    else if(validateEmail()!=true){
        
        alert(`your email must contain at least 3 characters ,@ character and the end must be .com`) 
    }
    else if(validatepass()!=true){
        alert(` your password must contain at least 3 characters or numbers  and not more of 20 characters or numbers `) 
    }
    
    else if(containsObject()==true){
            alert('This email is already in use')
        
        }
    
    
        
        
    else{
        
        var newuser={
            name:userName.value ,
            email:userEmail.value,
            pass:userPass.value
        }
        users.push(newuser)
        localStorage.setItem('users',JSON.stringify(users))
        console.log(users);
        clearForm()

        var url='http://127.0.0.1:5500/index.html';
        
        window.location.href = url;
    
    }
}




function clearForm() {
    userName.value=''
    userEmail.value=''
    userPass.value=''
}

function validateName() {

    var regex=/^\w{3,15}$/;
    if( regex.test(userName.value)==true){
        document.getElementById('match').innerHTML=`<span class=" text-success ">match</span>`
    }
    else{
        document.getElementById('match').innerHTML=`<span class=" text-danger "> not match</span>`
 
    }
    return regex.test(userName.value);
    
    
}
function validateEmail() {

    var regex=/^\w{3,15}@[a-zA-z]{3,8}.com[\/]?$/;
    if( regex.test(userEmail.value)==true){
        document.getElementById('isValid').innerHTML=`<span class=" text-success ">match</span>`
    }
    else{
        document.getElementById('isValid').innerHTML=`<span class=" text-danger "> not match</span>`
 
    }

   
    return regex.test(userEmail.value);
    
}

function validatepass() {

    var regex=/^\w{5,20}$/;
    if( regex.test(userPass.value)==true){
        document.getElementById('validation').innerHTML=`<span class=" text-success ">match</span>`
    }
    else{
        document.getElementById('validation').innerHTML=`<span class=" text-danger "> not match</span>`
 
    }
    return regex.test(userPass.value);
    
}

function containsObject() {
    var i;
    for (i = 0; i < users.length; i++) {
        if (users[i].email===userEmail.value) {
        document.getElementById('isValid').innerHTML=`<span class=" text-warning "> This email is already in use</span>`

            return true;
        }
    }

   
}        
// function emailExist() {
//     var i;
//     for(i=0 ;i<users.length ;i++ ){
//         if (mail.value===users[i].email) {
//             console.log('true');
//             // document.querySelector('.checkmail').innerHTML=`<span class="text-danger">your email is not exist</span>`
//             return true
//         }
//          else{
//             console.log('false');
//             return false
//          }
//     }
    
// }
// function passExist() {
//     var i;
//     for(i=0 ;i<users.length ;i++ ){
//         if (pass.value===users[i].pass) {
//             console.log('true');
//             // document.querySelector('.checkmail').innerHTML=`<span class="text-danger">your email is not exist</span>`
//             return true
//         }
//          else{
//             console.log('false');
//             return false
//          }
//     }
    
// }


btnsignup.addEventListener('click',addAccount)
userName.addEventListener('input',validateName)
userEmail.addEventListener('input',validateEmail)
userEmail.addEventListener('input',containsObject)
userPass.addEventListener('input',validatepass)
// mail.addEventListener('input',emailExist)
// pass.addEventListener('input',passExist)
