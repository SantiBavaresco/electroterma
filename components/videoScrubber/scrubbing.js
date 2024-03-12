
// const section = document?.querySelector('section.vid')
const section = document.getElementById('video-ventilador');
const vid = section?.querySelector('video')

vid?.pause()

const scroll = () => {

  const distance = (window?.scrollY - section?.offsetTop) || 0;
  const total = (section?.clientHeight - window?.innerHeight) || 0;
  //   const distance = section?.offsetTop ? window.scrollY - section.offsetTop : 0; // Handle missing section
  // const total = section?.clientHeight - window.innerHeight || 0; // Handle missing section
  // const percentage = Math.min(distance / total, 1)
  let percentage = (distance / total) ||1;
  percentage = Math.max(0, percentage);
  percentage = Math.min(percentage, 1);

  if (vid?.duration > 0) {
    vid.currentTime = vid.duration * percentage;
  }
}

scroll()
window.addEventListener('scroll', scroll)

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