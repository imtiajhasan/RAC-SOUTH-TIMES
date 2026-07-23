// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => loader.remove(), 500);
  }
});

// Dark Mode
const darkBtn = document.getElementById("darkMode");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

darkBtn?.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

// Back to Top
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
/* ==========================
   Sticky Header
========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});


/* ==========================
   Newsletter Form
========================== */

const subscribeForm = document.querySelector(".subscribe-form");

if (subscribeForm) {

    subscribeForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = this.querySelector('input[type="text"]').value.trim();

        const email = this.querySelector('input[type="email"]').value.trim();

        if (name === "" || email === "") {

            alert("Please fill in all fields.");

            return;

        }

        alert("Thank you for subscribing to RAC SOUTH TIMES!");

        this.reset();

    });

}


/* ==========================
   Counter Animation
========================== */

const counters = document.querySelectorAll(".stat h2");

let counterStarted = false;

window.addEventListener("scroll", () => {

    const section = document.querySelector(".statistics");

    if (!section) return;

    if (window.scrollY >= section.offsetTop - 400 && !counterStarted) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = parseInt(counter.innerText);

            let current = 0;

            const speed = Math.ceil(target / 80);

            function updateCounter() {

                current += speed;

                if (current < target) {

                    counter.innerText = current + "+";

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target + "+";

                }

            }

            updateCounter();

        });

    }

});


/* ==========================
   Simple Fade Animation
========================== */

const sections = document.querySelectorAll("section");

function revealSections() {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        const trigger = window.innerHeight - 120;

        if (top < trigger) {

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();
/* ==========================
   Mobile Navigation
========================== */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("active");
        menuToggle.classList.toggle("active");

    });

}


/* ==========================
   Active Navigation
========================== */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function(){

        navLinks.forEach(item=>item.classList.remove("active"));

        this.classList.add("active");

    });

});


/* ==========================
   Smooth Scroll
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* ==========================
   Gallery Lightbox
========================== */

const galleryImages=document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img=>{

    img.addEventListener("click",()=>{

        const overlay=document.createElement("div");

        overlay.className="lightbox";

        overlay.innerHTML=`
            <span class="close-lightbox">&times;</span>
            <img src="${img.src}" alt="">
        `;

        document.body.appendChild(overlay);

        overlay.addEventListener("click",()=>{

            overlay.remove();

        });

    });

});


/* ==========================
   Scroll Progress Bar
========================== */

const progress=document.createElement("div");

progress.id="progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

    const totalHeight=document.documentElement.scrollHeight-window.innerHeight;

    const progressHeight=(window.pageYOffset/totalHeight)*100;

    progress.style.width=progressHeight+"%";

});


/* ==========================
   Current Year
========================== */

const year=document.getElementById("year");

if(year){

    year.textContent=new Date().getFullYear();

}


console.log("RAC SOUTH TIMES Ready");