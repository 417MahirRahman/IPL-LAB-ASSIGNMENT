let Number = [1,3,8,5,15,22,16,41,35,62];
document.write("Even Numbers in the Array are: ");

for(let i=0; i<Number.length; i++){
    if(Number[i] % 2 == 0){
        document.write(Number[i] + " ");
    }
}


