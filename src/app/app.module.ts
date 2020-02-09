import { ComponentsModule } from './components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminLayoutComponent } from './admin-layout/admin-layout/admin-layout.component';
// tslint:disable-next-line: max-line-length
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatRippleModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatTooltipModule, MatExpansionModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactComponent } from './react/react.component';
import { AdminQuesComponent } from './admin-ques/admin-ques.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HighlightService } from './Services/highlight.service';
import { SafeHtmlPipe } from './dashboard/safe-html.pipe';








@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    HomeComponent,
    AdminQuesComponent,
    
    //DashboardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
  	FlexLayoutModule,
    MatExpansionModule,
    CKEditorModule,
    RichTextEditorAllModule,
    NgbModule

  ],
  providers: [
     { 
    provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // provider used to create fake backend
    //fakeBackendProvider
  ],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
