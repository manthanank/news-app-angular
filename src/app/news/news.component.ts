import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Article } from '../models/news.models';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [NgFor, TitleCasePipe, FormsModule, NgIf],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent implements OnInit {
  articles: Article[] = [];
  categories: string[] = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];
  selectedCategory: string = 'general';
  searchTerm: string = '';
  currentPage: number = 1;
  totalResults: number = 0;
  loading: boolean = false;
  error: string | null = null;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.fetchNews();
  }

  fetchNews() {
    this.loading = true;
    this.error = null;
    let newsObservable;

    if (this.searchTerm) {
      newsObservable = this.newsService.searchNews(this.searchTerm, this.currentPage);
    } else {
      newsObservable = this.newsService.getNewsByCategory(this.selectedCategory, this.currentPage);
    }

    newsObservable.subscribe({
      next: (articles) => {
        this.articles = articles;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load news. Please try again later.';
        this.loading = false;
      }
    });
  }

  onCategoryChange(category: string) {
    this.selectedCategory = category;
    this.currentPage = 1;
    this.fetchNews();
  }

  onSearch() {
    this.currentPage = 1;
    this.fetchNews();
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.fetchNews();
  }
}