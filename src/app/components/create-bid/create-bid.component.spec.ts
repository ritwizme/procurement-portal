import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BiddingComponent } from '../bidding/bidding.component'
import { CreateBidComponent } from './create-bid.component';

describe('CreateBidComponent', () => {
  let component: CreateBidComponent;
  let fixture: ComponentFixture<CreateBidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
