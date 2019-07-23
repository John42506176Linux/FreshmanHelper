let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,3000);
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let buttonList = document.querySelectorAll(".button");
let button1clicked = false;
let button2clicked = false;
let button3clicked = false;
button1.addEventListener('click',()=>{
  slides[currentSlide].className = 'slide';
  currentSlide = 0;
  button1clicked = true;
  button1.style.backgroundColor = "green";
  button3.style.backgroundColor = "white";
  button2.style.backgroundColor = "white";
  slides[currentSlide].className = 'slide showing';
});
button1.addEventListener('mouseover',()=>{
  button1.style.backgroundColor = "green";
})
button1.addEventListener('mouseout',()=>{
  if(!button1clicked)
  {
    button1.style.backgroundColor ="white";
  }
})
button2.addEventListener('click',()=>{
  slides[currentSlide].className = 'slide';
  currentSlide = 1;
  slides[currentSlide].className = 'slide showing';
  button2.style.backgroundColor = "green";
  button1.style.backgroundColor = "white";
  button3.style.backgroundColor = "white";
  button2clicked = true;
})
button2.addEventListener('mouseover',()=>{
  button2.style.backgroundColor = "green";
})
button2.addEventListener('mouseout',()=>{
  if(!button2clicked)
  {
    button2.style.backgroundColor = "white";
  }
})
button3.addEventListener('click',()=>{
  slides[currentSlide].className = 'slide';
  currentSlide = 2;
  button3.style.backgroundColor = "green";
  button1.style.backgroundColor = "white";
  button2.style.backgroundColor = "white";
  slides[currentSlide].className = 'slide showing';
  button3clicked = true;
});
button3.addEventListener('mouseover',()=>{
  button3.style.backgroundColor = "green";
})
button3.addEventListener('mouseout',()=>{
  if(!button3clicked)
  {
    button3.style.backgroundColor = "white";
  }
})
function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    buttonList[currentSlide].style.backgroundColor = "green";
    button1clicked = false;
    button3clicked = false;
    button2clicked = false;
    if(currentSlide == 1)
    {
      buttonList[currentSlide+1].style.backgroundColor = "white";
      buttonList[currentSlide-1].style.backgroundColor = "white";
    }
    else if(currentSlide == 2)
    {
      buttonList[currentSlide-2].style.backgroundColor = "white";
      buttonList[currentSlide-1].style.backgroundColor = "white";
    }
    else
    {
      buttonList[currentSlide+2].style.backgroundColor = "white";
      buttonList[currentSlide+1].style.backgroundColor = "white";
    }
    slides[currentSlide].className = 'slide showing';
}
