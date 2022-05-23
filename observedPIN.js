function getPINs(observed) {
  let result = [];
  const rows = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [undefined, 0, undefined],
  ];
  const allVersionsArr = []; 
  console.log(observed);

  observed.split("").forEach((number) => {
    number = +number;
    const row = rows.find((row) => row.includes(number));

    const rowsOfNumber = [
      rows[rows.indexOf(row) - 1],
      rows[rows.indexOf(row)],
      rows[rows.indexOf(row) + 1],
    ];

    const indexOfNumber = rowsOfNumber[1].indexOf(number);

    const versionsOfNumber = [];

    rowsOfNumber.forEach((row, idx) => {
      if (row) {
        if (idx === 1) {
          versionsOfNumber.push(row[indexOfNumber - 1]);
          versionsOfNumber.push(row[indexOfNumber + 1]);
        }
        versionsOfNumber.push(row[indexOfNumber]);
      } else {
        return;
      }
    });
    allVersionsArr.push(versionsOfNumber.filter((version) => version !== undefined));
  });

    if(observed.length <= 1) {
      result = allVersionsArr[0];
    }else if(observed.length > 1 && observed.length <= 8) {
      allVersionsArr[0].forEach((number) => {
       
        let version = number.toString().split("");
            
                if(observed.length < 3) {
                  allVersionsArr[allVersionsArr.length - 1].forEach(lastArrayNumber => {
                    result.push(version.join("") + lastArrayNumber.toString());
                  })

                }else {
                  const addOneNumber = (idx) => {
                    allVersionsArr[idx].forEach(nextArrayNumber => {

                      version.push(nextArrayNumber.toString());

                      if(allVersionsArr[idx + 1] === allVersionsArr[allVersionsArr.length - 1]) {
                        allVersionsArr[allVersionsArr.length - 1].forEach(lastArrayNumber => {
                          result.push(version.join("") + lastArrayNumber.toString());
                        })
                      }else {
                        if(allVersionsArr[idx + 1]) {
                          addOneNumber(idx + 1);
                        }
                      }
                      version.pop();
                    })
                   
                  }
                  addOneNumber(1);
                  }
        })
    }

  finalResult = result.map(el => el.toString());
  return finalResult;
}
