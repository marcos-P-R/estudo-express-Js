window.addEventListener("load", () => {
    let backgroundBody = document.getElementById('corpo');
    let lithButton = document.getElementById('lith');
    let darkButton = document.getElementById('dark');

    lithButton.addEventListener("click", corLith);
    darkButton.addEventListener("click", corDark);

    function corLith(){
        backgroundBody.style.backgroundColor = "#ffffff";
        backgroundBody.style.color = "#333333"
    }

    function corDark(){
        backgroundBody.style.backgroundColor = "#333333";
        backgroundBody.style.color = "#ffffff"
    }
})
