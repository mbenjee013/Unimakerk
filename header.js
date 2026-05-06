let nav_links = document.querySelector('.nav_links');
let togle_nav_cover = document.querySelector('.togle_nav_cover');

// adding addEventListener to the menu icon
document.querySelector('.menu').addEventListener('click', menuTogler);
function menuTogler() {
    nav_links.style.cssText =`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 60%;
    min-height: 100vh;
    background-color: #fff;
    z-index: 100000;
    padding: 20px 10px;
    box-shadow: 0 0 20px  #ccc;`
    togle_nav_cover.style.cssText =`display: block;`
    document.querySelector('.logo img').style.cssText =`filter: blur(2.5px);`
}

togle_nav_cover.addEventListener('click', hideNavLinks);
function hideNavLinks(){
    this.style.cssText=`display:none;`
    nav_links.style.cssText=`display:none;`;
    document.querySelector('.logo img').style.cssText =`filter: blur(0);`
}