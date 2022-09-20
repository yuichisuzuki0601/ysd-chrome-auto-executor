window.ysd = window.ysd || {};

window.ysd.systems = {
  sleep: (sec) => {
    return new Promise((resolve) => {
      const intervalId = setInterval(() => console.log("sleeping..."), 1000);
      setTimeout(() => {
        clearInterval(intervalId);
        resolve();
      }, sec * 1000);
    });
  },
  simplePath: () => {
    const tmp = location.pathname.split("/");
    return tmp[tmp.length - 1];
  },
};
