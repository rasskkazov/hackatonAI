export const mockGet = () => {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
  return p;
};
