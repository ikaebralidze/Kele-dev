import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FireService {
  constructor(private afs: AngularFirestore) {}

  getProjects<T>(name: string) {
    return this.afs
      .collection(name)
      .snapshotChanges()
      .pipe(
        map((res) => {
          return res.map((e) => {
            const data: any = e.payload.doc.data() as T;
            data.id = e.payload.doc.id;
            return data as T;
          });
        })
      );
  }
}
