// JS orqali kod yaratish va bosqichlarni ko'rsatish (simulyatsiya)
let generatedCode = '';

const stepEmail = document.querySelector('.step-email');
const stepCode = document.querySelector('.step-code');
const stepPassword = document.querySelector('.step-password');

const sendBtn = document.getElementById('send-code');
const verifyBtn = document.getElementById('verify-code');
const setPasswordBtn = document.getElementById('set-password');

sendBtn.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    if (!email) return alert('Emailni kiriting!');
    
    // Kod yaratish simulyatsiyasi
    generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
    alert('Sizning kodingiz: ' + generatedCode + ' (simulyatsiya)');

    stepEmail.style.display = 'none';
    stepCode.style.display = 'block';
});

verifyBtn.addEventListener('click', () => {
    const code = document.getElementById('code').value;
    if (code === generatedCode) {
        alert('Kod tasdiqlandi!');
        stepCode.style.display = 'none';
        stepPassword.style.display = 'block';
    } else {
        alert('Kod noto‘g‘ri!');
    }
});

setPasswordBtn.addEventListener('click', () => {
    const password = document.getElementById('password').value;
    if (!password) return alert('Parolni kiriting!');
    alert('Ro‘yxatdan o‘tish muvaffaqiyatli! Profilni to‘ldirish sahifasiga o‘tasiz.');
    window.location.href = 'profile.html'; // keyingi bosqich
});
