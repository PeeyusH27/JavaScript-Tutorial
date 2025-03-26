let car1 = {
    color:"red",
    company:"ferrari",
}

function purchaseCar(currency, price){
    console.log(
        `I have purchased ${this.color} - ${this.company} for ${currency} ${price}`
    );
}

// purchaseCar.call(car1, "$",50000)
//Call(context, args)
Function.prototype.myCall = function(context = {}, ...args){
    if(typeof this !== 'function'){
        throw new Error(this + "is not callable")
    }
    context.fn=this;
    context.fn(...args)
}
purchaseCar.myCall(car1, "$",50000)
