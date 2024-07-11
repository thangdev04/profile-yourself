const header = document.getElementById('header');
const mobileMenu = document.getElementById('header__menu');
const headerHeight = header.clientHeight;

    mobileMenu.onclick = function(){
        const isClose = header.clientHeight === headerHeight;
        if(isClose){
            header.style.height = 'auto';
        }else{
            header.style.height = null;
        }
    }

