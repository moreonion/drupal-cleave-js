# Cleave.js for Drupal

This is a Drupal module that integrates the [cleave.js](https://nosir.github.io/cleave.js/) input field auto-formatter with the Drupal form-API.

*This is pure API module without any UI. You only need to install it, when anoher module depends on it.*

## Installation

In addition to installing this module [like any other Drupal module](https://www.drupal.org/docs/7/extend/installing-modules) you also need to install [cleave.js](https://nosir.github.io/cleave.js/) as library:

1. Go to https://github.com/nosir/cleave.js and download one of the releases.
2. Put it in a [libraries-folder](https://www.drupal.org/docs/7/modules/libraries-api/installing-an-external-library-that-is-required-by-a-contributed-module#install-external-library) of your choice. Make sure the folder is named `cleave.js`.


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
