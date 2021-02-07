let circle = document.querySelector('#circle');
var tl = gsap.timeline();
var svgelem = document.querySelector('#ghj');
var btn = document.querySelector('#btn');


window.addEventListener('mousemove',function(details){
   let xvalue = details.clientX;
   let yvalue =  details.clientY;

   setTimeout(function(){
    circle.style.top = `${yvalue}px`;
    circle.style.left = `${xvalue}px`;
   }, 50);  
})

btn.addEventListener('click', function(){
   tl.reverse();
   setTimeout(function(){
      svgelem.classList.add('animate');
   }, 8000)
})






tl.from('#wrapper', {duration: 4, scale: .7, ease: 'Expo.easeInOut', opacity: 0})

.from('#white', {duration: 3, width: 0, ease: 'Expo.easeInOut'}, '-=2.5' )
.from('#black', {duration: 1.5, x:50, ease: 'expo.easeInOut', opacity: 0}, '-=.5')
.from('#linelem', {duration: 2, x:50, ease: 'expo.easeInOut'})
.from('#linelem .line', {duration: 1, ease: 'expo.easeInOut', width:0}, '-=1')
.from('#black p', {duration: 1, ease: 'expo.easeInOut', y:30, opacity: 0}, '-=2')
.from('#sidetext ', {duration: 1, ease: 'expo.easeInOut', x:30, opacity: 0}, '-=2')

