import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { ContactFormData } from '../../model/product'; 

@Component({
  selector: 'app-contact-me',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {
  builder = inject(FormBuilder);
  httpService = inject(ContactService);

  contactForm = this.builder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  onSave() {
    console.log("contact button clicked", this.contactForm.value);
    this.httpService.addContactMe(this.contactForm.value as ContactFormData).subscribe(() => {
      alert("Message Sent.");
      this.contactForm.reset();
    });
  }
}
