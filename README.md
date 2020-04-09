# Cleave.js for Drupal

This is a Drupal module that integrates the [cleave.js](https://nosir.github.io/cleave.js/) input field auto-formatter with the Drupal form-API.

*This is pure API module without any UI. You only need to install it, when anoher module depends on it.*


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
