import { Component, OnInit } from '@angular/core';
import { Note } from './interfaces/Note';
import { NOTES } from './data/notes';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Notes';
  titleInputActive: boolean;

  noteTitle: string;
  noteID: number;
  

  notes: Note[];
  selectedNote: Note;
  
  ngOnInit(){
    this.notes = NOTES;
    this.titleInputActive = false;

    this.noteTitle = "";
    this.noteID = NOTES.length+1;
  }

  onSelect(note: Note): void{
    this.selectedNote = note;
  }
    

  toggleInputState():void{
    this.titleInputActive = !this.titleInputActive;
  }

  addNewNote():void{
    if(this.noteTitle.trim().length == 0){
      return;
    }
    this.notes.push(
      {
        id: this.noteID,
        title: this.noteTitle,
        content: "",
        isEditingContent: false,
        isEditingTitle: false
      }
    )

    this.onSelect(this.notes[NOTES.length-1]);
    this.titleInputActive = false;

    this.noteID++;
    this.noteTitle = "";
    console.log(this.notes);
  }

  deleteNote(id: number): void{
    this.notes = this.notes.filter(note => note.id !== id);
  }

  isEmpty(): boolean{
    if (this.notes.length == 0){
      return true;
    }
  }

  
}
