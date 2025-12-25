const addNoteBtn = document.getElementById("addNoteBtn");
const notesContainer = document.getElementById("notesContainer");

addNoteBtn.addEventListener("click", () => {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
    <input type="text" class="title" placeholder="Note Title" />
    <textarea class="message" placeholder="Your message..."></textarea>
    <div class="note-icons">
      <i class="fas fa-thumbtack" title="Pin"></i>
      <i class="fas fa-archive" title="Archive"></i>
      <i class="fas fa-trash" title="Delete"></i>
    </div>
  `;

  const pinBtn = note.querySelector(".fa-thumbtack");
  const archiveBtn = note.querySelector(".fa-archive");
  const deleteBtn = note.querySelector(".fa-trash");

  // 📌 Pin Note
  pinBtn.addEventListener("click", () => {
    note.style.order = "-1";
    pinBtn.style.color = "#f39c12";
  });

  // 🗃️ Archive Note
  archiveBtn.addEventListener("click", () => {
    note.style.opacity = "0.5";
    note.querySelector(".title").disabled = true;
    note.querySelector(".message").disabled = true;
    archiveBtn.style.color = "#777";
  });

  // 🗑️ Delete Note
  deleteBtn.addEventListener("click", () => {
    note.remove();
  });

  notesContainer.insertBefore(note, notesContainer.firstChild);
});
