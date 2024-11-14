function login() {
  const username = document.getElementById("id").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  // 가상의 유효한 사용자 정보 (예: 아이디 "naveruser", 비밀번호 "1234")
  const Users = { abc: "1234", abcd: "2345" };

  if (Users[username] && Users[username] === password) {
    window.location.href = "/javabee/welcome.html";
  } else {
    message.style.color = "red";
    message.textContent = "아이디 또는 비밀번호가 잘못 되었습니다.";
  }
}
function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

// 모달 닫기
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// 임시 함수들
function findId() {
  alert("아이디 찾기 기능이 아직 구현되지 않았습니다.");
  closeModal("find-id-modal");
}

function findPassword() {
  alert("비밀번호 찾기 기능이 아직 구현되지 않았습니다.");
  closeModal("find-password-modal");
}

function signup() {
  alert("회원가입 기능이 아직 구현되지 않았습니다.");
  closeModal("signup-modal");
}
