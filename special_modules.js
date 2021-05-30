
export default class LogCalculator {

    constructor (number1,number2){
        this.number1 = parseInt(number1);
        this.number2 = parseInt(number2);
    }

    logarithm_calc (){
        return "Log10 of number 1 is "+ Math.log10(this.number1) + "Log10 of second number is"+Math.log10(this.number2) + "\n";
    }

    natural_log () {
        return "LN of number 1 is "+ Math.log1p(this.number1) + "LN of second number is"+Math.log1p(this.number2) + "\n";
    }

}
