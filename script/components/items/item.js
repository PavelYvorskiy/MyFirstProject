export class Items{
    /****
    *  @param {HTMLBaseElement} root
    *  @param {String[]} [classNames]
    *  @param {String} [message]
    */
    constructor(root, classNames =[], message =''){
        this.root = root;
        this.classNames = classNames;
        this.textContent = message;
        this.render();
    }
    render(){
        this.itemsBlock = document.createElement('div');
        this.itemsBlock.classList.add('itemsBlock');

        this.itemIcon = document.createElement('div');
        this.itemIcon.classList.add( 'itemIcon',this.classNames);

        this.itemText = document.createElement('p');
        this.itemText.classList.add('itemText');
        this.itemText.textContent = this.textContent;

        this.itemsBlock.append(
            this.itemIcon,
            this.itemText
            );
        this.root.append(this.itemsBlock);
    }
}