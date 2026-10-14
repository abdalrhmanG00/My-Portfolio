import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  experiences: any[] = [
    {
      title: "Backend Developer Intern",
      company: "AfqAlryiada",
      link: "https://www.linkedin.com/company/afqalryiada",
      location: "Remote",
      description: "Managed dynamic content and customized data models using the headless CMS Directus. Configured content schemas and API endpoints to meet project requirements.",
      date: "Mar 2025 – May 2025"
    },
    {
      title: "Fullstack Developer Intern",
      company: "Athhan",
      link: "https://www.linkedin.com/company/athhan-integrated-solutions",
      location: "Hybrid",
      description: "Contributed to frontend development tasks using HTML, CSS, and JavaScript. Assisted in maintaining and updating existing features in an ASP.NET WebForms application. Participated in maintaining parts of an ERP system and learned its basic workflows.",
      date: "Nov 2025 – Jan 2026"
    },
    {
      title: "Safir",
      location: "Freelance",
      link: "https://safircenter.org",
      description: "Frontend Project - Safir center website",
      date: "Jan 2025 – Feb 2026"
    }
  ];

  constructor(public _Router: Router) { }

  ngOnInit(): void {
    $('.experienceSection').fadeOut(0).fadeIn(600);
  }


  showExperienceDesc(exp: any, event: any) {
    if (event.target.classList.contains('fa-link'))
      return
    else {
      this._Router.navigate(['/ExperienceDesc', exp.title])
      localStorage.setItem('experience', JSON.stringify(exp))
    }
  }
}
