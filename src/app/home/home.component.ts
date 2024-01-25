import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild(AlertComponent) alert!: AlertComponent;
  @ViewChildren(AlertComponent) alerts!: QueryList<AlertComponent>;
  alertsArr = [] as any;
  message = '';
  isEven(n: number) {
    // callback
    return n % 2 === 0;
  }

  printMsg(evenfunc: Function, n: number) {
    const isEven = evenfunc(n);
    this.message = `${n} is even: ${isEven}`;
  }
  ngOnInit() {
    this.printMsg(this.isEven, 2); /// Hihgher order function
  }

  ngAfterViewInit() {
    this.alertsArr = this.alerts.toArray();
  }

  showAlert(step: any) {
      this.alertsArr[step - 1].show()
  }
}
