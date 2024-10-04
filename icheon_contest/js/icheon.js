// 전역변수
var listItems;      // 선언
var nowIndex = 0;   // 현재 인덱스 설정 : 0

// 기본
window.onload = function () {

    listItems = document.querySelectorAll('#contents ul li');   // 모든 리스트 가져오기

    // 모든 리스트 숨기기
    listItems.forEach(function (item) {
        item.style.display = 'none';
    })

    // 첫 번째 리스트만 보이게 하기
    if (listItems.length > 0) {
        listItems[0].style.display = 'block';
    }

}

// 함수1 : 이전으로 버튼을 누르면 이전페이지로 전환
function toBack() {
    if (nowIndex <= 0) {
        // 현재 인덱스가 0보다 같거나 작으면 변화 없음
        nowIndex = 0;
    } else {
        // 현재 인덱스가 0보다 크면 -1
        nowIndex = nowIndex - 1;
    }

    // 호출 : 페이지를 전환
    updateDisplay();
}


// 함수2 : 다음으로 버튼을 누르면 다음페이지로 전환
function toNext() {
    if (nowIndex >= 5) {
        // 현재 인덱스가 5보다 같거나 크면 변화 없음
        nowIndex = 5;
    } else {
        // 현재 인덱스가 0보다 작으면 +1
        nowIndex = nowIndex + 1;
    }

    // 호출 : 페이지를 전환
    updateDisplay();
}

// 페이지 전환을 적용시키는 함수
function updateDisplay() {
    listItems.forEach(function (item) {
        item.style.display = 'none';
    });
    listItems[nowIndex].style.display = 'block';
}