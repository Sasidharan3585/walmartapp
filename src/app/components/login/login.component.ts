import { Component, Inject, OnInit } from '@angular/core';
import walmartConfig from 'src/app/config/my-app-config';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import OktaSignIn from '@okta/okta-signin-widget';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  oktaSignin: any;
  constructor(private oktaAuthService: OktaAuthStateService, @Inject(OKTA_AUTH) private oktaAuth: OktaAuth) {
    this.oktaSignin = new OktaSignIn({

      logo: 'assets/images/products/logo.png',
      baseUrl: walmartConfig.oidc.issuer.split('/oauth2')[0],
      clientId: walmartConfig.oidc.clientId,
      redirectUri: walmartConfig.oidc.redirectUri,

      authParams: {

        pkce: true,
        issuer: walmartConfig.oidc.issuer,
        scopes: walmartConfig.oidc.scopes

      }

    });
  }

  ngOnInit(): void {
    this.oktaSignin.remove();

    this.oktaSignin.renderEl({

      el: '#okta-sign-in-widget'
    }, // this name should be same as div tag id in login.component.html

      (response) => {

        if (response.status === 'SUCCESS') {

          this.oktaAuth.signInWithRedirect();

        }

      },

      (error) => {

        throw error;

      }

    );
  }
}


