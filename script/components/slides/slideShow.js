import {Slids} from './slides.js';
import {SlideShowCore} from './slideShowCore.js';
import {htmlUtils} from '../utils/html.js';

export class SlideShow{
    constructor(root){
       this.root = root;
       this.render();
       this.startSwiper();
    }
    render(){
      this.slideContent = htmlUtils.createElement({
        name:'div',
        classes:['swiper-container','mySwiper']
      });
           
      this.btnNext = htmlUtils.createElement({
        name:'button',
        classes:['swiper-button-next']
      });
      this.btnPrev = htmlUtils.createElement({
        name:'button',
        classes:['swiper-button-prev']
      });
      this.startOnSlide = htmlUtils.createElement({
        name:'button',
        classes:['swiper-button-start']
      });

      this.startOnSlide.addEventListener('click',()=>{
          this.main = document.querySelector('main');
          this.footer = document.querySelector('footer');
          this.main.innerHTML =''
          this.footer.style.display = 'none';
          new SlideShowCore(this.main);
        })

        new Slids(this.slideContent);
        
        this.slideContent.append(
          this.btnNext,
          this.btnPrev,
          this.startOnSlide
          );
        this.root.append(this.slideContent);
    }
    
    startSwiper(){
       const swiper =   new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1,
            loop: true,
            loopFillGroupWithBlank: true,
            centeredSlides: true,
            autoplay: {
              delay: 3000,
              disableOnInteraction: false,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints:{
              560:{
                slidesPerView: 2,
                spaceBetween:10
              },
              1200:{
                slidesPerView:3,
                spaceBetween:10
              },
              1400:{
                slidesPerView:4,
                spaceBetween:10
              }
            }      
          });
  }
}