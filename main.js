function getData(callback) {
    let data = 0;
    setTimeout(() => {
        data = 'data';
        callback(data);
    }, 1000);
}
function printData(data){console.log(data)};

getData(printData);