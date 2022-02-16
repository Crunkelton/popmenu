import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from '../models/menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public menuItems = new BehaviorSubject<MenuItem[]>([
    {
      image: 'https://patch.com/img/cdn20/users/2213323/20161230/111935/styles/raw/public/article_images/tacos-245241_1920-1483114710-5610.jpg?width=1200',
      title: 'Tacos', description: 'Tacos', price: 12.99 },
    {
      image: 'https://lozanosmexican.com/wp-content/uploads/slider/cache/20ef81d92609ba07d21a20c497a0c660/2021-lozanos-mexican-food-in-imockalee.jpg',
      title: 'Enchiladas', description: 'Enchiladas', price: 14.99 },
    {
      image: 'https://dqnd2s53vp2ic.cloudfront.net/crop/d5/7e/800x700/Avilas-Mexican-Restaurant-Dallas_095904.jpg',
      title: 'Taquitos', description: 'Taquitos', price: 12.99 },
    {
      image: 'https://live.staticflickr.com/1908/45144370011_78769bf492_b.jpg',
      title: 'Steak', description: '', price: 16.99 },
    {
      image: 'https://media1.sacurrent.com/sacurrent/imager/u/original/23149095/taquitos_west_ave.png',
      title: 'Street Tacos', description: 'Street Tacos', price: 10.99 },
    {
      image: 'https://hips.hearstapps.com/hmg-prod/images/190411-churros-horizontal-1-1555698000.png',
      title: 'Churros', description: 'Churros', price: 8.99 },
  ]);

  constructor() { }
}
