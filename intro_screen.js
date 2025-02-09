document.addEventListener("DOMContentLoaded", function () {
    const introScreen = document.getElementById("intro-screen");
    const mainContent = document.getElementById("main-content");
    const mysticText = document.getElementById("mystic-text");
    const tapToEnter = document.getElementById("tap-to-enter");

    // ข้อความทีละประโยค
    const mysticPhrases = [
        "ความรักนั้นเป็นนิรันดร์...",
        "แต่มักถูกทดสอบด้วยกาลเวลา",
        "หนึ่งรัก หนึ่งดวงใจ...",
        "ถูกพรากจากกันนิรันดร์"
    ];

    let index = 0;

    function showNextText() {
        if (index < mysticPhrases.length) {
            mysticText.textContent = mysticPhrases[index];
            mysticText.style.opacity = "1";
            mysticText.style.transform = "translateY(0px)";
            index++;

            setTimeout(() => {
                mysticText.style.opacity = "0";
                mysticText.style.transform = "translateY(10px)";
                setTimeout(showNextText, 1000);
            }, 2000);
        } else {
            // เมื่อจบข้อความ ให้แสดง "แตะที่ใดก็เพื่อเข้าชมเว็บไซต์"
            tapToEnter.style.display = "block";
            setTimeout(() => {
                tapToEnter.style.opacity = "1";
                tapToEnter.style.transform = "scale(1)";
            }, 500);
        }
    }

    // เริ่มแสดงข้อความทีละบรรทัด
    showNextText();

    // เมื่อแตะที่หน้าจอ ให้ซ่อน Intro และแสดงเนื้อหาเว็บ
    introScreen.addEventListener("click", function () {
        introScreen.style.opacity = "0";
        setTimeout(() => {
            introScreen.style.display = "none";
            mainContent.classList.add("show");
        }, 1500);
    });
});