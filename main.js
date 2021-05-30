

class NumberReceiver {

    constructor (params) {
        this.number1=params.number1;
        this.number2=params.number2;
        //this.character=params.character;
        this.sum();
        this.multiply();
        this.divide();

    };

    sum () {
    try {
        return this.number1+this.number2
    } catch (err){
        console.log ("Numbers detected as chaacters")
        this.number1_corrected=parseInt(this.number1)
        this.number2_corrected=parseInt(this.number2)
        return this.number1_corrected+this.number2_corrected
    }
    };

    multiply () {
        return this.number1*this.number2;
    };

    divide () {
        return this.number1/this.number2;
    };
}

const numberDict = {
    number1:1,
    number2:2
};


const numbers= new NumberReceiver (numberDict);

console.log (numbers.sum());
console.log (numbers.multiply());
console.log (numbers.divide());

