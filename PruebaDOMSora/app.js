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
    
    if(nombre.trim()==null||nombre.trim()==0){
        alert('el nombre no es valido');
        return false
    }else if(primer.trim()==null||primer.trim()==0){
        alert('el primer previo no es valido');
        return false
    }else if(segund.trim()==null||segund.trim()==0){
        alert('el segundo previo no es valido');
        return false
    }else if(tercer.trim()==null||tercer.trim()==0){
        alert('el tercer previo no es valido');
        return false
    }else if(examen.trim()==null||examen.trim()==0){
        alert('el examen final no es valido');
        return false
    }else if(primer>5.0||primer<0){
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
    agregartodo()
    cambiarColor()
    tabla.style.display = "block"
}
function agregartodo() {
    let tab=""
    asignaturas.forEach((element) => {
        
        tab += `
        <tr>
        <th>${element.nombre}</th>
        <th>${element.primer}</th>
        <th>${element.segund}</th>
        <th>${element.tercer}</th>
        <th>${element.examen}</th>
        <th id="definitivatable">${element.definitiva}</th>
        </tr>
        </tbody>
        `

    })

    let bodyt = document.getElementById('bodyt')
    bodyt.innerHTML = tab

}

function cambiarColor(){
    let dup=document.getElementById('definitivatable')
    asignaturas.filter(element=>{


        if(element.definitiva>0.0&&element.definitiva<=2.9){
    
            dup.style.background="red"
        }else if(element.definitiva>=3.0&&element.definitiva<=3.9){
    
            dup.style.backgroundColor="yellow"
        }else if(element.definitiva>=4.0&&element.definitiva<=5.0){
    
            dup.style.background="green"
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
