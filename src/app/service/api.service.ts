import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  topHeadLinesURL = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1656c9f6290c4a3eb9d65088a0a8ae2c';
  topBusinessHeadLinesURL = 'https://newsapi.org/v2/top-headlines/sources?business?country=in&category=business&apiKey=1656c9f6290c4a3eb9d65088a0a8ae2c';
  topGeneralHeadLinesURL = 'https://newsapi.org/v2/top-headlines/sources?general?country=in&category=business&apiKey=1656c9f6290c4a3eb9d65088a0a8ae2c';
  topSportsHeadLinesURL = 'https://newsapi.org/v2/top-headlines/sources?sports?country=in&category=business&apiKey=1656c9f6290c4a3eb9d65088a0a8ae2c';
  topTechnologyHeadLinesURL = 'https://newsapi.org/v2/top-headlines/sources?technology?country=in&category=business&apiKey=1656c9f6290c4a3eb9d65088a0a8ae2c';
  topHealthHeadLinesURL = 'https://newsapi.org/v2/top-headlines/sources?health?country=in&category=business&apiKey=1656c9f6290c4a3eb9d65088a0a8ae2c';
  topscienceHeadLinesURL = 'https://newsapi.org/v2/top-headlines/sources?science?country=in&category=business&apiKey=1656c9f6290c4a3eb9d65088a0a8ae2c';
  
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

  getTopscienceHeadlines(): Observable<any>{
    return this.http.get(this.topscienceHeadLinesURL);
  }
}
