document.addEventListener("DOMContentLoaded", () => {
    const coffee = document.querySelector(".coffee1 img");
    const tea = document.querySelector(".tea1 img");
    const body = document.body;
    const container = document.querySelector(".container");

    let selected = null;

    document.querySelector(".coffee1").addEventListener("click", (e) => {
        e.preventDefault();
        if (selected === "tea") {
            showNotice("1인 1음료 입니다..");
            return;
        }
        tea.classList.add("dimmed");
        coffee.classList.remove("dimmed");
        body.classList.add("dark-mode");
        selected = "coffee";
    });

    document.querySelector(".tea1").addEventListener("click", (e) => {
        e.preventDefault();
        if (selected === "coffee") {
            showNotice("1인 1음료 입니다..");
            return;
        }
        coffee.classList.add("dimmed");
        tea.classList.remove("dimmed");
        body.classList.add("dark-mode");
        selected = "tea";
    });

    container.addEventListener("click", (e) => {
        const isCoffee = e.target.closest(".coffee1");
        const isTea = e.target.closest(".tea1");
        if (!isCoffee && !isTea) {
            coffee.classList.remove("dimmed");
            tea.classList.remove("dimmed");
            body.classList.remove("dark-mode");
            selected = null;
        }
    });
});

function showNotice(message) {
    const notice = document.getElementById("notice-text");
    notice.textContent = message;
    notice.classList.add("show");

    // 2.5초 후에 자동으로 사라짐
    setTimeout(() => {
        notice.classList.remove("show");
    }, 2500);
}
// 벨

document.addEventListener("DOMContentLoaded", () => {
    const bel1 = document.querySelector(".bel1");
    const bel2 = document.querySelector(".bel2");
    const container = document.querySelector(".container");

});
document.addEventListener("DOMContentLoaded", () => {
    const bel1 = document.querySelector(".bel1");
    const bel2 = document.querySelector(".bel2");

    // 클릭 시 기절 ↔ 부활 토글
    bel1.addEventListener("click", (e) => {
        e.preventDefault();
        bel1.classList.toggle("fainted");
    });

    bel2.addEventListener("click", (e) => {
        e.preventDefault();
        bel2.classList.toggle("fainted");
    });
});

// 메뉴
document.addEventListener("DOMContentLoaded", () => {
    const menulogo = document.querySelector(".menulogo");
    const menuin = document.querySelector(".menuin");

    menulogo.addEventListener("click", (e) => {
        e.preventDefault(); // a 태그 기본 동작 방지
        menuin.classList.toggle("show");
    });
});

// 다크모드 메뉴
document.querySelector(".coffee1").addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.add("dark-mode");
    switchMenuLogo(true);
});

document.querySelector(".container").addEventListener("click", (e) => {
    if (!e.target.closest(".coffee1") && !e.target.closest(".tea1")) {
        document.body.classList.remove("dark-mode");
        switchMenuLogo(false);
    }
});

// 사진들
document.addEventListener("DOMContentLoaded", function () {
  const allPics = ['.pic', '.pic1', '.pic2', '.pic3', '.pic4'];

  function showOnly(className) {
    allPics.forEach(sel => {
      document.querySelector(sel).style.display = (sel === className) ? 'block' : 'none';
    });
  }

  document.querySelector('.p1').addEventListener('click', function(e) {
    e.preventDefault();
    showOnly('.pic');
  });
  document.querySelector('.p2').addEventListener('click', function(e) {
    e.preventDefault();
    showOnly('.pic1');
  });
  document.querySelector('.p3').addEventListener('click', function(e) {
    e.preventDefault();
    showOnly('.pic2');
  });
  document.querySelector('.p4').addEventListener('click', function(e) {
    e.preventDefault();
    showOnly('.pic3');
  });
  document.querySelector('.p5').addEventListener('click', function(e) {
    e.preventDefault();
    showOnly('.pic4');
  });
//   벌레
 const cus = document.querySelector('.cus');

    function moveCusRandomly() {
      const maxX = window.innerWidth - 50;
      const maxY = window.innerHeight - 50;

      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);

      cus.style.left = `${randomX}px`;
      cus.style.top = `${randomY}px`;
    }

    // 페이지 로드 후 실행 보장
    window.addEventListener('DOMContentLoaded', () => {
      moveCusRandomly(); // 처음 한 번
      setInterval(moveCusRandomly, 2000); // 이후 반복
    });
});
