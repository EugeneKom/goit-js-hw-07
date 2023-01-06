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


// Remove default link behavior   (need optimisation)

const imgLinkEl = document.querySelectorAll('.gallery__link');

imgLinkEl.forEach(link => {
    link.addEventListener('click', evt => evt.preventDefault())
})

// ---------------------------------------

// Library LightBox

wrapperGallery.addEventListener('click', onClickModalOpen)

function onClickModalOpen (evt) {
    if (evt.target.nodeName !== 'IMG') {
        return
    }
    const imgEl = evt.target

    if (imgEl) {
        createModal(imgEl)
    }
    
}


function createModal(imgEl) {
    const modalEl = basicLightbox.create(`<div class="modal"><img
        src=${imgEl.src}
        alt=${imgEl.alt}
        /></div>`, {closable: true});
        modalEl.show()
}



//  Тут я здался  (дублируется слушатель события)

// function onClickCloseModal (evt, modalEl) {
//     if (evt.code === 'Escape') {
//         modalEl.close()
//         wrapperGallery.removeEventListener('keydown', onClickCloseModal)
//     }
// }
// ------------------------------------
// if (modalEl.visible()) {
//     wrapperGallery.addEventListener('keydown' ,(e) => onClickCloseModal(e, modalEl))
//     }

