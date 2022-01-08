let num=prompt('Enter how many numbers you wanna find minimum of')
let output=document.getElementById('output')
let min
function minimum(...inputs){
    for(let j=0;j<num;j++){
        let elem=prompt(`Enter ${j+1}st number`)
        inputs.push(elem)
    }
    min=inputs[0]
    for(let i=0;i<num;i++){
        if(inputs[i]<min){
            min=inputs[i]
        }
    }
   
    output.innerHTML=`${min} is the minimum among ${inputs}`
}
minimum()