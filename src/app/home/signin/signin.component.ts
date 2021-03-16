import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
    selector: 'ap-signin',
    templateUrl: './signin.component.html'

})
export class SigninComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }


    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({


        });
    }

}