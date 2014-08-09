$(document).ready(function() {

// Autocomplete + direct forwarding
$(function() {
	$("#sr").autocomplete({
	appendTo: "center form",	
	minLength: 0,
	source: [
		{label: 'Home', value: 'site.html'},
		{label: 'Über mich', value: 'uebermich.html'},
		{label: 'Impressum', value: 'impressum.html'},
		{label: 'Kontakt', value: 'mailto:webmaster@drmaroni.de'},
	    {label: 'Suche', value: 'fresh.html'},
	    {label: 'Sitemap', value: 'sitemap.html'},
	    {label: 'Video', value: 'video.html'},
	    {label: 'Liederübersicht', value: 'lieder.html'},
	    {label: 'Ratespiel', value: 'ratespiel.html'},
	    {label: 'Taschenrechner', value: 'rechner.html'}
	]
	,select: function (event, ui) {
		$(event.target).val(ui.item.label);
		window.location = ui.item.value;
		return false;
	}
	});
});

// Show all autocomplete entries on click
$('#sr').click(function() {
	$(this).autocomplete( "search", "" );
});

// Placeholder detection
if (!Modernizr.input.placeholder) {
	$('#sr').val("Search city");
	
	$('#sr').focus(function() {
		if ($(this).val() == "Search city") $(this).val("");
	});
	
	$('#sr').blur(function() {
		if ($(this).val() == "") $(this).val("Search city");
	});
}

}); 