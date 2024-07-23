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
    const buyBtns = document.querySelectorAll('.btn__share')
    const modal = document.querySelector('.js-share')
    const modalContainer = document.querySelector('.share__box')
    const modalClose = document.querySelector('.close')
    // ham hien thi( thêm class vào modal để có display: flex)
    function showTickets(){
        modal.classList.add('open')
    }
    // hàm gỡ classs open 
    function closeTickets(){
        modal.classList.remove('open')
    }
    // lặp qua từng thẻ btn và nghe hàng vi
    for(const buyBtn of buyBtns){
    
        buyBtn.addEventListener('click',showTickets)
    }
    // nghe hành vi click 
    modalClose.addEventListener('click', closeTickets)
    
    modal.addEventListener('click',closeTickets)
    
    modalContainer.addEventListener('click', function(event){
        event.stopPropagation()
    })