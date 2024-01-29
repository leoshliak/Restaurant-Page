const home = () =>{  
    content.innerHTML = '';
    const main = document.createElement('div');
    main.classList.add('main');
    content.appendChild(main);
    const dscr = document.createElement('div');
  dscr.classList.add('dscr');
  dscr.innerHTML = '<h1>My great restaurant</h1> <p>Lorem ipsum dolor sit amet consecteturadipisicing elit. <br> Magni cum culpa nostrum sapiente.</p>';
  main.appendChild(dscr);
};

export default home;