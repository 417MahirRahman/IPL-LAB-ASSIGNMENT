let Number = [1,3,8,5,15,22,13,41,35,63];
let Max = Number[0];

for(let i=1; i<Number.length; i++){
    if(Max < Number[i]){
        Max = Number[i];
    }
}

document.write("Largest Number in the Array is: " + Max);