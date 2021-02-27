let btn = document.getElementById('botonFondo');
btn.onclick = function(){
    if(btn.className === "btn btn-light botonFondo"){
        document.getElementById('fondo').className = "fondo-light"
        btn.className = "btn btn-secondary botonFondo";
    }else{
        document.getElementById('fondo').className = "fondo-dark";
        btn.className = "btn btn-light botonFondo";
    }
}
ScrollReveal().reveal('.banner');
ScrollReveal().reveal('.section2',{delay: 500, duration:700});
