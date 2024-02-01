 const menu = () => {
    content.innerHTML = '';
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main-div');
    mainDiv.innerHTML = '<h1>Our menu</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, odit!</p><h2>Our most popular dishes:</h2>';
    content.appendChild(mainDiv);
    const menuGrid = document.createElement('div');
    menuGrid.classList.add('menu-grid');
    mainDiv.appendChild(menuGrid);

    const dish1 = document.createElement('div');
    dish1.classList.add('dish-card');
    dish1.innerHTML = '<img src="images/pizza-pipper.webp" alt="">';
    const cardText1 = document.createElement('div');
    cardText1.classList.add('card-text');
    cardText1.innerHTML = '<strong class="price">$ 12.99</strong><h3>Pizza Pepperoni</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>';
    dish1.appendChild(cardText1);
   
    const dish2 = document.createElement('div');
    dish2.classList.add('dish-card');
    dish2.innerHTML = '<img src="images/orange-juice.jpg" alt="">';
    const cardText2 = document.createElement('div');
    cardText2.classList.add('card-text');
    cardText2.innerHTML = '<strong class="price">$ 2.99</strong><h3>Orange Juice</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>';
    dish2.appendChild(cardText2);

    const dish3 = document.createElement('div');
    dish3.classList.add('dish-card');
    dish3.innerHTML = '<img src="images/cheesecake.jpg" alt="">';
    const cardText3 = document.createElement('div');
    cardText3.classList.add('card-text');
    cardText3.innerHTML = '<strong class="price">$ 9.99</strong><h3>Cheesecake</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>';
    dish3.appendChild(cardText3);

    const dish4 = document.createElement('div');
    dish4.classList.add('dish-card');
    dish4.innerHTML = '<img src="images/cheeseburger.webp" alt="">';
    const cardText4 = document.createElement('div');
    cardText4.classList.add('card-text');
    cardText4.innerHTML = '<strong class="price">$ 10.99</strong><h3>Cheeseburger</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>';
    dish4.appendChild(cardText4);

    const dish5 = document.createElement('div');
    dish5.classList.add('dish-card');
    dish5.innerHTML = '<img src="images/soup.jpg" alt="">';
    const cardText5 = document.createElement('div');
    cardText5.classList.add('card-text');
    cardText5.innerHTML = '<strong class="price">$ 10.50</strong><h3>Creamy Mushroom Soup</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>';
    dish5.appendChild(cardText5);

    const dish6 = document.createElement('div');
    dish6.classList.add('dish-card');
    dish6.innerHTML = '<img src="./images/wine.jpg" alt="">';
    const cardText6 = document.createElement('div');
    cardText6.classList.add('card-text');
    cardText6.innerHTML = '<strong class="price">$ 30.50</strong><h3>Bottle of Wine</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>';
    dish6.appendChild(cardText6);

    const dish7 = document.createElement('div');
    dish7.classList.add('dish-card');
    dish7.innerHTML = '<img src="images/pancakes.jpg" alt="">';
    const cardText7 = document.createElement('div');
    cardText7.classList.add('card-text');
    cardText7.innerHTML = '<strong class="price">$ 7.75</strong><h3>Pancakes</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>';
    dish7.appendChild(cardText7);

    const dish8 = document.createElement('div');
    dish8.classList.add('dish-card');
    dish8.innerHTML = '<img src="images/garlic-prawn-pasta-09.jpg" alt="">';
    const cardText8 = document.createElement('div');
    cardText8.classList.add('card-text');
    cardText8.innerHTML = '<strong class="price">$ 11.66</strong><h3>Garlic Prawn Pasta</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>';
    dish8.appendChild(cardText8);

    menuGrid.appendChild(dish1);
    menuGrid.appendChild(dish2);
    menuGrid.appendChild(dish3);
    menuGrid.appendChild(dish4);
    menuGrid.appendChild(dish5);
    menuGrid.appendChild(dish6);
    menuGrid.appendChild(dish7);
    menuGrid.appendChild(dish8);

    const watchFl = document.createElement('div');
    watchFl.classList.add('watchfl');
    watchFl.innerHTML = ' <a href="#">Watch full menu</a>';
    mainDiv.appendChild(watchFl);
 };

 export default menu;

