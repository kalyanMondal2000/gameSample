//Javascript 
const circle = document.getElementById("circle");
const eachMove = 10;

const left = () => {
    return parseInt(circle.style.left)-eachMove+'px';
}

const right = () => {
    return parseInt(circle.style.left)+eachMove+'px';
}

const down = () => {
    return parseInt(circle.style.top)+eachMove+'px';
}

const up = () => {
    return parseInt(circle.style.top)-eachMove+'px';
}


var w = window.innerWidth;
var h = window.innerHeight;

window.addEventListener('load', function(){
    circle.style.position = 'absolute'
    circle.style.left = 0; 
    circle.style.top = 0;
});


window.addEventListener('keydown', function(e){
 switch(e.key){
    case 'ArrowLeft':
        if(parseInt(circle.style.left) >= 0){
            left()
            console.log("left!")
        }
        break;
    case 'ArrowRight':
        if(parseInt(circle.style.left) <= w){
            right()
            console.log("right!")
        }
        break;
    case 'ArrowDown':
        if(parseInt(circle.style.top) <= h){
            down()
            console.log("down!")
        }
        break;
    case 'ArrowUp':
        if(parseInt(circle.style.top) >= 0){
            up()
            console.log("up!")
        }
        break;

 }
});