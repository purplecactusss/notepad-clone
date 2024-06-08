document.addEventListener("DOMContentLoaded", function() {
    const editor = document.getElementById('editor');
    const preFilledText = `
               _         _
  __   ___.--'_\`.     .'\`_--.___   __
 ( _\`.'. -   'o\` )   ( 'o\`   - .\`.'_ )
 _\\.'_'      _.-'     \`-._      \`_\`./_
( \`. )    //\`         '/\\    ( .'/ )
 \\_\`-'`---'\\\\__,       ,__//\`---'\`-'_/
  \\\`        \`-\         /-'        '/
   \`                               '
   `; // Multiline string containing the ASCII art
    editor.textContent = preFilledText; // Use textContent to set non-editable text
});
