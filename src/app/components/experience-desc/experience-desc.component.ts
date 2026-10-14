import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-desc',
  templateUrl: './experience-desc.component.html',
  styleUrls: ['./experience-desc.component.scss']
})
export class ExperienceDescComponent {
  experience: any;
  displayCustom!: boolean;
  activeIndex: number = 0;
  ngOnInit(): void {
    $('.projectDescSection').fadeOut(0).fadeIn(600);
    this.experience = JSON.parse(localStorage.getItem('experience') || '')
  }

  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
  }
}
