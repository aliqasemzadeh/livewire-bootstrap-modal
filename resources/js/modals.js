// import {Modal} from 'bootstrap';

let modalsElement = document.getElementById('livewire-bootstrap-modal');

modalsElement.addEventListener('hidden.bs.modal', () => {
    Livewire.dispatch('resetModal');
});


Livewire.on('showBootstrapModal', () => {

    let modal = bootstrap.Modal.getOrCreateInstance(modalsElement);
    modal.show();
    console.log('showBootstrapModal');
});

Livewire.on('hideModal', () => {
    let modal = bootstrap.Modal.getInstance(modalsElement);

    modal.hide();
});
