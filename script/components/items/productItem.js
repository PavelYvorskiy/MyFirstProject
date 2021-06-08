import{MainContent} from '../main/mains.js';
import{ Items } from '../items/item.js'

export class ProductItem{
    /****
    *  @param {HTMLBaseElement} root
    *  @param {String[]} [classNames]
    *  @param {String} [message]
    * @param {String} [description]
    */
    constructor(root,classNames=[],message = '',subtitle ='',text =''){
        this.root = root;
        this.classNames = classNames;
        this.textContent = message;
        this.subtitle = subtitle;
        this.description = text;
        this.render();
        this.renderItems();
    }
    render(){
        
        this.containerItem = document.createElement('div');
        this.containerItem.classList.add('containerItem',this.classNames);

        this.itemContent = document.createElement('div');
        this.itemContent.classList.add('itemContent');

        this.itemPages = document.createElement('div');
        this.itemPages.classList.add('contentPages');

        this.backContent = document.createElement('button');
        this.backContent.classList.add('contentPages__backBtn');
        this.backContent.textContent = '< Go Back';
        this.backContent.addEventListener('click',()=>{
            this.root.innerHTML = '';
            new MainContent(this.root);
        })

        this.itemTitle = document.createElement('h1');
        this.itemTitle.classList.add('contentPages__title');
        this.itemTitle.textContent = this.textContent;

        this.itemSubtitle = document.createElement('h3');
        this.itemSubtitle.classList.add('contentPages__subtitle');
        this.itemSubtitle.textContent = this.subtitle;

        this.itemText = document.createElement('p');
        this.itemText.classList.add('contentPages__text');
        this.itemText.textContent = this.description;

        this.containerIcon = document.createElement('div');
        this.containerIcon.classList.add('containerIcon');

        

        this.buttonIcon = document.createElement('button');
        this.buttonIcon.classList.add('contentPages__btn');
        this.buttonIcon.textContent ='BOOK NOW'




        this.itemPages.append(
            this.backContent,
            this.itemTitle,
            this.itemSubtitle,
            this.itemText,
            this.containerIcon,
            this.buttonIcon
            )
    
        this.itemContent.append(this.itemPages)
        this.containerItem.append(this.itemContent);

        this.root.append(this.containerItem);
    }
   renderItems(){
     new Items(this.containerIcon,'itemIcon__One','24 hour access');
     new Items(this.containerIcon,'itemIcon__Two','Fully Equiped');
     new Items(this.containerIcon,'itemIcon__Three','Up to 15 Numberof People');
     new Items(this.containerIcon,'itemIcon__Four','Free WIFI');
   }
}