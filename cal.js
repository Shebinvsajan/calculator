function displayValues(num){
    result.value += num
}
function clearValues(){
    result.value =' '
}

function evalOut(){
    result.value=eval(result.value)
}
function back(){
    result.value = result.value.slice(0,-1)
}