const createPromise = ({ timeMs, fail = false }) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`T${timeMs}: fail set to: ${fail})`);
      if (fail) {
        console.log(`T${timeMs}: WILL reject`);
        reject(new Error(`T${timeMs}: FAIL`));
      } else {
        resolve(console.log(`T${timeMs}: PASS (fail: ${fail})`));
      }
    }, timeMs);
  });

const promiseConfigs = [
  { timeMs: 5 },
  { timeMs: 10, fail: true },
  { timeMs: 30 },
  { timeMs: 50, fail: true },
  { timeMs: 75, fail: true },
];

try {
  await Promise.all(promiseConfigs.map(config => createPromise(config)));

} catch (error) {
  console.error('CAUGHT ERROR', error.message);
}
