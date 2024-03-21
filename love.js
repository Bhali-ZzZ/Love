var target = document.getElementById('target');
var yes = document.getElementById('yes');

function moveTarget(){
    var maxwidth = 300;
    var maxheight= 300;
    randomx = Math.floor(Math.random() * maxwidth);
    randomy = Math.floor(Math.random() * maxheight);
    target.style.left = randomx + "px";
    target.style.top = randomy + "px";

}

target.addEventListener('mouseenter' , function(){
    moveTarget();
})

document.getElementById('yes').addEventListener('click', function() {
    alert("I LOVE YOU TOO ❤️ NAIMA ( BILLI KI JAAN 😘 )");
});