const footerLinks =`
       <a href="https://www.facebook.com"><img class="contentFooter__img" src="./assets/icon/Facebook_icon-icons.com_55914.png" alt=""></a>
       <a href="https://www.linkedin.com"><img class="contentFooter__img" src="./assets/icon/LinkedIn_icon-icons.com_55877.png" alt=""></a>
       <a href="https://www.instagram.com "><img class="contentFooter__img" src="./assets/icon/Instagram_icon-icons.com_55882.png" alt=""></a>
`

export class ContentFooter{
    constructor(root){
        this.root = root;
        this.render();
    }
    render(){
        this.contentFooter = document.createElement('div');
        this.contentFooter.classList.add('contentFooter');
    

        this.contentFooterText = document.createElement('div');
        this.contentFooterText.classList.add('contentFooter__text')
        this.contentFooterText.innerHTML =`<div>&copy; 2021.Proudly created Pavel Yavorskiy</div>`;

        this.contentFooterLinks = document.createElement('div');
        this.contentFooterLinks.classList.add('contentFooter__links');
        this.contentFooterLinks.innerHTML = footerLinks;

        this.contentFooter.append(
            this.contentFooterText,
            this.contentFooterLinks
            )


       this.root.append(this.contentFooter);

    }
}