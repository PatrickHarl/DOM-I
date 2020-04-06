const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};



// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//nav

let navSec = document.querySelectorAll('nav a');

for (let i = 0; i < Object.keys(siteContent.nav).length - 1; i++)
{

  const contentNav = Object.values(siteContent.nav);
  navSec[i].textContent = contentNav[i];
  navSec[i].style.color = 'green';

}

//prepend and append

let navParent = document.querySelector('nav');

let prependEle = document.createElement('a');
prependEle.href = "#";
prependEle.textContent = "Prepend";
prependEle.style.color = "green";

navParent.prepend(prependEle);

let appendEle = document.createElement('a');
appendEle.href = "#";
appendEle.textContent = "Append";
appendEle.style.color = "green";

navParent.appendChild(appendEle);


//cta
let cta = document.querySelector('.cta-text');

let updateBtn = document.createElement('button');
updateBtn.textContent = "Update On Click";
updateBtn.style.backgroundColor = "green";
updateBtn.style.color = "white";
updateBtn.id = "update-btn";

cta.append(updateBtn);

let ctaHeader = document.querySelector('.cta h1');

updateBtn.addEventListener('click', () => {

  ctaHeader.textContent = "Here is Some Updated Text!";

})

ctaHeader.textContent = siteContent["cta"]["h1"];
ctaHeader.style.color = "darkgreen";

let ctaButton = document.querySelector('.cta button');
ctaButton.textContent = siteContent["cta"]["button"];
ctaButton.style.backgroundColor = "green";
ctaButton.style.color = "white";

let ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent["cta"]["img-src"];

//topContent
let mcTop = document.querySelectorAll('.main-content .top-content .text-content');

let mcTopFeaturesTitle = mcTop[0].querySelector('h4');
mcTopFeaturesTitle.textContent = siteContent["main-content"]["features-h4"];

let mcTopFeaturesText = mcTop[0].querySelector('p');
mcTopFeaturesText.textContent = siteContent["main-content"]["features-content"];

let mcTopAboutTitle = mcTop[1].querySelector('h4');
mcTopAboutTitle.textContent = siteContent["main-content"]["about-h4"];

let mcTopAboutText = mcTop[1].querySelector('p');
mcTopAboutText.textContent = siteContent["main-content"]["about-content"];

//middleImage

let midImg = document.getElementById('middle-img');
midImg.src = siteContent["main-content"]["middle-img-src"];

//bottomContent

let mcBottom = document.querySelectorAll('.main-content .bottom-content .text-content');

let mcBottomServicesTitle = mcBottom[0].querySelector('h4');
mcBottomServicesTitle.textContent = siteContent["main-content"]["services-h4"];

let mcBottomServicesText = mcBottom[0].querySelector('p');
mcBottomServicesText.textContent = siteContent["main-content"]["services-content"];

let mcBottomProductTitle = mcBottom[1].querySelector('h4');
mcBottomProductTitle.textContent = siteContent["main-content"]["product-h4"]

let mcBottomProductText = mcBottom[1].querySelector('p');
mcBottomProductText.textContent = siteContent["main-content"]["product-content"];

let mcBottomVisionTitle = mcBottom[2].querySelector('h4');
mcBottomVisionTitle.textContent = siteContent["main-content"]["vision-h4"];

let mcBottomVisionText = mcBottom[2].querySelector('p');
mcBottomVisionText.textContent = siteContent["main-content"]["vision-content"];

//contact

let contact = document.querySelector('.contact');

let contactHeader = contact.querySelector('h4');
contactHeader.textContent = siteContent["contact"]["contact-h4"];

let contactPara = contact.querySelectorAll('p');

let contactPara1 = contactPara[0];
contactPara1.textContent = siteContent["contact"]["address"];

let contactPara2 = contactPara[1];
contactPara2.textContent = siteContent["contact"]["phone"];

let contactPara3 = contactPara[2];
contactPara3.textContent = siteContent["contact"]["email"];

//footer

let footerPara = document.querySelector('footer p');
footerPara.textContent = siteContent["footer"]["copyright"];









