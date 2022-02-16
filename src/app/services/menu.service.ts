import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MenuItem } from '../models/menu-item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private http: HttpClient
  ) { }

  getMenuItems(): Observable<MenuItem[] | Response> {
    return this.http
      .get<MenuItem[]>('api/menuItems');
  }

  addMenuItem(menuItem: MenuItem): Observable<any> {
    return this.http.post('api/menuItems', menuItem);
  }
}
