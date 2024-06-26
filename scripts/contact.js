function clearForm() {
  window.onbeforeunload = () => {
    document.getElementById("contactForm").reset();
  }
}
clearForm();