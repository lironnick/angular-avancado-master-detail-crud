import {InMemoryDbService} from 'angular-in-memory-web-api';

import { Category } from './pages/categories/shared/category.model';
import { Entry } from './pages/entries/shared/entry.model';

export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const categories: Category[] = [
      { id: 1, name: 'Moradia', description: 'Pagamento de Contas da Casa' },
      { id: 2, name: 'Saúde', description: 'Plano de Saúde e Remédios' },
      { id: 3, name: 'Lazer', description: 'Cinema, parques, praia, etc' },
      { id: 4, name: 'Salário', description: 'Recebimento de salário' },
      { id: 5, name: 'Freelas', description: 'Trabalhos com freelancer' }
    ];

    const entries: Entry[] = [
      { id: 1,
        name: 'Gás de cozinha',
        description: 'Qualquer coisa 1',
        type: 'expense',
        amount: '70.00',
        date: '23/11/2018',
        paid: true,
        categoryId: categories[0].id,
        category: categories[0] } as Entry,

      {
        id: 2,
        name: 'Casa',
        description: 'Qualquer coisa 2',
        type: 'expense',
        amount: '30.00',
        date: '22/11/2018',
        paid: true,
        categoryId: categories[1].id,
        category: categories[1]
      } as Entry,

      {
        id: 3,
        name: 'Posto',
        description: 'Qualquer coisa 3',
        type: 'revenue',
        amount: '40.00',
        date: '22/11/2018',
        paid: true,
        categoryId: categories[2].id,
        category: categories[2]
      } as Entry,
      {
        id: 4,
        name: 'Suplimentos',
        description: 'Qualquer coisa 4',
        type: 'revenue',
        amount: '23.00',
        date: '21/11/2018',
        paid: true,
        categoryId: categories[2].id,
        category: categories[2]
      } as Entry,

      {
        id: 6,
        name: 'Video game',
        description: 'Qualquer coisa 4',
        type: 'expense',
        amount: '123.00',
        date: '12/11/2018',
        paid: true,
        categoryId: categories[3].id,
        category: categories[3]
      } as Entry,

    ];

    return { categories, entries };
  }
}


