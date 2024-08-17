//Importing modules
import { Component , Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

//importing components
import { ResultsListItemComponent } from '../results-list-item/results-list-item.component';

@Component({
  selector: 'results-list',
  standalone: true,
  imports: [CommonModule,ResultsListItemComponent],
  templateUrl: './results-list.component.html',
  styleUrl: './results-list.component.css'
})

export class ResultsListComponent implements OnInit{

  @Input() fetchedData : any[] = [];
  
  constructor() { 

  }

  ngOnInit(): void {
  }
}
