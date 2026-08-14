
const menu=document.querySelector('.menu'),nav=document.querySelector('.nav');
if(menu)menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.style.opacity=1;e.target.style.transform='translateY(0)';obs.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll('.card,.news article,.person,.step,.photo,.video').forEach(e=>{e.style.opacity=.01;e.style.transform='translateY(16px)';e.style.transition='opacity .6s ease,transform .6s ease';obs.observe(e)});
