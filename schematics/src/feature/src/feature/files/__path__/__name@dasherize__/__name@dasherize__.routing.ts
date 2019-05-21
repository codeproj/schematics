import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Base<%=classify(name)%>Component } from './base-<%=dasherize(name)%>.component';
import { <%=classify(name)%>Component } from './<%=dasherize(name)%>/<%=dasherize(name)%>.component';

export const routes: Routes = [
  {
    path: '',
    component: Base<%=classify(name)%>Component,
    children: [
      { path: '', redirectTo: '<%=dasherize(name)%>', pathMatch: 'full' },
      { path: '<%=dasherize(name)%>', component: <%=classify(name)%>Component },
    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild (routes);
