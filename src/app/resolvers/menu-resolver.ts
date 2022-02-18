import { MenuService } from '../services/menu.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Menu } from '../models/menu';
import { MenuItem } from '../models/menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenuResolver implements Resolve<any> {
  constructor(private service: MenuService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    const menu$: Observable<any> = this.service.getMenus();
    return menu$.pipe(
      switchMap((resp: Menu[]) => {
        const menuItemCalls: Observable<any>[] = [];
        resp.forEach(x => menuItemCalls.push(this.service.getMenuItemsByMenuId(x.id)));
        return forkJoin(menuItemCalls);
      }),
      withLatestFrom(menu$),
      map(([resp, $menu]) => {
        const results = [];
        console.log($menu);

        Object.values(resp).forEach((x: MenuItem[]) => {
          const menuResult = $menu.find(y => y.id === x[0].menuId);
          results.push({
            menu: menuResult,
            items: x
          });
        });

        return results;
      })
    );
  }
}
