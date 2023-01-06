import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-top-health-headlines',
  standalone: true,
  imports: [CommonModule,LoadingBarHttpClientModule],
  templateUrl: './top-health-headlines.component.html',
  styleUrls: ['./top-health-headlines.component.css']
})
export class TopHealthHeadlinesComponent  implements OnInit {
  topHealthHeadlines: any = [];
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getTopHealthHeadlines().subscribe(data => {
      console.log(data.articles);
      this.topHealthHeadlines = data.articles;
    });
  }
}
