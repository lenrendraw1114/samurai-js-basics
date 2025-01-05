// 1. HTML要素を取得し、定数に代入
const button = document.getElementById('btn');
const textElement = document.getElementById('text');

// 2. ボタンをクリックした際に文字を変更する
button.addEventListener('click', () => {
  textElement.textContent = 'ボタンをクリックしました';
});
