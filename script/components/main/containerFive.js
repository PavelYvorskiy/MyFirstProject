import{htmlUtils} from '../utils/html.js';
import{Items} from '../items/item.js';

export class ContainerFive{
    constructor(root){
        this.root = root;
        this.render();
        this.renderItems();
    }
    render(){
        this.containerFive = htmlUtils.createElement({
            name:'div',
            classes:['section','containerFive'],
            id: 'containerFive'
        })
        this.contentFive = htmlUtils.createElement({
            name:'div',
            classes:['contentFive']
        })
        this.contentFiveTitle = htmlUtils.createElement({
            name:'h1',
            classes:['contentFive__title'],
            text:'MEMBERSHIP'
        })
        this.contentFiveText = htmlUtils.createElement({
            name:'p',
            classes:['contentFive__text'],
            text:'Become a member!'
        })
        this.contentFiveBlock = htmlUtils.createElement({
            name:'div',
            classes:['contentFive__block']
        })
        this.contentFive.append(
            this.contentFiveTitle,
            this.contentFiveText,
            this.contentFiveBlock
            );
        this.containerFive.append(this.contentFive);
        this.root.append(this.containerFive);
    }

    renderItems(){
        new Items(this.contentFiveBlock, 'itemIcon__Two', 'One Awesome Desk');
        new Items(this.contentFiveBlock, 'itemIcon__Three' , 'x5 Free One Hour Meeting Rooms');
        new Items(this.contentFiveBlock, 'itemIcon__Seven' , 'Access to an Awesome Community of Innovative Individuals ');
        new Items(this.contentFiveBlock, 'itemIcon__Four' , '2GB Internet Speed');
        new Items(this.contentFiveBlock, 'itemIcon__Five' , 'Unlimited Calls Abroad');
        new Items(this.contentFiveBlock, 'itemIcon__Six' , 'Happy Hour Every Friday from 18.00 with Free Alcohol!');

    }
}