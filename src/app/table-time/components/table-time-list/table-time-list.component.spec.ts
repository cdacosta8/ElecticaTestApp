import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTimeListComponent } from './table-time-list.component';

describe('TableTimeListComponent', () => {
  let component: TableTimeListComponent;
  let fixture: ComponentFixture<TableTimeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableTimeListComponent]
    });
    fixture = TestBed.createComponent(TableTimeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
