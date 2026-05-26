// smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {

        const id = link.getAttribute('href');

        if(id === '#') return;

        e.preventDefault();

        document.querySelector(id).scrollIntoView({
            behavior:'smooth'
        });
    });
});

// navbar blur

window.addEventListener('scroll', () => {

    const navbar = document.querySelector('.navbar');

    if(window.scrollY > 50){
        navbar.style.background = 'rgba(5,10,20,.85)';
    }else{
        navbar.style.background = 'rgba(10,10,20,.5)';
    }
});

// reveal animation

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }

    });

}, {
    threshold:0.15
});

document.querySelectorAll('.card,.glass-card').forEach(el => {

    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = '.8s ease';

    observer.observe(el);
});
