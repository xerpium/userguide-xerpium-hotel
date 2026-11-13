// Sidebar: highlight the active chapter and keep it in view
const links=[...document.querySelectorAll('nav a')];const map=new Map(links.map(a=>[a.getAttribute('href').slice(1),a]));
const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.remove('on'));const a=map.get(e.target.id);if(a){a.classList.add('on');a.scrollIntoView({block:'nearest'})}}})},{rootMargin:'-20% 0px -70% 0px'});
document.querySelectorAll('section.sec').forEach(s=>io.observe(s));
if(location.hash){window.addEventListener('load',()=>{const t=document.getElementById(location.hash.slice(1));if(t)t.scrollIntoView();});}
