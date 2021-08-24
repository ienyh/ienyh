async function func (flag) {
  return new Promise((resolve, reject) => {
    if (flag) {
      resolve("resolve");
    } else {
      reject("reject");
    }
  });
}

func(true).then(console.log); // resolve
func(false).catch(console.log); // reject

// setTimeout(() => { console.log(func(true).then(console.log)); }, 1000);
// setTimeout(() => { console.log(func(false).catch(console.log)); }, 1000);

async function getNumber () {
	return 3 * 3;
}

console.log(getNumber()); // Promise { 9 }

getNumber().then(res => console.log(res));


async function func_2 () {
  const res = await Promise.resolve("hello world");
  console.log(res);
}

func_2(); // hello world

async function func_3 () {
  try {
    const res = await Promise.reject("error");
  } catch (e) {
    console.error(e);
  }
}

func_3(); // error

async function func_4 () {
  const str = await "hello world";
  console.log(str);
}

func_4(); // hello world

console.log(2 ** 3 * 2 + 1); // 17
