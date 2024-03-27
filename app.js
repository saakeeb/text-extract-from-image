function imageExtract() {
  const inputFile = document.getElementById("input-file");
  const outputResult = document.getElementById("output-div");
  const language = document.getElementById("language-dropdown").value;
  outputResult.textContent = "";

  const imageFile = inputFile.files[0];

  if (!imageFile) {
    outputResult.textContent = "No Image File Selected, Please Upload An Image";
    return;
  }

  Tesseract
    .recognize(imageFile, language)
    .then(({ data }) => {
      outputResult.textContent = data.text;
    })
    .catch((error) => {
      console.error("Error: ", error);
      outputResult.textContent = "Error: " + error;
    });
}


function copyToClipboard() {
  const outputText = document.getElementById("output-div").textContent;
  navigator.clipboard
    .writeText(outputText)
    .then(() => {
      alert("Text copied to clipboard!");
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
}
