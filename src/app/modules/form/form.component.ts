import {Component, OnInit} from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {THIS_EXPR} from '@angular/compiler/src/output/output_ast';

@Component({
    selector: 'contact-form',
    templateUrl: './form.template.html',
    styleUrls: ['./form.component.scss']
})

export class FormComponent {

    contactForm: FormGroup;
    successMessage: string;
    errEmailMessage: string;
    errMessage: string;

    constructor(
        private fb: FormBuilder,
        private http: HttpClient
    ) {
        this.contactForm = this.fb.group({
            'email': [' '],
            'message': [' ']
        });
    }

    submitForm() {

        let command = {
            "email": this.contactForm.controls['email'].value,
            "message": this.contactForm.controls['message'].value
        }

        const req = this.http.post('http://localhost:3000/contact', command)
            .subscribe(
                res => {
                    this.errEmailMessage = '';
                    this.errMessage = ''
                    this.successMessage = res[0].message;
                },
                err => {
                    console.log("Error occured", err);
                    this.errEmailMessage = err.error.email;
                    console.log(this.errEmailMessage);

                    this.errMessage = err.error.message;
                    console.log(this.errMessage);

                }
            );
    }
}