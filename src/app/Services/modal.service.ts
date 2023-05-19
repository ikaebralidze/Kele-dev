import { Injectable } from '@angular/core';
import { IUser } from '../model/users.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private afs: AngularFirestore) {}

  isModalHiden = false;

  toggleModal() {
    this.isModalHiden = !this.isModalHiden;
  }

  addUser(user: IUser) {
    user.id = this.afs.createId();
    return this.afs.collection('users').add(user);
  }
}
