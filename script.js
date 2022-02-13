// Edu note: when using if with booleans use == boolean is like string
//  // scroll magic

 $(document).ready(function () {

    let controller = new ScrollMagic.Controller();
    let scene1 = new ScrollMagic.Scene({
        triggerElement: '#scroll-trigger-1', 
        triggerHook: 0.6
    })
    .setClassToggle('#scroll-trigger-1', 'scroll-1')
    .reverse(false)
    .addTo(controller);

    let scene2 = new ScrollMagic.Scene({
        triggerElement: '#scroll-trigger-2', 
        triggerHook: 0.8
    })
    .setClassToggle('#scroll-trigger-2', 'scroll-2')
    .reverse(true)
    .addTo(controller);
    
    let scene3 = new ScrollMagic.Scene({
        triggerElement: '#scroll-trigger-3', 
        triggerHook: 0.6
    })
    .setClassToggle('#scroll-trigger-3', 'scroll-3')
    .reverse(false)
    .addTo(controller);

    let scene4 = new ScrollMagic.Scene({
        triggerElement: '#scroll-trigger-4', 
        triggerHook: 0.9
    })
    .setClassToggle('#scroll-trigger-4', 'scroll-4')
    .reverse(false)
    .addTo(controller);

    let scene5 = new ScrollMagic.Scene({
        triggerElement: '#scroll-trigger-5', 
        triggerHook: 0.9
    })
    .setClassToggle('#scroll-trigger-5', 'scroll-5')
    .reverse(false)
    .addTo(controller);

    let scene6 = new ScrollMagic.Scene({
        triggerElement: '#scroll-trigger-6', 
        triggerHook: 0.7
    })
    .setClassToggle('#scroll-trigger-6', 'scroll-6')
    .reverse(false)
    .addTo(controller);

    // let scene7 = new ScrollMagic.Scene({
    //     triggerElement: '#scroll-trigger-7', 
    //     triggerHook: 5
    // })
    // .setClassToggle('.scroll-trigger-7', 'show')
    // .reverse(false)
    // .addTo(controller);
});

// $(window).scroll(function () { 
//     if($(document).scrollTop()>2400){
//         $('#scroll-trigger-7').removeClass('collapsed');
//         $('.scroll-trigger-7').addClass('show');
//     }
// });

// Navbar-fixed
$(document).ready(function () {

    $(window).scroll(function () { 
        if($(document).scrollTop() > 66.5){
            $('.navbar').addClass('fixed-top');
            $('.carousel-driver-btn').addClass('btn-correction');
        }
        else{
            $('.navbar').removeClass('fixed-top')
            $('.carousel-driver-btn').removeClass('btn-correction')
        }
    });
});

//Statistics scroll
//in the morning adjust this function or target each with id
$(window).scroll(function () { 
    // counter1
    const numCheck1 = document.querySelector('.counter-k').innerHTML;
    if($(document).scrollTop() > 1900) {
        let check1 = true;
    if(+numCheck1 > 0){ check1=false}

        const counterK1 = document.querySelectorAll('.counter-k');

        if(check1 == true) {
            counterK1.forEach(counter => {
                const updateCount = () => {
                const speed = 100;
                const target = +counter.getAttribute('data-target');
                const countNumber = +counter.innerText;
        
                const inc = target / speed;
        
                if(countNumber < target) {
                    counter.innerText = Math.ceil(countNumber + inc);
                    setTimeout(updateCount, 30);
                }
                else{
                    countNumber.innerText = target;
                }
                } 
        
                updateCount();
                });
            }
        }

    // counter2

    const numCheck2 = document.querySelector('.counter-98').innerHTML;
    if($(document).scrollTop() > 1900) {
        let check2 = true;
    if(+numCheck2 > 0){ check2=false}

        const counterK2 = document.querySelectorAll('.counter-98');

        if(check2 == true) {
            counterK2.forEach(counter => {
                const updateCount = () => {
                const speed = 200;
                const target = +counter.getAttribute('data-target');
                const countNumber = +counter.innerText;
        
                const inc = target / speed;
        
                if(countNumber < target) {
                    counter.innerText = Math.ceil(countNumber + inc);
                    setTimeout(updateCount, 30);
                }
                else{
                    countNumber.innerText = target;
                }
                } 
        
                updateCount();
                });
            }
        }

    // counter3

    const numCheck3 = document.querySelector('.counter-100').innerHTML;
    if($(document).scrollTop() > 1900) {
        let check3 = true;
    if(+numCheck3 > 0){ check3=false}

        const counterK3 = document.querySelectorAll('.counter-100');

        if(check3 == true) {
            counterK3.forEach(counter => {
                const updateCount = () => {
                const speed = 200;
                const target = +counter.getAttribute('data-target');
                const countNumber = +counter.innerText;
        
                const inc = target / speed;
        
                if(countNumber < target) {
                    counter.innerText = Math.ceil(countNumber + inc);
                    setTimeout(updateCount, 30);
                }
                else{
                    countNumber.innerText = target;
                }
                } 
        
                updateCount();
                });
            }
        }

    // counter4

    const numCheck4 = document.querySelector('.counter-15').innerHTML;
    if($(document).scrollTop() > 1900) {
        let check4 = true;
    if(+numCheck4 > 0){ check4=false}

        const counterK4 = document.querySelectorAll('.counter-15');

        if(check4 == true) {
            counterK4.forEach(counter => {
                const updateCount = () => {
                const speed = 5000;
                const target = +counter.getAttribute('data-target');
                const countNumber = +counter.innerText;
        
                const inc = target / speed;
        
                if(countNumber < target) {
                    counter.innerText = Math.ceil(countNumber + inc);
                    setTimeout(updateCount, 220);
                }
                else{
                    countNumber.innerText = target;
                }
                } 
        
                updateCount();
                });
            }
        }
});




