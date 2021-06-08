export class ContainerSix{
    constructor(root){
        this.root = root;
        this.render();
    }
    render(){
        this.containerSix = document.createElement('div');
        this.containerSix.classList.add('section','containerSix');
        this.containerSix.id = 'containerSix';

       this.contentSix = document.createElement('div');
       this.contentSix.classList.add('contentSix');

       this.contentTitle = document.createElement('h1');
       this.contentTitle.classList.add('contentSix__title');
       this.contentTitle.textContent ='CONTACT US';

       this.contentAddress = document.createElement('p')
       this.contentAddress.classList.add('contentSix__text');
       this.contentAddress.textContent ='ADDRESS: 500 TERRY FRANCOIS STREET SAN FRANSISCO, CA 94158';

       this.contentContact = document.createElement('p');
       this.contentContact.classList.add('contentSix__text');
       this.contentContact.textContent ='TEL: 123-456-7890  |  INFO@MYSITE.COM';

       this.contentSix.append(
           this.contentTitle,
           this.contentAddress,
           this.contentContact,
           );

        this.containerSix.append(this.contentSix);
        this.root.append(this.containerSix);

    }
}