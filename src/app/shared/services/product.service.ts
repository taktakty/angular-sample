import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
			products = [
				new Product(1, 'Angular Introduction "Chapter of Creation"', 3800, 'God said that Angular is. Then Angular was born.'),
				new Product(2, 'Learning Angular made me rich and popular with girls. My life was changed!', 410, 'A SE whose payroll is 3million yen meet Angular. That was first resistance started by a slave in the small company.'),
				new Product(3, 'The Life with Angular starting from reincarnation in different world', 680, 'Tanaka in the midst Death March at the swamp of spagetti, it might be the reality escapism from hard days, he was throwed in the different world, and then he picked up introductory book of Angular.'),
			];
  constructor() { }

	list(): Observable<Product[]> {
		return of(this.products);
	}

	get(id: number): Observable<Product> {
		return of(this.products[id -1]);
	}
}
