import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  chipTextArr: string[] = [];
  projects: any[] = [
    {
      title: 'Inventory Management System',
      description: 'Developed a RESTful API using ASP.NET Core 8 with Clean Architecture and CQRS (MediatR). Implemented inventory features: product/category management, transaction tracking, and low-stock alerts. Added authentication, role-based access control, and automated workflows (emails for registration, password resets, system alerts).',
      demo: 'https://github.com/abdalrhman80/InventoryManagementSystme',
      githubLink: 'https://github.com/abdalrhman80/InventoryManagementSystme',
      date: 'Aug 2025',
      technologies: [
        { name: 'C#' },
        { name: 'ASP.NET Core 8' },
        { name: 'Clean Architecture' },
        { name: 'CQRS & MediatR' },
        { name: 'Entity Framework Core' },
        { name: 'MS SQL' },
        { name: 'ASP.NET Identity' },
        { name: 'JWT' },
        { name: 'SMTP Email Services' },
        { name: 'Serilog' },
        { name: 'Fluent Validation' },
        { name: 'AutoMapper' }
      ],
      overview: [
      ]
    },
    {
      title: 'E-Learning Platform',
      description: 'Built a modular RESTful API with ASP.NET Core 8, following Clean Architecture principles. Enabled course management, content uploads, progress tracking, and automated email notifications. Supported authentication (traditional login, Google OAuth 2.0) and role-based access control.',
      demo: 'https://github.com/abdalrhman80/E-Learning-Platform',
      githubLink: 'https://github.com/abdalrhman80/E-Learning-Platform',
      date: 'Jul 2025',
      technologies: [
        { name: 'C#' },
        { name: 'ASP.NET Core 8' },
        { name: 'Clean Architecture' },
        { name: 'Entity Framework Core' },
        { name: 'MS SQL' },
        { name: 'ASP.NET Identity' },
        { name: 'JWT' },
        { name: 'Google OAuth 2.0' },
        { name: 'SMTP Email Services' },
        { name: 'Serilog' },
        { name: 'AutoMapper' }
      ],
      overview: [
      ]
    },
    {
      title: 'Restaurants API',
      description: 'Designed a modular Web API using ASP.NET Core 8, integrating CQRS (MediatR). Applied layered architecture: Presentation, Application, Domain, and Infrastructure. Implemented unit/integration tests to ensure API reliability.',
      demo: 'https://github.com/abdalrhman80/Restaurants',
      githubLink: 'https://github.com/abdalrhman80/Restaurants',
      date: 'Jun 2025',
      technologies: [
        { name: 'C#' },
        { name: 'ASP.NET Core 8' },
        { name: 'Clean Architecture' },
        { name: 'CQRS & MediatR' },
        { name: 'Entity Framework Core' },
        { name: 'MS SQL' },
        { name: 'ASP.NET Identity' },
        { name: 'JWT' },
        { name: 'Serilog' },
        { name: 'Fluent Validation' },
        { name: 'AutoMapper' },
        { name: 'xUnit' }
      ],
      overview: [
      ]
    },
    {
      title: 'Shopping Cart (E-commerce)',
      description: 'Developed an MVC app with ASP.NET Core 6 and a 3-tier architecture. Built Admin (management) and Customer (browsing, cart, and checkout) areas. Integrated Stripe for secure payments.',
      demo: 'http://shoppingcart.runasp.net',
      githubLink: 'https://github.com/abdalrhman80/ShoppingCartMVC',
      date: 'Nov 2024',
      technologies: [
        { name: 'C#' },
        { name: 'ASP.NET Core 6 MVC' },
        { name: '3-tier Architecture' },
        { name: 'Entity Framework Core' },
        { name: 'ASP.NET Core Identity' },
        { name: 'Stripe Payment Gateway' }
      ],
      overview: [
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_1.png',
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_2.png',
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_3.png',
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_4.png',
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_5.png',
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_6.png',
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_7.png',
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_8.png',
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_9.png',
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_10.png',
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_11.png',
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_12.png',
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_13.png',
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_14.png',
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_15.png',
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_16.png',
        'assets/images/overview-Images/ShoppingCart/ShoppingCart_17.png',
      ]
    },
    {
      title: 'Fresh Cart (Frontend)',
      description: 'E-Commerce frontend application built with Angular. Features user management (registration, login, password reset), product browsing with detailed views, cart and wishlist functionality, and secure payment integration through external APIs.',
      demo: 'https://abdalrhman80.github.io/Fresh-Cart-App',
      githubLink: 'https://github.com/abdalrhman80/Fresh-Cart-App',
      date: 'Feb 2024',
      technologies: [
        { name: 'TypeScript' },
        { name: 'Angular' },
        { name: 'Bootstrap' },
        { name: 'HTML' },
        { name: 'CSS' }
      ],
      overview: [
        'assets/images/overview-Images/freshCart/freshCart1.png',
        'assets/images/overview-Images/freshCart/freshCart2.png',
        'assets/images/overview-Images/freshCart/freshCart3.png',
        'assets/images/overview-Images/freshCart/freshCart4.png',
        'assets/images/overview-Images/freshCart/freshCart5.png',
        'assets/images/overview-Images/freshCart/freshCart6.png',
        'assets/images/overview-Images/freshCart/freshCart7.png',
      ]
    },
    {
      title: 'Personal Dashboard',
      description: 'Frontend application with three main sections: Bookmarks, Todos, and Notes. Features complete CRUD operations, customizable backgrounds, and responsive design built with Angular.',
      demo: 'https://abdalrhman80.github.io/Personal-Dashboard/bookmarks',
      githubLink: 'https://github.com/abdalrhman80/Personal-Dashboard',
      date: 'Mar 2024',
      technologies: [
        { name: 'TypeScript' },
        { name: 'Angular' },
        { name: 'PrimeNG' },
        { name: 'Bootstrap' },
        { name: 'SASS' },
        { name: 'HTML' }
      ],
      overview: [
        'assets/images/overview-Images/Personal-Dashboard/Personal-Dashboard1.png',
        'assets/images/overview-Images/Personal-Dashboard/Personal-Dashboard2.png',
        'assets/images/overview-Images/Personal-Dashboard/Personal-Dashboard3.png',
        'assets/images/overview-Images/Personal-Dashboard/Personal-Dashboard4.png',
      ]
    }
  ]

  constructor(public _Router: Router) { }

  ngOnInit(): void {
    $('.projectSection').fadeOut(0).fadeIn(600);
  }

  showProjectDes(project: any, event: any) {
    if (event.target.classList.contains('fa-link'))
      return
    else {
      this._Router.navigate(['/ProjectDesc', project.title])
      localStorage.setItem('project', JSON.stringify(project))
    }
  }
}