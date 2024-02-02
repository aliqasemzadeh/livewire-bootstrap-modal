<div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id="livewire-bootstrap-modal" tabindex="-1"
     aria-hidden="true" style="z-index: 9999;" wire:ignore.self>
    <div class="modal-dialog {{$size ?? "modal-lg"}}">
        <div class="modal-content">
            @if ($alias)
                @livewire($alias, $params, key($activeModal))
            @endif
        </div>
    </div>
</div>
