import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { MenuItem } from '../models/menu-item';
import { HttpClient } from '@angular/common/http';
import { map, pluck, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private http: HttpClient
  ) { }

  getNextId(): Observable<number> {
    return this.getMenuItems().pipe(
      map((x: MenuItem[]) => {
        const last = x.sort((a, b) => (a.id < b.id) ? 1 : -1)[0];
        return last.id + 1;
      })
    );
  }

  getMenuItems(): Observable<MenuItem[] | Response> {
    return this.http
      .get<MenuItem[]>('api/menuItems');
  }

  addMenuItem(menuItem: MenuItem): Observable<any> {
    return this.http.post('api/menuItems', menuItem);
  }

  removeMenuItem(menuItem: MenuItem): Observable<any> {
    return this.http.delete(`api/menuItems/${menuItem.id}`);
  }
}
