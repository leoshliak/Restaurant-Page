import _ from 'lodash';
import './styles/home.css';
import home from './scripts/home';
import './styles/menu.css';
import menu from './scripts/menu';
import './styles/contact.css';
import contact from './scripts/contact';

  const content = document.querySelector('#content'); 
  const dscr = document.createElement('div');
  dscr.classList.add('dscr');
  const main = document.createElement('div');
  main.classList.add('main');
  content.appendChild(main);
  dscr.innerHTML = '<h1>My great restaurant</h1> <p>Lorem ipsum dolor sit amet consecteturadipisicing elit. <br> Magni cum culpa nostrum sapiente.</p>';
  main.appendChild(dscr);
  
 const homePage = document.getElementById('home');
  homePage.addEventListener('click', () => {
    home();
  });

  const menuPage = document.getElementById('menu');
  menuPage.addEventListener('click', () =>{
    menu();
  });

  const contactPage = document.getElementById('contact');
  contactPage.addEventListener('click', () =>{
    contact()
  });

