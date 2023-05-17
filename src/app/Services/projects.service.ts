import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { IData, Projects } from '../model/projects.modal';
import { async, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  public projectsCollection: AngularFirestoreCollection;
  projects: Projects[] = [];
  reqPending = false;

  constructor(private afs: AngularFirestore) {
    this.projectsCollection = afs.collection('projects');
  }

  addProject(project: Projects) {
    project.id = this.afs.createId();
    return this.afs.collection('projects').add(project);
  }

  // this.reqPending = true;

  Obs$ = this.afs
    .collection('projects')
    .snapshotChanges()
    .pipe(
      map((res) => {
        return res.map((e) => {
          const data = e.payload.doc.data() as Projects;
          data.id = e.payload.doc.id;
          return data as Projects;
        });
      })
    );
}
