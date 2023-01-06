import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSportsHeadlinesComponent } from './top-sports-headlines.component';

describe('TopSportsHeadlinesComponent', () => {
  let component: TopSportsHeadlinesComponent;
  let fixture: ComponentFixture<TopSportsHeadlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TopSportsHeadlinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopSportsHeadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
