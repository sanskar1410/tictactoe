let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newbtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");

let count =0;

let turn0 = true;

const winningptrn = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const reset = () =>{
    turn0 = true;
    enable();
    msgcontainer.classList.add("hide");
}

const disable = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enable = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const draw = () =>{
    msg.innerText = `DRAW!!!!`;
    msgcontainer.classList.remove("hide");
}

const showwinner = (winner) =>{
    msg.innerText = `The Winner of this round is ${winner}`;
    msgcontainer.classList.remove("hide");
    disable();
}


boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        count++;
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText= "X";
            turn0=true;
        }
        box.disabled = true;
        if(count===9){
            draw();
        }
        checkwinner();
    })
});

const checkwinner = () =>{
    for(let pattern of winningptrn){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val === pos2val && pos2val===pos3val){
                showwinner(pos1val);
            }
        }
    }
}

resetbtn.addEventListener("click",reset);
newbtn.addEventListener("click",reset);
