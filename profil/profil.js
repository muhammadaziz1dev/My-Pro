document.getElementById('save-profile').addEventListener('click', () => {
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (!firstName || !lastName || !phone) {
        return alert('Iltimos, barcha maydonlarni to‘ldiring!');
    }

    // Simulyatsiya: ma’lumotlar localStorage da saqlanadi
    localStorage.setItem('profile', JSON.stringify({
        firstName,
        lastName,
        phone
    }));

    alert('Profil ma’lumotlari saqlandi! Asosiy sahifaga o‘tilmoqda.');
    window.location.href = 'dashboard.html'; // keyingi bosqich
});
