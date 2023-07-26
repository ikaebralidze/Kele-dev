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
    if (this.isModalHiden) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }

  addUser(user: IUser) {
    user.id = this.afs.createId();
    return this.afs.collection('users').add(user);
  }
}
