<div class="modal " id="livewire-bootstrap-modal" tabindex="-1" role="dialog" aria-hidden="true" wire:ignore.self
    style="z-index: 9999;">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            @if ($alias)
                @livewire($alias, $params, key($activemodal))
             
            @endif
        </div>
    </div>

</div>
