for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element)
}

for (let i = 1; i <= 25; i++) {
    // console.log(`Outer loop value : ${i}`)

    for (let c = 1; c <= 25; c++) {
        console.log(`Inner loop value: ${c} and inner loop ${i}`)
        // console.log(i + '*' + c + ' = ' + i * c)
    }
}

for (let i = 1; i <= 10; i++) {
    for (let d = 1; d <= 10; d++) {
        // console.log(i + '*' + d + '=' + i * d)
    }
}


let myArray = ['avijit', 'Aditya', 'Rintu']
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`detected 5`)
        break
    }

    // console.log(index)
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`)
        continue
    }

    console.log(index)
}