document.addEventListener("DOMContentLoaded", function () {
    const bgMusic = document.getElementById("bg-music");
    const toggleMusicButton = document.getElementById("toggle-music");
    let isPlaying = false;

    // เล่นเพลงอัตโนมัติเมื่อโหลดหน้าเว็บ
    function startMusic() {
        if (!isPlaying) {
            bgMusic.volume = 0; // เริ่มเสียงเบา
            bgMusic.play().then(() => {
                fadeInMusic();
                isPlaying = true;
                toggleMusicButton.textContent = "🔊 ปิดเพลง"; // อัปเดตปุ่ม
            }).catch(err => console.log("Autoplay blocked:", err));
        }
    }

    // เอฟเฟกต์เสียงค่อยๆ ดังขึ้น
    function fadeInMusic() {
        let volume = 0;
        let interval = setInterval(() => {
            if (volume < 0.5) { // ค่อยๆ ดังขึ้นถึงระดับ 0.5
                volume += 0.05;
                bgMusic.volume = volume;
            } else {
                clearInterval(interval);
            }
        }, 150);
    }

    // ปุ่มเปิด/ปิดเพลง
    toggleMusicButton.addEventListener("click", function () {
        if (bgMusic.paused) {
            startMusic();
        } else {
            bgMusic.pause();
            isPlaying = false;
            toggleMusicButton.textContent = "🔈 เปิดเพลง";
        }
    });

    // พยายามเล่นเพลงอัตโนมัติ
    startMusic();
});