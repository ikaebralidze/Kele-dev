import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { INews } from '../model/news.model';
import { BehaviorSubject, map } from 'rxjs';
import { collectionName } from '../model/projects.modal';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private news = new BehaviorSubject<INews[]>([]);
  constructor(private afs: AngularFirestore) {
    this.fetchData();
  }

  fetchData() {
    this.afs
      .collection(collectionName.news)
      .snapshotChanges()
      .pipe(
        map((res) => {
          console.log('called', 'news');
          return res.map((e) => {
            const data: any = e.payload.doc.data() as INews;
            data.id = e.payload.doc.id;
            return data as INews;
          });
        })
      )
      .subscribe((result) => this.news.next(result));
  }

  getNews() {
    return this.news.asObservable();
  }
}
