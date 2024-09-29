// // 두 개의 이미지를 매개변수로 받아서 클릭 시 교체하는 함수
// function toggleImage(imageId, img1, img2) {

//     // 이미지의 아이디를 저장하는 변수
//     const imageElement = document.getElementById(imageId);

//     // 이미지 파일명을 2개씩 저장하는 변수
//     const images = [img1, img2];

//     //
//     let currentImageIndex = 0;

//     // 이미지 클릭 시 호출되는 이벤트 리스너
//     imageElement.addEventListener('click', function () {
//         currentImageIndex = (currentImageIndex + 1) % images.length;
//         this.src = images[currentImageIndex];
//     });
// }