console.log("MAIN JS LOADED")

const app = document.querySelector("#app")

let messages = []

app.innerHTML = `
  <div class="chat">
    <div id="messages" class="messages"></div>
    <div class="input-box">
      <input id="input" placeholder="Type your message..." />
      <button id="send">Send</button>
    </div>
  </div>
`

const messagesDiv = document.getElementById("messages")
const input = document.getElementById("input")
const sendBtn = document.getElementById("send")

sendBtn.onclick = async () => {
  const text = input.value.trim()
  if (!text) return

  messages.push({ role: "user", text })
  input.value = ""
  render()

  const res = await fetch("http://localhost:3000/api/chat/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: text,
      conversationId: "frontend-conv-1",
      userId: "user1"
    })
  })

  const contentType = res.headers.get("content-type")

  if (contentType && contentType.includes("application/json")) {
    const data = await res.json()
    messages.push({
      role: "agent",
      text: data.reply || "No reply"
    })
    render()
    return
  }

  const textReply = await res.text()
  messages.push({
    role: "agent",
    text: textReply
  })
  render()
}

function render() {
  messagesDiv.innerHTML = messages
    .map(
      (m) => `
      <div class="bubble ${m.role}">
        ${m.text}
      </div>
    `
    )
    .join("")
}
