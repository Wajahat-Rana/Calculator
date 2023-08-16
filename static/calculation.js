function operand(a){
    let result = document.getElementById('result');

    result.value = result.value+a;
}
function calculate(){
    let expression = document.getElementById('result').value;
    console.log("Evaluating");
    if(expression == ""){
    document.getElementById('result').value = "";   
    }
    else{
    let solution  = "";
    solution = eval(expression);
    document.getElementById('result').value = solution;
    }
}
function screenClean(){
    document.getElementById('result').value = "";
    console.log("Clearing");
}
function deleteOne(){
    let given = document.getElementById('result');
     given.value = given.value.substring(0,given.value.length-1);
}