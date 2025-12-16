window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    if(window.scrollY > 50){
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

// Smooth scroll
document.querySelectorAll('.header-nav a').forEach(link=>{
    link.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({ top: target.offsetTop - 80, behavior:'smooth' });
    });
});
