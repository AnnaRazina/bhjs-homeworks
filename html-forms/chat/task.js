const chatWidget = document.querySelector(".chat-widget");
chatWidget.addEventListener("click", () => {
    chatWidget.classList.add("chat-widget_active")
})

let chatWidgetInput = document.getElementById("chat-widget__input");
let date = new Date();
const messages = document.querySelector( ".chat-widget__messages");
let messagesFromRobot = ["Добрый день, мы ещё не проснулись. Позвоните через 10 лет.", 
"Где ваша совесть?", 
"К сожалению, все операторы сейчас заняты. Не пишите нам больше.", 
"Кто тут?", 
"добрый день. Досвидания.", 
"мы ничего не будем вам продавать!", 
"Вы не купили ни одного товара для того, чтобы с нами так разговаривать.",];

chatWidgetInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && chatWidgetInput.value.trim().length > 0) {
        messages.innerHTML += `
        <div class="message message_client">
          <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
          <div class="message__text">
            ${chatWidgetInput.value}
          </div>
        </div>
      `;
        messages.innerHTML += `
          <div class="message">
            <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
            <div class="message__text">
              ${messagesFromRobot[Math.round(Math.random() * (messagesFromRobot.length + 1))]}
            </div>
          </div>
        `;
        chatWidgetInput.value = "";
    }  
})