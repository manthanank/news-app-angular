import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../service/api.service';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@Component({
  selector: 'app-top-business-headlines',
  standalone: true,
  imports: [CommonModule,LoadingBarHttpClientModule],
  templateUrl: './top-business-headlines.component.html',
  styleUrls: ['./top-business-headlines.component.css']
})
export class TopBusinessHeadlinesComponent  implements OnInit {
  topBusinessHeadlines: any = [];
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getTopBusinessHeadlines().subscribe(data => {
      console.log(data.articles);
      this.topBusinessHeadlines = data.articles;
    });
  }
}
