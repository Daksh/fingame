yourUrl = "http://192.168.43.220:8080";
var thisUser = "Blank"

$("#accountPop").click(function(){
	$.get(yourUrl+"/getBal/"+thisUser, function(result){
		$("#res").text(result);
    });
});

$("#incomePop").click(function(){
	$.get(yourUrl+"/getIncome/"+thisUser, function(result){
		$("#res3").text(result);
    });
})

$("#startBtn").click(function(){
	thisUser = $("#myTextMiddle").val();
	$.get(yourUrl+"/createUser/"+thisUser, function(result){
		$("#res").text(result["balance"]);
    });
});

$("#leftSideToggle").click(function(){
	$("#textLeft").text(thisUser);
	$.get(yourUrl+"/getBal/"+thisUser, function(result){
		$("#leftBal").text(result);
    });
});

$("#rightSideToggle").click(function(){
	$.get(yourUrl+"/getOtherPlayer/"+thisUser, function(result){
		if(result.hasOwnProperty('error')){
			$("#textRight").text(result["error"]);
		}
		else{
			$("#textRight").text(result["other"]);
			$("#rightBal").text(result["balance"]);
		}
		
    });
});


$("#withd").click(function(){
    var txt = $("#inp").val();
    if(txt==""){
    	txt = "0";
    }
    $.get(yourUrl+"/withdraw/"+thisUser+"/"+txt, function(result){
        if(result["error"]=="none"){
        	$("#res").text(result["balance"]);
        }
        else{
        	$("#res").text(result["error"]);	
        }
    });
});

$("#depos").click(function(){
    var txt = $("#inp").val();
    $.get(yourUrl+"/deposit/"+thisUser+"/"+txt, function(result){
        if(result["error"]=="none"){
        	$("#res").text(result["balance"]);
        }
        else{
        	$("#res").text(result["error"]);	
        }
    });
});