import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserData } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private authService: AuthService,private router: Router) {}

	ngOnInit(): void {}

	onSubmit(postData: UserData) {
		this.authService.loginUser(postData).subscribe((responseData) => {			
			console.log(responseData);
		});
		this.authService.setLoginStatus(true);
		this.router.navigate(['dashboard']);		
	}
}
