function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  // 가상의 유효한 사용자 정보 (예: 아이디 "naveruser", 비밀번호 "1234")
  const validUsername = "abc";
  const validPassword = "1234";

  if (username === validUsername && password === validPassword) {
    message.style.color = "green";
    message.textContent = "로그인 성공!";
  } else {
    message.style.color = "red";
    message.textContent = "아이디 또는 비밀번호가 잘못 되었습니다.";
  }
}
