import { NoteServices } from './../shared/note.service';
import { Component, OnInit } from '@angular/core';
import { Note } from '../models/Interface';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  note:Note[]=[]
  constructor(private noteService:NoteServices) { }

  ngOnInit() {
    this.getAll()
  }

  getAll() {
    this.noteService.getAll().subscribe(note => {
        this.note = note.filter(elem=>elem.archive);
    })
  }

  delete(note){
    this.noteService.delete(note).subscribe()
  }
}
