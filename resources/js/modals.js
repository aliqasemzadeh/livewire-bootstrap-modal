import { Modal } from 'bootstrap';

let modalsElement = document.getElementById('livewire-bootstrap-modal');

modalsElement.addEventListener('hidden.bs.modal', () => {
    Livewire.dispatch('resetModal');
});

modalsElement.addEventListener('shown.bs.modal', () => {
    let modal = Modal.getOrCreateInstance(modalsElement)
    modal.show();
})

Livewire.on('showBootstrapModal', (e) => {
    let modal = Modal.getOrCreateInstance(modalsElement)
    modal.show();
});

Livewire.on('hideModal', () => {
    let modal = Modal.getInstance(modalsElement);
    modal.hide();
    Livewire.dispatch('resetModal');
});



