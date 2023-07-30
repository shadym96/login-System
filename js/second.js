var mail=document.getElementById('mail')
var pass=document.getElementById('pass')
var users= JSON.parse( localStorage.getItem('users'))
var loginbtn=document.getElementById('login')

function login() {
    var i;
    for(i=0 ;i<users.length ;i++ ){
        if (mail.value===users[i].email) {
            console.log('true');
            
            if(pass.value===users[i].pass){
             
                        var url='http://127.0.0.1:5500/home.html';
        
                     window.location.href = url;
                
                     

            }
            else{
                 document.querySelector('.checkpass').innerHTML= `<span class="text-danger">your password is wrong</span>`
            }
        }
        else{
          document.querySelector('.checkmail').innerHTML= '<span class="text-danger">your email is wrong</span>'
        
        }
    }
    
}

loginbtn.addEventListener('click',login)
