import { Injectable } from '@angular/core';
import { Note } from '../models/Interface';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

 @Injectable({
    providedIn: 'root'
  })

export class NoteServices {
 
    constructor(private http: HttpClient) {

    }

  getAll(): Observable<Note[]> {
        return this.http.get<Note[]>('/api/main')
        
    }

   update( _id:string, note:Note):Observable<Note>{
        return this.http.patch<Note>(`/api/main/${_id}`, note)
    }

    delete(id:string){
        return this.http.delete<void>(`/api/main/${id}`)
    }

  create(note:Note):Observable<Note>
    {
        return this.http.post<Note>(`api/add/`, note)
    }

    getItemById(id:string):Observable<Note>{
      return this.http.get<Note>(`/api/main/${id}`)
    }
}