const navbar = document.querySelector('#navbar')

const observerOption = {
    root: null,
    rootMargin: '0px',
    threshold: 0.90
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const { isIntersecting } = entry;
        if (isIntersecting) {
            const color = entry.target.getAttribute("data-header-color");
            navbar.style.color = color;
        }
    })
}, observerOption)

const sections = document.querySelectorAll('.landing-section')
sections.forEach((section) => observer.observe(section))