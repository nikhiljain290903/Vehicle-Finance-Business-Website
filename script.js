function clic(){
    var nam=document.getElementById("name").value;
    var ema=document.getElementById("email").value;
    var num=document.getElementById("number").value;
    alert(nam+ema+num);
    

    var na=localStorage.setItem("name",nam);
    var em=localStorage.setItem("email",ema);
    var num=localStorage.setItem("number",num);
}


function box1() {
    var cont = document.getElementById('morein');
    if (cont.style.display == 'block') {
        cont.style.display = 'none';

        document.getElementById(morein).value = 'Hide DIV';
    }
    else {
        cont.style.display = 'block';
        document.getElementById(morein).value = 'Show DIV';
    }
}

