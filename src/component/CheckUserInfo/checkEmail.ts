const emailReg = new RegExp(
  // eslint-disable-next-line no-control-regex
  "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
);

const checkEmail = (email: string) => {
  if (!emailReg.test(email)) {
    alert("이메일 형식이 올바르지 않습니다.");
    return false;
  }
  return true;
};

export default checkEmail;
