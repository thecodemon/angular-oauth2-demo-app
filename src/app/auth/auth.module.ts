import { APP_INITIALIZER, NgModule } from "@angular/core";
import { AuthConfig, OAuthModule, OAuthStorage } from "angular-oauth2-oidc";
import { InitialAuthService } from "./initial-auth.service";
import { environment } from "../../environments/environment";

const configAuthZero: AuthConfig = environment.idp;

// We need a factory, since localStorage is not available during AOT build time.
export function storageFactory(): OAuthStorage {
  return localStorage
}

@NgModule({
  imports: [OAuthModule.forRoot()],
  providers: [
    InitialAuthService,
    { provide: AuthConfig, useValue: configAuthZero },
    { provide: OAuthStorage, useFactory: storageFactory },
    {
      provide: APP_INITIALIZER,
      useFactory: (initialAuthService: InitialAuthService) => () =>
        initialAuthService.initAuth(),
      deps: [InitialAuthService],
      multi: true,
    },
  ],
})
export class AuthModule { }