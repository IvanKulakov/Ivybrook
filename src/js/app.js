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

//swiper11 start
try{
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
}
catch (e){
    console.log(e)
}

//swiper1 end


//swiper11 start
try{
    const slider3 = document.querySelector('.swiper2');
    const sl3 = new Swiper(slider3,{
        direction: 'horizontal',
        loop: false,
        speed: 500,
        navigation: {
            nextEl: ".nav-next1",
            prevEl: ".nav-prev1",
        },
    })
}
catch (e){
    console.log(e)
}

//swiper1 end


// faq start
try{
    const openFaq = document.getElementsByClassName('faq_box_svg');
    const itemQ = document.getElementsByClassName('faq_item_q');
    const itemAns = document.getElementsByClassName('faq_ans');

    const setIdForElemFaq = () => {
        for (let i = 0; i < openFaq.length; i++){
            openFaq[i].id = 'openFaq' + i;
            openFaq[i].addEventListener('click', openAns)
        }
        for (let i = 0; i < itemQ.length; i++){
            itemQ[i].id = 'itemQ' + i;
        }
        for (let i = 0; i < itemAns.length; i++){
            itemAns[i].id = 'faq_ans' + i;
        }
    }

    const openAns = (e) => {
        let action;
        if ( e.target.classList.contains('faq_box_svg')) {
            action = Number(e.target.id.slice(-1))
        }
        if (!e.target.classList.contains('faq_box_svg')) {
            action = Number(e.target.parentNode.id.slice(-1));
        }
        document.getElementById(`openFaq${action}`).classList.toggle('faq_box_svg_active');
        document.getElementById(`faq_ans${action}`).classList.toggle('faq_ans_active');

    }





    setIdForElemFaq();


}
catch (e){
    console.log(e)
}
// faq end

//burger menu block start
try{
    const burgerMenuOpenBTN = document.getElementById('burger-menu-open');
    const burgerMenu = document.getElementById('burger-menu');
    const burgerMenuStickOpen = document.getElementById('open-burger-stick-menu');
    const line1 = document.getElementById('header-burger_line_1')
    const line2 = document.getElementById('header-burger_line_2')
    const line3 = document.getElementById('header-burger_line_3')


    const openBurger = () => {
        burgerMenu.classList.toggle('_active-burger-menu');
        line1.classList.toggle('header-burger_open_top_line1');
        line2.classList.toggle('header-burger_open_top_line2');
        line3.classList.toggle('header-burger_open_top_line3');

    }
    const closeBurger = () => {
        burgerMenu.classList.remove('_active-burger-menu');
        line1.classList.remove('header-burger_open_top_line1');
        line2.classList.remove('header-burger_open_top_line2');
        line3.classList.remove('header-burger_open_top_line3');
    }
    window.addEventListener('scroll', closeBurger)
    burgerMenuOpenBTN.addEventListener('click', openBurger);
    // burgerMenuCloseBTN.addEventListener('click', closeBurger);
    // burgerMenuStickOpen.addEventListener('click', openBurger);
}
catch (e)
{
    console.log(e)
}
//burger menu block end

//modal block start
try {
    const btsOpen = document.getElementsByClassName('bntOpenModal');
    const btnOpenModal = document.getElementById('openModal');
    const btnClosedModal = document.getElementById('close_icon');
    const btnsubmit = document.getElementById('closedModal');
    const modal = document.getElementById('modal');
    const userNameInput = document.getElementById('userNameInput');
    const userPhoneInput = document.getElementById('userPhoneInput');
    const userNameAge = document.getElementById('userNameAge');

    const setOpen = () => {
        for(let i=0; i < btsOpen.length; i++){
            btsOpen[i].addEventListener('click', open)
        }
    }

    const open = function (){
        modal.classList.add('modal-active');
        document.body.classList.add('main_hidden');
    }
    const closed = function (event) {
        event.preventDefault();
        event.stopPropagation();
        // sendToTelegram(userNameInput.value, userPhoneInput.value);
        userNameInput.value = "";
        userPhoneInput.value = "";
        userNameAge.value = "";
        modal.classList.remove('modal-active');
        document.body.classList.remove('main_hidden');
    }
    const exit = function (event) {
        event.preventDefault();
        event.stopPropagation();
        userNameInput.value = "";
        userPhoneInput.value = "";
        userNameAge.value = "";
        modal.classList.remove('modal-active');
        document.body.classList.remove('main_hidden');
    }
    setOpen();
    btnOpenModal.addEventListener('click', open);
    btnClosedModal.addEventListener('click', exit);
    btnsubmit.addEventListener('click', closed);
    userPhoneInput.addEventListener('focus', _ => {
        if(!/^\+\d*$/.test(userPhoneInput.value))
            userPhoneInput.value = '+38';

    });

    userPhoneInput.addEventListener('keypress', e => {
        if(!/\d/.test(e.key)) {
            e.preventDefault();
        }
    });


}
catch (e){
    console.log(e)
}
//modal block end
