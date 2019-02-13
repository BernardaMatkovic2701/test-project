import {Component, OnInit} from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'contact-form',
    templateUrl: './form.template.html',
    styleUrls: ['./form.component.scss']
})

export class FormComponent {

    contactForm: FormGroup;
    successMessage: string;

    constructor(
        private fb: FormBuilder
    ) {
        this.contactForm = this.fb.group({
            'email': [' ', [Validators.required, Validators.email]],
            'message': [' ', [Validators.required, Validators.minLength(30)]]
        });
    }

    submitForm() {
        if (this.contactForm.valid) {
            this.contactForm.reset();
            this.successMessage = 'Your data has been successfully sent!';

            setTimeout(() => {
                this.successMessage = '';
            }, 5000);
        }
    }

}