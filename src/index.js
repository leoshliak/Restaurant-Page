import _ from 'lodash';
import './styles/home.css';
import home from './scripts/home';
import './styles/menu.css';
import menu from './scripts/menu';

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
    //content.firstChild.remove();
    //content.append(home());
    home();
  });

  const menuPage = document.getElementById('menu');
  menuPage.addEventListener('click', () =>{
    menu();
  });

 //document.addEventListener('DOMContentLoaded', function() {});
 /* <div class="header">
        <div class="logo">
            <h1>My Restaurant</h1>
        </div>
           <div class="links">
           <div><a class="link" href="">Home</a></div>
           <div><a class="link" href="">Menu</a></div>
           <div><a class="link" href="">Contact</a></div>
        </div>
        </div>
        <div class="main">
            <div class="dscr">
          <h1>My great restaurant</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Magni cum culpa nostrum sapiente.</p>
        </div>
        </div>*/