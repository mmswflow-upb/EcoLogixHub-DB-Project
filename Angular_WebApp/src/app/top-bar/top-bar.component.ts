//Importing Components
import { Component} from '@angular/core';

//Importing Services
import { PageService } from '../../shared/services/page-service/page.service';
import { TableDataService } from '../../shared/services/table-data-service/table-data.service';
import { SessionGlobalDataService } from '../../shared/services/session-global-data-service/session-global-data.service';

@Component({
  selector: 'top-bar',
  standalone: true,
  imports: [],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})

export class TopBarComponent {


  constructor(private pageService : PageService, private tableDataService : TableDataService,
    private sessionGlobalDataService : SessionGlobalDataService) {
  }

  returnHome(){

    //Return home-> set overview data to null, overviewtable to null, resultsListTable to default (from tableDataService), set formTable to first of resultsListTable
    this.sessionGlobalDataService.setAllGlobalData("","",this.tableDataService.getAvailableTablesForSearch()[0],
    this.sessionGlobalDataService.getResultsListDisplayedTable(),[],"")
    this.pageService.changePagesEvent("",["SearchPage"])
  }
}
