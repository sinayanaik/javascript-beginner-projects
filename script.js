let index =0;

function changeColors(){
    const a = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    const b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    const c = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    
    let UniqueColor = `rgb(${a},${b},${c})`;
    document.getElementsByTagName("body")[0].style.backgroundColor =UniqueColor;
    console.log(UniqueColor);
}