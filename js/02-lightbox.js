import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

function createImageGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
          <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
          />
         </a>
        `;
    }).join('');
}

const galleryMarkup = createImageGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', evt => {
    evt.preventDefault();
    const isGalleryEl = evt.target.nodeName;
    if (!isGalleryEl) {
        return;
    }
    const lightbox = new SimpleLightbox('.gallery a', {
        captionSelector: 'img',
        captionsData: 'alt',
        caption: true,
        captionPosition: 'bottom',
        captionDelay: 250,
    });
    lightbox.on('show.simplelightbox', function () {
        document.body.dataset.originalPaddingRight = 0;
        document.body.style.paddingRight = 0 + 'px';
        lightbox.domNodes.wrapper.remove();
        lightbox.domNodes.overlay.remove();
    })
})








    