var min = 0, max = 0, palm2_z = 0;
Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
};

var controlaLeap = function()
{
    //chama
    var leapData = $().leap();


    if(leapData.numPointables > 0)
    {
        //var l = leapData['pointables'].length-1;
        moveDedinho(leapData['pointables'][0]['tipPosition']);
    }

    // var anterior;
    
    // if(leapData.numHands > 0)
    // {
        
    //     if(leapData.numHands==1)   
    //         moveDedinho(leapData['hands'][0]['palmPosition']);
    //     else if(leapData.numHands==2){
    //         anterior = parseInt(palm2_z);
    //         palm2_z = leapData['hands'][1]['palmPosition'][2];
    //         //var clampX = leapData['hands'][1]['palmPosition'];
    //         //var x = 60;
    //         //console.log(x.clamp(clampX));
    //         //console.log(clamp);
    //         //palm2_z = palm2_z * 0.5;
            
            
    //         min = (palm2_z < min ? palm2_z : min);
    //         max = (palm2_z > max ? palm2_z : max);
    //         if (palm2_z <= 40){
    //             position = 40;
    //         }else if (palm2_z >= 70){
    //             position = 70;
    //         }else {
    //             position = palm2_z;
    //         }
    //         palm2_z = parseInt(palm2_z);
    //         min = parseInt(min);
    //         max = parseInt(max);
    //         if((anterior-palm2_z)>5)
    //             rodaDedinhos(palm2_z);
    //         else if((palm2_z-anterior)>5)
                


    //         rodaDedinhos(palm2_z);
    //         //palm2_z = leapData['hands'][1]['palmPosition'][2];
    //         //console.log(palm2_z, leapData['hands'][1]['palmPosition'][2]);
    //     }
    //     // console.log(leapData['hands'][0]['sphereRadius']);
    //     // rodaDedinhos(leapData['hands'][0]['sphereRadius']);    
    // }
}

// var jj = 0;
// var interValUp = setInterval(function(){
//     jj += 1;
//     rodaDedinhos(jj);
// },500);
// setInterval(function(){
//     jj += 1;
//     rodaDedinhos(jj);
// },500);

$().leap("setEvent", "onFrame", controlaLeap);

/*$(document).ready(function() {
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
                recebeDadosLeap(str);
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
*/