import { galleryItems } from './gallery-items.js';
// Change code below this line


// Create marcup

const wrapperGallery = document.querySelector('.gallery')

const marcup = galleryItems.map(({original,description}) => 
    `<div class="gallery__item">
        <a class="gallery__link" href=${original}>
            <img
            class="gallery__image"
            src=${original}
            data-source=${original}
            alt=${description}
            />
        </a>
    </div>`).join('')

wrapperGallery.insertAdjacentHTML('afterbegin',marcup)

// --------------------------------------



// Library LightBox


wrapperGallery.addEventListener('click', onClickModalOpen);

let modalEl;



function createModal(imgEl) {
    modalEl = basicLightbox.create(`<img
    src=${imgEl.src}
    alt=${imgEl.alt}
    />`, {closable: true});
        modalEl.show()
        
}


function onClickModalOpen (evt) {

    evt.preventDefault()

    if (evt.target.nodeName !== 'IMG') {
        return
    }
    const imgEl = evt.target

    if (imgEl) {
        createModal(imgEl)
        wrapperGallery.addEventListener('keydown', onClickCloseModal)
    }
}


function onClickCloseModal (evt) {
    if (evt.code === 'Escape') {
        modalEl.close()
        wrapperGallery.removeEventListener('keydown', onClickCloseModal)
    }
}


