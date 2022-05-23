function pigIt(str){
    const word = str.split(" ");
    const a = word.map(w => {
        let warr = w.split('');
        let firstSym = warr.shift();
        warr.push(firstSym);
        const res = warr.join("").trim()

        if(res[res.length - 1] === "!" || res[res.length - 1] === "?") {
            return res;
        }else {
            return res + "ay";
        }

    })
    const result = a.join(" ").trim();
    return result;
    
}
