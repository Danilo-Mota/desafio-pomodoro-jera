function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
      
        achar = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        if(minutes == 0 && seconds == 0){
            const barulho = document.getElementById("som");
            
            barulho.play();
            return resetIni(); 
            
        }
    }, 1000);
}

     function resetIni(){
         clearInterval(achar);
         display = document.getElementById("text").innerHTML = "25:00";
       
     }
      
     function chamarIni() {
        var aparecer = 60 * 1;
            display = document.getElementById("text");
        startTimer(aparecer, display);
        }  


    function descansar(){
        aparecer = 60 * 5;
        display = document.getElementById("text");
        startTimer(aparecer, display);
    
    }
    
    function som(){
        var som = new Audio("aud");
        som.play();
    }