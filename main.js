// Login/logout khi scoll

var nav = document.getElementById('header');
var getusers = document.querySelectorAll('.nav__login')
function handleNav(){
    window.onscroll = function(){
        if(document.documentElement.scrollTop > 0){
            nav.classList.add('nav__background');
            for(var getuser of getusers){
                getuser.style.color = '#333';
            }
        } else{
            nav.classList.remove('nav__background');
            for(var getuser of getusers){
                getuser.style.color = '#fff';
            }
        }
    }
}

handleNav();




// Xử lý login/logout
var login = document.getElementsByClassName('nav__login');

login[0].addEventListener('mouseover', function(){
    login[0].classList.add('nav__login--active');
    login[1].classList.remove('nav__login--active');
})

login[1].addEventListener('mouseover', function(){
    login[0].classList.remove('nav__login--active');
    login[1].classList.add('nav__login--active');
})


// Tự động tăng số
var number = document.querySelector('service__quantity-item-number');
var startNumber = 0;
var endNumber = number.innerHTML;

function countUp(count){
    startNumber = count;
    if(count < endNumber){
        setInterval(countUp(count+1), 50)
    }
}

countUp(startNumber)


