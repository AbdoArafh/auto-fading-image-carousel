// ----------------------------------------imports------------------------------------------------------

import "./style.css";

// ----------------------------------------constants------------------------------------------------------

const PICSUM_BACKGROUND_IMAGES = [
  "https://picsum.photos/id/1/1024/720",
  "https://picsum.photos/id/2/1024/720",
  "https://picsum.photos/id/3/1024/720",
  "https://picsum.photos/id/4/1024/720",
  "https://picsum.photos/id/5/1024/720",
  "https://picsum.photos/id/6/1024/720",
  "https://picsum.photos/id/7/1024/720",
  "https://picsum.photos/id/8/1024/720",
  "https://picsum.photos/id/9/1024/720",
];

const SWITCH_INTERVAL = 5000;

const FADE_INTERVAL = 500;

// ---------------------------------------code---------------------------------------------------------

/**
 * @type {HTMLImageElement}
 */
const imageEl = document.querySelector(".image");

let image_index = 0;
imageEl.src = PICSUM_BACKGROUND_IMAGES[image_index];
imageEl.style.transition = `opacity ${FADE_INTERVAL}ms ease`;

let fading = false;

setInterval(nextImage, SWITCH_INTERVAL);

function nextImage() {
  if (fading) {
    return;
  }
  fading = true;
  image_index = (image_index + 1) % PICSUM_BACKGROUND_IMAGES.length;

  imageEl.style.opacity = 0;

  setTimeout(() => {
    imageEl.src = PICSUM_BACKGROUND_IMAGES[image_index];
    imageEl.onload = () => {
      imageEl.style.opacity = 1;
      fading = false;
    };
  }, FADE_INTERVAL);
}
