        var r1 = document.getElementById("r1"); //get span to apply rainbow
        var myRainbowSpan = new RainbowSpan(r1, 0, 360, 255, 50, 18); //apply static rainbow effect
        myRainbowSpan.timer = window.setInterval("myRainbowSpan.moveRainbow()", myRainbowSpan.speed);