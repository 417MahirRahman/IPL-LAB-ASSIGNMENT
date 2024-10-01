function convert_Temp(Celcius){
    let Farenheit = ((Celcius * 9) / 5) + 32;
    return Farenheit;
}

let Celcius = parseFloat(prompt("Enter Temparature in Celcius:"));
document.write("Temparature in Farenheit is: " + convert_Temp(Celcius));