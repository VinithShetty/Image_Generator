const apiKey = "HUGGING_FACE_API_KEY"; // Replace this with your actual API key

const maxImage = 4;

const selectedImageNumber = undefined;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (min - max + 1)) + min;
}

function disableGenerateButton() {
    document.getElementById("generate").disabled = true;
}

function enableGenerateButton() {
    document.getElementById("generate").disabled = false;
}

function clearImageGrid() {
    const imageGrid = document.getElementById("image-grid");
    imageGrid.innerHTML = "";
}

async function generateImages(input) {
    disableGenerateButton();
    clearImageGrid();

    const loading = document.getElementById("loading");
    loading.style.display = "block";

    const imageUrls = [];

    for (let i = 0; i < maxImage; i++) {
        const randomNumber = getRandomNumber(1, 10000);
        const prompt = `${input} ${randomNumber}`;

        const response = await fetch(
            "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${apiKey}`,
                },
                body: JSON.stringify({ inputs: prompt }),
            }
        );

        if (!response.ok) {
            const error = document.createElement("h2");
            error.style.color = "red";
            error.style.fontSize = "1.2rem";
            const result = document.getElementById("result");
            error.innerHTML = await response.text();
            result.appendChild(error);
        }
        const blob = await response.blob();
        const imgUrl = URL.createObjectURL(blob);

        imageUrls.push(imgUrl);

        const img = document.createElement("img");
        img.src = imgUrl;
        img.alt = `art-${i + 1}`;
        img.onclick = () => downloadImage(imgUrl, i);
        document.getElementById("image-grid").appendChild(img);
    }
    loading.style.display = "none";
    enableGenerateButton();
    selectedImageNumber = null;
}

document.getElementById("generate").addEventListener("click", () => {
    const input = document.getElementById("user-prompt").value;
    console.log(input);
    generateImages(input);
});

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("user-prompt").value;
    console.log(input);
    generateImages(input);
});

function downloadImage(imgUrl, imageNumber) {
    const link = document.createElement("a");
    link.href = imgUrl;
    link.download = `image-${imageNumber + 1}.jpg`;
    link.click();
}


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("splash").classList.add("loaded");
});