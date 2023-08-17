const button = document.querySelector("button");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log("Speech Recognition started");
};

recognition.onresult = function (event) {
    console.log(event);

    const spokenWords = event.results[0][0].transcript;

    console.log("Spoken words are", spokenWords);
    computerSpeech(spokenWords);
};

function computerSpeech(words) {
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.pitch = 0.9;
    speech.volume = 1;
    speech.rate = 1;

    determineWords(speech,words);

    window.speechSynthesis.speak(speech);
}


function determineWords(speech,words) {
    if (words.includes("who am I")){
        speech.text="you are my master!";
    }
    if (words.includes("How are you")){
        speech.text='Im fine,and you !';
    }
    if (words.includes("How is the weather")){
        speech.text='why you care about that? you never go out!';
    }
    if (words.includes("Do you love me")){
        speech.text='yes,Love you a lot !';
    }
    if (words.includes("open Google for me")) {
        speech.text = 'opening Google for you now!';
        window.open('https://www.google.com/');
    }
}

button.addEventListener("click", () => {
    recognition.start();
});
