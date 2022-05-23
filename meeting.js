function meeting(s) {
    const res = [];
    s.toUpperCase().split(";").forEach(pare => {
        const a = pare.split("");
        a.map((sym, _, array) => {
            if(sym === ":"){
                array[array.indexOf(sym)] = " ";
                res.push(array.join(""));
            };
            
        });
    });
    const result = res.map(element => {
        return element.split(" ").reverse().join(", ");
    });
    const finishRes = result.map(el => {
        let fin = el.split("");
        fin.unshift("(");
        fin.push(")");

        return fin.join("");
    });

    return finishRes.sort().join("");
}
