import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, mergeMap, Observable, of } from 'rxjs';

@Injectable()
export class RepoService {
  constructor(private http: HttpClient) {}

  fetchAllProducts(page: number): Observable<any> {
    const limit = 10;
    const skip = (page - 1) * limit;
    return this.http.get(
      `https://dummyjson.com/products/?limit=${limit}&skip=${skip}`
    );
  }

  fetchmergeMapObservable(): Observable<any> {
    return of('photos', 'posts', 'users') //outer observable
      .pipe(
        mergeMap((currentItem) => {
          const url = 'https://jsonplaceholder.typicode.com/' + currentItem;
          return this.http.get(url, { observe: 'body' }); //inner observable
        })
      );
  }

  fetchUsingForkJoin() {
    const endpoints = [1, 2, 3, 4].map(
      (item) => 'https://jsonplaceholder.typicode.com/posts/' + item
    );

    forkJoin(
      endpoints.map((url) => this.http.get(url).subscribe((data) => data))
    );
  }
}
