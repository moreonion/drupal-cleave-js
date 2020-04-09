/**
 * @file
 * Behavior for cleave_js.
 *
 * Initializes cleave.js on all elements with settings.
 */

(function ($) {
  Drupal.behaviors.cleave_js = {
    attach: function (context, settings) {
      $.each($('[data-cleave-config]', context), function (index, element) {
        var $element = $(element)
        var config = $element.data('cleave-config');
        var cleave = new Cleave($element, config);
        $element.data('cleave', cleave);
      });
    }
  };
})(jQuery);
