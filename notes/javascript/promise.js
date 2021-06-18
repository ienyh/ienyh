const p_all = Promise.all([Promise.resolve(), Promise.resolve()]);

setTimeout(console.log, 0, p_all); // Promise { 1 }

p_all.then(() => {
  console.log("Promise.all()"); // Promise.all()
});

const p_race = Promise.race([
  Promise.resolve(1),
  Promise.reject(2),
  Promise.resolve(3),
]);

setTimeout(console.log, 0, p_race); // Promise { 1 }

p_race.then(data => {
  console.log(data); // 1
});

const p_fulfilled = Promise.resolve(1);
setTimeout(console.log, 0, p_fulfilled); // Promise { 1 }

const p_reject = Promise.reject(1);
setTimeout(console.log, 0, p_reject); // Promise { <rejected> 1 }
