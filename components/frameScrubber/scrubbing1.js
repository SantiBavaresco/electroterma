const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

const frameCount = 599;
const currentFrame = (index) =>
    // `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
    `../img/solerpalau/tda/frames/ELECTROTERMA${index
        .toString()
        .padStart(3, "0")}.jpg`;

const preloadImages = () => {
    for (let i = 1; i < frameCount; i+=3) {
        const img = new Image();
        img.src = currentFrame(i);
    }
};

const img = new Image();
img.src = currentFrame(1);
canvas.width = 853;
canvas.height = 480;
// canvas.width = 1920;
// canvas.height = 1080;

img.onload = function () {
    context.drawImage(img, 0, 0);
};

const updateImage = (index) => {
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);
    // console.log("img n°: ",index);
};

window.addEventListener("scroll", () => {
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
    );

    requestAnimationFrame(() => updateImage(frameIndex + 1));
});

preloadImages();
