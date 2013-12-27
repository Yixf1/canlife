$(function(){
	$("#cartInfo").hover(
		function(){
			$(this).next().show();
			$(this).css({opacity: 0.8});
		},
		function(){
			$(this).next().hide();
			$(this).css({opacity: 1});
		}
	);
	$("#cartPanelCon").hover(
		function(){
			$(this).show();
			$(this).prev().css({opacity: 0.8});
		},
		function(){
			$(this).hide();
			$(this).prev().css({opacity: 1});
		}
	);
	$("#userInfo").hover(
		function(){
			$(this).next().show();
			$(this).css({opacity: 0.8});
		},
		function(){
			$(this).next().hide();
			$(this).css({opacity: 1});
		}
	);
	$("#userPopupCon").hover(
		function(){
			$(this).show();
			$(this).prev().css({opacity: 0.8});
		},
		function(){
			$(this).hide();
			$(this).prev().css({opacity: 1});
		}
	);
	$("input[type=text]").focus(function(){
		if(typeof($(this).attr("defaultText"))!="undefined" && $(this).attr("defaultText") == $(this).val()){
			$(this).val("");
		}
	}).blur(function(){
		if(typeof($(this).attr("defaultText"))!="undefined" && $(this).val()==""){
			$(this).val($(this).attr("defaultText"));
		}
	});
});