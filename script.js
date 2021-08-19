function changeColors(){
    const a = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    const b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    const c = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    const colorDiv = document.querySelector('.box');
    let colorcode = `rgb(${a},${b},${c})`
    colorDiv.textContent = colorcode;
    let UniqueColor = `rgb(${a},${b},${c})`;
    document.getElementsByTagName("body")[0].style.backgroundColor =UniqueColor;
}