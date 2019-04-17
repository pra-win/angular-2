import { Component } from '@angular/core';
import { LoginService } from '../services/login-service';
import { Router } from '@angular/router';

@Component({
   // selector: '<login-form-component></login-form-component>',
    templateUrl: './loginForm.html',
    providers: [LoginService]
})

export class loginForm{

    constructor(private _loginService:LoginService, private router:Router){}

    public errorMsg:string = "";

    public submitLogin(value:any){

        this._loginService.login(value)
            .subscribe(
                 res => {
                     this.isSuccess(res);
                 },
                 error => console.log(error)
             );
    }

    private isSuccess(res:any) {
        if(!res[0].success){
            this.showError(res[0].message);
        } else {
            this.errorMsg = "";
            this.router.navigate(['/dashboard']);
        }      
    }

    private showError(msg:string) {
        this.errorMsg = msg;
    }
}
