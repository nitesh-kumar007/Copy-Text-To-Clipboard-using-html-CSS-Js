document.getElementById("submit").addEventListener("click", function () {
  const textAreaContent = document.getElementById("disBox").value;

  // Use the Clipboard API to copy text
  navigator.clipboard
    .writeText(textAreaContent)
    .then(() => {
      alert("Description copied to clipboard!");
    })
    .catch((err) => {
      console.error("Could not copy text: ", err);
    });
});