// Reiew
const myArray = [
    {
        img: "./img/FaceMan.svg",
        author: "Jack Martin",
        job: "UX designer",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus vero temporibus dignissimos\
        ineveniet! Praesentium amet nobis unde itaque obcaecati necessitatibus earum nam, atque fugiat similique"
    },
    {
        img: "./img/face-woman.png",
        author: "John Smith",
        job: "Graphic Designer",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus vero temporibus dignissimos\
        ineveniet! Praesentium amet nobis unde itaque obcaecati necessitatibus earum nam, atque fugiat similique atque fugiat similique"
    },
    {
        img: "./img/FaceMan.svg",
        author: "Rober Levan",
        job: "SMM targeter",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus vero temporibus dignissimos\
        ineveniet! Praesentium amet nobis unde itaque obcaecati necessitatibus earum nam, atque fugiat similique atque fugiat similiqueatque fugiat similique"
    },
    {
        img: "./img/face-woman.png",
        author: "Ann Laren",
        job: "Student",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus vero temporibus dignissimos\
        ineveniet! Praesentium amet nobis unde itaque obcaecati necessitatibus earum nam, atque fugiat similique atque fugiat similiqueatque fugiat similiqueatque fugiat similiqueatque fugiat similique"
    },
   
]

const prev = document.getElementById('prev');
// const surprise = document.getElementById('surprise');
const next = document.getElementById('next');
const img = document.getElementById('img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
let count = 0;

window.addEventListener('load', function(){
    display(0)
})

function display(num) {
   // count++
    img.src = myArray[num].img;
    author.textContent = myArray[num].author;
    job.textContent = myArray[num].job;
    info.textContent = myArray[num].info;
}

prev.addEventListener('click', function() {
    count--
    if(count < 0) {
        count = myArray.length - 1
    }
    display(count)
    
})


next.addEventListener('click', function() {
    count++
    if(count > 3) {
        count = 0
    }
     display(count)
    
})

// Counter statistics

// const counters = document.querySelectorAll('.statistic-info');
// const speed = 50;

// counters.forEach(counter => {
//     const updateCount = () => {
//         const target = +counter.getAttribute('data-target');
//         const countNumber = +counter.innerText;

//         const inc = target / speed;

//         if(countNumber < target) {
//             counter.innerText = Math.ceil(countNumber + inc);
//             setTimeout(updateCount, 80);
//         }
//         else{
//             countNumber.innerText = target;
//         }
//         } 

//         updateCount();
//     });

   
//about us sub heading

$('#who').click(function (e) { 
    e.preventDefault();
    $('#who').addClass('about-active');
    $('.who').addClass('visible');
    $('#what').removeClass('about-active');
    $('.what').removeClass('visible');
    $('#how').removeClass('about-active');
    $('.how').removeClass('visible');
});
$('#what').click(function (e) { 
    e.preventDefault();
    $('#what').addClass('about-active');
    $('.what').addClass('visible');
    $('#who').removeClass('about-active');
    $('.who').removeClass('visible');
    $('#how').removeClass('about-active');
    $('.how').removeClass('visible');
});
$('#how').click(function (e) { 
    e.preventDefault();
    $('#how').addClass('about-active');
    $('.how').addClass('visible');
    $('#who').removeClass('about-active');
    $('.who').removeClass('visible');
    $('#what').removeClass('about-active');
    $('.what').removeClass('visible');
});

let widw = $(document).height();
console.log(widw)

// OWL 
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    slideTransition: 'linear',
    // autoplaySpeed: 6000,
    // smartSpeed: 6000,
    center: true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// loop: true,
//     items: 6,
//     autoplay: true,
//     slideTransition: 'linear',
//     autoplaySpeed: 6000,
//     smartSpeed: 6000,
//     center: true,


// $('body').click(function (e) { 
//     e.preventDefault();
//     if($('.offcanvas-start').hasClass('show') == ) {
//         $('.show').remove();
//         // $('.show').removeClass('fade');
//         // $('.show').removeClass('show');
        
//     }
// });

$('.close').click(function (e) { 
    $('.offcanvas-start').attr('aria-hidden', 'true');

    $('.offcanvas-start').css('visibility', 'hidden');
    $('.fade').removeClass('show');
    $('.offcanvas-start').removeClass('show');

    $('.offcanvas-start').removeAttr('aria-modal');
    console.log ('donee')  
});
