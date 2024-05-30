"use strict";

function saveNotesToLocalStorage() {
    const notes = Array.from(document.querySelectorAll('.note')).map(note => ({
        content: note.querySelector('textarea').value,
        category: note.querySelector('.note-category').textContent
    }));
    localStorage.setItem('notes', JSON.stringify(notes));
}

function loadNotesFromLocalStorage() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach(note => {
        createNoteElement(note.content, note.category);
    });
}

function createNoteElement(content, category) {
    const notesContainer = document.getElementById('notes');
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');

    const categoryElement = document.createElement('span');
    categoryElement.classList.add('note-category');
    categoryElement.textContent = category;
    noteElement.appendChild(categoryElement);

    const noteTextarea = document.createElement('textarea');
    noteTextarea.value = content;
    noteElement.appendChild(noteTextarea);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = '&times;';
    deleteButton.onclick = () => {
        notesContainer.removeChild(noteElement);
        saveNotesToLocalStorage(); // Update local storage after deleting a note
    };
    noteElement.appendChild(deleteButton);

    notesContainer.appendChild(noteElement);
}

function addNote() {
    const noteContent = document.getElementById('new-note-content').value;
    const noteCategory = document.getElementById('note-category').value;
    if (noteContent.trim() === "") {
        alert("A nota não pode estar vazia!");
        return;
    }

    createNoteElement(noteContent, noteCategory);
    document.getElementById('new-note-content').value = "";
    saveNotesToLocalStorage(); // Save new note to local storage
}

window.onload = loadNotesFromLocalStorage; // Load notes when the page loads
