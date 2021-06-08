import { NavbarMenu } from './script/components/header/header.js';
import { MainContent } from './script/components/main/mains.js';
import { ContentFooter } from './script/components/footer/footer.js'
import { ScrollClassActive } from './script/components/header/scrollActiveHeader.js'


const body = document.querySelector('body');

const header = document.createElement('header');
header.classList.add('global-header');

const main = document.createElement('main')
main.classList.add('progectContent');

const footer = document.createElement('footer');
footer.classList.add('footer');

body.append(header,main,footer);
new ScrollClassActive(body);
new NavbarMenu(header);
new MainContent(main);
new ContentFooter(footer);









