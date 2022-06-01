// variables
const board = document.querySelector('.board');
const btn = document.querySelector('.resize');

// event listener to change the size:
btn.addEventListener('click', function(e){
    let size = prompt('Number of squares per side?');
    if(size){
        //removes child as long as it has.
        while(board.hasChildNodes()){
            board.removeChild(board.firstChild)
        }
        //hard cap of squares at 100;
        if(Number(size) < 100){
            for(let i = 0; i < Number(size) * Number(size); i++){
                let square = document.createElement('div');
                square.setAttribute('class', 'square');
                board.appendChild(square)   
            }
        }else{
            for(let i = 0; i < 100 * 100; i++){
                let square = document.createElement('div');
                square.setAttribute('class', 'square');
                board.appendChild(square)
            }     
        }
        board.style.gridTemplateColumns  = `repeat(${Number(size)}, auto)`
        let sqr = document.querySelectorAll('.square');
        changeRGB(sqr)
    }else{
        alert('No number input')
    }
})

// initial squares for the board, basis of 16;
window.addEventListener('DOMContentLoaded', function(){
    for(let i = 0; i < 16 * 16; i++){
        let square = document.createElement('div');
        square.setAttribute('class', 'square');
        board.appendChild(square)
    }
    let sqr = document.querySelectorAll('.square');
    changeRGB(sqr)
})

// change square background color ramdonly;
function changeRGB(square){
    square.forEach(sqr => sqr.addEventListener('mouseover', function(e){
        e.target.style.background = `rgb(${randomRGB()}, ${randomRGB()}, 
        ${randomRGB()})`
    }))
}

// return a random number between 0 and 255;
function randomRGB(){
    return Math.floor(Math.random() * 255)
}



