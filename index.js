// Welcome Overlay on DOMLoad //
window.addEventListener('load', e => {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("invitationPlanner").style.display = "none";
});
//Event listner to close overlay//
function closeOverlay() { 
    var close = document.getElementById("overlay");
    close.addEventListener('click', e => {
    close.style.display = "none";});
    document.getElementById("invitationPlanner").style.display = "block";
}


// Function for Invitation Background & text style change //
function styleChange1() {
    var pastel1 = document.getElementById('invite-card');
    pastel1.style.backgroundImage = "url(./imagePastels/pastelOne.png)";
    pastel1.style.color = "indianred";
    pastel1.style.fontWeight = "normal";
}
function styleChange2() {
    var pastel2 = document.getElementById('invite-card');
    pastel2.style.backgroundImage = "url(./imagePastels/pastelTwo.png)";
    pastel2.style.color = "midnightblue";
    pastel2.style.fontWeight = "bold";
}
function styleChange3() {
    var pastel3 = document.getElementById('invite-card');
    pastel3.style.backgroundImage = "url(./imagePastels/pastelThree.png)";
    pastel3.style.color = "teal";
    pastel3.style.fontWeight = "normal";
}
function styleChange4() {
    var pastel4 = document.getElementById('invite-card');
    pastel4.style.backgroundImage = "url(./imagePastels/pastelFour.png)";
    pastel4.style.color = "black";
    pastel4.style.fontWeight = "bold";   
}
function styleChange5() {
    var pastel5 = document.getElementById('invite-card');
    pastel5.style.backgroundImage = "url(./imagePastels/pastelFive.png)";
    pastel5.style.color = "darkslategray";
    pastel5.style.fontWeight = "bold"; 
}
function styleChange6() {
    var pastel6 = document.getElementById('invite-card');
    pastel6.style.backgroundImage = "url(./imagePastels/pastelSix.png)";
    pastel6.style.color = "darkslategray";
    pastel6.style.fontWeight = "normal"; 
}
function styleChange7() {
    var floral1 =document.getElementById('invite-card');
    floral1.style.backgroundImage = "url(./images/imageOne.png)";
    floral1.style.color = "orange";
    floral1.style.fontWeight = "normal";
}
function styleChange8() {
    var floral2 = document.getElementById('invite-card');
    floral2.style.backgroundImage = "url(./images/imageTwo.png)";
    floral2.style.color = "darkorange";
    floral2.style.fontWeight = "bold";
}
function styleChange9() {
    var floral3 = document.getElementById('invite-card');floral3.style.backgroundImage = "url(./images/imageThree.png)";
    floral3.style.color = "black";
    floral3.style.fontWeight = "normal";
}
function styleChange10() {
    var floral4 = document.getElementById('invite-card');floral4.style.backgroundImage = "url(./images/imageFour.png)";
    floral4.style.color = "black";
    floral4.style.fontWeight = "bold";
}
function styleChange11() {
    var floral5 = document.getElementById('invite-card');floral5.style.backgroundImage = "url(./images/imageFive.png)";
    floral5.style.color = "darkolivegreen";
    floral5.style.fontWeight = "normal";
}
function styleChange12() {
    var floral6 = document.getElementById('invite-card');
    floral6.style.backgroundImage = "url(./images/imageSix.png)";
    floral6.style.color = "black";
    floral6.style.fontWeight = "bold";
}



// Function for getting initials//
function getPerson() {
    var nameOne = document.getElementById('personOne').value;
    var nameTwo = document.getElementById('personTwo').value;
    var input = document.getElementById('monoYes');
    // if else for checkbox option //
    if(input.checked === true) {
        document.getElementById('monogram').innerHTML = nameOne.substr(0,1) + "" + nameTwo.substr(0,1);
        return true;  
        // if true returns initials subtracted from couple names //  
    }
    else {
        document.getElementById('monogram').innerHTML = "";
        alert("Selected NO for Monogram");
        return false;  
        //if false returns an alert for better user experience//  
    }    
}

//Line breaks provided below for text alignment inclusively for all invitation formats//

// Function for getting realtime hostline//
function getHost() {
    var host = document.getElementById('host-line').value;
    document.getElementById('hostLine').innerHTML = host.replace(/(.{39})/g, "$1<br>"); //breaks line after 39 characters //
}

// Function for getting realtime Couple 1//
function cOne() {
    var one = document.getElementById('personOne').value;
    document.getElementById('coupleOne').innerHTML = one;
}

// Function for getting realtime Couple 2//
function cTwo() {
    var two = document.getElementById('personTwo').value;
    document.getElementById('coupleTwo').innerHTML = two;
}

// Function for getting realtime Address//
function address() {
    var line1 = document.getElementById('venue-L1').value;
    var line2 = document.getElementById('venue-L2').value;
    var line3 = document.getElementById('venue-L3').value;
    if((line1 + line2).length <= 39) {
        document.getElementById('addLine1').innerHTML = line1 + line2 + line3 + "<br>";
    }
    //breaks and joins 3 lines if length is < 39 characters//
    else if((line1 + line2).length >= 39) {
        document.getElementById('addLine1').innerHTML = line1 + "<br>";
        document.getElementById('addLine2').innerHTML = line2 + line3 + "<br>";
    }
    //breaks line 1 and joins lines 2 & 3 if length is > 39 characters//
}

// Function for getting realtime gathering type//
function getType() {
    var type = document.getElementById('dress-code').value;
    document.getElementById('type').innerHTML = type.replace(/(.{36})/g, "$1<br>");//breaks line after 36 characters//
}

// Function for getting realtime Post ceremony//
function postMsg() {
    var message = document.getElementById('post-msg').value;
    document.getElementById('post').innerHTML = message.replace(/(.{31})/g, "$1<br>");//breaks line after 31 characters//
}

// Function for getting realtime Footnote//
function rsvpNote() {
    var rsvp = document.getElementById('foot-note').value;
    document.getElementById('footNote').innerHTML = rsvp.replace(/(.{40})/g, "$1<br>");//breaks line after 40 characters//
}



// Open on click font style //
function openNav() {
    document.getElementById("fontStyle").style.display = "block";
}

// close on button click font style //
function closeNav() {
    document.getElementById("fontStyle").style.display = "none";
}



// Function for Font Style change One //
function fontStyl1() {
    var font1 = document.getElementById('invite-card');
    font1.style.fontFamily = "'Festive', cursive";
}
// Function for Font Style change Two //
function fontStyl2() {
    var font2 = document.getElementById('invite-card');
    font2.style.fontFamily = "'Carattere', cursive";
}
// Function for Font Style change Three //
function fontStyl3() {
    var font3 = document.getElementById('invite-card');
    font3.style.fontFamily = "'Lobster Two', cursive";
}
// Function for Font Style change Four //
function fontStyl4() {
    var font4 = document.getElementById('invite-card');
    font4.style.fontFamily = "'Great Vibes', cursive";
}