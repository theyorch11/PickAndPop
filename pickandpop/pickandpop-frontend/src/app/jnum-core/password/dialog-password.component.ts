import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidationFormService } from '../services/validation-form.service';
import { UserService } from '../../customized/user/service/user.service';
import { PasswordValidator } from '../validators/password-validator';
import { NgbActiveModal } from '@app/ng-bootstrap';

export interface PasswordData {
    password: string;
    newpassword: string;
    passwordconfirm: string;
}

@Component( {
    selector: 'dialog-password-dialog',
    templateUrl: './dialog-password.html',
    providers:[UserService]
} )
export class DialogPasswordComponent implements OnInit {

    passwordForm: FormGroup;
	public data:PasswordData;

    constructor( private fb: FormBuilder,
        private validationFormService: ValidationFormService,
        private userService: UserService,
        public activeModal: NgbActiveModal ) {
 }


    ngOnInit() {
        this.passwordForm = this.fb.group( {
            password: new FormControl( '', [Validators.required] ),
            newpassword: new FormControl( '', [Validators.required] ),
            confirmPassword: new FormControl( '', [Validators.required] ),
        }, {
                validator: [PasswordValidator.MatchPassword, PasswordValidator.MatchOldPassword]
            } );
    }


    get password() { return this.passwordForm.get( 'password' ); }
    get newpassword() { return this.passwordForm.get( 'newpassword' ); }
    get confirmPassword() { return this.passwordForm.get( 'confirmPassword' ); }

    closeModal(): void {
        this.activeModal.close();
    }

    onSubmit() {
        if ( this.passwordForm.valid ) {
            this.userService.changePassword( this.passwordForm.get( 'newpassword' ).value ).subscribe( _ => {
                this.activeModal.close();
            } );
        } else {
            this.validationFormService.validateAllFormFields( this.passwordForm );
        }
    }


}
