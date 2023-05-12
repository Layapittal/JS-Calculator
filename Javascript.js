let str = "";
var input_val = document.getElementById("display")



function UserClickButton(input1) {

    var oldvalue = input_val.value;
    var newval = oldvalue + "" + input1;
    input_val.value = newval;

}

function calculatevalue(){
    var input=input_val.value;
    input=input.replace('"',"").replace("'","");
    var result=eval(input)
    input_val.value=result

}

function clearData(){
    input_val.value="";
}

function backspace(){
    const no=input_val.value.slice(0,-1);
    input_val.value=no;

}