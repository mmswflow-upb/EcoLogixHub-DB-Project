//Importing Modules
import { Injectable } from '@angular/core';

//Importing Services
import { TableDataService } from '../table-data-service/table-data.service';
@Injectable({
  providedIn: 'root'
})

/**
 * @class DataValidationService
 * It is used to validate data from forms
 */

export class DataValidationService {

  constructor(private tableDataService : TableDataService) { }

  validateData(data: any[], tableName : string): boolean {
    for (let i = 0; i < data.length; i++) {
      if (data[i] === '' || data[i] === null || data[i] === undefined) {
        //We can have the image & ID fields empty
        if (i === 0 || (this.tableDataService.hasImage(tableName) && i === 2)){
          continue;
        }
        return false;
      }
    }
    return true;
  }
}
