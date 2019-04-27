import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component
({
    selector: 'authmenu',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

    loginForm: FormGroup;
    constructor(
        private router: Router,
        private data : ApiserviceService,
        private formbuilder: FormBuilder
    ) {
        this.loginForm = this.formbuilder.group({
            'userid': ['', Validators.required],
            'password': ['', Validators.required]
        })
    }
    loggedIn()
    {
        return sessionStorage.token ? true : false;
    }
    ngOnInit()
    {
        // Logged In
        if(this.loggedIn())
        {
            this.router.navigate(['/']);
        }
    }
    login()
    {
        let url: string = 'http://35.196.35.2:8080/api/users/login';
        this.data.postData(url, this.loginForm.value).subscribe(data => {
            let token : string = data['token'];
            sessionStorage.setItem('token', token);
            this.router.navigate(['/']);
        });
    }
    register()
    {}
    forgot()
    {}
}
