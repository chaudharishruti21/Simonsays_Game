let gameSeq = [];
let userSeq = [];

let btns = ["yello", "red", "blue", "green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {

    if (started == false) {
        console.log("game is started");
        started = true;
        levelup();
    }

});

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash")
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash")
    }, 250);
}

function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `level  ${level}`;

    let randidx = Math.floor(Math.random() * 3);
    let randclor = btns[randidx];
    let randbtn = document.querySelector(`.${randclor}`);
    gameSeq.push(randclor);
    console.log(gameSeq);
    gameflash(randbtn);

}

function checkAns(idx) {

    if (userSeq[idx] === gameSeq[idx]) {

        if (userSeq.length === gameSeq.length) {
            setTimeout(levelup, 1000);

        }
    } else {
        h2.innerHTML = `Game over! your score was <b>${level}</b>
        </br>
        press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnpress() {

    let btn = this;

    userFlash(btn);
    let usercolor = btn.getAttribute("id")
    userSeq.push(usercolor);
    checkAns(userSeq.length - 1);

}
let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn) {
    btn.addEventListener("click", btnpress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}