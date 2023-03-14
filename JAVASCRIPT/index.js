// Navbar
window.addEventListener('scroll',()=>{
  if(window.scrollY > 20){
    let header = document.querySelector('.navbar');
    header.style.cssText = "box-shadow: rgba(0,0,0,.1) 0px 1px 6px"
  }else{
    let header = document.querySelector('.navbar');
    header.style.cssText = "box-shadow: rgba(0,0,0,0) 0px 0px 0px"
  }
});
// Menu
let menuBr = document.querySelector('.navbar .menuBar .fa-bars');
menuBr.addEventListener('click',()=>{
  let menuBars = document.querySelector('.navbar .menu-mob');
  menuBars.style.cssText = "display : grid";
  menuBr.style.cssText = "display : none";
  let markx = document.querySelector('.navbar .menuBar .fa-square-xmark');
  markx.style.cssText = "display:block";
});

document.querySelector('.navbar .menuBar .fa-square-xmark').addEventListener('click',()=>{
  document.querySelector('.navbar .menu-mob').style.cssText = "display : none";
  document.querySelector('.navbar .menuBar .fa-bars').style.cssText = "display : block";
  document.querySelector('.navbar .menuBar .fa-square-xmark').style.cssText = "display:none";
});

// Img =>>>> Home
let homeImg = document.querySelector('.home .img-home');
homeImg.addEventListener('mouseover',()=>{
  let imgOne = document.querySelector('.home .img-home .imgOne');
  let imgTwo = document.querySelector('.home .img-home .imgTwo');
  imgOne.style.cssText ="opacity: 1;filter: blur(0px);border:10px solid #032936;border-radius : 0px";
  imgOne.classList.add("animate__animated");
  imgOne.classList.add("animate__bounce");
  imgTwo.style.cssText = "display:none";
  let divImages = document.querySelector('.home .img-home div');
  divImages.style.cssText = "display : none"
});
homeImg.addEventListener('mouseleave',()=>{
  let imgOne = document.querySelector('.home .img-home .imgOne');
  let imgTwo = document.querySelector('.home .img-home .imgTwo');
  imgTwo.style.cssText = "display:block";
  imgTwo.classList.add("animate__animated");
  imgTwo.classList.add("animate__rubberBand");
  imgOne.style.cssText ="opacity: .9;filter: blur(1px);border:0px solid #032936;border-radius :5px";
  let divImages = document.querySelector('.home .img-home div');
  divImages.style.cssText = "display : block"
});

// End Home => Hover
let imgEndHomeImg = document.querySelector('.endHome .img-endHome img');
let imgEndHome = document.querySelector('.endHome .img-endHome');
imgEndHomeImg.addEventListener('mouseover',()=>{
  imgEndHome.style.cssText = "gap:8px";
  let imgOneEnd = document.querySelector('.endHome .img-endHome .imgOne');
  imgOneEnd.style.cssText = "transform:rotate(0deg)";
  let imgTwoEnd = document.querySelector('.endHome .img-endHome .imgTwo');
  imgTwoEnd.style.cssText = "transform:rotate(0deg);margin-left:0px";
});

imgEndHomeImg.addEventListener('mouseleave',()=>{
  imgEndHome.style.cssText = "gap:0px";
  let imgOneEnd = document.querySelector('.endHome .img-endHome .imgOne');
  imgOneEnd.style.cssText = "transform:rotate(-10deg)";
  let imgTwoEnd = document.querySelector('.endHome .img-endHome .imgTwo');
  imgTwoEnd.style.cssText = "transform:rotate(10deg);margin-left:-50px";
});


// Img ====> About
// Img =>>>> Home
let aboutImg = document.querySelector('.about .img-about');
aboutImg.addEventListener('mouseover',()=>{
  let imgOneAbout = document.querySelector('.about .img-about .imgOneAbout');
  let imgTwoAbout = document.querySelector('.about .img-about .imgTwoAbout');
  imgOneAbout.style.cssText ="opacity: 1;filter: blur(0px);border:10px solid #001829;border-radius : 0px";
  imgOneAbout.classList.add("animate__animated");
  imgOneAbout.classList.add("animate__bounce");
  imgTwoAbout.style.cssText = "display:none";
  let divImagesAbout = document.querySelector('.about .img-about div');
  divImagesAbout.style.cssText = "display : none"
});

aboutImg.addEventListener('mouseleave',()=>{
  let imgOneAbout = document.querySelector('.about .img-about .imgOneAbout');
  let imgTwoAbout = document.querySelector('.about .img-about .imgTwoAbout');
  imgTwoAbout.style.cssText = "display:block";
  imgTwoAbout.classList.add("animate__animated");
  imgTwoAbout.classList.add("animate__rubberBand");
  imgOneAbout.style.cssText ="opacity: .9;filter: blur(1px);border:0px solid #032936;border-radius :5px";
  let divImagesAbout = document.querySelector('.about .img-about div');
  divImagesAbout.style.cssText = "display : block"
});

// Gallery Slide
if(window.innerWidth <= 851){
    var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
        },
        slidesPerView:1,
        freeMode: true,
        spaceBetween:10
    });
}else{
    var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
        },
        slidesPerView:3,
        freeMode: true,
        spaceBetween:10
    });
}