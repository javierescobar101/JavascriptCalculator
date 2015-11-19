var round = function(text, pos) {
    function setCharAt(str,index,chr) {
       if(index > str.length-1) return str;
        return str.substr(0,index) + chr + str.substr(index+1);
    }
    if (text.length > pos) {
        for (i=1;i<text.length;i++){
            if (text[i] === ".") {
                i = text.length;
                if (parseFloat(text[pos],10) >= 5) {
                    text = (setCharAt(text,pos-1,((parseFloat(text[pos-1],10))+1).toString(10))).substr(0,pos);
                } else {
                    text = text.substr(0,pos);
                }
            } 
        }
    }
    return text;
};
var $ = jQuery.noConflict();

$(document).ready(function(){
	var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 20) {
                number = "";
                totaldiv.text("Err");
            }
        } 
    };
	var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#total");
    var result = "";
    totaldiv.text("0");
    $("#numbers > a").not("#clear,#clearall").click(function(){
		number += $(this).text();
		totaldiv.text(number);
		testNumLength(number);
    });
    $("#operators > a").not("#equals").click(function(){
		operator = $(this).text();
		newnumber = number;
		number = "";
		totaldiv.text("0");
    });
    $("#clear").click(function(){
    number="";
    totaldiv.text("0");  
    });
    
    $("#clearall").dblclick(function(){
        number="";
        newnumber="";
        totaldiv.text("0");
    
    });
    $("#equals").click(function(){
            number = parseInt(number,10);
            newnumber = parseInt(newnumber,10);
            var result;  
        
        if (operator==="+"){
            result = newnumber+number;
        }
        else if (operator==="-"){
            result = newnumber - number;
        }
        else if (operator==="*"){
            result = newnumber * number;
        }
        else if (operator==="/"){
            result = newnumber / number;
        }
            result = result.toString(10);
            totaldiv.text(result);
            testNumLength(result);
            number = "";
            newnumber = "";    
    });
    $(document).keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode === 48) {
            $("#one").click();
       } else if (keycode === 50) {
            $("#two").click();
        } else if (keycode === 51) {
            $("#three").click();
        } else if (keycode === 52) {
            $("#four").click();
        } else if (keycode === 53) {
            $("#five").click();
        } else if (keycode === 54) {
            $("#six").click();
        } else if (keycode === 55) {
            $("#seven").click();
        } else if (keycode === 56) {
            $("#eight").click();
        } else if (keycode === 57) {
            $("#nine").click();
        } else if (keycode === 48) {
            $("#zero").click();
        } else if (keycode === 97) {
            $("#clearall").click();
        } else if (keycode === 99) {
            $("#clear").click();
        } else if (keycode === 61) {
            $("#equals").click();
        } else if (keycode === 43) {
            $("#plus").click();
        } else if (keycode === 45) {
            $("#minus").click();
        } else if (keycode === 42 || keycode === 120) {
            $("#multiply").click();
        } else if (keycode === 47) {
            $("#divide").click();
        } 
    });
});
    
