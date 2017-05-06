import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  template:`
    <form action="#" method="post">
      <label>Login:</label>
      <input type="text" name="username" value="" />
      <label>Senha:</label>
      <input type="password" name="password" value=""  />
      <input type="submit" name="login" value="Log In" />
    </form>
  `
})
export class LoginComponent { }
