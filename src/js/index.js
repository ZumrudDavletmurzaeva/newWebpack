import '../scss/style.scss'

const slider = document.querySelector('.swiper-container');

function mobileSlider() {
  if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
    let mySwiper = new Swiper('.swiper-container-brends',{
      slidesPerView: 'auto',

      slideClass: 'swiper-slide',
      pagination: {
       	el: '.swiper-pagination',
          clickable: true,
            },
    });

    let swiperN = new Swiper('.swiper-container-device', {

      slidesPerView: 'auto',
          slideClass: 'swiper-slide',
          pagination: {
             el: '.swiper-pagination',
              clickable: true,
                },

    });

    let swiperNew = new Swiper('.swiper-container-prices', {

      slidesPerView: 'auto',
          slideClass: 'swiper-slide',
          pagination: {
             el: '.swiper-pagination',
              clickable: true,
                },

    });


    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 767) {
    slider.dataset.mobile = 'false';
    if (slider.classList.contains('swiper-container-initialized')) {
      mySwiper.destroy();
    }
  }
}

mobileSlider()

window.addEventListener('resize', () => {
  mobileSlider();
});


let deviceButton = document.querySelector('.more-device');
let listDevice =  document.querySelector('.swiper-wrapper-device');
let textDevice =  document.querySelector('.more__text-device');
let morebutton = document.querySelector('.more__image-device');

deviceButton.addEventListener('click', function(evt){
if(listDevice.classList.contains('hide')){
  evt.preventDefault();
  textDevice.textContent = 'Скрыть';
  morebutton.classList.add('moreButtonDevice-hide');
}
else {
  evt.preventDefault();
  textDevice.textContent = 'Показать все';
  morebutton.classList.add('moreButtonDevice-expand');
}
textDevice.style.fontWeight = '500';
listDevice.classList.toggle('hide');
morebutton.classList.toggle('moreButtonDevice-hide');
morebutton.classList.toggle('moreButtonDevice-expand');
})




let expandButton = document.querySelector('.more');
let list =  document.querySelector('.swiper-wrapper');
let text =  document.querySelector('.more__text');
let moreButton = document.querySelector('.more__image');


expandButton.addEventListener('click', function(){

if(list.classList.contains('hidden')){
  text.textContent = 'Скрыть';
  moreButton.classList.add('moreButton-hide');
}
else {
  text.textContent = 'Показать все';
  moreButton.classList.add('moreButton-expand');
}
text.style.fontWeight = '500';
list.classList.toggle('hidden');
moreButton.classList.toggle('moreButton-hide');
moreButton.classList.toggle('moreButton-expand');

})





let fullText = document.querySelector('.about-company__text');
let readButton = document.querySelector('.read-btn');
let textRead = document.querySelector('.read');
let more = document.querySelector('.more_expand');

readButton.addEventListener('click', function(){
  if(fullText.classList.contains('hidtext')){
    textRead.textContent = 'Скрыть';
    more.classList.add('more--hide');

  }
  else{
    textRead.textContent = 'Читать далее';
    more.classList.add('more--expand');

  }
  textRead.style.fontWeight = '500';
  fullText.classList.toggle('hidtext');
  more.classList.toggle('more--expand');
  more.classList.toggle('more--hide');
  })



var open = document.querySelector('.btn-burger');
var closeButton = document.querySelector('.btn-close');
var mobile = document.querySelector('.mobile-page');
var menu = document.querySelector('.main');
var head = document.querySelector('.header');
var callButton = document.querySelector('.btn-call');
var feedCall =  document.querySelector('.form-call');
var chatButton = document.querySelector('.btn-chat');
var formCall = document.querySelector('.form-message');
var messageClose = document.querySelector('.btn-close-message');
var callClose = document.querySelector('.btn-close-call');
var callBurger = document.querySelector('.btn-call-burger');
var messageBurger = document.querySelector('.btn-chat-burger');
var screen = document.querySelector('.screen-blur');
var bodyScreen = document.querySelector('body');
var activeButton = document.querySelectorAll('.navigation-list');

open.addEventListener('click', function(evt){
  evt.preventDefault();
  mobile.classList.add('mobile-page--hidden');
  screen.classList.add('screen-blur--visible');
  bodyScreen.classList.add('bodyOverflow');
})

closeButton.addEventListener('click', function(){
  mobile.classList.remove('mobile-page--hidden');
  screen.classList.remove('screen-blur--visible');
  bodyScreen.classList.remove('bodyOverflow');
})

screen.addEventListener('click', function(){
  mobile.classList.remove('mobile-page--hidden');
  screen.classList.remove('screen-blur--visible');
  bodyScreen.classList.remove('bodyOverflow');
})




callButton.addEventListener('click', function(evt){
  evt.preventDefault();
  feedCall.classList.add('form-call--hidden');
  screen.classList.add('screen-blur--visible');
  bodyScreen.classList.add('bodyOverflow');
})

callClose.addEventListener('click', function(){
  feedCall.classList.remove('form-call--hidden');
  screen.classList.remove('screen-blur--visible');
  bodyScreen.classList.remove('bodyOverflow');
})


screen.addEventListener('click', function(){
  feedCall.classList.remove('form-call--hidden');
  screen.classList.remove('screen-blur--visible');
  bodyScreen.classList.remove('bodyOverflow');
})




chatButton.addEventListener('click', function(evt){
  evt.preventDefault();
  formCall.classList.add('form-message--hidden');
  screen.classList.add('screen-blur--visible');
  bodyScreen.classList.add('bodyOverflow');
})

messageClose.addEventListener('click', function(){
  formCall.classList.remove('form-message--hidden');
  screen.classList.remove('screen-blur--visible');
  bodyScreen.classList.remove('bodyOverflow');
})

screen.addEventListener('click', function(){
  formCall.classList.remove('form-message--hidden');
  screen.classList.remove('screen-blur--visible');
  bodyScreen.classList.remove('bodyOverflow');
})



callBurger.addEventListener('click', function(evt){
  evt.preventDefault();
  feedCall.classList.add('form-call--hidden');
  screen.classList.add('screen-blur--visible');
  mobile.classList.remove('mobile-page--hidden');
  bodyScreen.classList.add('bodyOverflow');
})

callClose.addEventListener('click', function(){
  feedCall.classList.remove('form-call--hidden');
  screen.classList.remove('screen-blur--visible');
  bodyScreen.classList.remove('bodyOverflow');
})




messageBurger.addEventListener('click', function(evt){
  evt.preventDefault();
  formCall.classList.add('form-message--hidden');
  screen.classList.add('screen-blur--visible');
  mobile.classList.remove('mobile-page--hidden');
  bodyScreen.classList.add('bodyOverflow');
})

messageClose.addEventListener('click', function(){
  formCall.classList.remove('form-message--hidden');
  screen.classList.remove('screen-blur--visible');
  bodyScreen.classList.remove('bodyOverflow');
})
