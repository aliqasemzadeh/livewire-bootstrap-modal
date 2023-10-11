# Laravel Livewire Modals

This package allows you to dynamically show your Laravel Livewire 3 components inside Bootstrap modals.

 **Warning:** This package is not backward compatible with Livewire 2.

## Documentation

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
    - [Modal Views](#modal-views)
    - [Showing Modals](#showing-modals)
    - [Mount Parameters](#mount-parameters)
    - [Hiding Modals](#hiding-modals)
    - [Emitting Events](#emitting-events)
- [Publishing Assets](#publishing-assets)
    - [Custom View](#custom-view)

## Requirements

- Bootstrap 5 must be installed via webpack first

## Installation


Require the package:

```console
composer require mozhuilungdsuo/livewire-bootstrap-modal
```

Add the `livewire:modals` component to your app layout view:

```html
<livewire:modals/>
<livewire:scripts/>
<script src="{{ asset('js/app.js') }}"></script>
```

Require `../../vendor/mozhuilungdsuo/livewire-bootstrap-modal/resources/js/modals` in your app javascript file:

```javascript
import('@popperjs/core');
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../vendor/mozhuilungdsuo/livewire-bootstrap-modal/resources/js/modals.js';
```

## Usage

### Modal Views

Make a Livewire component you want to show as a modal. The view for this component must use the Bootstrap `modal-dialog` container:

```html
<div>

        <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="btn-close" wire:click="$dispatch('hideModal')" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary"  wire:click="$dispatch('hideModal')">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
        </div>
</div>
 
```

### Showing Modals

Show a modal by emitting the `showModal` event with the component alias:

```html
<button type="button" wire:click="$dispatch('showModal', ['alias' => 'testmodals')">
    {{ __('Update Profile') }}
</button>
```

### Mount Parameters

Pass parameters to the component `mount` method after the alias:

```html
<button type="button"wire:click="$dispatch('showModal', ['alias' => 'testmodals', 'params' => ['name' => 'test']])">
    {{ __('Update User #' . $user->id) }}
</button>
```

The component `mount` method for the example above would look like this: 

```php
namespace App\Http\Livewire\Users;

use App\Models\User;
use Livewire\Component;

class Update extends Component
{
    public $user;
    
    public function mount(User $user)
    {
        $this->user = $user;
    }
    
    public function render()
    {
        return view('users.update');
    }
}
```

### Hiding Modals

Hide the currently open modal by emitting the `hideModal` event:

```html
<button type="button" wire:click="$dispatch('hideModal')">
    {{ __('Close') }}
</button>
```


### Emitting Events

You can emit events inside your views:

```html
<button type="button" wire:click="$dispatch('hideModal')">
    {{ __('Close') }}
</button>
```

Or inside your components, just like any normal Livewire event:

```php
public function save()
{
    $this->validate();

    // save the record

    $this->dispatch('hideModal');
}
```

## Publishing Assets

### Custom View

Use your own modals view by publishing the package view:

```console
php artisan vendor:publish --tag=livewire-bootstrap-modal:views
```

Now edit the view file inside `resources/views/vendor/livewire-bootstrap-modal`. The package will use this view to render the component.
