function btn(num){
    console.log(num);
    document.getElementById('inpval').value += num
}

function result(){
    var result = document.getElementById('inpval')
    result.value = eval(result.value)
}

function del(){
    var currentvalue = document.getElementById('inpval')
    var newVariable = currentvalue.value;
    currentvalue.value = newVariable.slice(0,-1)
}

function acl(){
    var acl = document.getElementById('inpval')
    acl.value = (" ")
}






