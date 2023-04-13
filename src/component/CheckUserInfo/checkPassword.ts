const checkPassword = (password: string) => {
  if (password.search(/\s/) !== -1) {
    alert("패스워드는 공백이 없어야 합니다.");
    return false;
  }
  if (password.length < 8) {
    alert("패스워드는 8자리 이상이어야 합니다.");
    return false;
  }
  if (password.length > 20) {
    alert("패스워드는 20자리 이하이어야 합니다.");
    return false;
  }
  if (password.search(/[0-9]/g) < 0) {
    alert("패스워드는 숫자를 포함해야 합니다.");
    return false;
  }
  if (password.search(/[a-z]/gi) < 0) {
    alert("패스워드는 영문자를 포함해야 합니다.");
    return false;
  }

  return true;
};

export default checkPassword;
