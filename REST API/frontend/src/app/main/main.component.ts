import { NoteServices } from '../shared/note.service';
import { Component, OnInit } from '@angular/core';
import { Note } from '../models/Interface';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  loading = false
  note: Note[] = []
  id: number;

  constructor(private noteService: NoteServices,
    private activatedRouter: ActivatedRoute, 
    private router:Router) {
    this.activatedRouter.params.subscribe(param => {
      this.id = param.id
    })
  }

  ngOnInit() {
    this.getAll()

  }

  getAll() {
    this.noteService.getAll().subscribe(note => {
      this.loading = false,
        this.note = note.filter(elem => !elem.archive);

    })
  }

  archive(id: string, note: Note) {
    this.noteService.update(id, {
      name: note.name,
      task: note.task,
      archive: true,
    }).subscribe()
  }

  update(id:string, note:Note) {
  }

}
