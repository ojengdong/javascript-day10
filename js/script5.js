const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

inputs.forEach((input, index1) => {
  input.addEventListener("keyup", (e) => {
    const currentInput = input;
    const nextInput = input.nextElementSibling;
    const prevInput = input.previousElementSibling;

    // 값에 문자가 두개 이상 있으면 지운다.
    if (currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }

    // 다음 입력이 비활성화되고 현재값이 비어있지 않은 경우
    // 다음 입력을 활성화하고 집중한다.
    if (
      nextInput &&
      nextInput.hasAttribute("disabled") &&
      currentInput.value !== ""
    ) {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    // 백스페이스를 누를 경우
    if (e.key === "Backspace") {
      // 모든 입력에 대해 다시 반복
      inputs.forEach((input, index2) => {
        // 현재 입력의 인덱스1이 외부 루프의 입력의 인덱스2 보다 작거나 같으면
        // 이전 요소가 존재하며, 입력에서 비활성화된 속성을 설정하고 이전요소에 초점을 맞춘다.
        if (index1 <= index2 && prevInput) {
          input.setAttribute("disabled", true);
          input.value = "";
          prevInput.focus();
        }
      });
    }
    // 네번째 입력(인덱스 번호3)이 비어있지않고 속성을 비활성화하지 않은 경우
    // 활성 클래스가 없으면 활성 클래스를 추가한 다음 활성 클래스를 제거한다.
    if (!inputs[3].disabled && inputs[3].value !== "") {
      button.classList.add("active");
      return;
    }
    button.classList.remove("active");
  });
});

window.addEventListener("load", () => inputs[0].focus());
