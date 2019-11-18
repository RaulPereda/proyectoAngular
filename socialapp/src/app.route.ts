import{ Routes, RouterModule } from '@angular/router';
import{ ItemsComponent } from './app/app.';
import { from } from 'rxjs';


const routes:Routes=[
    { path: '', component: ItemsComponent},
    { path: 'home', component: ItemsComponent},
    { path: 'misHistorietas', component: ItemsComponent}
];