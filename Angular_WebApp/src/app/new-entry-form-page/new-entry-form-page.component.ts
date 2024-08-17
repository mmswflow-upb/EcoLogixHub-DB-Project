// Importing component
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Importing Services
import { DBRequestService } from '../../shared/services/db-request-service/db-request.service';
import { PageService } from '../../shared/services/page-service/page.service';
import { TableDataService } from '../../shared/services/table-data-service/table-data.service';
import { SessionGlobalDataService } from '../../shared/services/session-global-data-service/session-global-data.service';
import { DataValidationService } from '../../shared/services/data-validation-service/data-validation.service';

@Component({
  selector: 'new-entry-form-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-entry-form-page.component.html',
  styleUrl: './new-entry-form-page.component.css'
})

export class NewEntryFormPageComponent implements OnInit{

  pageOpen : boolean = false;
  formData : any = [];
  dataFormat : any[] = [];
  table: string = "";
  lockedForeignKeyField : string = "";
  lockedForeignKeyValue : string = "";
  lockedForeignKeyColumnIndex : number = -1;
  hasCheckbox : boolean = false;
  booleanColumnIndex : number = -1;

  constructor(private pageService : PageService, private dbRequestService : DBRequestService,
  private tableDataService : TableDataService, private sessionGlobalDataService : SessionGlobalDataService,
  private dataValidationService : DataValidationService) {

      this.pageService.pageStatus("NewEntryFormPage",(pageStatus : boolean)=>{
        
        if (pageStatus){
          this.lockedForeignKeyValue = this.tableDataService.getLockedForeignKeyValue()
          this.lockedForeignKeyField = this.tableDataService.getLockedForeignKeyColumn()
          this.lockedForeignKeyColumnIndex = this.tableDataService.getLockedForeignKeyColumnIndex()
        }

        this.pageOpen = pageStatus;
        this.table = this.sessionGlobalDataService.getFormDisplayedTable();        
        this.dataFormat = this.tableDataService.getTableDataTemplate(this.table);
        this.formData = new Array(this.dataFormat.length);  


        //Set an initial value to the boolean column if it exists
        this.hasCheckbox = this.tableDataService.hasCheckbox(this.table);
        this.booleanColumnIndex = this.tableDataService.getBooleanColumnIndex(this.table);

        if (this.hasCheckbox){
          this.formData[this.booleanColumnIndex] = '1';
        }

        //We are creating a new entry, while some entry is displayed on the overview page
        //We have to lock the foregin key field
        if (this.sessionGlobalDataService.getOverviewDisplayedTableData().length > 0){
        
          this.formData[this.lockedForeignKeyColumnIndex] = this.lockedForeignKeyValue;
        }

    })

  }

  ngOnInit() {}

  //This function will convert the boolean value of checkboxes to 1 or 0
  updateCheckbox(event : any,index : number){

    if (this.formData[index]){
      this.formData[index] = 0;
    }else{
      this.formData[index] = 1;
    }
  }

  //Sending the create request to the server and opening the overview page of the respective new entry
  sendCreateRequest(event : any){
    
    event.preventDefault();

    //Sending http request to the server to create the new entry
    
    if (this.dataValidationService.validateData(this.formData,this.table) === false){
    
      alert("Invalid Input!");
      return;
    }

    this.dbRequestService.insertData(this.dataFormat.map((arr) => arr[0]),this.formData,).subscribe((serverMessage : any) => {

      if (serverMessage !== "Error"){
        
        //Opening overview page from new Entry Form Page-> Overview data is set to the new entry form data (in component), Overview table takes the value of formTable, 
        //resultsListTable is set to the first table from the searchable tables of the newly appointed overview table (from tableDataService), form table is unchanged
        
        if (this.tableDataService.getAvailableTablesForSearch(this.table) !== undefined){

          this.sessionGlobalDataService.setAllGlobalData(serverMessage,this.table,
          this.tableDataService.getAvailableTablesForSearch(this.table)[0], this.tableDataService.getAvailableTablesForSearch(this.table)[0])
          this.pageService.changePagesEvent("NewEntryFormPage",["OverviewPage","SearchPage"])
        }
        else{

          this.sessionGlobalDataService.setAllGlobalData(serverMessage,this.table,
            "", "")
          this.pageService.changePagesEvent("NewEntryFormPage",["OverviewPage"])
        }

        //Delete old input data    
        this.formData = new Array(this.dataFormat.length);
      }else{
        alert("Failed to create new entry")
      }
    })
  }
}