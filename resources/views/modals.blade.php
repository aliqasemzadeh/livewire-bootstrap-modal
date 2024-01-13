<div class="modal" id="livewire-bootstrap-modal" tabindex="-1" aria-hidden="true" wire:ignore.self>
        @if ($alias)
            @livewire($alias, $params, key($activeModal))
        @endif
</div>
