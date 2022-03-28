import { Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';


export const AppRoutingModule : Routes = [
  {
    path: '',
    component: BaseComponent,
    // canActivate: [AuthRoleModuleService],
    // children: userRoutes
  },
]
