//javascript
//code by kalyan
player = document.getElementById("player");

const waitTime = 5000;
var pos = 0;


const gravity = () =>{
    frame = setInterval(eachFrame, 50);
    function eachFrame(){
        if (pos == 0){
            clearInterval(frame);
            player.style.left = '10px'; 
            player.style.top = '350px';
        }else{
            pos--;
            player.style.top = (parseInt(player.style.top) + pos)+'px';
        }
    }
}

const jump = () =>{
 id = setInterval(perFrame, 50);
function perFrame(){
    if(pos == 10){
        gravity()
        clearInterval(id);
    }else{
        pos++;
        player.style.top = (parseInt(player.style.top) - pos)+'px';}}
}




window.addEventListener('load', ()=>{
    
    player.style.left = '10px'; 
    player.style.top = '350px';
    console.log("loaded")
})
document.addEventListener('keyup', (e) =>{
    if(e.keyCode == "32"){
        jump();
    }


    }
)
