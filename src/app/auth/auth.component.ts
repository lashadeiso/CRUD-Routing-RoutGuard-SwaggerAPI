import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  redirectURL!: string;
  constructor(
    private auth: AuthService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((res) => {
      this.redirectURL = res['url'];
    });
  }

  onAuthFromSubmit(authForm: NgForm) {
    this.auth.logInUser(authForm.value);
    authForm.reset();
    Swal.fire('Success');
    if (this.redirectURL != undefined) {
      this.router.navigate([this.redirectURL]);
    }
  }
}
