import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

//  Create marup ------------
const wrapperGallery = document.querySelector('.gallery')

const marcup = galleryItems.map(({original,description, preview}) => 
    `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`).join('')

wrapperGallery.insertAdjacentHTML('afterbegin',marcup)


new SimpleLightbox('.gallery a', {'captionsData': 'alt', 'captionDelay': 250});



