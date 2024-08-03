
const tooglebtn = document.getElementById('tooglebtn');
const navbarSupportedContent = document.getElementById('navbarSupportedContent');







function onCollapseToggle(eve){
    navbarSupportedContent.classList.toggle('collapse');
}

tooglebtn.addEventListener("click",onCollapseToggle)