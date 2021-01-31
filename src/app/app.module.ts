/*
============================================
; Title:  App module.js
; Author: Professor Krasso
; Date:  1-22-21
; Modified by: Becca Buechle, Rochelle Markham, Rhonda Rivas, King Major
; Description: App module
;===========================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppRoutes } from './app.routing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { HomeComponent } from './pages/home/home.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { SecurityQuestionCreateComponent } from './pages/security-question-create/security-question-create.component';
import { SecurityQuestionDetailsComponent } from './pages/security-question-details/security-question-details.component';
import { SecurityQuestionListComponent } from './pages/security-question-list/security-question-list.component';
import { SecurityQuestionDeleteDialogComponent } from './dialogs/security-question-delete-dialog/security-question-delete-dialog.component';
import { UserDeleteDialogComponent } from './dialogs/user-delete-dialog/user-delete-dialog.component';
import { SigninComponent } from './pages/signin/signin.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {CookieService} from 'ngx-cookie-service';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import {ErrorInterceptor} from './shared/interceptors/error.interceptor';
import { RegisterComponent } from './pages/register/register.component';
import { VerifyUsernameFormComponent } from './pages/verify-username-form/verify-username-form.component';
import { VerifySecurityQuestionsFormComponent } from './pages/verify-security-questions-form/verify-security-questions-form.component';
import { ResetPasswordFormComponent } from './pages/reset-password/reset-password.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatListModule } from '@angular/material/list';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ErrorComponent } from './pages/error/error.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ChartModule } from 'primeng/chart';
import { ServiceRepairComponent } from './pages/service-repair/service-repair.component';
import { InvoiceSummaryDialogComponent } from './dialogs/invoice-summary-dialog/invoice-summary-dialog.component';
import { PurchasesByServiceComponent } from './pages/purchases-by-service/purchases-by-service.component';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    AuthLayoutComponent,
    HomeComponent,
    UserListComponent,
    UserDetailsComponent,
    SecurityQuestionCreateComponent,
    SecurityQuestionDetailsComponent,
    SecurityQuestionListComponent,
    SecurityQuestionDeleteDialogComponent,
    UserDeleteDialogComponent,
    SigninComponent,
    RegisterComponent,
    VerifyUsernameFormComponent,
    VerifySecurityQuestionsFormComponent,
    ResetPasswordFormComponent,
    NotFoundComponent,
    ErrorComponent,
    AboutComponent,
    ContactComponent,
    ServiceRepairComponent,
    InvoiceSummaryDialogComponent,
    PurchasesByServiceComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes, { useHash: true, enableTracing: false, scrollPositionRestoration: 'enabled'}),
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatDividerModule,
    MatSelectModule,
    MatStepperModule,
    MatListModule,
    ChartModule,
    MatCheckboxModule,
  ],
  providers: [
    CookieService
  ],
  entryComponents: [
    UserDeleteDialogComponent,
    SecurityQuestionDeleteDialogComponent,
    InvoiceSummaryDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
