// JavaScript Document
$(document).ready(function(){
// Transition //
	var currentContainerIndex = 0;
	var currentSlideIndex = 0;
	var nextContainerIndex = 1;
	var nextSlideIndex = 1;
	
	
	// Initial width control //

	
	if ($(window).width() > 1000 && $(window).height() > 650) {
		$("#window").css("width", $(window).width());
		$("#window").css("height", $(window).height());
		$(".container").css("width", $(window).width());
		$(".container").css("height", $(window).height());
		
	}
	
	else 
	{
		$("#window").css("width", "1000px");
		$("#window").css("height", '650px');	
		$(".container").css("width", "1000px");
		$(".container").css("height", '650px');		
	}
	
	/* Set the locations of the containers */
	
	$('#container0').css("top", ($(".container").height()) + 'px');
	$('#container0').css("left",($(".container").width()) + 'px');
	
	$('#container1').css("top", '0px');
	$('#container1').css("left", '0px');
	
	$('#container2').css("top", ($(".container").height()) + 'px');
	$('#container2').css("left", '0px');
	
	$('#container3').css("top", (($(".container").height() * 2) ) + 'px');
	$('#container3').css("left", '0px');
	
	$('#container4').css("top", (($(".container").height() * 2) ) + 'px');
	$('#container4').css("left",($(".container").width()) + 'px');
	
	$('#container5').css("top", (($(".container").height() * 2)) + 'px');
	$('#container5').css("left",(($(".container").width() * 2) ) + 'px');
	
	$('#container6').css("top", ($(".container").height()) + 'px');
	$('#container6').css("left",(($(".container").width() * 2) ) + 'px');
	
	$('#container7').css("top", '0px');
	$('#container7').css("left",(($(".container").width()* 2)) + 'px');
	
	$('#container8').css("top", '0px');
	$('#container8').css("left",($(".container").width()) + 'px');
	
	
	
	$("#page").css("left", "-" + $('#container0').css('left'));
	$("#page").css("top",  "-" + $('#container0').css('top'));
			
			
	$("#my0").show();
	$("#text0").show();
	
	
	// window resizing handlers //
	
	$(window).resize(function(){
		
		
		if ($(window).width() > 1000 && $(window).height() > 650){
				$("#window").css("width", $(window).width());
	        	$("#window").css("height", $(window).height());
				$(".container").css("width", $(window).width());
				$("#page").css("height", $(window).height());
				
			}
		else if ($(window).width() <= 1000 && $(window).height() > 650)
			{
				$("#window").css("width",  "1000px");
				$("#window").css("height", $(window).height());
				$(".container").css("width", "1000px");
				$("#page").css("height", $(window).height());
				
			}
		else if ($(window).width() > 1000 && $(window).height() <= 650){
			$("#window").css("width", $(window).width());
	        $("#window").css("height", '650px');
			$(".container").css("width", $(window).width());
			$(".container").css("height", '650px');
		
		}
		else{
			$(".container").css("width", "1000px");
			$(".container").css("height", '650px');
			$("#window").css("width", "1000px");
	        $("#window").css("height", '650px');
		}
		
		
	
		});
	
	
	
	$("#my0").show();
	
	function rotateTransition(fromContainerIndex, fromSlideIndex, toContainerIndex, toSlideIndex){
		
		// subnav button off //
			$("#link"+fromSlideIndex).removeClass("on");
			
		// do we fade or flip? //
			// fade //
			
			if (fromContainerIndex != toContainerIndex)
			{
				
				flipTransition(fromContainerIndex, fromSlideIndex, toContainerIndex, toSlideIndex);
			}
			
			// flip //
			else
			{
				fadeTransition(fromSlideIndex,toSlideIndex);
			}
			
			// set tracker variables //
			currentContainerIndex = toContainerIndex;
			currentSlideIndex = toSlideIndex;
			nextContainerIndex = Math.ceil((currentSlideIndex+1)/2);
			nextSlideIndex = currentSlideIndex+1;
			
			// subnav button on //
			
			$("#link"+toSlideIndex).addClass("on");
			 if ($(".on").position().left + 200 > $("#mysubnavBackground").width() && ($("#mysubnavElements").position().left >= (($("#mysubnavElements").width() - $("#mysubnavBackground").width()) * -1))) {
	 		     $("#mysubnavElements").animate({left:"-=100px"}, 500); 
				 
		     } else if ($(".on").position().left < Math.abs($("#mysubnavElements").position().left )){
				 $("#mysubnavElements").animate({left:"0px"}, 500);
			 }
			 
			if (nextSlideIndex == 17){
				nextContainerIndex = 0;
				nextSlideIndex = 0;
			
			}
		}
		 
	// fade Transition //
	function fadeTransition(fromSlideIndex,toSlideIndex){
			 
		$("#my"+fromSlideIndex).fadeOut(1000);
		$("#my"+toSlideIndex).fadeIn(1000);
	
	}

	// flip Transition //
	function flipTransition(fromContainerIndex, fromSlideIndex, toContainerIndex, toSlideIndex){
				
			$('#my'+ toSlideIndex).show();
			
			var positionX = $('#container'+ toContainerIndex).css('left');
			var positionY = $('#container'+ toContainerIndex).css('top');
			
			var scaleArray = [1, .5, .5, .5, .5, .5,  .5, .5, .5];
			var rotationArray = [0, 0, 0, 45, 0, -45, 0, -45, 0];
			
			if ($.browser.msie){
				
				$('#page').animate({
					left: '-' + positionX,
					top: '-' + positionY
					}, 1500, 'linear', function(){
						if (fromSlideIndex%2 == 0){$('#my'+ fromSlideIndex).hide();$('#my'+ (fromSlideIndex-1)).show();}
					});	
			}
			else
			{
				$('#page').transition({
					left: '-' + positionX,
					top: '-' + positionY
					}, 1500, 'linear');
					
				$('#container' + fromContainerIndex).transition({
					rotate: rotationArray[fromContainerIndex] + 'deg',
					scale: scaleArray[fromContainerIndex]
					
					}, 1000, function(){
						
						if ( fromSlideIndex%2 == 0){$('#my'+ fromSlideIndex).hide();$('#my'+ (fromSlideIndex-1)).show();}
						
						});
							
				$('#container' + toContainerIndex).transition({
					scale: '1',
					rotate:'0deg', 
					delay:'500'
					}, 1500, 'linear', function(){
						
						});
			}
	}
	

	// auto play //
	//myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
	
	
	// next button controls //
	if ($.browser.msie){
		$("#my0").click(function(){
			// clearInterval(myInterval);
			rotateTransition(0,0,1,1);
			// myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
			});
		$("#my1").click(function(){
			// clearInterval(myInterval);
			rotateTransition(1,1,1,2);
			// myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
			});
		$("#my2").click(function(){
			// clearInterval(myInterval);
			rotateTransition(1,2,2,3);
			// myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
			});
		$("#my3").click(function(){
			// clearInterval(myInterval);
			rotateTransition(2,3,2,4);
			// myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
			});
		$("#my4").click(function(){
			// clearInterval(myInterval);
			rotateTransition(2,4,3,5);
			// myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
			});
		$("#my5").click(function(){
			// clearInterval(myInterval);
			rotateTransition(3,5,3,6);
			// myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
			});
		$("#my6").click(function(){
			// clearInterval(myInterval);
			rotateTransition(3,6,4,7);
			// myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
			});
		$("#my7").click(function(){
			// clearInterval(myInterval);
			rotateTransition(4,7,4,8);
			// myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
			});
		$("#my8").click(function(){
			// clearInterval(myInterval);
			rotateTransition(4,8,5,9);
			// myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
			});
		$("#my9").click(function(){
			// clearInterval(myInterval);
			rotateTransition(5,9,5,10);
			// myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
			});
		$("#my10").click(function(){
			// clearInterval(myInterval);
			rotateTransition(5,10,6,11);
			// myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
			});
		$("#my11").click(function(){
			// clearInterval(myInterval);
			rotateTransition(6,11,6,12);
			// myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
			});
		$("#my12").click(function(){
			//clearInterval(myInterval);
			rotateTransition(6,12,7,13);
			//myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
			});
		$("#my13").click(function(){
			//clearInterval(myInterval);
			rotateTransition(7,13,7,14);
			//myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
			});
		$("#my14").click(function(){
			//clearInterval(myInterval);
			rotateTransition(7,14,8,15);
			//myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
			});
		$("#my15").click(function(){
			//clearInterval(myInterval);
			rotateTransition(8,15,8,16);
			//myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
			});
		$("#my16").click(function(){
			//clearInterval(myInterval);
			rotateTransition(8,16,0,0);
			//myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
			});
		
	}
	
	
	// next button controls //
	$("#text0 img").click(function(){
		// clearInterval(myInterval);
		rotateTransition(0,0,1,1);
		// myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
		});
	$("#text1 img").click(function(){
		// clearInterval(myInterval);
		rotateTransition(1,1,1,2);
		// myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
		});
	$("#text2 img").click(function(){
		// clearInterval(myInterval);
		rotateTransition(1,2,2,3);
		// myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
		});
	$("#text3 img").click(function(){
		// clearInterval(myInterval);
		rotateTransition(2,3,2,4);
		// myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
		});
	$("#text4 img").click(function(){
		// clearInterval(myInterval);
		rotateTransition(2,4,3,5);
		// myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
		});
	$("#text5 img").click(function(){
		// clearInterval(myInterval);
		rotateTransition(3,5,3,6);
		// myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
		});
	$("#text6 img").click(function(){
		// clearInterval(myInterval);
		rotateTransition(3,6,4,7);
		// myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
		});
	$("#text7 img").click(function(){
		// clearInterval(myInterval);
		rotateTransition(4,7,4,8);
		// myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
		});
	$("#text8 img").click(function(){
		// clearInterval(myInterval);
		rotateTransition(4,8,5,9);
		// myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
		});
	$("#text9 img").click(function(){
		// clearInterval(myInterval);
		rotateTransition(5,9,5,10);
		// myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
		});
	$("#text10 img").click(function(){
		// clearInterval(myInterval);
		rotateTransition(5,10,6,11);
		// myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
		});
	$("#text11 img").click(function(){
		// clearInterval(myInterval);
		rotateTransition(6,11,6,12);
		// myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
		});
	$("#text12 img").click(function(){
		//clearInterval(myInterval);
		rotateTransition(6,12,7,13);
		//myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
		});
	$("#text13 img").click(function(){
		//clearInterval(myInterval);
		rotateTransition(7,13,7,14);
		//myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
		});
	$("#text14 img").click(function(){
		//clearInterval(myInterval);
		rotateTransition(7,14,8,15);
		//myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
		});
	$("#text15 img").click(function(){
		//clearInterval(myInterval);
		rotateTransition(8,15,8,16);
		//myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
		});
	$("#text16 img").click(function(){
		//clearInterval(myInterval);
		rotateTransition(8,16,0,0);
		//myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
		});
	
	
	// subnav controls //
	$("#link0").click(function(){
		//clearInterval(myInterval);
		rotateTransition(currentContainerIndex,currentSlideIndex,0,0);
		//myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
		
		});
	$("#link1").click(function(){
		//clearInterval(myInterval);
		rotateTransition(currentContainerIndex,currentSlideIndex,1,1);
		//myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
	});
	$("#link2").click(function(){
		//clearInterval(myInterval);
		rotateTransition(currentContainerIndex,currentSlideIndex,1,2);
		//myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
		});
	$("#link3").click(function(){
		//clearInterval(myInterval);
		rotateTransition(currentContainerIndex,currentSlideIndex,2,3);
		//myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
	});
	$("#link4").click(function(){
		//clearInterval(myInterval);
		rotateTransition(currentContainerIndex,currentSlideIndex,2,4);
		//myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
		
		});
	$("#link5").click(function(){
		//clearInterval(myInterval);
		rotateTransition(currentContainerIndex,currentSlideIndex,3,5)
		//myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
		});
	$("#link6").click(function(){
		//clearInterval(myInterval);
		rotateTransition(currentContainerIndex,currentSlideIndex,3,6);
		//myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
		});
	$("#link7").click(function(){
		//clearInterval(myInterval);
		rotateTransition(currentContainerIndex,currentSlideIndex,4,7);
		//myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
		
		});
	$("#link8").click(function(){
		//clearInterval(myInterval);
		rotateTransition(currentContainerIndex,currentSlideIndex,4,8);
		//myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
		});
	$("#link9").click(function(){
		//clearInterval(myInterval);
		rotateTransition(currentContainerIndex,currentSlideIndex,5,9);
		//myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
		});
	$("#link10").click(function(){
		//clearInterval(myInterval);
		rotateTransition(currentContainerIndex,currentSlideIndex,5,10);
		//myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
		});
	$("#link11").click(function(){
		//clearInterval(myInterval);
		rotateTransition(currentContainerIndex,currentSlideIndex,6,11);
	    //myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
		});
	$("#link12").click(function(){
		//clearInterval(myInterval);
		rotateTransition(currentContainerIndex,currentSlideIndex,6,12);
		//myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
		});
		
	$("#link13").click(function(){
		//clearInterval(myInterval);
		rotateTransition(currentContainerIndex,currentSlideIndex,7,13);
		//myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
		
		});
	$("#link14").click(function(){
		//clearInterval(myInterval);
		rotateTransition(currentContainerIndex,currentSlideIndex,7,14);
		//myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
		});
	$("#link15").click(function(){
		//clearInterval(myInterval);
		rotateTransition(currentContainerIndex,currentSlideIndex,8,15);
		//myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
		});
	$("#link16").click(function(){
		//clearInterval(myInterval);
		rotateTransition(currentContainerIndex,currentSlideIndex,8,16);
		//myInterval = setInterval(function(){rotateTransition(currentContainerIndex,currentSlideIndex,nextContainerIndex,nextSlideIndex)}, 5000);
		});
	
		
		
	// scrolling subnav //
	
	var scrolling = false;

  	
  
	  $("#arrowRgt img").mousedown(function(){
		  
		  scrolling = true;
		  startScrolling($("#mysubnavElements"), "-=10px");
		 
	  })
	  
	  $("#arrowRgt img").mouseup(function(){
		  scrolling = false;
	  });
  
	  
	  $("#arrowLft img").mousedown(function(){
		  
		  scrolling = true;
		  startScrolling($("#mysubnavElements"), "+=10px");
	 
	  })
	  
	  $("#arrowLft img").mouseup(function(){
		  scrolling = false;
	  });
	
	
	
	function startScrolling(obj, param)
	{
		
		if  (obj.position().left > 0){
			 scrolling = false;
		}
		
		else if (obj.position().left == 0 && param == "+=10px"){
			scrolling = false;
		}
		else if (obj.position().left <= ((obj.width() - $("#mysubnavBackground").width()) * -1) && param == "-=10px"){
			scrolling = false;
		}
		else
		{
			
		obj.animate({"left": param}, 50, "linear",function(){
			
				if (scrolling) 
				{
						startScrolling(obj, param);
						
				}
				
			
			});
		
		}
	}
});