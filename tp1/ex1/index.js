const promise = (value) => {
    return new Promise((resolve, reject) => {
        const positive = value >= 10;
        if (positive) {
            console.log(`Success ! The value is positive ${value}`);
            value += 10;
            value *= 5;
            resolve(`Computation is done ${value}`);
        }
    });
    return promise;
};

const param = parseInt(process.argv[2]);

promise(param).then((data) => {
    console.log(data);
}).
    catch((error) => {
        console.log(`Error is ${error}`);
    }).finally(() => {
        console.log('Finally block');
    });