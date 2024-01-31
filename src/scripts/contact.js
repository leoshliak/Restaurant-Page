const contact = () =>{
    content.innerHTML = '';
    const mainContact = document.createElement('div');
    mainContact.classList.add('main-contact');
    content.appendChild(mainContact);

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');
     mainContact.appendChild(contactInfo);

    const contactH1 = document.createElement('h1');
    contactH1.textContent = 'Contact us';
    contactInfo.appendChild(contactH1);
    const p1 = document.createElement('p');
    p1.innerHTML = '<i class="fa-solid fa-phone"></i>  123-456-7890';
    contactInfo.appendChild(p1);
    const p2 = document.createElement('p');
    p2.innerHTML = '<i class="fa-solid fa-envelope"></i>  myrest@gmail.com';
    contactInfo.appendChild(p2);
    const p3 = document.createElement('p');
    p3.innerHTML = '<i class="fa-solid fa-clock"></i>  EVERYDAY 09:00 - 21:00';
    contactInfo.appendChild(p3);
    const socialMdiv = document.createElement('div');
    socialMdiv.textContent = 'Our social media: ';
    contactInfo.appendChild(socialMdiv);

    const inst = document.createElement('a');
    inst.setAttribute('href', '#');
    inst.innerHTML = '<i class="fa-brands fa-instagram">';
    socialMdiv.appendChild(inst);
    const faceb = document.createElement('a');
    faceb.setAttribute('href', '#');
    faceb.innerHTML = '<i class="fa-brands fa-facebook"></i>';
    socialMdiv.appendChild(faceb);
    const twitter = document.createElement('a');
    twitter.setAttribute('href', '#');
    twitter.innerHTML = '<i class="fa-brands fa-twitter">';
    socialMdiv.appendChild(twitter);

    const map = document.createElement('div');
    map.classList.add('map');
    mainContact.appendChild(map);
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'http://surl.li/pzscg');
    map.appendChild(iframe);
};

export default contact;