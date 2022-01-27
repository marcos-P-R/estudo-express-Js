window.addEventListener("load", () => {
    let backgroundBody = document.getElementById('corpo');
    let modeButton = document.getElementsByClassName('mode')
    let lightButton = document.getElementById('light');
    let darkButton = document.getElementById('dark');

    lightButton.addEventListener("click", corLight);
    darkButton.addEventListener("click", corDark);

    function corLight(){
        backgroundBody.style.backgroundColor = "#ffffff";
        backgroundBody.style.color = "#333333"
    }

    function corDark(){
        backgroundBody.style.backgroundColor = "#333333";
        backgroundBody.style.color = "#ffffff"
        modeButton.style.color = "#ffffff"
    }
})
