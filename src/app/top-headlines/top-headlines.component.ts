import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../service/api.service';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
@Component({
  selector: 'app-top-headlines',
  standalone: true,
  imports: [CommonModule,LoadingBarHttpClientModule],
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.css']
})
export class TopHeadlinesComponent implements OnInit {
  topHeadlines: any = [];
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getTopHeadlines().subscribe(data => {
      console.log(data.articles);
      this.topHeadlines = data.articles;
    });
  }
}
