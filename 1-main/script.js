const hero = document.querySelector("#hero");
const nav = document.querySelector("#header");
const animates = document.querySelectorAll("[data-fade]");
const form = document.querySelector("#form");

const heroObserver = new IntersectionObserver(
    (e) => {
        e.forEach((el) => {
            if (!el.isIntersecting) {
                nav.classList.add("passed");
                return;
            }
            nav.classList.remove("passed");
        });
    },
    { threshold: 0.2 },
);

heroObserver.observe(hero);



const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
    })
})

animates.forEach(e => observer.observe(e));



form.addEventListener("submit", e => {
    e.preventDefault();

    let name = e.target.querySelector("[data-input-name]").value;
    // let date = e.target.querySelector("[data-input-date]").value;
    let reason = e.target.querySelector("[data-input-reason]").value;

    window.open(
        `https://wa.me/6289665319781?text=${encodeURIComponent(`*Nama :* ${name}\n*Alasan :* ${reason}`)}`
    );
})



const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");
const header = document.querySelector("#header");


hamburger.addEventListener("click", ()=> {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  header.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))