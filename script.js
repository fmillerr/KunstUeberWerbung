function main() {
  $(function () {
    // Elemente auswählen
    checkboxRegestrieren();
  });
}

function checkboxRegestrieren() {
    const checkbox = document.getElementById("chkBoxDownload");
    const button = document.getElementById("btnDownload");

    // Event-Listener für die Checkbox
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            button.disabled = false; // Button aktivieren
        } else {
            button.disabled = true;
        }
    });
}

main();

