import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiKey = environment.apiKey;

// const topHeadLinesURL = environment.topHeadLinesURL;
// const topBusinessHeadLinesURL = environment.topBusinessHeadLinesURL;
// const topGeneralHeadLinesURL = environment.topGeneralHeadLinesURL;
// const topSportsHeadLinesURL = environment.topSportsHeadLinesURL;
// const topTechnologyHeadLinesURL = environment.topTechnologyHeadLinesURL;
// const topHealthHeadLinesURL = environment.topHealthHeadLinesURL;
// const topscienceHeadLinesURL = environment.topscienceHeadLinesURL;
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  topHeadLinesURL = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=' + apiKey;
  topBusinessHeadLinesURL = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=' + apiKey;
  topGeneralHeadLinesURL = 'https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=' + apiKey;
  topSportsHeadLinesURL = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=' + apiKey;
  topTechnologyHeadLinesURL = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=' + apiKey;
  topHealthHeadLinesURL = 'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=' + apiKey;
  topscienceHeadLinesURL = 'https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=' + apiKey;
  
  constructor(private http: HttpClient) { }

  getTopHeadlines(): Observable<any>{
    return this.http.get(this.topHeadLinesURL);
  }

  getTopBusinessHeadlines(): Observable<any>{
    return this.http.get(this.topBusinessHeadLinesURL);
  }
  
  getTopGeneralHeadlines(): Observable<any>{
    return this.http.get(this.topGeneralHeadLinesURL);
  }

  getTopSportsHeadlines(): Observable<any>{
    return this.http.get(this.topSportsHeadLinesURL);
  }

  getTopTechnologyHeadlines(): Observable<any>{
    return this.http.get(this.topTechnologyHeadLinesURL);
  }

  getTopHealthHeadlines(): Observable<any>{
    return this.http.get(this.topHealthHeadLinesURL);
  }

  getTopScienceHeadlines(): Observable<any>{
    return this.http.get(this.topscienceHeadLinesURL);
  }
}
