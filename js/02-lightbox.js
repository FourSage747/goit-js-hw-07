import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector(".gallery");

const imgs = (img) => {
  return `<li class="gallery__item onClick">
                <a class="gallery__link onClick" href="${img.original}">
                    <img class="gallery__image onClick" src="${img.preview}" data-source="${img.original}" alt="${img.description}">
                </a>
            </li>`;
};
const gall = galleryItems.map(imgs).join("");
gallery.insertAdjacentHTML("beforeend", gall);

const lightbox = new SimpleLightbox('.gallery a', {
    caption: true,
    captionsData: 'alt',
    captionDelay: 250,
  });