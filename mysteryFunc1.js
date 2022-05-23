function solved(str){
    let result = "";
    const arr = str.split("");
    if(arr.length % 2 !== 0) {
        const filteredArr = arr.filter((el, index) => {
            return index !== Math.round(arr.length / 2 - 1);
        });
        console.log(filteredArr);
        const sortedArr = filteredArr.sort();
        result = sortedArr.join("");

    }else {
        result = arr.sort().join("");
    }
    return result;
}