//Importing Modules
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Importing Services
import { DBRequestService } from '../../shared/services/db-request-service/db-request.service';
import { PageService } from '../../shared/services/page-service/page.service';
import { TableDataService } from '../../shared/services/table-data-service/table-data.service';
import { SessionGlobalDataService } from '../../shared/services/session-global-data-service/session-global-data.service';
import { CheckboxFieldComponent } from '../checkbox-field/checkbox-field.component';
import { DataValidationService } from '../../shared/services/data-validation-service/data-validation.service';

@Component({
  selector: 'overview-page',
  standalone: true,
  imports: [CommonModule, FormsModule, CheckboxFieldComponent],
  templateUrl: './overview-page.component.html',
  styleUrl: './overview-page.component.css'
})

export class OverviewPageComponent {

  pageOpen : boolean = false;

  displayedData : any = []
  displayedDataFormat : any = []
  editMode : boolean = false;
  
  navigationTables : any = []
  navigationData : any = []
  previousTable : string = ""

  editButtonText : string = "View Mode"

  hasCheckbox : boolean = false;
  booleanColumnName : string = ""
  booleanColumnIndex : number = -1;

  checkboxValue : string = '0';

  hasImage : boolean = false;



  constructor(private pageService : PageService, private dbRequestService : DBRequestService,
    private tableDataService : TableDataService, private sessionGlobalDataService : SessionGlobalDataService,
    private dataValidationService : DataValidationService) {

    pageService.pageStatus("OverviewPage",(pageStatus : boolean)=>{

      this.pageOpen = pageStatus;

      if (pageStatus){
        
        this.displayedData = this.sessionGlobalDataService.getOverviewDisplayedTableData();
        this.navigationTables = this.tableDataService.getNavigationTables();
        this.displayedDataFormat = this.tableDataService.getTableDataTemplate(this.sessionGlobalDataService.getOverviewDisplayedTable())
        
        this.hasCheckbox = this.tableDataService.hasCheckbox(this.sessionGlobalDataService.getOverviewDisplayedTable())
        
        this.booleanColumnName = this.displayedDataFormat[this.tableDataService.getBooleanColumnIndex(this.sessionGlobalDataService.getOverviewDisplayedTable())]?.[0]
        this.booleanColumnIndex = this.tableDataService.getBooleanColumnIndex(this.sessionGlobalDataService.getOverviewDisplayedTable())
        this.hasImage = this.tableDataService.hasImage(this.sessionGlobalDataService.getOverviewDisplayedTable())
        
        this.editMode = false;
        this.editButtonText = "View Mode"

        this.navigationData = this.sessionGlobalDataService.getNavigationData()
        this.previousTable = this.sessionGlobalDataService.getPreviousTable()


        if (this.hasCheckbox){
          this.checkboxValue = this.displayedData[this.booleanColumnIndex]
        }

      }

      
    })
  }


  updateCheckbox(event : any = undefined) {


    if (this.booleanColumnIndex >= 0){

      this.displayedData[this.booleanColumnIndex] = event?.target?.checked === true ? '1' : '0';

      this.displayedData[this.booleanColumnIndex] = this.displayedData[this.booleanColumnIndex] === '0' ? null : '1';
    }

  }

  //Switch between edit mode and view mode, if the user changes stuff
  //but doesnt save the changes, and turns off edit mode, the input fields
  //will be reset to the original values
  switchEditMode() {

    this.displayedData = this.sessionGlobalDataService.getOverviewDisplayedTableData()
    this.editMode = !this.editMode;    
    this.editButtonText = this.editMode ? "Edit Mode" : "View Mode"

    if (this.hasCheckbox){


      this.checkboxValue = this.displayedData[this.booleanColumnIndex]
    }

  }


  //Send update request to the server:
  sendUpdateRequest(event : any) {


    event.preventDefault();

    if (this.hasCheckbox){
        
        this.displayedData[this.booleanColumnIndex] = this.checkboxValue;
    }

    if (this.dataValidationService.validateData(this.displayedData, this.sessionGlobalDataService.getOverviewDisplayedTable()) === false) {
    alert("Invalid Input")
    return;
    }

    this.dbRequestService.updateData(this.displayedData).subscribe((response : any)=>{

      if(response === "Success") {

        //After successfully editing the data in the overview page, we update the data in the service aswell
        this.sessionGlobalDataService.setAllGlobalData(this.displayedData, undefined, undefined, undefined,undefined, undefined)
      }
      else {

        alert("Failed To Update Data")
      }
      this.switchEditMode()

    })
  }

  //Send delete request to the server:
  sendDeleteRequest(event : any) {


    event.preventDefault();

    this.dbRequestService.deleteData(this.displayedData).subscribe((response : any)=>{

      if(response === "Success") {


        if (this.navigationData.length === 0 || this.navigationData === undefined) {

          //After successfully deleting the data in the overview page, we return home 
          //Or if there was a previously accessed page, then we go back to it (only if it's a parent table)
          this.sessionGlobalDataService.setAllGlobalData("","",this.tableDataService.getAvailableTablesForSearch()[0],
          this.tableDataService.getAvailableTablesForSearch()[0],undefined,undefined)

          this.pageService.changePagesEvent("",["SearchPage"])
        }
        else
        {
          //After successfully deleting the data in the overview page, we return to the previous page
          //Or if there was a previously accessed page, then we go back to it (only if it's a parent table)

          this.dbRequestService.getDataNodeTable(this.previousTable, this.navigationData[0])
          .subscribe((previousTableData : any) => {
           
              this.sessionGlobalDataService.setAllGlobalData(previousTableData[0],this.previousTable,
              this.tableDataService.getAvailableTablesForSearch(this.previousTable)[0],
              this.tableDataService.getAvailableTablesForSearch(this.previousTable)[0], undefined, undefined)
              this.pageService.changePagesEvent("",["OverviewPage","SearchPage"])  
            })
        }
      }
      else {

        alert("Failed To Delete Data")
      }
    })
  }

