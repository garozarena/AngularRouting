import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-blog',
  templateUrl: 'blog.component.html',
  styles: []
})

export class BlogComponent implements OnInit {

  postsObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.postsObservable = this.getPosts('/posts');
  }

  getPosts(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}
