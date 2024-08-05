
const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass6");




const context = canvas.getContext("2d");
const ventElement = document.getElementById("vent");
let keyAttribute = "ventElement.accessKey";

console.log(ventElement);

let frameCount = 600;
  if (ventElement) {    
    keyAttribute = ventElement.accessKey;    
    console.log(keyAttribute);
    if(keyAttribute === "tsa") frameCount = 600
    if(keyAttribute === "tda") frameCount = 600
    if(keyAttribute === "home") frameCount = 850
    if(keyAttribute === "uta") frameCount = 80



  }

//   let frameCount = 600;
//   if (ventElement) {    
//     keyAttribute = ventElement.accessKey;    
//     console.log(keyAttribute);
//     if(keyAttribute === "tsa") frameCount = 600
//     if(keyAttribute === "tda") frameCount = 700
    
//   }


// const frameCount = 599;

// const frameCount = 460;


let imgArray = [];

// const currentFrame = (index) => `../img/solerpalau/${keyAttribute && "rls"}/frames/mobile/e-${index.toString().padStart(3, "0")}.png`;
// const currentFrame = (index) => `../img/solerpalau/${keyAttribute && "rls"}/frames/web/e-${index.toString().padStart(3, "0")}.jpg`;

// const currentFrame = (index) => `../img/solerpalau/${keyAttribute}/frames/web/${index.toString()}.webp`;
const currentFrame = (index) => `../img/videos/frames uta/7/${index.toString()}.webp`;





// console.log(window.innerWidth);



// const currentFrame = (index) =>
    
//     `../img/solerpalau/${keyAttribute && "rls"}/frames/mobile/e-${index
//         .toString()
//         .padStart(3, "0")}.png`;

const preloadImages = () => {
    let j = 0;

        for (let i = 1; i < frameCount; i+=1) {
            const img = new Image();
            img.src = currentFrame(i);
            imgArray.push(img);
        }

};



const img = new Image();
// img.src = currentFrame(1);
img.src = imgArray[0];
// canvas.width = 1080;
// canvas.height = 608;
console.log( window.innerWidth);
console.log( innerHeight);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


img.onload = function () {
    context.drawImage(img, 0, 0);
}; 

const updateImage = (index) => {
    // img.src = currentFrame(index);
    // img.src = imgArray[index];
    console.log("img n°: ",index);

    console.log("img n°: ",imgArray[index]);

    // context.drawImage(imgArray[index], 0, 0, 531, 299, 0, 0, canvas.width, canvas.height);
    if(keyAttribute === "home") context.drawImage(imgArray[index], 250, -40, 1920, 1080, 0, 0, canvas.width, canvas.height)
    else
    (window.innerWidth <= 768 ) ?
        context.drawImage(imgArray[index], 0, 0, 299, 531, 0, 0, canvas.width, canvas.height)
        : context.drawImage(imgArray[index], 0, 0, 1920, 1080, 0, 0, canvas.width, canvas.height)

    
};



window.addEventListener("scroll", () => {
    
    

    console.log(html.scrollTop);
    
    // if((html.scrollTop >= 300 && (keyAttribute==="rls" || keyAttribute==="tda")) || (html.scrollTop >= 1000 && keyAttribute==="tsa" )) {
    if(html.scrollTop >= 300 ) {

        const frameHeigh = document.getElementById("frame");
    const frameHeigh1 = frameHeigh.scrollHeight;
    console.log(frameHeigh1);

    // const scrollTop = html.scrollTop - 1280;
    const scrollTop = html.scrollTop - ((window.innerWidth <= 768) ? 3380 : 17500);
    // const scrollTop = html.scrollTop - ((window.innerWidth <= 768) ? 380 : keyAttribute==="tsa" ? 2200 : 1300);

    console.log(html.scrollTop);
    console.log(scrollTop);

        console.log(html.scrollHeight);
    
    
    const maxScrollTop = 5748 - window.innerHeight;
    const scrollFraction = (scrollTop) / maxScrollTop;
    const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
    );
    console.log(frameIndex);
    requestAnimationFrame(() => updateImage(frameIndex + 1));

    }
});

preloadImages();
