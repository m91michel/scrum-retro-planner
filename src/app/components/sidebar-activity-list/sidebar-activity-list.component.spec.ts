import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarActivityListComponent } from './sidebar-activity-list.component';

describe('SidebarActivityListComponent', () => {
  let component: SidebarActivityListComponent;
  let fixture: ComponentFixture<SidebarActivityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarActivityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarActivityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
