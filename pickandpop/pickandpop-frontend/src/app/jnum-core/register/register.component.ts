import { TypeMessage } from '../enum/type-message.enum';
import { User } from '../model/user';
import { RegisterService } from '../services/register.service';
import { ValidationFormService } from '../services/validation-form.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from '../model/message';
import { ToasterService } from '../services/toaster.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup;

    constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router,
        private toasterService: ToasterService, public validationFormService: ValidationFormService,private translate: TranslateService) {
    }

    ngOnInit() {
        this.registerForm = this.fb.group({
            nombre: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            apellido1: new FormControl('', []),
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
        });
    }

    get nombre() { return this.registerForm.get('nombre'); }
    get email() { return this.registerForm.get('email'); }
    get apellido1() { return this.registerForm.get('apellido1'); }
    get username() { return this.registerForm.get('username'); }
    get password() { return this.registerForm.get('password'); }


    register(): void {

        console.log(this.registerForm);
        if (this.registerForm.valid) {
            const registerFormModel = this.registerForm.value;
            const registerUser: User = {
                id: '',
                nombre: registerFormModel.nombre,
                apellido1: registerFormModel.apellido1,
                email: registerFormModel.email,
                username: registerFormModel.username,
                password: registerFormModel.password
            };

            this.registerService.register(registerUser).subscribe(res => {
                this.toasterService.showToaster(TypeMessage.InfoMessage, this.translate.instant('toaster.registrook'));
                this.router.navigateByUrl('/login');
            },
                error => {
                    this.toasterService.showToaster(TypeMessage.ErrorMessage, error.error);
                });
        } else {
            this.validationFormService.validateAllFormFields(this.registerForm);
        }



    }

}
