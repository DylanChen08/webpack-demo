import _ from 'lodash'
import './style.css'
import Icon from '../assets/xicha.png';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement("button")
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'fucking','webpack'], ' ');
    element.classList.add('hello');
    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);
    btn.innerHTML = '点我打印文字'
    btn.onclick = printMe
    element.appendChild(btn)

    return element;
}

document.body.appendChild(component());