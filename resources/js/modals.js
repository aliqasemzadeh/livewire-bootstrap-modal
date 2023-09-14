import {Modal} from 'bootstrap';

let modalsElement = document.getElementById('livewire-bootstrap-modal');

document.addEventListener('showModal', () => {
    let modal = Modal.getInstance(modalsElement);

    if (!modal) {
        modal = new Modal(modalsElement);
    }

    modal.show();
});

document.addEventListener('showModal', () => {
    let modal = Modal.getInstance(modalsElement);

    if (!modal) {
        modal = new Modal(modalsElement);
    }

    modal.show();
});

modalsElement.addEventListener('hideModal', () => {
    let modal = Modal.getInstance(modalsElement);

    modal.hide();
});
