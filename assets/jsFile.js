$(document).ready(function(){
	var flavor = 0  ;
	var size = 0, total,delivery,address;

	$( "select" ).change(function () {
    	$( "select option:selected" ).each(function() {
      	flavor = $( "#flavors" ).val();
      	size = $("#size").val();
			
		 });

   });
	
	 $("input[type='radio'][name='optRadio']").click(function(){
		
		if( this.value == "yes"){
			$(".delivery").append("Free Delivery!!");
		} 
		if(this.value == "no"){
			$(".delivery").hide();
		} 
	});
	
	$("#submit").click(function(){
		calculate(size,flavor);
	});
	
});

	 function calculate(size,flavor){
	
		
	    if(flavor == 0){
			alert("Please Select the flavor ");
		} 
        
      if(size == 0){
		  alert("Please Select the size");
	   }

	   	total = parseInt(flavor)+parseInt(size);
		$("#total").val(total);
		return total;
        
	};