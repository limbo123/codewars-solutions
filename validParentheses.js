function validParentheses(parens) {
    let balance = 0;
    parens.split("")
    .forEach(el => {
        if(el === "("){
            balance++;
        }
        else if(el === ")" && balance > 0){
            balance--;
        }
        else if(el === ")" && balance === 0){
            balance = false; 
        }
    });
    if(balance === 0) {
        return true;
    }
return false;
};


