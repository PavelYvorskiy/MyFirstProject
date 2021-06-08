import{ContainerOne} from '../main/containerOne.js';
import{ContainerTwo} from '../main/containerTwo.js';
import{ContainerThree} from '../main/containerThree.js';
import{ContainerFour} from '../main/containerFour.js';
import{ContainerFive} from '../main/containerFive.js';
import{ContainerSix} from '../main/containerSix.js';
import{ContainerContact} from '../main/containerContacts.js';

export class MainContent{
    constructor(root){
        this.root = root;
        this.appendContent();
    }
    appendContent(){
        new ContainerOne(this.root);
        new ContainerTwo(this.root);
        new ContainerThree(this.root);
        new ContainerFour(this.root);
        new ContainerFive(this.root);
        new ContainerSix(this.root);
        new ContainerContact(this.root);
    }
}