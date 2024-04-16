import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { ErrorComponent } from './error/error.component';
import { RouteGuardService } from './service/route-guard.service';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "login", component: LoginComponent },
    { path: "logout", component: LogoutComponent, canActivate:[RouteGuardService] },
    { path: "welcome/:name", component: WelcomeComponent, canActivate:[RouteGuardService] },
    { path: "todos", component: ListTodosComponent, canActivate:[RouteGuardService] },
    { path: "**", component: ErrorComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class appRoutingModule {}
