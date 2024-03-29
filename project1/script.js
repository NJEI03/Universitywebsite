const menu=document.querySelector(".bar");
const addClass=document.querySelector(".nav");;

menu.addEventListener("click",function(){
    addClass.classList.toggle('show');
})

//event listeniner to detect scroll
window.addEventListener('scroll',function(){
    //getting scroll height abd header height
    var scrollHeight=window.scrollY;
    var headerHeight= document.querySelector('header').offsetHeight;
    //check if scroll height greater or equals to header height
    if(scrollHeight>=headerHeight){
        document.querySelector('header').style.backgroundColor='orangered' ; //changing background
    }else{
        document.querySelector('header').style.backgroundColor='';
    }
}
);


//event listeniner to detect scroll
window.addEventListener('scroll',function(){
    //getting scroll height abd header height
    var scrollHeight=window.scrollY;
    var headerHeight= document.querySelector('header').offsetHeight;
    //check if scroll height greater or equals to header height
    if(scrollHeight>=headerHeight){
        document.getElementById('span').style.color='white' ; //changing background
    }else{
        document.getElementById('span').style.color='';
    }
}
);

//testing slides
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Q");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

//Submit button alert
// function showAlert() {
//     alert("Thanks for submitting!");
// }

