const button = document.getElementById('button');
const passwordElement = document.getElementById('password');
const hero = document.getElementById('hero');
const copyIcon = document.getElementById('copy');
const small = document.getElementById('small');
const small1 = document.getElementById('small1');
const small2 = document.getElementById('small2');
const backgroundRgb = document.getElementById('back-rgb');
const backgroundHex = document.getElementById('back-hex');
const copyIcon1 = document.getElementById('copy1');
const copyIcon2 = document.getElementById('copy2'); 
const backgroundContainer = document.getElementById('back-cont'); 

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
const passwordArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',  's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '!', '@', '#', '$', '%', ]

const randomNumber = (array) => {
    return Math.floor(Math.random() * array.length);
}

const copyText = async (element, small) => {
    const text = element.innerHTML;
    try{
        await navigator.clipboard.writeText(text);
        displayInlineBlock(small);
        small.innerText = 'text copied!'
    } catch(error){
        console.log('Failed to copy', error);
    }
}

const mouseleave = (element) => element.style.display = 'none';
const showIcon = (element) => displayInlineBlock(element);

const showSmall = (small) => {
    displayInlineBlock(small)
    small.innerText = 'copy';
};

const displayInlineBlock = (element) => element.style.display = 'inline-block';

const afterButtonClick = () => {
    let password = passwordArray[randomNumber(passwordArray)]
    let color1 = '#';
    let color2 = '#';
    
    for(let i = 0; i < 8; i++) {
        password += passwordArray[randomNumber(passwordArray)]
    }
    
    for(let i = 0; i < 6; i++) {
    color1 += hex[randomNumber(hex)]
    color2 += hex[randomNumber(hex)]
    console.log(color2)
}

passwordElement.innerText = password;
backgroundContainer.style.display = 'block'
hero.style.background = 'linear-gradient(to right, ' + color1 + ', ' + color2 + ')';

//To Show Icons
showIcon(copyIcon);
showIcon(copyIcon1);
showIcon(copyIcon2);

//Click event
copyIcon.addEventListener('click', () => copyText(passwordElement, small));
copyIcon1.addEventListener('click', () => copyText(backgroundRgb, small1));
copyIcon2.addEventListener('click', () => copyText(backgroundHex, small2));

//When mouse Hovers on icons
copyIcon.addEventListener('mouseover', () => showSmall(small));
copyIcon1.addEventListener('mouseover', () => showSmall(small1));
copyIcon2.addEventListener('mouseover', () => showSmall(small2));

//When Mouse Leaves Icons
copyIcon.addEventListener('mouseleave', ()=> mouseleave(small));
copyIcon1.addEventListener('mouseleave', ()=> mouseleave(small1));
copyIcon2.addEventListener('mouseleave', ()=> mouseleave(small2));

//RGB and HEX text
backgroundRgb.innerText = hero.style.background;
backgroundHex.innerText = 'linear-gradient(to right, ' + color1 + ', ' + color2 + ')';
}

button.addEventListener('click', afterButtonClick);