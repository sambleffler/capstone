
    var t;
    window.onload = start;
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;
    var audio = new Audio('click.mp3');

    function logout() {
        window.location.href = "index.html";
    }

function pause(milliseconds) {
    var dt = new Date();
    while ((new Date()) - dt <= milliseconds) { /* Do nothing */ }
}

    function resetTimer() {
        clearTimeout(t);
        t = setTimeout(logout, 300000);
        
    }

function start(){
    clearTimeout(t);
        t = setTimeout(logout, 300000);
    var links = document.getElementsByTagName('a');
    for(i=0; i< links.length; i++){
        links[i].addEventListener("click", function(){
    
            audio.play();
            console.log("click");
        pause(150);   
//        window.location.href = links[i].href;
            
    });
        
    }
}

// Timer based on this tutorial: https://stackoverflow.com/questions/667555/how-to-detect-idle-time-in-javascript-elegantly






