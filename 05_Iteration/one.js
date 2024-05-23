for(let i = 0 ; i <= 10  ; i++){
    const element = i;
    console.log(element);
    if(i == 5)
        console.log("5 is best number");
}

for (let i = 1; i <= 10; i++) {
    console.log(`Table for the ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Outer Loop value: ${i} and inner loop ${j}`);
        console.log(i + '*' + j + ' = ' + i*j);
    }
    
}