const slideTemplate =`
          <div class="swiper-slide"><img src="./assets/img/slideSingl_1.webp" alt=""></div>
          <div class="swiper-slide"><img src="./assets/img/slideSingl_2.webp" alt=""></div>
          <div class="swiper-slide"><img src="./assets/img/slideSingl_3.webp" alt=""></div>
          <div class="swiper-slide"><img src="./assets/img/slideSingl_4.webp" alt=""></div>
          <div class="swiper-slide"><img src="./assets/img/slideSingl_5.webp" alt=""></div>
          <div class="swiper-slide"><img src="./assets/img/slideSingl_6.webp" alt=""></div>
`

export class Slids{
    constructor(root){
        this.root = root;
        this.render();
    }
    render(){
        this.swiper = document.createElement('div');
        this.swiper.classList.add('swiper-wrapper');
        this.swiper.innerHTML = slideTemplate;
        

        this.root.append(this.swiper);
    }
    
}
