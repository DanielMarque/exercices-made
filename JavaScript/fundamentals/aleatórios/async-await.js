const random = () => {
  return Promise.resolve(Math.random());
};

const sumRandomAsyncNums = async () => {
  const first = await random();
  const second = await random();
  const third = await random();

  setTimeout(() => {
    console.log(second);
  }, 2000);
  console.log(first);

  console.log(third);
};

sumRandomAsyncNums();
