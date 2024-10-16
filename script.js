window.addEventListener('scroll', function () {
    let header = document.getElementById('nav');
    let section2 = document.getElementById('section2');

    if (header && section2) {
        if (window.scrollY > section2.offsetTop - header.offsetHeight) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

var colorMode = "light";
function changeColorMode() {
    const body = document.getElementById("body");
    const btnColor = document.getElementById("btnColor");
    const section1 = document.querySelector(".section1");
    const images = document.querySelectorAll(".theme-image");

    if (colorMode === "light") {
        body.setAttribute("data-bs-theme", "dark");
        btnColor.innerHTML = "Light Mode";
        section1.style.backgroundImage = "url('img/LAnight.jpg')";
        images.forEach(img => {
            img.src = img.getAttribute("data-dark-src");
        });
        colorMode = "dark";
    } else {
        body.setAttribute("data-bs-theme", "light");
        btnColor.innerHTML = "Dark Mode";
        section1.style.backgroundImage = "url('img/LAmorning.jpg')";
        images.forEach(img => {
            img.src = img.getAttribute("data-light-src");
        });
        colorMode = "light";
    }
}

