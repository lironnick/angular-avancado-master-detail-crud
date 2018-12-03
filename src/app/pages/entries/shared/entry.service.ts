import { Injectable, Injector } from '@angular/core';
import {Observable} from 'rxjs';
import {flatMap} from 'rxjs/operators';
import {BaseResourceService} from '../../../shared/services/base-resource.service';

import { Entry } from './entry.model';
import {CategoryService} from '../../categories/shared/category.service';
import {element} from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class EntryService extends BaseResourceService<Entry>{


  constructor(
    protected injector: Injector,
    private  categoryService: CategoryService
  ) {
    super('api/entries', injector, Entry.formJson)
  }


  create(entry: Entry): Observable<Entry> {
    return this.categoryService.getById(entry.categoryId).pipe(
      flatMap(category => {
        entry.category = category;
        return super.create(entry)
      })
    );

  }

  update(entry: Entry): Observable<Entry> {
    return this.categoryService.getById(entry.categoryId).pipe(
      flatMap(categoy => {
        entry.category = categoy;
        return super.update(entry);
      })
    );

  }


}
