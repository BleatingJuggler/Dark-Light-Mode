const toggleSwitch = document.querySelector("input[type='checkbox']");
const nav = document.querySelector("#nav");
const toggleIcon = document.querySelector("#toggle-icon");
const image1 = document.querySelector("#image1");
const image2 = document.querySelector("#image2");
const image3 = document.querySelector("#image3");
const textBox = document.querySelector("#text-box");


//Image Mode
function imageMode(color) {
    image1.src = `img/goa_${color}.svg`;
    image2.src = `img/paris_${color}.svg`;
    image3.src = `img/kerala_${color}.svg`;
}


// Dark Mode Styles
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = "Dark Mode";
    // toggleIcon.children[1].classList.remove("fa-sun");
    // toggleIcon.children[1].classList.add("fa-moon");
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    // image1.src = 'img/goa_dark.svg';
    // image2.src = 'img/paris_dark.svg';
    // image3.src = 'img/kerala_dark.svg';
    imageMode("dark");
    
}
// Light Mode Styles

function lightMode() {
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = "Light Mode";
    // toggleIcon.children[1].classList.remove("fa-moon");
    // toggleIcon.children[1].classList.add("fa-sun");
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    // image1.src = 'img/goa_light.svg';
    // image2.src = 'img/paris_light.svg';
    // image3.src = 'img/kerala_light.svg';
    imageMode("light");

}




// Dynamically change the theme
function switchTheme(event){
    // console.log(event);
    // console.log(event.target.checked);
    if(event.target.checked){
        // documentElement returns the root element
        document.documentElement.setAttribute('data-theme','dark');
        localStorage.setItem("theme","dark");
        darkMode();
    }else{
        document.documentElement.setAttribute('data-theme','light');// whatever in place of light
        localStorage.setItem("theme","light");
        lightMode();
    }
}

// Event Listener
toggleSwitch.addEventListener("change",switchTheme);


//Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme){
    document.documentElement.setAttribute('data-theme',currentTheme);
    if(currentTheme === 'dark'){
        toggleSwitch.checked = true;
        darkMode();
    }
}