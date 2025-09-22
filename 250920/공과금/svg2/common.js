// 모드 토글 함수
function initModeToggle() {
  const body = document.body;

  const themeBtn = document.getElementById("toggle-theme");
  if(themeBtn) {
    themeBtn.addEventListener("click", () => {
      body.setAttribute("data-theme", body.getAttribute("data-theme") === "light" ? "dark" : "light");
    });
  }

  const fontBtn = document.getElementById("toggle-font");
  if(fontBtn) {
    fontBtn.addEventListener("click", () => {
      body.setAttribute("data-font", body.getAttribute("data-font") === "normal" ? "large" : "normal");
    });
  }
}

// 외부 sprite.svg fetch 후 인라인 삽입
function loadSVGSprite(url = 'sprite.svg') {
  fetch(url)
    .then(res => res.text())
    .then(svgText => {
      const div = document.createElement('div');
      div.style.display = 'none';
      div.innerHTML = svgText;
      document.body.insertBefore(div, document.body.firstChild);
    })
    .catch(err => console.error('SVG 불러오기 실패', err));
}

// 초기화 함수
document.addEventListener("DOMContentLoaded", () => {
  initModeToggle();
  loadSVGSprite();
});
