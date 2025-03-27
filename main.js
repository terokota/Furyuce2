onload = () =>{
        document.body.classList.remove("container");
};
function createMeteor() {
    const meteor = document.createElement("div");
    meteor.classList.add("meteor");
    document.body.appendChild(meteor);

    // Tentukan posisi awal meteor secara acak
    let startX = Math.random() * window.innerWidth;
    let startY = -50;
    let endX = startX + (Math.random() * 200 - 100);
    let endY = window.innerHeight + 50;

    // Atur posisi awal meteor
    meteor.style.left = `${startX}px`;
    meteor.style.top = `${startY}px`;

    // Animasi jatuh dengan transform
    meteor.animate([
        { transform: `translate(0, 0)`, opacity: 1 },
        { transform: `translate(${endX - startX}px, ${endY}px)`, opacity: 0 }
    ], {
        duration: 1500, // Waktu jatuh
        easing: "linear"
    });

    // Hapus meteor setelah animasi selesai
    setTimeout(() => {
        meteor.remove();
    }, 1500);
}

// Jalankan meteor setiap beberapa detik
setInterval(() => {
    if (Math.random() < 0.5) { // 50% kesempatan muncul meteor
        createMeteor();
    }
}, 3000);
// Fungsi untuk membuat meteor
function createMeteor() {
    const meteor = document.createElement("div");
    meteor.classList.add("meteor");
    document.body.appendChild(meteor);

    // Posisi awal secara acak
    let startX = Math.random() * window.innerWidth;
    let startY = -50;
    let endX = startX + (Math.random() * 200 - 100);
    let endY = window.innerHeight + 50;

    // Set posisi awal
    meteor.style.left = `${startX}px`;
    meteor.style.top = `${startY}px`;

    // Animasi jatuh
    meteor.animate([
        { transform: `translate(0, 0)`, opacity: 1 },
        { transform: `translate(${endX - startX}px, ${endY}px)`, opacity: 0 }
    ], {
        duration: 1500,
        easing: "linear"
    });

    // Hapus meteor setelah animasi selesai
    setTimeout(() => {
        meteor.remove();
    }, 1500);
}

// Buat meteor setiap beberapa detik
setInterval(() => {
    if (Math.random() < 0.5) { // 50% kemungkinan muncul meteor
        createMeteor();
    }
}, 3000);