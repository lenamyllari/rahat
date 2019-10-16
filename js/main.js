(function($) {
	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});
			// Navigation Panel Toggle.
				$('<a href="#navPanel" class="navPanelToggle"></a>')
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						$('#nav').html() +
						'<a href="#navPanel" class="close"></a>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left'
					});
	});

})(jQuery);

(function($) {
	$.fn.panel = function(userConfig) {
		// Vars.
		var	$this = $(this),
			$body = $('body'),
			id = $this.attr('id'),
			config;
		// Config.
		config = $.extend({
			// Target element for "class".
			target: $this,
			// Class to toggle.
			visibleClass: 'visible'
		}, userConfig);
		// Event: Toggle.
		$body.on('click', 'a[href="#' + id + '"]', function(event) {
			config.target.toggleClass(config.visibleClass);
		});
	};
	$.fn.placeholder = function() {
	};
})(jQuery);