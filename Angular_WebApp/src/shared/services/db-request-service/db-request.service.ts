//Importing Modules:
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

//Importing Services:
import { TableDataService } from '../table-data-service/table-data.service';
import { PageService } from '../page-service/page.service';
import { SessionGlobalDataService } from '../session-global-data-service/session-global-data.service';

@Injectable({
  providedIn: 'any'
})

/**
 * @class DBRequestService
 * It is used to send HTTP requests to the server-side 
 * which can access the database to retrieve, insert, update or delete data
 */

export class DBRequestService {

  private DB_php_DataRetriever = 'http://localhost/EcoLogixHub/DB_Project_BackendScripts/DB_DataRetriever.php';
  private DB_php_DataInsertion = 'http://localhost/EcoLogixHub/DB_Project_BackendScripts/DB_DataInsertion.php';
  private DB_php_DataUpdater = 'http://localhost/EcoLogixHub/DB_Project_BackendScripts/DB_DataUpdater.php';
  private DB_php_DataDeletion = 'http://localhost/EcoLogixHub/DB_Project_BackendScripts/DB_DataDeletion.php';

  private getStandardOptions(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
      
    }
  }

  constructor(private http: HttpClient, private tableDataService: TableDataService,
    private pageService : PageService, private sessionGlobalDataService : SessionGlobalDataService) { }

  //Handle network errors:
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      alert(`There is an issue with the client or network: ` + error.error)

    } else {

      alert(`Server-side error: ` + error.message)
    }
    return throwError(() => { new Error('Failed Attempt To Communicate With Server') })
  }

  //Fetch data from the database:
  getData(searchPattern : string) {

    const tableName = this.sessionGlobalDataService.getResultsListDisplayedTable()

    const foreignKey = this.sessionGlobalDataService.getOverviewDisplayedTableData()[0]

    let constraints = this.tableDataService.generateConstraints(tableName,searchPattern,foreignKey);

    let dataObj = {
      tableName: tableName,
      constraints: constraints,
    }


    return this.http.post(this.DB_php_DataRetriever,dataObj).pipe(catchError(this.handleError));
  }

  //Fetch the data of a connected table through the foreign key (from origin to branch)
  getDataFromForeignKey(tableName : string,foreignKey : string) {

    const constraints = this.tableDataService.getNavTableConstraint(tableName,foreignKey);


    const dataObj = {
      tableName: tableName,
      constraints: constraints,
    }


    return this.http.post(this.DB_php_DataRetriever,dataObj).pipe(catchError(this.handleError));
  }

  //Fetch the data of a connected table through the foreign key (from branch to origin)
  getDataNodeTable(tableName : string,id : string) {

    const constrainedColumn = this.tableDataService.getTableDataTemplate(tableName).map((formatArr)=>{return formatArr[0]})[0]
    const constraintValue = id;

    const dataObj = {
      tableName: tableName,
      constraints : [[constrainedColumn,constraintValue]]
    }

    return this.http.post(this.DB_php_DataRetriever,dataObj).pipe(catchError(this.handleError))
  }

  //Insert data into the database:
  insertData(columnNames : String[],newData : any) {
  
    const tableName = this.sessionGlobalDataService.getFormDisplayedTable()

    const dataObj = {

      tableName : tableName,
      columnNames : columnNames,
      newValues : newData
    }

    return this.http.post(this.DB_php_DataInsertion, dataObj);
  }

  //Update data in the database:
  updateData(updatedData : any) {

    const overviewTable = this.sessionGlobalDataService.getOverviewDisplayedTable()
    const columnNames = this.tableDataService.getTableDataTemplate(overviewTable).map((formatArr)=>{return formatArr[0]})
    const dataObj= {
      tableName : overviewTable,
      columnNames : columnNames,
      columnValues : updatedData

    } 
    return this.http.post(this.DB_php_DataUpdater, dataObj).pipe(catchError(this.handleError));
  }
  

  //Delete data from the database:
  deleteData(deletedData : any) {

    const overviewTable = this.sessionGlobalDataService.getOverviewDisplayedTable()
    const dataObj = {

      tableName : overviewTable,
      idColumnName: this.tableDataService.getTableDataTemplate(overviewTable)[0][0],
      idColumnValue : deletedData[0]
    }

    return this.http.post(this.DB_php_DataDeletion,dataObj).pipe(catchError(this.handleError));
  }
}