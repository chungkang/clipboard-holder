const selectedText = window.getSelection();

window.onkeydown = (e) => {
// ctrl+C를 눌렀을 경우에 선택한 텍스트가 있는 경우
// e.keycode IE 지원을 안함->e.which 사용
 if(e.ctrlKey && e.which==67 && selectedText!=''){
    alert(selectedText);
 }
}
