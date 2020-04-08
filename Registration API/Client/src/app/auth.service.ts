import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { UserData } from './user.model';
import { catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { throwError } from 'rxjs';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
		//'Authorization': 'my-auth-token'
	})
};

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private http: HttpClient) {}

	private isLogIn: boolean = false;

	setLoginStatus(value: boolean) {
		this.isLogIn = value;
	}

	get isLoggedIn() {
		return this.isLogIn;
	}

	loginUser(postData: UserData) {
		// Send Http request
		return this.http.post('http://localhost:3000/api/user/login', postData, httpOptions);
	}
	registerUser(postData: UserData) {
		// Send Http request
		return this.http.post(environment.apiBaseUrl+'/register', postData, httpOptions)
		.pipe(catchError(this.errorHandler));
	}
	errorHandler(error: HttpErrorResponse) {
		return throwError(error);   
	  } 
}
