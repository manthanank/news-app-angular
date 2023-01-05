import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBusinessHeadlinesComponent } from './top-business-headlines.component';

describe('TopBusinessHeadlinesComponent', () => {
  let component: TopBusinessHeadlinesComponent;
  let fixture: ComponentFixture<TopBusinessHeadlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TopBusinessHeadlinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBusinessHeadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
