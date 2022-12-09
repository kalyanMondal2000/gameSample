player = document.getElementById("player");
const initialYValue = 300;
const initalXValue = 0;
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
    let prev = 0;
    let now = new Date().getTime();
    console.log("inside jump")
    if(now - prev> waitTime){
        id = setInterval(perFrame, 50);
        function perFrame(){
            if(pos == 10){
                gravity()
                clearInterval(id);
            }else{
                pos++;
                player.style.top = (parseInt(player.style.top) - pos)+'px';
    }

        }
    }
}

const throttleFunction=()=>{
    console.log("inside throttle")
    let prev = 0;
    return (...args) => {

      let now = new Date().getTime();

      console.log(now-prev, waitTime);
       
      if(now - prev> waitTime){
        prev = now;
        return jump(...args); 
      }
    }
  }

window.addEventListener('load', ()=>{
    
    player.style.left = '10px'; 
    player.style.top = '350px';
    console.log("loaded")
})
document.addEventListener('keyup', (e) =>{
    if(e.keyCode == "32"){
        throttleFunction();
    }


    }
)
