document.addEventListener("DOMContentLoaded", function() {
    const editor = document.getElementById('editor');
    const preFilledText = `🦩 06.10.2024 22:00 🦩\n🦩 32.88033° N, 117.24109° W 🦩`;
    editor.textContent = preFilledText; // Use textContent to set non-editable text
});
