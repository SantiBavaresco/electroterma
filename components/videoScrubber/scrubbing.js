
// const section = document?.querySelector('section.vid')
const section = document.getElementById('video-ventilador');
const vid = section?.querySelector('video')
// vid.scrollIntoView({ behavior: 'smooth' });

vid?.pause()
console.log("vid duration:", vid.duration);

// Add passive option for touch events 

const scroll = () => {

  const distance = window.scrollY - section.offsetTop
  console.log(distance);
  const total = section.clientHeight - window.innerHeight

  let percentage = distance / total
  percentage = Math.max(0, percentage)
  percentage = Math.min(percentage, 1)


  
  window.requestAnimationFrame(() => {
    console.log( vid.currentTime );
    if ((vid.currentTime >= 17.0) && (distance > 3000)) {vid.currentTime = 17; console.log("DONE");}
  else if (vid?.duration > 0) {
    
    vid.currentTime = vid.duration * percentage;
  }})
}
window.addEventListener('scroll', scroll, { passive: true })
// window.addEventListener('touchmove', scroll, { passive: true }); 
scroll(); 










// const section = document.querySelector('section.vid');

// if (section) {
//   const vid = section.querySelector('video');

//   if (vid) {
//     vid.pause(); // Pause the video immediately

//     const scroll = () => {
//       const distance = window.scrollY - section.offsetTop;
//       const total = section.clientHeight - window.innerHeight;

//       let percentage = distance / total;
//       percentage = Math.max(0, percentage); // Ensure a valid range (0 to 1)
//       percentage = Math.min(percentage, 1);

//       if (vid.duration > 0) {
//         vid.currentTime = vid.duration * percentage; // Update video progress
//       }
//     };

//     scroll(); // Call scroll() initially for immediate video control
//     window.addEventListener('scroll', scroll);
//   }
// }