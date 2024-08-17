// Importing Modules
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//Importing components:

import { TopBarComponent } from './top-bar/top-bar.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { NewEntryFormPageComponent } from './new-entry-form-page/new-entry-form-page.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, //modules
            TopBarComponent, SearchPageComponent, OverviewPageComponent,
            NewEntryFormPageComponent],
 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit {

  //**CURRENT Page related information:

  title = 'Angular_DBA_WebApp';

  //Loading the services:
  constructor() { }

  //Retrieve Data according to the initial filter from database
  ngOnInit(): void {
  
  }
}