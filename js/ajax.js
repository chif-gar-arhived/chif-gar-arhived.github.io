$(document).ready(function(){
		 $('.spoiler-links').click(function(){
		  $(this).parent().children('div.spoiler-body').toggle('normal');
		  return false;
		 });
		});