import { htmlUtils } from '../utils/html.js';
export class ContainerContact{
    constructor(root){
        this.root = root;
        this.render();
    }
    render(){
        this.containerContact = htmlUtils.createElement({
             name: 'div',
             classes: ['containerContact'],
             id: 'containerContact' 
            });
        this.containerForm = htmlUtils.createElement({
            name:'div',
            classes:['containerForm']
        });
        this.containerFormTitle = htmlUtils.createElement({
            name:'h1',
            classes:['containerForm__title'],
            text:'FEEDBACK'
        });
        this.form = htmlUtils.createElement({
            name:'form',
            classes:['form']
        });
        this.labelForm = htmlUtils.createElement({
            name:'label',
            classes:['form__label'],
            text:'Subscribe For Updates and Promotions'
        });
        this.inputForm = htmlUtils.createElement({
            name:'input',
            classes:['form__input'],
            type:'email',
            placeholder:'Enter your email here*',
            required:'@'
        });
        this.submitForm = htmlUtils.createElement({
            name:'button',
            classes:['form__submit'],
            type:'submit',
            text:'Get Updates'
        });
        this.inputForm.addEventListener('click',()=>{
            this.inputForm.classList.add('active');
            this.inputForm.placeholder = '';
        })
        this.submitForm.addEventListener('click',()=>{
            this.validate();
            this.inputForm.classList.remove('active');    
        })
      
        this.form.append(
            this.labelForm,
            this.inputForm,
            this.submitForm
            );
            this.containerForm.append(this.containerFormTitle,this.form);
            this.containerContact.append(this.containerForm);
            this.root.append(this.containerContact);
    }
    validate(){
        if(!this.inputForm.value){
            this.inputForm.style.border = '1px solid red';
            return false;
        }
        return true;
    }
}