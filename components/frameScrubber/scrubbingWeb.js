
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

let imgArray = [];

const currentFrame = (index) =>
    // `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
    `../img/solerpalau/${keyAttribute && "rls"}/frames/e-${index
        .toString()
        .padStart(3, "0")}.png`;

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

    context.drawImage(imgArray[index], 0, 0, 531, 299, 0, 0, canvas.width, canvas.height);
};



window.addEventListener("scroll", () => {
    
    

    console.log(html.scrollTop);
    if(html.scrollTop >=990) {
        const frameHeigh = document.getElementById("frame");
    const frameHeigh1 = frameHeigh.scrollHeight;
    console.log(frameHeigh1);

    const scrollTop = html.scrollTop - 1280;
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
