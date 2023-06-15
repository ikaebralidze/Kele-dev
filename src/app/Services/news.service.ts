import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { INews } from '../model/news.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private afs: AngularFirestore) {}

  addNews(news: INews) {
    news.id = this.afs.createId();
    news.title = news.title.replaceAll(' ', '-');
    this.afs.collection('news').add(news);
  }

  // Obs$ = this.afs
  //   .collection('news')
  //   .snapshotChanges()
  //   .pipe(
  //     map((res) => {
  //       return res.map((e) => {
  //         const data = e.payload.doc.data() as INews;
  //         data.id = e.payload.doc.id;
  //         return data as INews;
  //       });
  //     })
  //   );
}
