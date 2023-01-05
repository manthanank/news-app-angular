import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopGeneralHeadlinesComponent } from './top-general-headlines.component';

describe('TopGeneralHeadlinesComponent', () => {
  let component: TopGeneralHeadlinesComponent;
  let fixture: ComponentFixture<TopGeneralHeadlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TopGeneralHeadlinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopGeneralHeadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
