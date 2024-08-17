//Importing Modules
import { Injectable } from '@angular/core';

//Importing Services

@Injectable({
  providedIn: 'root'
})

/**
 * @class SessionGlobalDataService
 * It is used to store the current data that is being displayed on the screen
 * or data that is being used by other services, data can also 
 * be retrieved from this service
   
  * Deleting an entry-> returns home for now
*/

export class SessionGlobalDataService {

  private static overviewDisplayedTable = "";
  private static resultsListDisplayedTable = "";
  private static overviewDisplayedTableData = [];
  private static formDisplayedTable = "";

  private static navigationData : any = [];//Used when navigating from overview page to another overview page
  private static previousTable : string = "";//Used when navigating from overview page to another overview page
  
  constructor() { }

  //This method is used by components to set all global data in one go
  setAllGlobalData( overviewDisplayedTableData? : any,overviewDisplayedTable? : string,
    resultsListDisplayedTable? : string, formDisplayedTable? : string, navigationData? : any, previousTable? : string){


    if (overviewDisplayedTable !== undefined){
      SessionGlobalDataService.overviewDisplayedTable = overviewDisplayedTable;
    }
    
    if ( resultsListDisplayedTable !== undefined){
      SessionGlobalDataService.resultsListDisplayedTable = resultsListDisplayedTable;
    }
    
    if (overviewDisplayedTableData !== undefined){
      SessionGlobalDataService.overviewDisplayedTableData = overviewDisplayedTableData;
    }

    if (formDisplayedTable !== undefined){
      SessionGlobalDataService.formDisplayedTable = formDisplayedTable;
    }

    if (navigationData !== undefined){
      SessionGlobalDataService.navigationData = navigationData;
    }

    if (previousTable !== undefined){
      SessionGlobalDataService.previousTable = previousTable;
    }
  }


  getOverviewDisplayedTable(){
    return SessionGlobalDataService.overviewDisplayedTable.slice();
  } 

  getOverviewDisplayedTableData(){
    return SessionGlobalDataService.overviewDisplayedTableData.slice();
  }

 
  getFormDisplayedTable(){
    return SessionGlobalDataService.formDisplayedTable.slice();
  }

  

  getResultsListDisplayedTable(){
    return SessionGlobalDataService.resultsListDisplayedTable.slice();
  }

  getNavigationData(){
    return SessionGlobalDataService.navigationData.slice();
  }

  getPreviousTable(){
    return SessionGlobalDataService.previousTable.slice();
  }

}