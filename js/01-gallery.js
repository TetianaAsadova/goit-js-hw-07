import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(`galleryItems:`, galleryItems);

const galleryRef = document.querySelector('.gallery');

galleryRef.innerHTML = createMarkup(galleryItems);

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

galleryRef.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(
        `<img src="${e.target.dataset.source}"/>`,
        {
            onShow: (_instance) => {
                galleryRef.addEventListener('keydown', onEscBtn);
            },
            onclose: (_instance) => {
                galleryRef.removeEventListener('keydown', onEscBtn);
            },
        }
    );
    instance.show();

    function onEscBtn(e) {
        if (e.code === 'Escape') {
            instance.close();
        }    
    }
});



