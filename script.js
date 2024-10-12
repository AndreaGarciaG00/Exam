const galleryImages = document.querySelectorAll('.gallery-image');

const modal = document.getElementById('info-modal');
const modalContent = document.getElementById('modal-info');
const closeModal = document.querySelector('.close');

galleryImages.forEach(image => {
    image.addEventListener('click', function() {
        const imageInfo = this.getAttribute('data-info');
        modalContent.textContent = imageInfo;
        modal.style.display = 'flex'; 
    });
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none'; 
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
