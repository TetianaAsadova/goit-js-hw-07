import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(`galleryItems:`, galleryItems);

const galleryRef = document.querySelector('.gallery');

// const ulRef = document.createElement('ul');

const markup = createMarkup(galleryItems);

// ulRef.innerHTML = markup;

galleryRef.innerHTML = markup;

function createMarkup(items) {
    return items.map(({ preview, original, description }) => {
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
        })
        .join('');
}


