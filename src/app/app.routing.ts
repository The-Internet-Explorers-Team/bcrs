/*
============================================
; Title:  app.routing.ts
; Author: Professor Krasso
; Date:  1-22-21
; Modified by: Becca Buechle, Rochelle Markham, Rhonda Rivas, King Major
; Description: App Routing
;===========================================
*/


import {Routes} from '@angular/router';
import {BaseLayoutComponent} from './shared/base-layout/base-layout.component';
import {HomeComponent} from './pages/home/home.component';
import {SessionGuard} from './shared/guards/session.guard';
import {UserListComponent} from './pages/user-list/user-list.component';
import {UserDetailsComponent} from './pages/user-details/user-details.component';
import {SecurityQuestionListComponent} from './pages/security-question-list/security-question-list.component';
import {SecurityQuestionDetailsComponent} from './pages/security-question-details/security-question-details.component';
import {SecurityQuestionCreateComponent} from './pages/security-question-create/security-question-create.component';
import {AuthLayoutComponent} from './shared/auth-layout/auth-layout.component';
import {SigninComponent} from './pages/signin/signin.component';
import {RegisterComponent} from './pages/register/register.component';
import {VerifyUsernameFormComponent} from './pages/verify-username-form/verify-username-form.component';
import {VerifySecurityQuestionsFormComponent} from './pages/verify-security-questions-form/verify-security-questions-form.component';
import {ResetPasswordComponent} from './pages/reset-password/reset-password.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {ErrorComponent} from './pages/error/error.component';
import {ContactComponent} from './pages/contact/contact.component';
import {AboutComponent} from './pages/about/about.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        canActivate: [SessionGuard]
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'user-list',
        component: UserListComponent,
        canActivate: [SessionGuard]
      },
      {
        path: 'users/:userId',
        component: UserDetailsComponent,
        canActivate: [SessionGuard]
      },
      {
        path: 'security-questions',
        component: SecurityQuestionListComponent,
        canActivate: [SessionGuard]
      },
      {
        path: 'security-questions/:questionId',
        component: SecurityQuestionDetailsComponent,
        canActivate: [SessionGuard]
      },
      {
        path: 'security-questions/create/new',
        component: SecurityQuestionCreateComponent,
        canActivate: [SessionGuard]
      },
    ]
  },
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'signin',
        component: SigninComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'forgot',
        component: VerifyUsernameFormComponent
      },
      {
        path: 'verify-security-questions',
        component: VerifySecurityQuestionsFormComponent
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent
      },
      {
        path: '404',
        component: NotFoundComponent
      },
      {
        path: '500',
        component: ErrorComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'session/404'
  }
];
