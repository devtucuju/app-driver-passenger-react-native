export const verifyLogin = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let status = 1;
      resolve(status);
    }, 2000);
  });
};
