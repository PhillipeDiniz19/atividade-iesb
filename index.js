document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Mensagem enviada! Entraremos em contato em breve.");
    this.reset();
});