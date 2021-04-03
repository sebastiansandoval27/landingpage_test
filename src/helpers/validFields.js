const validate = (values) => {
  const errors = {};

  let validMessage = /^[^*|":<>[\]{}`\\()';@&$]+$/;

  if (!values.password) {
    errors.password = "Requerido";
  } else if (values.password === "" || !validMessage.test(values.password)) {
    errors.password = "Inválido";
  }

  if (!values.email) {
    errors.email = "Requerido";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Inválido";
  }

  return errors;
};

export default validate;
