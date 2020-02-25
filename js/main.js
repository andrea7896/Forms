var list = document.getElementsByClassName("error-list hidden")[0]
var listUl = list.getElementsByTagName("ul")[0]

var errors = listUl.getElementsByTagName("li");

console.log(listUl);
console.log(list);
console.log(errors);

var correct=true;

function requiredfield(){
var n = document.getElementById('first-name').value;
var e = document.getElementById('email').value;
var c = document.getElementById('comments').value;
    if(n != "" && e != "" && c != ""){
        cleanError("1");
    }else{
        if(listUl.querySelector("[id='1']") == null){
        createError("First Name, Email, Comments are required fields","1");
        }    
    }

    if(validateVehicle()){
        cleanError("11");
    }else{
        if(listUl.querySelector("[id='11']") == null){
            createError("At least one Vehicle check should be selected","11")
        }
    }
}

function validateVehicle(){
    var checkCar = document.getElementById("car");
    var checkBike = document.getElementById("bike");
    var checkMoto = document.getElementById("motorcycle");

    if(checkCar.checked==true || checkBike.checked==true || checkMoto.checked ==true){
        return true;
    }else{
        return false;
    }
}

function checkString(input){
    //console.log("prueba",input.value)
    if(!input.value.match(/^[a-zA-Z]+$/)){
        if(listUl.querySelector(`[id='${input.id}']`) == null){
        createError(input.name+" should be a string",`${input.id}`)
        }
    }else{
        cleanError(`${input.id}`);
    }
}

function validateEmail(){   
if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById('email').value))
  {
    cleanError("2");  
    return;
  }else{
      if(listUl.querySelector("[id='2']") == null){
        createError("should be a valid email address","2");
      }
  }
    
}

function validateComments(){
    if(document.getElementById('comments').value.length > 50){
        if(listUl.querySelector("[id='3']") == null){
            createError("the character max limit is 50","3");
          }
        
    }else{
        cleanError("3");
    }

}

function validatePassword(){
    if(!(document.getElementById("password").value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,8}$/))){
        if(listUl.querySelector("[id='4']")== null){
            createError("password error","4");
        }
    }else{
        cleanError("4");
    }
}


function showCar(){
    var checkCar = document.getElementById("car");
    var elemen = document.getElementById("div-car");
    var input = elemen.getElementsByTagName("input");

    if(checkCar.checked){
        elemen.classList.remove("hidden");
        return true;
    }else{
        elemen.classList.add("hidden");
        for(let x of input){
            x.value = "";
            cleanError(x.id);
        }
        return false;
    }
}

function showBike(){
    var checkBike = document.getElementById("bike");
    var elemen = document.getElementById("div-bike");
    var input = elemen.getElementsByTagName("input");

    if(checkBike.checked){
        elemen.classList.remove("hidden");
        return true;
    }else{
        elemen.classList.add("hidden");
        for(let x of input){
            x.value = "";
            cleanError(x.id);
        }
        return false;
    }
}

function showMoto(){
    var checkMoto = document.getElementById("motorcycle");
    var elemen = document.getElementById("div-moto")
    var input = elemen.getElementsByTagName("input");

    if(checkMoto.checked){
        elemen.classList.remove("hidden");
    }else{
        elemen.classList.add("hidden");
        for(let x of input){
            x.value = "";
            cleanError(x.id);
        }
        return false;
    }
}

function validateDoors(){
    var doors = document.getElementById("doors-car");

    if(doors.value > 1 && doors.value < 6 ){
        cleanError("12");
    }else{
        if(listUl.querySelector("[id='12']")== null){
        createError("Doors should be minimum 1 and less than 6","12")
        }
    }
}

function createError(txt,id){
    var elem = document.createElement("li");
    var contenido = document.createTextNode(txt);
    elem.appendChild(contenido);
    elem.id = id;
    console.log(elem);
    listUl.appendChild(elem);

    list.classList.remove("hidden")
    correct = false;
    //console.log("heeeey!",errors);
}

function cleanError(id){
    if(listUl.querySelector(`[id='${id}']`) != null){
        listUl.removeChild(listUl.querySelector(`[id='${id}']`))
    }
    if(errors.length < 1){
        list.classList.add("hidden");
        correct = true;
    }
}
