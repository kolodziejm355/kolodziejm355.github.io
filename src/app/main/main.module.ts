import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { MatIconModule } from '@angular/material/icon';
import { SectionExperienceComponent } from './components/section-experience/section-experience.component';
import { SectionContactComponent } from './components/section-contact/section-contact.component';
import { SectionPortfolioComponent } from './components/section-portfolio/section-portfolio.component';
import { SectionIntroComponent } from './components/section-intro/section-intro.component';
import { SectionSkillsComponent } from './components/section-skills/section-skills.component';



@NgModule({
  declarations: [
    TopbarComponent,
    SidebarComponent,
    PageWrapperComponent,
    SectionExperienceComponent,
    SectionContactComponent,
    SectionPortfolioComponent,
    SectionIntroComponent,
    SectionSkillsComponent
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
