let button = document.querySelector(".genrator");
let colorname = document.querySelector(".name");
let copybutton = document.querySelector(".copy");

let colorgen = () => {
    let random = Math.floor(Math.random() * 16777215);
    let hexvalue = "#" + random.toString(16);
    document.body.style.backgroundColor = hexvalue;
    colorname.innerText = hexvalue;
    copybutton.innerText="copy code";


}


button.addEventListener("click", colorgen)

copybutton.addEventListener("click", () => {
    navigator.clipboard.writeText(colorname.innerText)
    copybutton.innerText="copied";
    copybutton.style.backgroundColor=green;

})

colorgen();