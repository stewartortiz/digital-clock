$(document).ready(function(){
    var screenheight = $(window).height();
    $("body").css("height", screenheight);
    var padding = ((screenheight-8)/2 - 64)/2; 
    $("top-left").css("padding-top", padding);
    $("top-left").css("padding-bottom", padding);
    console.log(padding);
    
    function displayTimeTL(){
        var currentTime = new Date();
        var ampm = "am";
        var hours = currentTime.getHours();
        if (hours > 12){
            hours = hours-12;
            ampm = "pm";
        
        
        }
        var minutes = currentTime.getMinutes();
        if (minutes < 10) minutes = "0"+minutes;
        var seconds = currentTime.getSeconds();
        $("#top-left").html(hours+":"+minutes+":"+seconds+" ");
    }
    setInterval(function(){
    displayTimeTL();

}, 200);
});