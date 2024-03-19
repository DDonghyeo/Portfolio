function openm(e){
    document.getElementById(e).style.display = "block";
}

function modal_close(e){
    var target = document.getElementById(e.getAttribute('close')).getAttribute('id');
    document.getElementById(target).style.display = "none";
}

var umc = document.getElementById('umc')
umc.addEventListener('mouseenter', umc_in)
umc.addEventListener('mouseleave', umc_out)

function umc_in() {
    document.getElementById('umc_activity').style.display = "block";
}

function umc_out() {
    document.getElementById('umc_activity').style.display = "none";
}


var umc = document.getElementById('demoday')
umc.addEventListener('mouseenter', demo_in)
umc.addEventListener('mouseleave', demo_out)

function demo_in() {
    document.getElementById('demoday_activity').style.display = "block";
}

function demo_out() {
    document.getElementById('demoday_activity').style.display = "none";
}