export class Card{
    /****
    *  @param {HTMLBaseElement} root
    *  @param {String[]} [classNames]
    *  @param {String} [message]
    */
   constructor(root,classNames=[],message ='',onClickHandler){
       this.root = root;
       this.classNames= classNames;
       this.textContent = message;
       this.onClickHandler = onClickHandler;
       this.render();
   }

   render(){
       this.containerCard = document.createElement('div');
       this.containerCard.classList.add('containerCard',this.classNames);

       this.contentCard = document.createElement('div');
       this.contentCard.classList.add('contentCard');
       
       this.startMenuContent = document.createElement('button');
       this.startMenuContent.classList.add('startMenu')
       this.startMenuContent.addEventListener('click',()=>{
           this.onClickHandler();
       })

       this.title = document.createElement('div');
       this.title.classList.add('contentCard__title');
       this.title.textContent = this.textContent;

       this.user = document.createElement('div');
       this.user.classList.add('contentCard__user');

       this.like =document.createElement('div');
       this.like.classList.add('contentCard__like');

       this.btn = document.createElement('button');
       this.btn.classList.add('btn');
       this.activeBtn = false;
       this.btn.addEventListener('click',()=>{
           this.activeBtn = !this.activeBtn;
           if(this.activeBtn){
               this.btn.classList.add('active'),
               this.sumLike.textContent = '1'
           }
           else{
               this.btn.classList.remove('active'),
               this.sumLike.textContent = '0'
           }
       })
       this.sumLike = document.createElement('div');
       this.sumLike.classList.add('sumLike');
       this.sumLike.textContent = '0';
       
       this.repost = document.createElement('div');
       this.repost.classList.add('repost');
       this.repost.addEventListener('click',()=>{
           console.log('error');                        //class <
       })
       
       this.like.append(
           this.btn,
           this.sumLike
           );
       this.user.append(
           this.like,
           this.repost
           );
       this.contentCard.append(
           this.startMenuContent,
           this.title,
           this.user
           );
       this.containerCard.append(this.contentCard);

       this.root.append(this.containerCard);
   }
}