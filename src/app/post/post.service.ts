import { Injectable } from '@angular/core';
import {Post} from './post.model';
import { Subject } from 'rxjs';

export class postService{
private posts : Post[] = [];
private postsUpdated = new Subject<Post[]>();

@Injectable({providedIn: 'root'})

getPosts(){
    return [...this.posts];
}
getPostUpdateListner(){
    return this.postsUpdated.asObservable();
}

addPost(title: string, content: string){
    const post: Post = {title: title, content: content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
}
}