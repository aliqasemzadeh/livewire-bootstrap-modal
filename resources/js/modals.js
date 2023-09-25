import {Modal} from 'bootstrap';

let modalsElement = document.getElementById('livewire-bootstrap-modal');

modalsElement.addEventListener('hidden.bs.modal', () => {
    @this.dispatch('resetModal');
});

@this.on('showBootstrapModal', () => {
    let modal = Modal.getInstance(modalsElement);

    if (!modal) {
        modal = new Modal(modalsElement);
    }

    modal.show();
});

@this.on('hideModal', () => {
    let modal = Modal.getInstance(modalsElement);

    modal.hide();
});
