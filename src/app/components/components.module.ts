import { DashboardComponent } from './../dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
// tslint:disable-next-line: max-line-length
import { MatButtonModule, MatMenuModule, MatCardModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatFormFieldModule, matFormFieldAnimations, MatFormFieldControl, MatOptionModule, MatSelectModule, MatRippleModule, MatInputModule, MatTooltipModule, MatExpansionModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthenticationService } from '../Services/authentication.service';

@NgModule({
  declarations: [FooterComponent, NavbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
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
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
   
  ]
})
export class ComponentsModule { }
