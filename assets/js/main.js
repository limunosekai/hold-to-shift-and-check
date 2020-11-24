const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

let lastChecked; //마지막에 click한 checkbox를 기록하는 변수

function handleCheck(e) {
  let inBetween = false; //매 클릭 마다 처음 시작은 false
  if (e.shiftKey && this.checked) { //shift를 누른채 체크
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) { //루프를 돌다가 last 혹은 this를 만나면 inBetween 값이 전환
        inBetween = !inBetween;
      }

      if (inBetween) {                 //inBetween이 true인 값은 모두 checked 상태가 된다
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this; //click한 값을 last에 저장
}
