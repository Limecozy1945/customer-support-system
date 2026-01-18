console.log("MAIN JS LOADED");

document.addEventListener("DOMContentLoaded", () => {
  const chat = document.getElementById("chat");
  const input = document.getElementById("messageInput");
  const sendBtn = document.getElementById("sendBtn");
  const typing = document.getElementById("typing");

  const conversationId = "frontend-conv-1";
  const userId = "user1";

  if (!sendBtn) {
    console.error("Send button not found");
    return;
  }

  function addMessage(text, type) {
    const msg = document.createElement("div");
    msg.className = `message ${type}`;
    msg.innerText = text;
    chat.appendChild(msg);
    chat.scrollTop = chat.scrollHeight;
  }

  sendBtn.addEventListener("click", async () => {
    const message = input.value.trim();
    if (!message) return;

    addMessage(message, "user");
    input.value = "";
    typing.classList.remove("hidden");

    try {
      const res = await fetch("http://localhost:3000/api/chat/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          conversationId,
          userId,
        }),
      });

      const data = await res.json();
      typing.classList.add("hidden");
      addMessage(data.reply, "agent");
    } catch (err) {
      console.error(err);
      typing.classList.add("hidden");
      addMessage("Server error. Please try again.", "agent");
    }
  });
});
