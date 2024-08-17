//Importing Modules
import { Component , OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


//Importing Services
import { DBRequestService } from '../../shared/services/db-request-service/db-request.service';
import { PageService } from '../../shared/services/page-service/page.service';
import { TableDataService } from '../../shared/services/table-data-service/table-data.service';
import { SessionGlobalDataService } from '../../shared/services/session-global-data-service/session-global-data.service';

//Importing Components
import { ResultsListComponent } from '../results-list/results-list.component';

@Component({
  selector: 'search-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ResultsListComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})

export class SearchPageComponent implements OnInit{


  pageOpen : boolean = true;

  availableTablesForSearch : string[] = [];

  searchText : string = '';
  selectedTableIndex : number = 0;

  fetchedData  = [];


  constructor(private pageService : PageService, private dbRequestService : DBRequestService,
    private tableDataService : TableDataService, private sessionGlobalDataService : SessionGlobalDataService) {

    pageService.pageStatus("SearchPage",(pageStatus : boolean)=>{

      this.pageOpen = pageStatus;
      this.selectedTableIndex = 0;
      this.searchText = '';
      
      this.fetchedData = [];

      //The available tables for search might change, due to the user changing pages
      //the available tables in which we search will be updated
      //The service gets notified from the component where the page is changed
      //We also update the form table based on the new available tables for search
      this.availableTablesForSearch = tableDataService.getAvailableTablesForSearch(this.sessionGlobalDataService.getOverviewDisplayedTable());
      this.sessionGlobalDataService.setAllGlobalData()

      if (this.pageOpen){


        this.availableTablesForSearch = tableDataService.getAvailableTablesForSearch(this.sessionGlobalDataService.getOverviewDisplayedTable());

        if (this.availableTablesForSearch === undefined || this.availableTablesForSearch.length === 0){
          this.pageOpen = false;
          return;
        }


        //Set the proper tables to the global data service in order to show the right formats for the right tables on each page
        //while searchPage is active
        this.sessionGlobalDataService.setAllGlobalData(undefined,undefined,this.availableTablesForSearch[0],undefined,undefined,undefined)
          
        this.dbRequestService.getData(this.searchText)
          .subscribe((results : any) => {
                
              this.fetchedData = results;
    
            }
          )
        ;
        
        
      }
      
    })

    this.availableTablesForSearch = tableDataService.getAvailableTablesForSearch();
  }

  //When initialized, the component will fetch the data 
  //from the database and display it on the results list
  ngOnInit() {

    this.availableTablesForSearch =this.tableDataService.getAvailableTablesForSearch();
    //Searching for a new item-> overview data doesn't change, overview table doesn't change, resultsListTable is set to the selected searched table (in component), formTable doesn't change
    this.sessionGlobalDataService.setAllGlobalData(undefined,undefined,this.availableTablesForSearch[0],undefined)

    

    this.dbRequestService.getData(this.searchText)
    .subscribe((results : any) => {
        
      this.fetchedData = results;

    })

  }

  //This function will be called when the user clicks on the search button
  //It will fetch the data from the database and display it on the results list
  sendSearchRequest(event : any){

    event.preventDefault();
    
    //Searching for a new item-> overview data doesn't change, overview table doesn't change, resultsListTable is set to the selected searched table (in component), formTable doesn't change
    this.sessionGlobalDataService.setAllGlobalData(undefined,undefined,this.availableTablesForSearch[this.selectedTableIndex],undefined,undefined)

    this.dbRequestService.getData(this.searchText)
    .subscribe((results : any) => {
        this.fetchedData = results;
    })
  }
  

  //This function will be called when the user clicks on the add button
  //it will open the create new entry form page
  openNewEntryForm(event : any){

    event.preventDefault();
    
    //Opening new entry form page-> overview data doesn't change, overview table doesn't change, resultsListTable doesnt change, formTable from selected results list table (in component)
    this.sessionGlobalDataService.setAllGlobalData(undefined,undefined,undefined,this.availableTablesForSearch[this.selectedTableIndex],undefined, undefined)
    this.pageService.changePagesEvent("SearchPage",["NewEntryFormPage"])
  }
}