const validateEmail = (email) => {
  const re = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
  return re.test(String(email).toLowerCase());
};

const getDayMonthYear = (date) => {
  const parseDate = new Date(date);
  const month = parseDate.getUTCMonth() + 1; //months from 1-12
  const day = (parseDate.getDate() + 1).toString().padStart(2, "0");
  const year = parseDate.getUTCFullYear();
  return `${day}/${month}/${year}`;
};

const getInputDate = (date) => {
  console.log(date);
  const parseDate = new Date(date);
  const month = (parseDate.getMonth() + 1).toString().padStart(2, "0");
  const day = (parseDate.getDate() + 1).toString().padStart(2, "0");
  const year = parseDate.getUTCFullYear();
  return `${year}-${month}-${day}`;
};

export { validateEmail, getDayMonthYear, getInputDate };
