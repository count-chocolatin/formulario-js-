namef = document.getElementById("name")
subname = document.getElementById("subname")
color = document.getElementById("color")

elemento = document.getElementById("elemento")
boton = document.getElementById("boton")

colle = []

boton.onclick = function (){
    elemento.innerHTML = ''
     if (namef.value == "" || subname.value == "" || color.value == "" ){
         alert("complete todos los campos")
     }else{
        
        colle.push({nombre:namef.value, apellido:subname.value , color:color.value})
        colle.forEach(element => {
            elemento.innerHTML += `<li>${element.nombre} , ${element.apellido} : ${element.color}</li>`
        });     
      
     }
    namef.value = ""
    subname.value = ""
    color.value = ""
}

obj = [ {pw : 1, pe:2},{pw:332, pe:232},{pw:434 , pe:23}]
obj[2].pe="hola"
obj[0].pw = "mAnuel" //modifica el valor
obj.splice(2,1) // elimina el valor
console.log(obj)