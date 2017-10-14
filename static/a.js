yourUrl = "http://192.168.43.220:8080";

$("#withd").click(function(){
    var txt = $("#inp").val();
    $.post(yourUrl+"/withdraw", {"amt": txt}, function(result){
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
    $.post(yourUrl+"/deposit", {"amt": txt}, function(result){
        if(result["error"]=="none"){
        	$("#res").text(result["balance"]);
        }
        else{
        	$("#res").text(result["error"]);	
        }
    });
});