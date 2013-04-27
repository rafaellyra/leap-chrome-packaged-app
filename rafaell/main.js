/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    width: 600,
    height: 450
  });
});
$(document).ready(function() {
        //set your functions up here
        var onTap = function(pointable) {
            alert("The X position of this finger is "+ pointable.tipPosition[0]);
        }; 
        var onPush = function(hand) {
            alert("The Z velocity of this hand is "+ hand.palmVelocity[2]); 
        }; 
        
        //put the functions into an array
        var events = {
            "onTap" : onTap,
            "onPush" : onPush
        }
        
        //update any number of them at once
        $().leap("setEvents",events);  
    });