import {AbstractControl} from '@angular/forms';

export class PasswordValidator {
  static MatchPassword(control: AbstractControl) {
         let password = control.get('newpassword').value; 
         let confirmPassword = control.get('confirmPassword').value; 
          if(password != confirmPassword) {              
              control.get('confirmPassword').setErrors( {"matchpassword": true} )
          } else {
              return null
          }
      }
  
  static MatchOldPassword(control: AbstractControl) {
      let password = control.get('password').value; 
      let newPassword = control.get('newpassword').value; 
       if(password == newPassword) {              
           control.get('newpassword').setErrors( {"matcholdpassword": true} )
       } else {
           return null
       }
   }   
}
