import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

galleryRef.innerHTML = createMarkup(galleryItems);

function createMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
            `;
        })
        .join('');
}

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });

// galleryRef.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (e.target.nodeName !== "IMG") {
//         return;
//     }
//     var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });
    
// });