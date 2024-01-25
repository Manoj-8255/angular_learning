import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent implements OnInit, OnChanges {
  @Input() currentPage: number = 1;
  @Input() total: number = 0;
  @Input() limit: number = 10;
  @Output() changePage = new EventEmitter<number>();
  pages: number[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    console.log('pageinator changes')
  }

  ngOnInit(): void {
    console.log("paginator on init")
    const pagesCount = Math.ceil(this.total / this.limit);
    this.pages = this.range(this.currentPage, pagesCount);
  }

  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map((el) => el + start);
  }
}
