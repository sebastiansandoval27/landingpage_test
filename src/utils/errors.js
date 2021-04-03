export const showErrors = (body) => {
  let ss = Object.values(body.errors);
  let errors = [];
  for (let i = 0; i < ss.length; i++) {
    errors.push(ss[i].msg);
  }
  let message = errors.toString();
  return message;
};
