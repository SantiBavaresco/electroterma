
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
const frameCount = 530;

let imgArray = [];

const currentFrame = (index) => {
    
    if(window.innerWidth < 720){
    `../img/solerpalau/${keyAttribute && "rls"}/frames/mobile/e-${index
        .toString()
        .padStart(3, "0")}.png`;
    }
    else{
        `../img/solerpalau/${keyAttribute && "rls"}/frames/web/e-${index
            .toString()
            .padStart(3, "0")}.png`;
    }
}

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
// canvas.width = 531;
// canvas.height = 399;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

img.onload = function () {
    context.drawImage(img, 0, 0);
};

const updateImage = (index) => {
    // img.src = currentFrame(index);
    // img.src = imgArray[index];
    console.log("img n°: ",index);

    // console.log("img n°: ",imgArray[index]);

    // context.drawImage(imgArray[index], 0, 0);
    context.drawImage(imgArray[index], 0, 0, 299, 531, 0, 0, (Math.min(img.width, canvas.width)*1.77), ( Math.min(img.height, canvas.height) * 1.77));

};

window.addEventListener("scroll", () => {

    console.log(html.scrollTop);
    if(html.scrollTop >=1000) {
        const scrollTop = html.scrollTop - 600;
    
    console.log(scrollTop);


    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
    );
    console.log(frameIndex);
    requestAnimationFrame(() => updateImage(frameIndex + 1));

    }
});

preloadImages();
