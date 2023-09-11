function sumar(){
    let op1 = document.getElementById("id1").value;
    let op2 = document.getElementById("id2").value;
    
    let valor = parseFloat(op1) + parseFloat(op2) ;
    document.getElementById("rpta").innerHTML = valor;
}

function restar(){
    let op1 = document.getElementById("id1").value;
    let op2 = document.getElementById("id2").value;
    
    let valor = parseFloat(op1) - parseFloat(op2) ;
    document.getElementById("rpta").innerHTML = valor;
}


function dividir(){
    let op1 = document.getElementById("id1").value;
    let op2 = document.getElementById("id2").value;
    
    let valor = parseFloat(op1)/parseFloat(op2) ;
    document.getElementById("rpta").innerHTML = valor;
}


function mult(){
    let op1 = document.getElementById("id1").value;
    let op2 = document.getElementById("id2").value;
    
    let valor = parseFloat(op1)*parseFloat(op2) ;
    document.getElementById("rpta").innerHTML = valor;
}