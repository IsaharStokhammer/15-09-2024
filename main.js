function Mission1(){
    return new Promise((resolve, reject) => {
        resolve("Success!");
        reject("Failure!");
    })
}
Mission1().then((res)=> console.log(res)).catch((err) => console.log(err));

function Mission2(firstName, lastName) {
    let fullName = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(firstName + " " + lastName);
        }, 1000);
    });

    return fullName;
}


Mission2("John", "Doe").then(result => {
    console.log(result);
});


function multiplyByTwo(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(number * 2);
        }, 500);
    });
}

function addFive(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(number + 5);
        }, 500);
    });
}

function subtractTen(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(number - 10);
        }, 500);
    });
}


multiplyByTwo(5)
    .then(result => addFive(result))
    .then(result => subtractTen(result))
    .then(finalResult => {
        console.log(finalResult); 
    });
