<?php

namespace AliQasemzadeh\LaravelLivewireModals\Components;

use Livewire\Component;
use Livewire\Attributes\On; 

class Modals extends Component
{
    public $alias;
    public $params = [];

  

    public function render()
    {
        return view('livewire-bootstrap-modal::modals');
    }
    #[On('showModal')]
    public function showModal($alias, ...$params)
    {
        $this->alias = $alias;
        $this->params = $params;

        $this->dispatch('showBootstrapModal');
    }
    #[On('resetModal')]
    public function resetModal()
    {
        $this->reset();
    }
}
