import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-top-science-headlines',
  standalone: true,
  imports: [CommonModule,LoadingBarHttpClientModule],
  templateUrl: './top-science-headlines.component.html',
  styleUrls: ['./top-science-headlines.component.css']
})
export class TopScienceHeadlinesComponent  implements OnInit {
  topScienceHeadlines: any = [];
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getTopScienceHeadlines().subscribe(data => {
      console.log(data.articles);
      this.topScienceHeadlines = data.articles;
    });
  }
}
