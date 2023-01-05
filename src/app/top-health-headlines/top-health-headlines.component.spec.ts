import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHealthHeadlinesComponent } from './top-health-headlines.component';

describe('TopHealthHeadlinesComponent', () => {
  let component: TopHealthHeadlinesComponent;
  let fixture: ComponentFixture<TopHealthHeadlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TopHealthHeadlinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopHealthHeadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
