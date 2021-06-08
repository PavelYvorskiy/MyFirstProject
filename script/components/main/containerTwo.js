const paramOne = `
      I'm a paragraph. Click here to add your own text and edit me. It’s easy.
      Just click “Edit Text” or double click me to add your own content and make changes to the font.
      Feel free to drag and drop me anywhere you like on your page. 
      I’m a great place for you to tell a story and let your users know a little more about you.
    `
const paramTwo =`
      This is a great space to write long text about your company and your services.
      You can use this space to go into a little more detail about your company.
      Talk about your team and what services you provide.
      Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors.
      Make your company stand out and show your visitors who you are.
    `

export class ContainerTwo{
    constructor(root){
        this.root = root;
        this.render();
    }
    render(){

        this.containerTwo = document.createElement('div');
        this.containerTwo.classList.add('section','containerTwo');
        this.containerTwo.id = 'containerTwo';

        this.containerTwoContent = document.createElement('div');
        this.containerTwoContent.classList.add('containerTwoContent');
    
        this.containerTwoTitle = document.createElement('h1');
        this.containerTwoTitle.classList.add('containerTwoContent__title');
        this.containerTwoTitle.textContent = 'ABOUT US';

        this.paragraphOne = document.createElement('p');
        this.paragraphOne.classList.add('containerTwoContent__description');
        this.paragraphOne.textContent = paramOne;

        this.paragraphTwo = document.createElement('p');
        this.paragraphTwo.classList.add('containerTwoContent__description');
        this.paragraphTwo.textContent = paramTwo;

        this.containerTwoContent.append(
            this.containerTwoTitle,
            this.paragraphOne,
            this.paragraphTwo
            );
        this.containerTwo.append(this.containerTwoContent);

        this.root.append(this.containerTwo);

    }
}