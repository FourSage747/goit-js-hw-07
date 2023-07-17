import { galleryItems } from "./gallery-items.js";
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

gallery.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();

  const target = event.target;
  if (!target.classList.contains("onClick")) {
    return;
  }

  const imageSource = target.dataset.source;
  const imageAlt = target.alt;

  // const instance = basicLightbox.create(`
  //     <img src="${imageSource}" alt="${imageAlt}">
  // `);
  // instance.show();
  const instance = basicLightbox.create(`
    <img src="${imageSource}" width="800" height="600">
    `,
    {
      onShow: () => {
        window.addEventListener('keydown', onKeydownEsc);
      },
      onClose: () => {
        window.removeEventListener('keydown', onKeydownEsc);
      },
    },
    );

    const onKeydownEsc = (event) => {
      if (event.code === 'Escape') {
          instance.close();
      }
    }

    

  instance.show();
}
