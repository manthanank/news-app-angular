import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-top-general-headlines',
  standalone: true,
  imports: [CommonModule,LoadingBarHttpClientModule],
  templateUrl: './top-general-headlines.component.html',
  styleUrls: ['./top-general-headlines.component.css']
})
export class TopGeneralHeadlinesComponent  implements OnInit {
  topGeneralHeadlines: any = [];
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getTopGeneralHeadlines().subscribe(data => {
      console.log(data.articles);
      this.topGeneralHeadlines = data.articles;
    });
  }
}
