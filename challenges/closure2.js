const f1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('1st promise done');
        }, 1000);
    });
};

const runner = async () => {
    const result = await f1();
    console.log(result);
};

runner();
console.log('Hello world');
