import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MustMatch } from 'src/app/_helpers/must-match.validator';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];


    
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {

   
  }
}


