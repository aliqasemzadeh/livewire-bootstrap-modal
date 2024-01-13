<?php

namespace AliQasemzadeh\LaravelLivewireModals\Components;

use Illuminate\Support\Facades\Log;
use Livewire\Component;
use Livewire\Attributes\On;

class Modals extends Component
{
    public $alias;
    public $params = [];
    public $activeModal;

    #[On('showModal')]
    public function showModal($data)
    {
        $this->alias = $data['alias'];
        $this->params = $data['params'] ?? [];
        $this->activeModal = "modal-id-" . rand();
        $this->dispatch('showBootstrapModal');
    }

    #[On('resetModal')]
    public function resetModal()
    {
        $this->reset();
    }

    public function render()
    {
        return view('livewire-bootstrap-modal::modals');
    }
}
