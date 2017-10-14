yourUrl = "http://192.168.2.9:8080";
var thisUser = "Blank"

$("#startBtn").click(function(){
	thisUser = $("#myTextMiddle").val();
	$.get(yourUrl+"/createUser/"+thisUser, function(result){
		$("#res").text(result["balance"]);
    });
});

$("#leftSideToggle").click(function(){
	$("#textLeft").text(thisUser);
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