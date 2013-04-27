$(document).ready(function() {
    //set functions for events that fire when the user does certain things   
    var handEnters = function() {
        $("#actions").text("A hand has entered the FOV"); 
    }; 
    var handExits = function() {
        $("#actions").text("A hand has exited the FOV"); 
    }; 
    var onConnect = function() {
        $("#main").show();  
        $("#connection").text("Connected to Leap WebSocket!"); 
    };
    var onDisconnect = function() {
        $("#main").hide();
        $("#connection").text("WebSocket connection closed");
    };
    var onFrame = function() {
        //put the whole object into a var for local use
        var leapData = window.leapData;
        
        //this displays the object on the console when you use two hands and point 8 fingers
        if(leapData.numHands > 1 && leapData.numPointables > 7) console.dir(leapData);    
           
        //display objects - if we display every frame we get a bug in chrome and it slows then chrashes eventually so display 10 times a second instead
        if(leapData.frameCount % Math.round(leapData.fps/10) == 0) {
            $("#fps").text(Math.round(leapData.fps));

            var str = JSON.stringify(leapData, undefined, 2);  
            $("#output").html("<pre>" + str + "</pre>");  
            if(leapData.numHands > 0) {
                var str = JSON.stringify(leapData.hands[0], undefined, 2);
                $("#hand1").html("<pre>" + str + "</pre>"); 
            }
            if(leapData.numHands > 1) {
                var str = JSON.stringify(leapData.hands[1], undefined, 2); 
                $("#hand2").html("<pre>" + str + "</pre>");             
            }
            if(leapData.numPointables > 0) {
                var str = JSON.stringify(leapData.pointables, undefined, 2);
                $("#pointables").html("<pre>" + str + "</pre>");  
            }
        } 
    };
    var onPointerChange = function() {
        $("#pointablesNum").text($().leap().numPointables);  
    };
    var onHandChange = function() {
        $("#hands").text($().leap().numHands);
    };
    var onSecondChange = function() {
        $("#time").text(parseInt($("#time").text())+1);
    };
    var onTap = function(pointable) {
        $("#actions").text("Tap!"); 
    }; 
    var onPoke = function(pointable) {
        $("#actions").text("Poke!"); 
    }; 
    var onGrab = function(hand) {
        $("#actions").text("Grabbing!"); 
    }; 
    var onSwipe = function(hand) {
        $("#actions").text("Swipe!");
    };
    var onPush = function(hand) {
        $("#actions").text("Push!");
    };

    //put the functions into an array
    var events = {
        "onPointerChange" : onPointerChange,
        "onHandChange" : onHandChange,
        "onHandEnter" : handEnters,
        "onHandExit" : handExits,
        "onConnect" : onConnect,
        "onDisconnect" : onDisconnect,
        "onFrame" : onFrame,
        "onSecondChange" : onSecondChange,
        "onTap" : onTap,
        "onPush" : onPush,
        "onPoke" : onPoke, 
        "onSwipe" : onSwipe, 
        "onGrab" : onGrab 
    };

    //you can change one at a time
    //$().leap("setEvent","onHandEnter", handEnters);

    //or update any number of them at once
    $().leap("setEvents",events);           
});