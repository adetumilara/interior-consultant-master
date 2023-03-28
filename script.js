const navLeft = document.querySelector('.navLeft')
const openMenu = document.querySelector('.openMenu')
const closeMenu= document.querySelector('.closeMenu')
const mobileVersion = document.querySelector('.mobileVersion')


const show = () =>{
  mobileVersion.style.display = 'flex';
  navLeft.style.display = 'none';
  openMenu.style.display = 'none';
}

const close = () =>{
  mobileVersion.style.display = 'none';
  navLeft.style.display = 'block'
  openMenu.style.display = 'block'
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click',close);
