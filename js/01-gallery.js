import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

function createImageGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
         <a class="gallery__link" href="${original}">
          <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
          />
         </a>
        </div>
        `;
    }).join('');
}

const galleryMarkup = createImageGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);


console.log(createImageGalleryMarkup(galleryItems));

galleryContainer.addEventListener('click', evt => {
    evt.preventDefault();
    const isGalleryEl = evt.target.classList.contains('gallery__image');
    if (!isGalleryEl) {
        return;
    }

    const instance = basicLightbox.create(`
        <img src="${evt.target.dataset.source}" width="800" height="600">
    `, {
        onShow: () => {
            document.addEventListener("keydown", closeEscKeyDown);
        },
        onClose: () => {
            document.removeEventListener("keydown", closeEscKeyDown);
        },
    }
    );

    function closeEscKeyDown(evt) {
     if (evt.key === 'Escape') {
         instance.close();
         console.log(evt.key);
     }
    }

    instance.show();
});












