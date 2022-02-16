import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from '../models/menu-item';
import { HttpClient } from '@angular/common/http';
import { map, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Fetches the next Id in the sequence. Only for prototype purposes. Database would handle this in production.
   */
  getNextId(): Observable<number> {
    return this.getMenuItems().pipe(
      map((x: MenuItem[]) => {
        const last = x.sort((a, b) => (a.id < b.id) ? 1 : -1)[0];
        return last.id + 1;
      })
    );
  }

  /**
   * Gets All Menu Items
   */
  getMenuItems(): Observable<MenuItem[] | Response> {
    return this.http
      .get<MenuItem[]>('api/menuItems');
  }

  /**
   * Creates a Menu item. Fetches the next Id first.
   * @param menuItem New Menu Item
   */
  createMenuItem(menuItem: MenuItem): Observable<any> {
    return this.getNextId()
      .pipe(
        tap((id: number) => menuItem.id = id),
        switchMap(() => this.http.post('api/menuItems', menuItem)),
        map((result: MenuItem) => result)
      );
  }

  /**
   * Edit an existing menu item
   * @param menuItem Menu item to be updated
   */
  editMenuItem(menuItem: MenuItem): Observable<any> {
    return this.http.put('api/menuItems', menuItem);
  }

  /**
   * Removes the passed menu item
   * @param menuItem Menu item to remove
   */
  removeMenuItem(menuItem: MenuItem): Observable<any> {
    return this.http.delete(`api/menuItems/${menuItem.id}`);
  }
}
