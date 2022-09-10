import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    TopbarComponent,
    SidebarComponent,
    PageWrapperComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule
  ],
  exports: [
    TopbarComponent,
    SidebarComponent,
    PageWrapperComponent
  ]
})
export class MainModule { }
