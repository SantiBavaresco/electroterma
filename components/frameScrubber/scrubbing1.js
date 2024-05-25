
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
const frameCount = 800;

const currentFrame = (index) =>
    // `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
    `../img/solerpalau/${keyAttribute && "rls"}/frames/e-${index
        .toString()
        .padStart(3, "0")}.png`;

const preloadImages = () => {
    for (let i = 1; i < frameCount; i+=1) {
        const img = new Image();
        img.src = currentFrame(i);
    }
};

const img = new Image();
img.src = currentFrame(1);
canvas.width = 531;
canvas.height = 300;
// canvas.width = 666;
// canvas.height = 375;
// canvas.width = 1920;
// canvas.height = 1080;

img.onload = function () {
    context.drawImage(img, 0, 0);
};

const updateImage = (index) => {
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);
    console.log("img n°: ",index);
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

    requestAnimationFrame(() => updateImage(frameIndex + 1));

    }
});

preloadImages();
