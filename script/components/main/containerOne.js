import { htmlUtils } from '../utils/html.js'

export class ContainerOne{
  constructor(root){
    this.root = root;
    this.render();
  }

  render() {
    this.containerOneContent = htmlUtils.createElement({
       name: 'div',
       classes: [ 'section','containerOne' ], 
       id: 'containerOne' 
      })
    this.containerOneTitle = htmlUtils.createElement({
       name: 'h1', 
       classes: [ 'containerOne__title' ], 
       text: 'CO-WORKING' 
      })
    this.containerOneSubtitle = htmlUtils.createElement({ 
       name: 'h2', 
       classes: [ 'containerOne__subtitle' ], 
       text: 'IN AN INNOVATIVE ENVIRONMENT' 
      })
    this.containerOneBtn = htmlUtils.createElement({ 
      name: 'button', 
      classes: [ 'containerOne__btn' ], 
      text: 'BOOK A SPACE' 
    })

    this.containerOneContent.append(
      this.containerOneTitle,
      this.containerOneSubtitle,
      this.containerOneBtn
    );

    this.root.append(this.containerOneContent)
  }
}
