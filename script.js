
let sidebar = document.querySelector(".sidebar");

let menu = document.querySelector(".menu");

check=0;
menu.addEventListener("click",function(){
    if(check==0){
        sidebar.style.left = "-300px";
        sidebar.style.transition = "left 500ms linear"
        check=1;
    } else{
        sidebar.style.left = "0px";
        check=0;
    }
    
})

let sidebar1 = document.querySelector(".sidebar");
let darkbox = document.querySelector(".darkmode-box label");
let menu1 = document.querySelector(".menu")
check=0;
darkbox.addEventListener("click", function(){
    if(check==0){
        sidebar1.style.backgroundColor = "black"
        darkbox.style.backgroundColor = "black"
        menu1.style.color = "black"
        check=1;
    } else {
        sidebar1.style.backgroundColor = "blue"
        darkbox.style.backgroundColor = "blue"
        menu1.style.color = "blue"
        check=0;
    }
        
})

