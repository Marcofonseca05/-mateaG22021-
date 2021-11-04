document.querySelector('#calcular').addEventListener('click', () =>{
    const n1 = parseIntdocument.querySelector('#n1'),value;
    const n2 = parseIntdocument.querySelector('#n2'),value;
    const op = parseIntdocument.querySelector('#op'),value;
    let r;
    if(op == '+'){
        r = n1 + n2;
     }else if(op == '-'){
        r = n1 - n2;
     }else if(op == '*'){
        r = n1 * n2;
     }else if(op == '/'){
        r = n1 / n2;
     }

     
     console.log(r);
    });