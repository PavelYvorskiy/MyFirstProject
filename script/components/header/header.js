import{ htmlUtils } from '../utils/html.js';

const templateHeaders = `
      <div class="title"><a class="title" href "#">The Annex<span class="title__span">.</span></a></div>
      <nav class="navbar" id="navbar">
      <ul class="navbar__menu">
      <li class="navbar__item">
        <a href="" class="navbar__link active">Home</a>
       </li>
      <li class="navbar__item">
        <a href="#containerTwo" class="navbar__link">About</a>
       </li>
      <li class="navbar__item">
        <a href="#containerThree" class="navbar__link">Community</a>
      </li>
      <li class="navbar__item">
        <a href="#containerFour" class="navbar__link">Spaces</a>
      </li>
      <li class="navbar__item">
        <a href="#containerFive" class="navbar__link">Membership</a>
      </li>
      <li class="navbar__item">
        <a href="#containerSix" class="navbar__link">Contact</a>
       </li>
      </ul> 
      <button class="navbar__btn" id="btn"></button>
      </nav>
`       
   
   export class NavbarMenu {
     constructor(root){
       this.root = root;
       this.render();
       this.renderBtn();
       this.renderMenu();
      
     }
     render(){
      this.headerContent = htmlUtils.createElement({
        name:'div',
        classes:['global-header__content' ,'content-wrapper'],
        innerHTML: templateHeaders
      })
       this.root.append(this.headerContent)
     }
     renderBtn(){
      this.btn = document.querySelector('#btn');
      this.navbars = document.querySelector('#navbar');
      this.btn.addEventListener('click', () => {
        this.navbars.classList.toggle('navbar_active');
      });    
     }

     renderMenu(){
      this.menu = document.querySelector('.navbar__menu');
      this.menu.addEventListener('click',()=>{
      this.navbars.classList.remove('navbar_active')
      })
    }  
}