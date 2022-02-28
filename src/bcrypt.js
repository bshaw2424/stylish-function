const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = "s0//P4$$w0rD";
const someOtherPlaintextPassword = "not_bacon";

const hashPassword = async password => {
  const hash = await bcrypt.hash(password, 12);
  console.log(hash);
};

module.exports.login = async (password, hashPw) => {
  const result = await bcrypt.compare(password, hashedPassword);
  if (result) {
    console.log("logged you in! success");
  } else {
    console.log("incorrect!!!");
  }
};
