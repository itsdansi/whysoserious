import { Component, OnInit } from '@angular/core';
import { PostService } from '../postServices/post.service';

@Component({
  selector: 'app-http-fetch',
  templateUrl: './http-fetch.component.html',
  styleUrls: ['./http-fetch.component.css']
})
export class HttpFetchComponent implements OnInit {

  constructor(private _postService: PostService) { }

  posts:Array<any> = []

  ngOnInit(): void {
    this._postService.post().subscribe(postList => this.posts = postList)
    console.log("Data inited!");
    
  }



}
