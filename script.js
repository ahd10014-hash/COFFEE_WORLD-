document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('orderForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    if (form && confirmationMessage) {
        form.addEventListener('submit', function(event) {
            // منع الإرسال الافتراضي
            event.preventDefault();

            // جمع البيانات
            const name = document.getElementById('customerName').value;
            const type = document.getElementById('coffeeType').value;
            const quantity = document.getElementById('quantity').value;

            // بناء رسالة التأكيد
            const message = `
                تم استلام طلبك يا ${name}!
                طلبك: ${quantity} كوب من ${type}.
                سيتم تجهيز طلبك في أقرب وقت!
            `;

            // عرض الرسالة
            confirmationMessage.textContent = message;
            confirmationMessage.classList.remove('hidden');

            // إخفاء النموذج
            form.style.display = 'none';

            // إعادة إظهار النموذج وتفريغه بعد 5 ثوانٍ
            setTimeout(() => {
                form.reset();
                form.style.display = 'block';
                confirmationMessage.classList.add('hidden');
            }, 5000);
        });
    }
});