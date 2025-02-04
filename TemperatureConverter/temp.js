const value1= document.getElementById("temp");
const ftc=document.getElementById("ftc");
const ctf=document.getElementById("ctf");
const answer=document.getElementById("answer");
let temp1;


function convert(){
    if(ftc.checked){
         temp1=Number(value1.value);
         temp1=  (temp1-32)*(5/9);
         answer.textContent= temp1.toFixed(2)+ " celcius";
    }
    else if(ctf.checked){
        temp1=Number(value1.value);
        temp1=temp1 * 9/5 + 32;
        answer.textContent= temp1.toFixed(2)+  " fahrenheit";
    }
    else{
        answer.textContent="select a unit";
    }

};
