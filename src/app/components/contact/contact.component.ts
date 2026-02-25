import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [MessageService]
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required,]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    subject: new FormControl(null, [Validators.required,]),
    message: new FormControl(null, [Validators.required,])
  })

  constructor(private messageService: MessageService) { }
  ngOnInit(): void {
    $('.Contact').fadeOut(0).fadeIn(600);
  }
  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Message Sended', detail: 'Thank for your message I will contact you soon' });
  }
  async sendEmail() {
    this.showSuccess();
    emailjs.init("OBd9AtgMZJbmFzwY3");
    await emailjs.send("service_ssorf74", "template_bwv2qfq", {
      from_name: this.contactForm.value.name,
      to_name: "Abdalrhman Gamal",
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message,
      from_email: this.contactForm.value.email,
    });
    this.contactForm.reset();
  }
}
