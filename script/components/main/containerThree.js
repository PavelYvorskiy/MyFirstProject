import{ SlideShow } from '../slides/slideShow.js';

export class ContainerThree{
    constructor(root){
        this.root = root;
        this.render();
        this.slideShow();
    }
    render(){
        this.containerThree = document.createElement('div');
        this.containerThree.classList.add('section','containerThree');
        this.containerThree.id ='containerThree';

        this.containerThreeDescription = document.createElement('div');
        this.containerThreeDescription.classList.add('containerThree__description');

        this.containerSlides = document.createElement('div');
        this.containerSlides.classList.add('containerThree__slides')

        this.containerThreeTitle = document.createElement('h1');
        this.containerThreeTitle.classList.add('containerThree__title');
        this.containerThreeTitle.textContent = 'OUR COMMUNITY';

        this.paragraphOne = document.createElement('p');
        this.paragraphOne.classList.add('containerThree__text');
        this.paragraphOne.textContent = 'Im a paragraph. Click here to add your own text and edit me.';

        this.paragraphTwo = document.createElement('p');
        this.paragraphTwo.classList.add('containerThree__text');
        this.paragraphTwo.textContent = 'Let your users get to know you';

        this.containerThreeDescription.append(
            this.containerThreeTitle,
            this.paragraphOne,
            this.paragraphTwo
            );
        this.containerThree.append(
            this.containerThreeDescription,
            this.containerSlides
            );
        this.root.append(this.containerThree);
    }
    slideShow(){
        new SlideShow(this.containerSlides);
   }
}