  //This method is called by the button which appears on the overview page if the table
  //Has no entry for the entry in the previously opened table 
  //(e.g if the table is ProjectOverview and we're trying to open the community forum
  //but it doesn't have one yet, we can create one and associate it to the project)
  createNewEntry(event : any) {
      
    event.preventDefault();
  
    this.dbRequestService.getDataNodeTable(this.previousTable, this.navigationData[0])
    .subscribe((searchOnForeignKeyResult : any) =>{

        this.sessionGlobalDataService.setAllGlobalData(searchOnForeignKeyResult?.[0],this.previousTable,
        this.tableDataService.getAvailableTablesForSearch(this.sessionGlobalDataService.getOverviewDisplayedTable())?.[0],
        this.sessionGlobalDataService.getOverviewDisplayedTable(), undefined, undefined)
    
       
    
        this.pageService.changePagesEvent("",["NewEntryFormPage"])

    })

    
  }

  //A method that is called when the goBack button is clicked because no data was available
  //to be displayed on the overview page
  goBack(event : any){
      
    if (this.previousTable === '') {//There was no previous page

      this.sessionGlobalDataService.setAllGlobalData("","",this.tableDataService.getAvailableTablesForSearch()[0],
      this.tableDataService.getAvailableTablesForSearch()[0],[],"")

      this.pageService.changePagesEvent("",["SearchPage"])
    }
    else{//There is a previous page and we're going back to it

      this.dbRequestService.getDataNodeTable(this.previousTable, this.navigationData[0])
      .subscribe((searchOnForeignKeyResult : any) => 
        {

          this.sessionGlobalDataService.setAllGlobalData(searchOnForeignKeyResult[0],this.previousTable,
          this.tableDataService.getAvailableTablesForSearch(this.previousTable)[0],
          this.tableDataService.getAvailableTablesForSearch(this.previousTable)[0],
          [],""
          )

          this.pageService.changePagesEvent("",["OverviewPage","SearchPage"])
        }
      )
    }
  }

  //This method is called by the buttons in the overview page to navigate 
  //to another overview page
  navigateToTable(event : any, tableName : string) {

    event.preventDefault();

    let nextTableData1 : any = []

    //Checking if the currently displayed table is a child table of the table we're navigating to
    if (this.tableDataService.isChildTable(this.sessionGlobalDataService.getOverviewDisplayedTable(), tableName) === true) {
    
      this.dbRequestService.getDataNodeTable(tableName, this.navigationData[0])
      .subscribe((data : any) => {

        nextTableData1 = data?.[0];

        this.sessionGlobalDataService.setAllGlobalData(nextTableData1,tableName,
          this.tableDataService.getAvailableTablesForSearch(tableName)[0],
          this.tableDataService.getAvailableTablesForSearch(tableName)[0],
          "","")
        this.pageService.changePagesEvent("",["OverviewPage","SearchPage"])

      })
      return;
    }
    
    let nextTableData2 :any = []

    this.dbRequestService.getDataFromForeignKey(tableName, this.displayedData[0]).subscribe((data : any) => {

      nextTableData2 = data[0];

      //If the next table we're navigating to doesnt have an entry for the current entry
      //We will only display the overview page on which we will have the "create new entry" button
      // And the go Back button
      if (nextTableData2 === undefined || nextTableData2.length === 0) {

        
        this.sessionGlobalDataService.setAllGlobalData(
        [],
        tableName,
        undefined,
        undefined,
        this.displayedData[0].slice(),//The primary key value of the current table
        this.sessionGlobalDataService.getOverviewDisplayedTable(),//The previous table (which is the current one)
        )
        
        this.pageService.changePagesEvent("",["OverviewPage"])

      }else
      {//If the next table we're navigating to has an entry for the current entry


        console.log("\n\nNavigating to table: " + tableName)
        console.log("With navData: " + this.displayedData[0])
        console.log("The Previous table will be: : " + this.sessionGlobalDataService.getOverviewDisplayedTable()+"\n\n")

        //If the next table we're navigating to doesnt have an entry for the current entry
        //We will only display the overview page on which we will have the "create new entry" button

        this.sessionGlobalDataService.setAllGlobalData(
        nextTableData2,
        tableName,
        this.tableDataService.getAvailableTablesForSearch(tableName)?.[0],
        this.tableDataService.getAvailableTablesForSearch(tableName)?.[0],
        this.displayedData[0],//The primary key value of the current table
        this.sessionGlobalDataService.getOverviewDisplayedTable()//The previous table (which is the current one)
        )
        this.pageService.changePagesEvent("",["SearchPage","OverviewPage"])
        
      }

      })
  }
}