/* eslint-disable no-useless-escape */
const checkID = (id: string) => {
  if (id.length < 6) {
    alert("아이디는 6자 이상이어야 합니다.");
    return false;
  }
  if (id.length > 20) {
    alert("아이디는 20자 이하이어야 합니다.");
    return false;
  }
  if (id.search(/\s/) !== -1) {
    alert("아이디는 공백이 없어야 합니다.");
    return false;
  }
  if (id.search(/[0-9]/g) < 0) {
    alert("아이디는 숫자를 포함해야 합니다.");
    return false;
  }
  if (id.search(/[a-z]/gi) < 0) {
    alert("아이디는 영문자를 포함해야 합니다.");
    return false;
  }
  if (id.search(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g) >= 0) {
    alert("아이디는 특수문자를 포함할 수 없습니다.");
    return false;
  }
  return true;
};

export default checkID;
