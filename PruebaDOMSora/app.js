let asignaturas = []


function procesos(e) {
    e.preventDefault()
    let nombre= document.getElementById('nombresAsi').value;
    let primer= document.getElementById('primerPrevio').value;
    let segund= document.getElementById('segundoPrevio').value;
    let tercer= document.getElementById('tercerPrevio').value;
    let examen= document.getElementById('examenFinal').value;
    const asig = {
        nombre:nombre,
        primer:primer,
        segund:segund,
        tercer:tercer,
        examen:examen
    }
    
    
    if(primer>5.0||primer<0){
        alert('el numero es mayor a 5.0 o menor a 0');
        return false
    }else if(segund>5.0||segund<0){
        alert('el numero es mayor a 5.0 o menor a 0');
        return false
    }else if(tercer>5.0||tercer<0){
        alert('el numero es mayor a 5.0 o menor a 0');
        return false
    }else if(examen>5.0||examen<0){
        alert('el numero es mayor a 5.0 o menor a 0');
        return false
    }
    asignaturas.push(asig)
    
    definitivatot()
    cambiarColor()
    agregartodo()
    tabla.style.display = "block"
}
function agregartodo() {
    let tab=""
    let i=0
    asignaturas.forEach((element) => {
        i++
        
        tab += `
        <tr>
        <th>${element.nombre}</th>
        <th>${element.primer}</th>
        <th>${element.segund}</th>
        <th>${element.tercer}</th>
        <th>${element.examen}</th>
        <th style="background-color: ${element.color};">${element.definitiva}</th>
        </tr>
        </tbody>
        `
        console.log(tab);
    })

    let bodyt = document.getElementById('bodyt')
    bodyt.innerHTML = tab

}

let i=0
i++
function cambiarColor(){
    
    
    
    asignaturas.map(element=>{

        if(element.definitiva>0.0&&element.definitiva<=2.9){
    
            element.color="red"
        }else if(element.definitiva>=3.0&&element.definitiva<=3.9){
    
            element.color="yellow"
        }else if(element.definitiva>=4.0&&element.definitiva<=5.0){
    
            element.color="green"
        }      
        
        
    })
}


function definitivatot() {

    asignaturas.map(element => {


        let multi = (Number(element.primer) + Number(element.segund) + Number(element.tercer))
        let divi = multi / 3
        let definitiva1 = (divi * 0.7) + (element.examen * 0.3)
        if(definitiva1>=2.95&&definitiva1<3){
            
            definitiva1=3
            
        }
        element.definitiva = definitiva1
    })
    
}

const tabla = document.getElementById('divtabla')

formulario.addEventListener('submit', procesos)
tabla.style.display = "none"
