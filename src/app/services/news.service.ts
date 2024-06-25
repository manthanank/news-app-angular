import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { News } from '../models/news.models';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = environment.newsApiKey;
  private apiUrl = `https://newsapi.org/v2`;

  constructor(private http: HttpClient) {}

  getTopHeadlines(page: number = 1): Observable<News> {
    return this.http.get<{ articles: News }>(`${this.apiUrl}/top-headlines?country=us&apiKey=${this.apiKey}&page=${page}`)
      .pipe(map(response => response.articles));
  }

  getNewsByCategory(category: string, page: number = 1): Observable<News> {
    return this.http.get<{ articles: News }>(`${this.apiUrl}/top-headlines?country=us&category=${category}&apiKey=${this.apiKey}&page=${page}`)
      .pipe(map(response => response.articles));
  }

  searchNews(query: string, page: number = 1): Observable<News> {
    return this.http.get<{ articles: News }>(`${this.apiUrl}/everything?q=${query}&apiKey=${this.apiKey}&page=${page}`)
      .pipe(map(response => response.articles));
  }
}