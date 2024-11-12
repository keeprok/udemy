const a = (call) => {
  setTimeout(() => {
    console.log(1);
    call();
  }, 1000);
};

const b = () => console.log(2);
a(() => b());

const c = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(3);
      resolve();
    }, 1000);
  });
};

const d = () => console.log(4);
c().then(() => d());
