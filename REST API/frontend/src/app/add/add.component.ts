import { ActivatedRoute, Params, Router } from '@angular/router';
import { NoteServices } from '../shared/note.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Note } from '../models/Interface';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  id: string
  selectedNote
  addForm: FormGroup
  note: Note
  constructor(private noteServices: NoteServices,
    private activatedRouter: ActivatedRoute,
    private route: Router) {
    this.activatedRouter.params.subscribe(param => {
      if (param.id) this.id = param.id
    })
  }


  ngOnInit() {

    if (this.id) {
      this.selectedNote = this.noteServices.getItemById(this.id).subscribe(note => {
        this.note = note;
        this.addForm = new FormGroup({
          "name": new FormControl(this.note.name),
          "task": new FormControl(this.note.task)
        })
      })
    }

    else {
      this.addForm = new FormGroup({
        "name": new FormControl("", Validators.required),
        "task": new FormControl("", Validators.required)
      })
    }


  }

  submit() {
    const task: Note = {
      name: this.addForm.value.name,
      task: this.addForm.value.task,
    }
    if (this.id) {
      this.noteServices.update(this.id, task).subscribe();
    }
    else {
      this.noteServices.create(task).subscribe(
        () => this.addForm.reset()
      );
    }
    this.route.navigate([`/`])
  }


}
