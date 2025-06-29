const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 300);
});

const promiseA = new Promise((resolve, reject) => {
  resolve(777);
}).then((val) => console.log(val));
