//Selecting all input value

const valueOne = document.getElementById("valueOne");
const valueTwo = document.getElementById("valueTwo");
const result = document.getElementById("results");

function add(){
  if(valueOne.value && valueTwo.value){
    let add = parseInt(valueOne.value) + parseInt(valueTwo.value);
  result.innerHTML = add;
  clearInput()
  }else{
    alert("Please Enter the all values");
  }
}


function sub(){
  if(valueOne.value && valueTwo.value){
  let sub = parseInt(valueOne.value) - parseInt(valueTwo.value);
  result.innerHTML = sub;
  clearInput()
  }else{
    alert("Please Enter the all values");
  }
}


function multy(){
  if(valueOne.value && valueTwo.value){
  let multy = parseInt(valueOne.value) * parseInt(valueTwo.value);
  result.innerHTML = multy;
  clearInput()
  }else{
    alert("Please Enter the all values");
  }
}


function division(){
  if(valueOne.value && valueTwo.value){
  let division = parseInt(valueOne.value) / parseInt(valueTwo.value);
  result.innerHTML = division.toFixed(2);
  clearInput()
  }else{
    alert("Please Enter the all values");
  }
}


function clearInput(){
  valueOne.value = "";
  valueTwo.value = "";
}






