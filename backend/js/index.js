const prompts = [];
const replies = [];
const arrayQ = [];
const arrayA = [];
const inputField = document.getElementById("input").value;
// fetch('http://localhost:3000/queans',{
//     method: 'POST',
//     body: JSON.stringify({
//         inputField: input
//       }),
// }).then((response) => response.json()).then((data) => {
//     console.log(data);
//     data.map((value) => {
//         arrayQ.push(value.QUESTION);
//         arrayA.push(value.ANSWER);
//     });

//     const size = 1;
//     //Que
//     while (arrayQ.length) {
//         prompts.push(arrayQ.splice(0, size));
//     };
//     //Ans
//     while (arrayA.length) {
//         replies.push(arrayA.splice(0, size));
//     };
// });



fetch('http://localhost:3000/queans', {
  method: 'POST',
  body: JSON.stringify({ que:inputField,}),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
  })
  .then(function(response){ 
  return response.json()})
  .then(function(data)
  {console.log(data)
}).catch(error => console.error('Error:', error));


document.addEventListener("DOMContentLoaded", () => {
    inputField.addEventListener("keydown", (e) => {
        if (e.code === "Enter") {
            let input = inputField.value;
            inputField.value = "";
            output(input);
        }
    });
});

output = (input) => {
    let product;
    let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
    text = text
        .replace(/ a /g, " ")   // 'tell me a story' -> 'tell me story'
        .replace(/i feel /g, "")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/ please/g, "")
        .replace(/r u/g, "are you");

    if (compare(prompts, replies, text)) {
        // Search for exact match in `prompts`
        product = compare(prompts, replies, text);
    } else if (text.match(/thank/gi)) {
        product = "You're welcome!"
    }
    else {
        // If all else fails: random alternative
        product = alternative[Math.floor(Math.random() * alternative.length)];
    }
    // Update DOM
    addChat(input, product);
};

compare = (promptsArray, repliesArray, string) => {
    let reply;
    let replyFound = false;
    for (let x = 0; x < promptsArray.length; x++) {
        for (let y = 0; y < promptsArray[x].length; y++) {
            if (promptsArray[x][y] === string) {
                let replies = repliesArray[x];
                reply = replies[Math.floor(Math.random() * replies.length)];
                replyFound = true;
                // Stop inner loop when input value matches prompts
                break;
            }
        }
        if (replyFound) {
            // Stop outer loop when reply is found instead of interating through the entire array
            break;
        }
    }
    return reply;
};

addChat = (input, product) => {
    const messagesContainer = document.getElementById("messages");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.className = "user response";
    userDiv.innerHTML = `<span>${input}</span>`;
    messagesContainer.appendChild(userDiv);

    let botDiv = document.createElement("div");
    let botImg = document.createElement("img");
    let botText = document.createElement("span");
    botDiv.id = "bot";
    botImg.className = "avatar";
    botDiv.className = "bot response";
    botText.innerText = "Typing...";
    botDiv.appendChild(botText);
    botDiv.appendChild(botImg);
    messagesContainer.appendChild(botDiv);
    // Keep messages at most recent
    messagesContainer.scrollTop = messagesContainer.scrollHeight + messagesContainer.clientHeight;
    botText.innerText = `${product}`;

};
