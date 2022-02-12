import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TotalIncomeExpensesComponent } from './total-income-expenses.component';

describe('TotalIncomeExpensesComponent', () => {
  let component: TotalIncomeExpensesComponent;
  let fixture: ComponentFixture<TotalIncomeExpensesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalIncomeExpensesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TotalIncomeExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
