import { Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavacComponent } from './../../javac/javac.component';
import { UserProfileComponent } from './../../user-profile/user-profile.component';
import { DashboardComponent } from './../../dashboard/dashboard.component';
import { ReactComponent } from './../../react/react.component';




export const AdminLayoutRoutes: Routes = 
[
  {path :'', component : DashboardComponent},
  { path: 'java/:courseId', component: JavacComponent },
  { path: 'react/:id', component: ReactComponent },
  { path: 'user-profile',   component: UserProfileComponent },
  { path: 'java/:courseId/:topicName/:topicId/:subTopicName/:subTopicId',   component: JavacComponent },
  { path: 'java/:topicId/:topicName/:subTopicName/:subTopicId',   component: JavacComponent },
  { path: 'java/:topicId/:topicName/:subTopicName/:subTopicId',   component: JavacComponent },
  { path: 'react/:topicName/:subTopicName/:subTopicId',   component: ReactComponent }
];

export class AdminLayoutRoutingModule { }
