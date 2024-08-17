//Importing modules
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


//Importing Services:
import { TableDataService } from '../../shared/services/table-data-service/table-data.service';
import { PageService } from '../../shared/services/page-service/page.service';
import { SessionGlobalDataService } from '../../shared/services/session-global-data-service/session-global-data.service';

@Component({
  selector: 'results-list-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './results-list-item.component.html',
  styleUrl: './results-list-item.component.css'
})
export class ResultsListItemComponent implements OnInit{

  @Input() data : any;
 
  dataFormat : string[][] = [];
  hasImage : boolean = false;

  constructor(private pageService : PageService, private tableDataService : TableDataService,
    private sessionGlobalDataService : SessionGlobalDataService) {}
  
  ngOnInit(): void {
    this.dataFormat = this.tableDataService.getTableDataTemplate(this.sessionGlobalDataService.getResultsListDisplayedTable());
    this.hasImage = this.tableDataService.hasImage(this.sessionGlobalDataService.getResultsListDisplayedTable());
  }

  //This function will be called when the user clicks on the results list item
  //It will open the overview page
  openOverviewPage(event : any){

    event.preventDefault();

    

    let temp_availableTablesForSearch = this.tableDataService.getAvailableTablesForSearch(this.sessionGlobalDataService.getOverviewDisplayedTable())

    //Some tables dont have connections to other tables through which we can search for them
    if (temp_availableTablesForSearch.length > 0){

      const newResultsListTable = this.tableDataService.getAvailableTablesForSearch(this.sessionGlobalDataService.getResultsListDisplayedTable())?.[0]
      //Opening overview page from List Item Component-> set overview data to item data (stored in component), 
      //overviewtable to selected resultsListTable (in component), new resultsListTable (from tableDataService), formTable is first of new resultsListTable

      this.sessionGlobalDataService.setAllGlobalData(this.data, this.sessionGlobalDataService.getResultsListDisplayedTable(),newResultsListTable,newResultsListTable)
      this.pageService.changePagesEvent("SearchPage",["SearchPage","OverviewPage"]);


    }else{
      //Same as above, but in this case we know that there are no connections to other tables
      this.sessionGlobalDataService.setAllGlobalData(this.data, this.sessionGlobalDataService.getResultsListDisplayedTable(),"","",undefined, undefined)
      this.pageService.changePagesEvent("SearchPage",["OverviewPage"]);

    }


    
  }

}
