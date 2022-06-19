document.addEventListener("keyup", function (){
    if(window.AudioContext && g_WebAudioContext && g_WebAudioContext.state == "suspended") {
        g_WebAudioContext.resume();
    }
}, false)