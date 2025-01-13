var typed = new Typed(".auto-type", {
    strings : ["Hello!", "kumusta?", "Olá!", "Bonjour!"],
    typeSpeed : 80,
    backSpeed: 80,
    loop : true
})

window.addEventListener('scroll', function() {
  let header = document.getElementById('header');
  let section2 = document.getElementById('section2');

  if (header && section2) {
      if (window.scrollY > section2.offsetTop - header.offsetHeight) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  }
});

const Top = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 3500,
  reset: false
});

Top.reveal('.aboutHeader', {delay: 400})
Top.reveal('.card', {delay: 600})
Top.reveal('.content', {delay: 400})
Top.reveal('.myPic', {delay: 600})
Top.reveal('.techno', {delay: 400})
Top.reveal('.achievementsTitle', {delay: 400 })
Top.reveal('#projContainer', {delay: 600})





const Left = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 3500,
  reset: false
});

Left.reveal('.h1-custom', {delay: 400})
Left.reveal('.social-links', {delay: 600})
Left.reveal('.pic2', {delay: 400})
Left.reveal('.hc', {delay: 600})
Left.reveal('.pl', {delay: 700})
Left.reveal('.shs', {delay: 800})

const Right = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 3500,
  reset: false
});




const Bottom = ScrollReveal({
  origin: 'bottom',
  distance: '80px',
  duration: 3500,
  reset: false
});


Bottom.reveal('.tech-icon', {delay: 400})






function addShadow(id) {
    document.getElementById(id).classList.add("shadow");
}

function removeShadow(id) {
    document.getElementById(id).classList.remove("shadow");
}

const projects = [{
    "name" : "WasteLess",
    "description" : "A hackathon project where users can scan food waste, and the system generates recommendations on how to repurpose the waste sustainably.",
    "image" : "img/WasteLess.png",
    "link" : "404.html"
  },
  {
    "name" : "ReservEase",
    "description" : "A classroom reservation system designed specifically for IT students at PUP Sto. Tomas.",
    "image" : "img/ReservEase.png",
    "link" : "404.html"
  },
    
  {
    "name" : "AlertIQconnect",
    "description" : "A mock-up system developed for a barangay in Malvar, Batangas, to enhance their manual processes and improve services for their citizens.",
    "image" : "img/AlertIQconnect.png",
    "link" : "404.html"
  },

  {
    "name" : "LA Website",
    "description" : "A responsive website crafted to showcase the beauty and attractions of Los Angeles.",
    "image" : "img/LA website.png",
    "link" : "Projects/LA_Bootstrap/index.html"
  },

  {
    "name" : "ComShop",
    "description" : "An e-commerce platform created as a school project, tailored for the organization’s needs and promoting online shopping.",
    "image" : "img/ComShop.png",
    "link" : "404.html"
  },
  
  {
    "name" : "Naruto API",
    "description" : "A responsive website utilizing the Naruto API to provide fans with information and engaging features about the popular anime.",
    "image" : "img/narutoAPI.png",
    "link" : "Projects/API/index.html"
  },

  {
    "name" : "Portfolio",
    "description" : "A personal responsive website showcasing my skills, projects, and achievements as part of my web development journey.",
    "image" : "img/Portfolio.png",
    "link" : "index.html"
  },

  {
    "name" : "Marvel Studios",
    "description" : "A responsive website dedicated to Marvel Studios, highlighting their movies and the Marvel Cinematic Universe.",
    "image" : "img/marvel.png",
    "link" : "Projects/embed/index.html"
  },
  
  {
    "name" : "Ecomend",
    "description" : "A capstone project that is a web application utilizing machine learning and computer vision to identify dry solid food waste.",
    "image" : "img/ecomend.png",
    "link" : "404.html"
  }]

  let container = document.getElementById("projContainer");
for (let i = 0; i < projects.length; i++) {
    let proj = projects[i];

    container.innerHTML += `<div class="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 d-flex justify-content-center py-2" >
                    <div class="card" style="width: 350px;" id="card`+ i +`" onmouseenter="addShadow('card`+ i +`')"
                        onmouseleave="removeShadow('card`+ i +`')">
                        <img src="`+ proj.image+`" class="card-img-top">
                        <div class="card-body">
                            <h2 class="card-title">`+ proj.name +`</h2>
                            <p class="card-text">`+ proj.description +`</p>
                        </div>
                        <div class="btnContainer d-flex justify-content-center align-items-center mb-4">
                        <a href="`+ proj.link +`" target="_blank" class="btn btn-primary " style="max-width: 150px; background-color: white; color: black; border-color: black;">Click Here</a>
                    </div>
                    </div>
        </div>`;
}

// Use ScrollReveal on all cards with a delay
const cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
    ScrollReveal().reveal(card, {
        origin: 'bottom',
        distance: '50px',
        duration: 3500,
        delay: index * 200,
        reset: false
    });
});

