const menu=document.querySelector('.menu');
const links=document.querySelector('.links');
menu?.addEventListener('click',()=>{links?.classList.toggle('open');menu.setAttribute('aria-expanded',links?.classList.contains('open')?'true':'false')});
links?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>links.classList.remove('open')));
const nav=document.querySelector('.nav');
const setNav=()=>nav?.classList.toggle('scrolled',window.scrollY>24);
setNav();window.addEventListener('scroll',setNav,{passive:true});
const reveals=document.querySelectorAll('.reveal');
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});reveals.forEach(el=>observer.observe(el))}else reveals.forEach(el=>el.classList.add('visible'));
const slides=[...document.querySelectorAll('.hero-slide')];
const counters=[...document.querySelectorAll('.slide-index span')];
let slide=0;
if(slides.length>1&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){setInterval(()=>{slides[slide].classList.remove('active');counters[slide]?.classList.remove('active');slide=(slide+1)%slides.length;slides[slide].classList.add('active');counters[slide]?.classList.add('active')},6000)}
