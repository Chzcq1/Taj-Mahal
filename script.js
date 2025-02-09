// ทำให้ fade-in ทำงานเมื่อเลื่อนถึง
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        { threshold: 0.3 }
    );

    elements.forEach(element => {
        observer.observe(element);
    });
});

// สร้างละอองฝุ่นในแบ็คกราวด์
function createDust() {
    const body = document.body;
    for (let i = 0; i < 20; i++) {
        let dust = document.createElement("div");
        dust.classList.add("dust");
        dust.style.left = Math.random() * 100 + "vw";
        dust.style.top = Math.random() * 100 + "vh";
        dust.style.animationDuration = Math.random() * 5 + 3 + "s";
        body.appendChild(dust);

        setTimeout(() => {
            dust.remove();
        }, 8000);
    }
}
setInterval(createDust, 3000);

function createBubbles() {
    const body = document.body;
    for (let i = 0; i < 8; i++) { // สร้างฟองอากาศ 8 ฟอง
        let bubble = document.createElement("div");
        bubble.classList.add("bubble");

        let size = Math.random() * 40 + 20; // ขนาดฟอง 20px - 60px
        bubble.style.width = size + "px";
        bubble.style.height = size + "px";

        bubble.style.left = Math.random() * 100 + "vw";
        bubble.style.bottom = "-50px"; // เริ่มจากด้านล่างของหน้าจอ
        bubble.style.animationDuration = Math.random() * 5 + 4 + "s"; // 4-9 วินาที
        bubble.style.animationDelay = Math.random() * 2 + "s";

        body.appendChild(bubble);

        setTimeout(() => {
            bubble.remove();
        }, 10000);
    }
}

setInterval(createBubbles, 2000);