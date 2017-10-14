yourUrl = "http://192.168.2.9:8080";

$("#withd").click(function(){
    var txt = $("#widinp").val();
    $.post(yourUrl+"/withdraw", {"amt": txt}, function(result){
        if(result["error"]=="none"){
        	$("span").text(result["balance"]);
        }
        else{
        	$("span").text(result["error"]);	
        }
    });
});

$("#depos").click(function(){
    var txt = $("#depinp").val();
    $.post(yourUrl+"/deposit", {"amt": txt}, function(result){
        if(result["error"]=="none"){
        	$("span").text(result["balance"]);
        }
        else{
        	$("span").text(result["error"]);	
        }
    });
});