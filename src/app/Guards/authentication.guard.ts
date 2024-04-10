import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';

export const authenticationCanActivateFnGuard: CanActivateFn = (route, state) => {
  
  const authentication = inject(AuthenticationService)
  const router = inject(Router)

  if(authentication.isLooged_static === true){
    return true
  }
  else{
    router.navigate(['/SignIn'])
    return false;
  }
};
