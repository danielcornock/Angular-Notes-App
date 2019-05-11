import { Component, Input } from '@angular/core';
import { Note } from '../../interfaces/Note';



@Component({
  selector: 'note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss']
})
export class NoteItemComponent{

  @Input() activeNote: Note;

  constructor() { 
  }

  editNote():void{
    this.activeNote.isEditingContent = true;
  }

  editTitle(): void{
    this.activeNote.isEditingTitle = true;
  }

  doneEdit():void{
    this.activeNote.isEditingContent = false;
    this.activeNote.isEditingTitle = false;
  }

}
