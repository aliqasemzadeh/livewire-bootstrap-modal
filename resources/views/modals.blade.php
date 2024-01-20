<div class="modal fade" id="livewire-bootstrap-modal" tabindex="-1"
     aria-hidden="true" style="z-index: 9999;" wire:ignore.self>
    <div class="modal-dialog">
        <div class="modal-content">
            @if ($alias)
                @livewire($alias, $params, key($activeModal))
            @endif
        </div>
    </div>
</div>
