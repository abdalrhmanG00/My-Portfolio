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
      title: 'Project Management SaaS',
      description: 'Built a Multi-tenant Project Management SaaS backend where each company gets its own private workspace, and one person can belong to several companies with their data kept fully separate and secure. Designed a secure sign-up and login experience with email verification, password recovery, and multi-device sessions, plus workspace controls such as Free/Pro plans, ownership transfer, and disabling or reactivating a workspace. Designed a secure sign-up and login experience with email verification, password recovery, and multi-device sessions, plus workspace controls such as Free/Pro plans, ownership transfer, and disabling or reactivating a workspace. Delivered project and task management: create projects, add team members, and assign tasks with priorities, due dates and status tracking, with safe delete and restore so no work is lost accidentally.',
      demo: 'https://pmsass.apidog.io',
      githubLink: 'https://github.com/abdalrhmanG00/ProjectManagementSystem',
      date: 'Aug 2026',
      technologies: [
        { name: 'C#' },
        { name: 'ASP.NET Core 10' },
        { name: 'Clean Architecture' },
        { name: 'Entity Framework Core' },
        { name: 'CQRS & MediatR' },
        { name: 'MS SQL' },
        { name: 'Redis,' },        
        { name: 'ASP.NET Identity' },
        { name: 'JWT' },
        { name: 'FluentValidation,' },
        { name: 'SMTP Email Services' },
        { name: 'Background Services (Hangfire),' },
        { name: 'Serilog' },
        { name: 'AutoMapper' }
      ],
      overview: [
      ]
    },
    {
      title: 'E-Learning Platform',
      description: 'Built a modular RESTful API with ASP.NET Core, following Clean Architecture, with nested course > chapter > lesson management and ordering. Implemented cart and checkout flow with Paymob payment integration. Built enrollment and lesson-level progress tracking, plus quizzes with auto-graded attempts and scoring. Supported authentication (JWT with refresh tokens, Google OAuth 2.0) and role-based access control for students, instructors, and admins. Handled media uploads for course thumbnails, chapter images, and lesson videos via local storage and Cloudinary.',
      demo: 'https://share.apidog.com/3a1323dc-0c39-447b-ab9a-5095edfdaa7b',
      githubLink: 'https://github.com/abdalrhmanG00/E-Learning-Platform',
      date: 'Jul 2025',
      technologies: [
        { name: 'C#' },
        { name: 'ASP.NET Core 8' },
        { name: 'Clean Architecture' },
        { name: 'CQRS & MediatR' },        
        { name: 'Entity Framework Core' },
        { name: 'MS SQL' },
        { name: 'ASP.NET Identity' },
        { name: 'JWT' },
        { name: 'Google OAuth 2.0' },
        { name: 'SMTP Email Services' },
        { name: 'Paymob payment gateway' },
        { name: 'Cloudinary,' },
        { name: 'Serilog' },
        { name: 'AutoMapper' }
      ],
      overview: [
      ]
    },
    {
      title: 'Talabat - E-Commerce',
      description: 'Built a fully-featured e-commerce REST API using ASP.NET Core 10, following Clean Architecture and CQRS. Implemented JWT authentication with refresh tokens, email confirmation, and role-based access control using ASP.NET Identity. Implemented core modules: product catalog with multi-picture support, basket (Redis), orders, reviews, wishlists, and refund request management. Applied Specification Pattern, Unit of Work, and Repository Pattern for clean data access.',
      demo: 'https://share.apidog.com/847b706a-e07a-4d5a-94b8-c6d6d2c9242a',
      githubLink: 'https://github.com/abdalrhmanG00/Talabat',
      date: 'Aug 2025',
      technologies: [
        { name: 'C#' },
        { name: 'ASP.NET Core 10' },
        { name: 'Clean Architecture' },
        { name: 'CQRS & MediatR' },
        { name: 'Entity Framework Core' },
        { name: 'MS SQL' },
        { name: 'Redis,' },
        { name: 'ASP.NET Identity' },
        { name: 'JWT' },
        { name: 'SMTP Email Services' },
        { name: 'Serilog' },
        { name: 'Fawaterak payment gateway' },
        { name: 'Fluent Validation' },
        { name: 'AutoMapper' }
      ],
      overview: [
      ]
    },
    {
      title: 'Restaurants API',
      description: 'Designed a modular Web API using ASP.NET Core 8, integrating CQRS (MediatR). Applied layered architecture: Presentation, Application, Domain, and Infrastructure. Implemented unit/integration tests to ensure API reliability.',
      demo: 'https://github.com/abdalrhmanG00/Restaurants',
      githubLink: 'https://github.com/abdalrhmanG00/Restaurants',
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
      githubLink: 'https://github.com/abdalrhmanG00/ShoppingCartMVC',
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
      demo: 'https://abdalrhmanG00.github.io/Fresh-Cart-App',
      githubLink: 'https://github.com/abdalrhmanG00/Fresh-Cart-App',
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
  ]

  constructor(public _Router: Router) { }

  ngOnInit(): void {
    $('.projectSection').fadeOut(0).fadeIn(600);
  }

  showProjectDesc(project: any, event: any) {
    if (event.target.classList.contains('fa-link'))
      return
    else {
      this._Router.navigate(['/ProjectDesc', project.title])
      localStorage.setItem('project', JSON.stringify(project))
    }
  }
}