import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Projects, collectionName } from '../model/projects.modal';
import { BehaviorSubject, map, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private project = new BehaviorSubject<Projects[]>([]);

  constructor(private afs: AngularFirestore) {
    this.fetchData();
  }

  fetchData() {
    this.afs
      .collection(collectionName.projects)
      .snapshotChanges()
      .pipe(
        map((res) => {
          console.log('called', 'projects');
          return res.map((e) => {
            const data: any = e.payload.doc.data() as Projects;
            data.id = e.payload.doc.id;
            return data as Projects;
          });
        }),
        take(1)
      )
      .subscribe({
        next: (result) => this.project.next(result),
        error: (error) => console.error(error),
      });
  }

  getProjects() {
    return this.project.asObservable();
  }
}
