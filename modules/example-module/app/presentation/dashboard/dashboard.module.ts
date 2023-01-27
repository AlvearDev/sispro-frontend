import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboarPageRouting } from './dashboard.routing';
import { DashboardPage } from './dashboard.page';

@NgModule({
  declarations: [DashboardPage],
  imports: [CommonModule, DashboarPageRouting],
})
export class DashboardPageModule {}
