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

    const menuItems = document.querySelectorAll('.navbar li a[href*="#"]');
        
    
    for( const menuItem of menuItems){
       
        menuItem.addEventListener('click',function(event){
            const isParrentMenu =  menuItem.nextElementSibling && menuItem.nextElementSibling.classList.contains('subnav') ;
            if(isParrentMenu){
                event.preventDefault();
            }else{
                header.style.height = null;
                
            }
            
        } )
    }
