// Function to display a modal alert
function showModalAlert(message, callback) {
  const modal = document.createElement("div");
  modal.className = "modal";

  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  const alertMessage = document.createElement("p");
  alertMessage.textContent = message;

  const proceedButton = document.createElement("button");
  proceedButton.textContent = "Proceed";

  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";

  modalContent.appendChild(alertMessage);
  modalContent.appendChild(proceedButton);
  modalContent.appendChild(cancelButton);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  proceedButton.addEventListener("click", () => {
    document.body.removeChild(modal);
    callback();
  });

  cancelButton.addEventListener("click", () => {
    document.body.removeChild(modal);
  });
}

// Event listeners for the buttons (unchanged)
document.getElementById("frontendButton").addEventListener("click", () => {
  showModalAlert("You are proceeding to the front page!", () => {
    window.location.href = "frontend.html";
  });
});

document.getElementById("backendButton").addEventListener("click", () => {
  showModalAlert("You are proceeding to the backend page!", () => {
    window.location.href = "backend.html";
  });
});

document.getElementById("graphicsButton").addEventListener("click", () => {
  showModalAlert("You are proceeding to the graphics page!", () => {
    window.location.href = "graphics.html";
  });
});

document.getElementById("uiUxButton").addEventListener("click", () => {
  showModalAlert("You are proceeding to the UI/UX page!", () => {
    window.location.href = "uiUx.html";
  });
});
