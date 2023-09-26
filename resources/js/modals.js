import { Modal } from 'bootstrap';

let modalsElement = document.getElementById('livewire-bootstrap-modal');

modalsElement.addEventListener('hidden.bs.modal', () => {
    Livewire.dispatch('resetModal');
});

Livewire.on('showBootstrapModal', (e) => {
    let modal = Modal.getOrCreateInstance(modalsElement, {
        backdrop: 'static',
        keyboard: true,
        focus: true,
    });
    modal.show();
});

Livewire.on('hideModal', () => {
    $('.modal-backdrop').remove();
    $('.modal').remove();
     
});
