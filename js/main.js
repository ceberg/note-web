	$(function(){
		clickAction();
		$("input[value='点击模式']").click(function(){
			clickAction();
			return false;
		});
		$("input[value='移动模式']").click(function(){
			overAction();
			return false;
		});
		function clickAction(){
			$("p.que").unbind();
			$("p.que").click(function(){
				if($(this).next("p").is(":visible")){
					$(this).next("p").hide();
				}else{
					$(this).next("p").show();
				}
			})
		}
		function overAction(){
			$("p.que").unbind();
			$("p.que").mouseover(function(){
				if($(this).next("p").is(":hidden")){
					$(this).next("p").show();
				}
			})
			$("p.que").mouseout(function(){
				if($(this).next("p").is(":visible")){
					$(this).next("p").hide();
				}
			})
		}	
	})