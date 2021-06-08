import{MainContent} from '../../components/main/mains.js';

const slideOneTemplate = ` <div class="container_slides">
<div id="slideOne" class="slide-show">
    <ul class="slide-show__slides">
          <li class="slide-show__slide active"><img class="slide-show__img" src="./assets/img/slideSingl_1.webp" alt=""></li>
          <li class="slide-show__slide"><img class="slide-show__img" src="./assets/img/slideSingl_2.webp" alt=""></li>
          <li class="slide-show__slide"><img class="slide-show__img" src="./assets/img/slideSingl_3.webp" alt=""></li>
          <li class="slide-show__slide"><img class="slide-show__img" src="./assets/img/slideSingl_4.webp" alt=""></li>
          <li class="slide-show__slide"><img class="slide-show__img" src="./assets/img/slideSingl_5.webp" alt=""></li>
          <li class="slide-show__slide"><img class="slide-show__img" src="./assets/img/slideSingl_6.webp" alt=""></li>
    </ul>
</div>
<p>I'm an image title</p>
<p>Describe your image here</p>
</div>`

export class SlideShowCore{
    constructor(root){
       this.root = root;
       this.render();
       this.slideCore();
    }
    render(){
        this.slideContent = document.createElement('div');
        this.slideContent.classList.add('content');
        this.slideContent.innerHTML = slideOneTemplate;

        this.prevBtn = document.createElement('button');
        this.prevBtn.classList.add('slide-show__control','slide-show__control_prev');
        this.prevBtn.addEventListener('click',()=>{ this.showPrev()});
        this.slideContent.append(this.prevBtn);


        this.nextBtn = document.createElement('button');
        this.nextBtn.classList.add('slide-show__control','slide-show__control_next');
        this.nextBtn.addEventListener('click',()=>{this.showNext() });
        this.slideContent.append(this.nextBtn);


        this.stopBtn = document.createElement('button');
        this.stopBtn.classList.add('slide-show__control','slide-show__control_stop');
        this.stopBtn.addEventListener('click',()=>{
           this.root.innerHTML = '';
           this.footer = document.querySelector('footer');
           this.footer.style.display = 'block';
           new MainContent(this.root);
        })
        this.slideContent.append(this.stopBtn);

       this.root.append(this.slideContent);
    }
    showPrev(){
        this.stopSlide();
        this.decreaseIndex();
        this.startSlide();
    }
    showNext(){
        this.stopSlide();
        this.increaceIndex();
        this.startSlide();
    }

    slideCore(){
        this.slides = document.querySelectorAll('.slide-show__slide');
        this.activeSlideIndex = 0;

        this.startSlide = ()=>{
          this.slides[this.activeSlideIndex].classList.add('active');
         };
         this.stopSlide =()=>{
             this.slides[this.activeSlideIndex].classList.remove('active');
         };
         this.decreaseIndex = ()=>{
             if(this.activeSlideIndex -1 < 0){
                 this.activeSlideIndex = this.slides.length -1;
             }
             else { this.activeSlideIndex -=1; }
         };
         this.increaceIndex = ()=>{
             if(this.activeSlideIndex +1 <this.slides.length){
                 this.activeSlideIndex +=1
             }
             else{ this.activeSlideIndex = 0; }
         };
    }
}