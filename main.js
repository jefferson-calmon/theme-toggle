const html = document.querySelector('html');
const checkbox = document.querySelector('input[name=theme]');

const getStyle = (element, style) => 
    window.getComputedStyle(element).getPropertyValue(style);


const initialColors = {
    bg: getStyle(html, '--bg'),
    white: getStyle(html, '--white'),
    colorHover: getStyle(html, '--color-hover'),
    colorText: getStyle(html, '--color-text'),
    colorTextLight: getStyle(html, '--color-text-light'),
};

const darkMode = {
    bg: "#333333",
    white: "#262626",
    colorHover: "#0077FF",
    colorText: "#f1f1f1",
    colorTextLight: "#ddd",
};

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

const changeColors = (colors) => {
    Object.keys(colors).map( key => {
        html.style.setProperty(transformKey(key), colors[key])
    })
};

checkbox.addEventListener('change', ({ target }) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors);
} );