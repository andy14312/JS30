(function(){
    const keyword = "anand";
    let pressed = [];
    const myName = document.querySelector(".my-name");
    const lostIt = document.querySelector(".lost-it");

    window.addEventListener('keyup',(e)=>{
        pressed.push(e.key);
        pressed.splice(0,pressed.length-keyword.length);
        if(pressed.length === keyword.length) {
            if(pressed.join("").includes(keyword)) {
                myName.classList.add("show");
                lostIt.classList.remove("show");
            } else {
                myName.classList.remove("show");
                lostIt.classList.add("show");
            }
        }
    });
})();