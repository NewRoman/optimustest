$(document).ready(function(){
	$('.nav-tabs a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	  $curent = $(e.target);
	  change_img=$curent.attr('data-image-attr');
	  $('#changed_tab').attr('src', 'images/'+change_img+'.png');
	})
});
     