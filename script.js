var typed = new Typed(".auto-type", {
    strings : ["Hello!", "kumusta?", "Olá!", "Bonjour!"],
    typeSpeed : 80,
    backSpeed: 80,
    loop : true
})

const Top = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2500,
  reset: true
});

Top.reveal('.aboutHeader', {delay: 350})
Top.reveal('.card', {delay: 550})
Top.reveal('.content', {delay: 350})
Top.reveal('.myPic', {delay: 550})
Top.reveal('.techno', {delay: 350})
Top.reveal('.achievementsTitle', {delay: 350 })
Top.reveal('#projContainer', {delay: 550})





const Left = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2500,
  reset: true
});

Left.reveal('.h1-custom', {delay: 350})
Left.reveal('.social-links', {delay: 550})
Left.reveal('.pic2', {delay: 350})
Left.reveal('.hc', {delay: 550})
Left.reveal('.pl', {delay: 650})
Left.reveal('.shs', {delay: 750})

const Right = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2500,
  reset: true
});




const Bottom = ScrollReveal({
  origin: 'bottom',
  distance: '80px',
  duration: 2500,
  reset: true
});


Bottom.reveal('.tech-icon', {delay: 350})




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

function addShadow(id) {
    document.getElementById(id).classList.add("shadow");
}

function removeShadow(id) {
    document.getElementById(id).classList.remove("shadow");
}

const projects = [{
    "name" : "WasteLess",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    "image" : "img/WasteLess.png",
    "link" : "404.html"
  },
  {
    "name" : "ReservEase",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    "image" : "img/ReservEase.png",
    "link" : "404.html"
  },
    
  {
    "name" : "AlertIQconnect",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    "image" : "img/AlertIQconnect.png",
    "link" : "404.html"
  },

  {
    "name" : "LA Website",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    "image" : "img/LA website.png",
    "link" : "Projects/LA_Bootstrap/index.html"
  },

  {
    "name" : "ComShop",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    "image" : "img/ComShop.png",
    "link" : "404.html"
  },
  
  {
    "name" : "Naruto API",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    "image" : "img/narutoAPI.png",
    "link" : "Projects/API/index.html"
  },

  {
    "name" : "Portfolio",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    "image" : "img/Portfolio.png",
    "link" : "index.html"
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
        duration: 3000,
        delay: index * 250,
        reset: true
    });
});

