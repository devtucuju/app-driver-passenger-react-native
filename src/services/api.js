export const verifyLogin = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let status = 2;
      resolve(status);
    }, 2000);
  });
};
