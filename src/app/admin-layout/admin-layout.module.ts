import { UserProfileComponent } from './../user-profile/user-profile.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { MatButtonModule, MatRippleModule, MatFormFieldModule,
  MatInputModule, MatSelectModule, MatTooltipModule, MatIconModule, MatMenuModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatListModule,MatAccordion,MatExpansionModule,
		MatExpansionPanel,MatAccordionBase, MatOptionModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminLayoutRoutingModule, AdminLayoutRoutes } from './admin-layout/admin-layout-routing.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { JavacComponent } from '../javac/javac.component';
import { ReactComponent } from '../react/react.component';
import { CardHoverDirective } from '../dashboard/card-hover.directive';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HighlightService } from '../Services/highlight.service';
import { SafeHtmlPipe } from '../dashboard/safe-html.pipe';


@NgModule({
  declarations: [UserProfileComponent,JavacComponent,ReactComponent,DashboardComponent,CardHoverDirective
  ,SafeHtmlPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
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
    ScrollingModule

    
  ],

  providers: [
    HighlightService
  ],
})
export class AdminLayoutModule { }
