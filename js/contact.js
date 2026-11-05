const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

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

    status.textContent = "表單畫面已完成，尚未連接資料寄送服務。";

});
