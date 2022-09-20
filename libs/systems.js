window.ysd = window.ysd || {};

window.ysd.systems = {
  sleep: (sec) =>
    new Promise((resolve) => {
      const intervalId = setInterval(() => console.log("sleeping..."), 1000);
      setTimeout(() => {
        clearInterval(intervalId);
        resolve();
      }, sec * 1000);
    }),
};
