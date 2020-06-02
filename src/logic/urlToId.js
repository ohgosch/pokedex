export const urlToId = (url) => {
  const reg = /\/([0-9]+)\/$/;

  return +reg.exec(url)[1];
};
