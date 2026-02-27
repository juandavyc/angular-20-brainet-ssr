import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';


const productsRouter: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ProductsPageComponent,
      },
      {
        path: 'ciencias-exactas',
        loadComponent: () => import('./pages/blocks-page/blocks-page.component'),
      },
      {
        path: 'idiomas',
        loadComponent: () => import('./pages/kits-post/kits-post.component'),
      },
      {
        path: 'programacion',
        loadComponent: () => import('./pages/mamposteria/mamposteria.component'),
      },
      {
        path: '**',
        loadComponent: () => import('./pages/not-found-page/not-found-page'),
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export default productsRouter;
