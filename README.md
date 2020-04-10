# Cleave.js for Drupal

This is a Drupal module that integrates the [cleave.js](https://nosir.github.io/cleave.js/) input field auto-formatter with the Drupal form-API.

*This is pure API module without any UI. You only need to install it, when anoher module depends on it.*


## Dependencies

* [libraries](https://www.drupal.org/project/libraries)
* [little_helpers](https://www.drupal.org/project/libraries) ≥ 2.0-alpha6
* the [cleave.js](https://nosir.github.io/cleave.js/) library.


## Installation

Install this module and its dependencies [like any other Drupal modules](https://www.drupal.org/docs/7/extend/installing-modules).


For installing the library:

1. Go to https://github.com/nosir/cleave.js and download one of the releases.
2. Put it in a libraries-folder as described in the [libraries documentation](https://www.drupal.org/docs/7/modules/libraries-api/installing-an-external-library-that-is-required-by-a-contributed-module#install-external-library). Make sure the folder is named `cleave.js`.


## Usage

When you add `#cleave`-property to any of your form-API elements Cleave will be invoked automatically on the resulting HTML element using this config.

Example:

```php
$form['numeral'] = [
  '#type' => 'textfield',
  '#title' => t('Numeral'),
  '#cleave' => [
    'numeral' => TRUE,
    'numeralThousandsGroupStyle' => 'thousand',
  ],
];
```


## Devlopment

Development on this module is happening mainly [on github](https://github.com/moreonion/drupal-cleave-js). Feel free to post issues and pull requests there.

*Note: Development branches on drupal.org might be outdated because they are only pushed to in order to tag releases.*
