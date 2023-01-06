import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-top-sports-headlines',
  standalone: true,
  imports: [CommonModule,LoadingBarHttpClientModule],
  templateUrl: './top-sports-headlines.component.html',
  styleUrls: ['./top-sports-headlines.component.css']
})
export class TopSportsHeadlinesComponent  implements OnInit {
  topSportsHeadlines: any = [];
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getTopSportsHeadlines().subscribe(data => {
      console.log(data.articles);
      this.topSportsHeadlines = data.articles;
    });
  }
}
