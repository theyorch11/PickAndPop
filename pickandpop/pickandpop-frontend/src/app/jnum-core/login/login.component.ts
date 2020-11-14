import { AuthenticationService } from '../services/authentication.service';
import { ValidationFormService } from '../services/validation-form.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from '../model/message';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private fb: FormBuilder, private authenticationService: AuthenticationService,
        private router: Router, public validationFormService: ValidationFormService) {
    }

    ngOnInit() {
        this.loginForm = this.fb.group({
            'username': new FormControl('', [Validators.required]),
            'key': new FormControl('', [Validators.required])
        });
        this.authenticationService.logout();
    }

    get username() { return this.loginForm.get('username'); }
    get key() { return this.loginForm.get('key'); }


    onSubmit() {
        console.log(this.loginForm);
        if (this.loginForm.valid) {
            const user = this.loginForm.value;
            if (user.username && user.key) {
                console.log('Calling service');
                this.authenticationService.login(user).subscribe(res => {
                    if (res) {
                        console.log('User is logged in');
                        this.router.navigateByUrl('/');
                    }
                }
                );
            }
        } else {
            this.validationFormService.validateAllFormFields(this.loginForm);
        }
    }


    reset() {
        this.loginForm.reset();
    }

}
