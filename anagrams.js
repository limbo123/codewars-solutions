function anagrams(word, words) {
    let obj = {};
    let obj2 = {};
    let result = [];
    for(let i = 0; i < word.length; i++) {
        if(obj.hasOwnProperty(word[i])){
            obj[word[i]]++;
        }else {
         obj[word[i]] = 1;
        }
    }
    words.forEach(el => {
        for(let i = 0; i < el.length; i++) {
            if(obj2.hasOwnProperty(el[i])){
                obj2[el[i]]++;
            }else {
             obj2[el[i]] = 1;
            } 
        }
        if(JSON.stringify(Object.keys(obj).sort()) === JSON.stringify(Object.keys(obj2).sort())) {

            Object.keys(obj).forEach(item => {
                if(obj2[item] === obj[item]){
                    if(!result.includes(el)){
                        result.push(el);
                    }
                }
            })
            
        }
        obj2 = {};
    });
    console.log(result);
    return result;
};

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada', 'baab', 'baba', 'abab'])
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer', 'racer'])
anagrams('laser', ['lazing', 'lazy',  'lacer', 'laser'])