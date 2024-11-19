//fancybox start
try{
    Fancybox.bind("[data-fancybox]", {
        Images: {
            initialSize: "fit",
        },
        Thumbs: {
            type: "classic",
        },
    });
}
catch (e){
    console.log(e)
}
//fancybox end

//btn-up block start
try{
    const btnUp = document.getElementById('button-up');
    const scrollUp = () => {
        if (document.documentElement.scrollTop > 300) {
            btnUp.classList.remove('show');
        } else {
            btnUp.classList.add('show')
        }
    }

    const scrollingUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    btnUp.addEventListener('click', scrollingUp );
    window.addEventListener('scroll', scrollUp);
}
catch (e){
    console.log(e)
}
//btn-up block end

const slider2 = document.querySelector('.swiper');
const sl2 = new Swiper(slider2,{
    direction: 'horizontal',
    loop: false,
    speed: 500,
    navigation: {
        nextEl: ".nav-next",
        prevEl: ".nav-prev",
    },
})