import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YtEmbeddedSearchComponent } from './yt-embedded-search.component';

describe('YtEmbeddedSearchComponent', () => {
  let component: YtEmbeddedSearchComponent;
  let fixture: ComponentFixture<YtEmbeddedSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YtEmbeddedSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YtEmbeddedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
