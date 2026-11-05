
const form = document.getElementById("contactForm");

form.addEventListener("submit", async function(event) {

    event.preventDefault();

    const status = document.getElementById("formStatus");
    const button = document.getElementById("submitBtn");

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const consent = document.getElementById("consent").checked;

    if (!name || !email || !message || !consent) {
        status.textContent = "請確認必填欄位是否填寫完整。";
        return;
    }

    if (document.querySelector('[name="website"]').value) {
        return;
    }

    // 將這裡替換成你的 Apps Script /exec 網址
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxyLpGTTsCVkh-kkziLiKT-vMR3F4Pt8Hq_MUUthO8kRgPwQaS5KT2dQ4yXplGoScR2oQ/exec";

    const formData = new URLSearchParams(
        new FormData(form)
    );

    button.disabled = true;
    button.textContent = "資料傳送中...";
    status.textContent = "正在送出，請稍候。";

    try {

        await fetch(SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            body: formData
        });

        status.textContent =
            "已送出表單要求，請稍候確認收件信箱。";

        form.reset();

    } catch (error) {

        status.textContent =
            "傳送時發生問題，請稍後再試或使用其他聯絡方式。";

        console.error(error);

    } finally {

        button.disabled = false;
        button.textContent = "送出諮詢需求 ↗";

    }

});
