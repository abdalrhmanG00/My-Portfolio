import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingSectionComponent } from './components/landing-section/landing-section.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectDescComponent } from './components/project-desc/project-desc.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ExperienceDescComponent } from './components/experience-desc/experience-desc.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: "landing", component: LandingSectionComponent, title: "Abdalrhman | Home" },
  { path: "Skills", component: SkillsComponent, title: "Abdalrhman | Skills " },
  { path: "About", component: AboutComponent, title: "Abdalrhman | About " },
  { path: "Experience", component: ExperienceComponent, title: "Abdalrhman | Experience " },
  { path: "Projects", component: ProjectsComponent, title: "Abdalrhman | Projects " },
  { path: "ProjectDesc/:title", component: ProjectDescComponent, title: "Abdalrhman | Project Details" },
  { path: "ExperienceDesc/:title", component: ExperienceDescComponent, title: "Abdalrhman | Experience Details" },
  { path: "Contact", component: ContactComponent, title: "Abdalrhman | Contact " },
  { path: "**", component: NotfoundComponent, title: "Not Found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
