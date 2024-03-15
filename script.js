document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("generateButton").addEventListener("click", function() {
        generateQR();
    });
});

function generateQR() {
    var qrText = document.getElementById("inputText").value;
    console.log("Texto para el código QR:", qrText); // Agregamos un console.log() para depurar
    var qrContainer = document.getElementById("qrContainer");
    var qrCodeDiv = document.getElementById("qrCode");
    qrCodeDiv.innerHTML = ""; // Limpiamos el contenido anterior

    if (qrText !== "") {
        // Generar el código QR
        var qrCode = new QRCode(qrCodeDiv, {
            text: qrText,
            width: 200,
            height: 200
        });

        // Mostrar el código QR debajo del botón "Generar"
        qrContainer.style.display = "block";
    } else {
        alert("Por favor, introduce un dato para generar el código QR.");
    }
}