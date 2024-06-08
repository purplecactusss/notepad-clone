document.addEventListener("DOMContentLoaded", function() {
    const editor = document.getElementById('editor');
    const preFilledText = "This is the pre-filled text. You can edit this as needed.";
    editor.textContent = preFilledText; // Use textContent to set non-editable text
});
