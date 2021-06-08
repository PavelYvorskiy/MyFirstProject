 import { htmlUtils } from '../utils/html.js';
 import { Card } from '../card/fourCard.js';
 import { ProductItem } from '../items/productItem.js';


 const template = `
       I'm a paragraph. Click here to add your own text and edit me. It’s easy.
       Just click “Edit Text” or double click me to add your own content and make changes to the font.
       Feel free to drag and drop me anywhere you like on your page.
       I’m a great place for you to tell a story and let your users know a little more about you.
    `
 
 export class ContainerFour{
    constructor(root){
        this.root = root;
        this.render();
        this.addCard();
    }
    render(){
      this.containerFour = htmlUtils.createElement({
        name:'duv',
        classes:['section','containerFour'],
        id: 'containerFour'
      })
      this.containerDescription = htmlUtils.createElement({
        name:'duv',
        classes:['containerFour__description'],
      })
      this.titleFour = htmlUtils.createElement({
        name:'h1',
        classes:['containerFour__title'],
        text: 'SPACES'
      })
      this.textFour = htmlUtils.createElement({
        name:'p',
        classes:['containerFour__text'],
        text:"I'm a paragraph. Click here to add your own text and edit me."
      })
      this.conteinerCardOne = htmlUtils.createElement({
        name:'div',
        classes:['containerFour__content']
      })
      this.conteinerCardTwo = htmlUtils.createElement({
        name:'div',
        classes:['containerFour__content']
      })

        this.containerDescription.append(
          this.titleFour,
          this.textFour
          );
        this.containerFour.append(
          this.containerDescription,
          this.conteinerCardOne,
          this.conteinerCardTwo
          );

        this.root.append(this.containerFour);

    }
      addCard(){
          new Card(this.conteinerCardOne,'containerCard_Two','OPEN SPACE',()=>{
            this.renderUpdateMain();
            new ProductItem(this.main,'containerItem_One','OPEN SPACE','FROM $280 A MONTH',`${template}`);
          });
          new Card(this.conteinerCardOne,'containerCard_Three','PRIVATE OFFICE',()=>{
            this.renderUpdateMain();
            new ProductItem(this.main,'containerItem_Two','PRIVATE OFFICE','FROM $400 A MONTH',`${template}`);
          });
          new Card(this.conteinerCardTwo,'containerCard_Four','EVENTS',()=>{
            this.renderUpdateMain();
            new ProductItem(this.main,'containerItem_Three','EVENTS','FROM $480 A MONTH',`${template}`);
          });
          new Card(this.conteinerCardTwo,'containerCard_One','MEETING ROOM',()=>{
            this.renderUpdateMain();
            new ProductItem(this.main,'containerItem_Four','MEETING ROOM','FROM $60 A MONTH',`${template}`);
          });
      } 
      renderUpdateMain(){
         this.main = document.querySelector('main');
         this.main.innerHTML = '';
      }
} 