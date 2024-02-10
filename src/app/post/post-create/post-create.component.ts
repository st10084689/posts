import { Component} from '@angular/core';
import { postService } from '../post.service';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
enteredTitle= '';
enteredMessage=' ';

constructor(public postService: postService){}

addPost(){
  this.postService.addPost(this.enteredTitle,this.enteredMessage);

}
  
}
