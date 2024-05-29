const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");




const context = canvas.getContext("2d");
const ventElement = document.getElementById("vent");
let keyAttribute = "ventElement.accessKey";

// console.log(ventElement);

  if (ventElement) {    
    keyAttribute = ventElement.accessKey;    
  }

// const frameCount = 599;
const frameCount = 509;
// const frameCount = 460;


let imgArray = [];

const currentFrame = (index) => `../img/solerpalau/${keyAttribute && "rls"}/frames/mobile/e-${index.toString().padStart(3, "0")}.png`;
// const currentFrame = (index) => `../img/solerpalau/${keyAttribute && "rls"}/frames/web/e-${index.toString().padStart(3, "0")}.jpg`;

// const currentFrame = (index) => `../img/solerpalau/${keyAttribute && "rls"}/video/${index.toString()}.webp`;

console.log(currentFrame);


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
    (window.innerWidth <= 768 ) ?
        context?.drawImage(imgArray[index], 0, 0, 299, 531, 0, 0, canvas.width, canvas.height)
        : context?.drawImage(imgArray[index], 0, 0, 1000, 563, 0, 0, canvas.width, canvas.height)

    
};



window.addEventListener("scroll", () => {
    
    

    console.log(html.scrollTop);
    
    if(html.scrollTop >= 300) {
        const frameHeigh = document.getElementById("frame");
    const frameHeigh1 = frameHeigh.scrollHeight;
    console.log(frameHeigh1);

    // const scrollTop = html.scrollTop - 1280;
    const scrollTop = html.scrollTop - ((window.innerWidth <= 768) ? 380 : 1200);

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
