export class ScrollClassActive{
    constructor(root){
        this.root = root;
        this.render();
    }
    render(){
        this.root.addEventListener('scroll',()=>{
        let scrollBar = this.root.scrollTop;
          document.querySelectorAll('.section').forEach((el , i)=>{
            if(el.offsetTop -document.querySelector('.navbar').clientHeight <=scrollBar){
               document.querySelectorAll('.navbar__link').forEach((el)=>{
                    if(el.classList.contains('active')){
                        el.classList.remove('active');
                    }
                })
                document.querySelectorAll('.navbar__item')[i].querySelector('.navbar__link').classList.add('active');
            }
          })
      })   
    }
}