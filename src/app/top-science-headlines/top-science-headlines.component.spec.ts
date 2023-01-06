import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopScienceHeadlinesComponent } from './top-science-headlines.component';

describe('TopScienceHeadlinesComponent', () => {
  let component: TopScienceHeadlinesComponent;
  let fixture: ComponentFixture<TopScienceHeadlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TopScienceHeadlinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopScienceHeadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
