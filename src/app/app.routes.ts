import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./tienda-front/tienda-front.routes'),
    }
];
