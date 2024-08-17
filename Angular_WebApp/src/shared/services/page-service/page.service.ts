//Importing Modules
import { Injectable } from '@angular/core';
import { Observable , Subject} from 'rxjs';

//Importing Services
import { SessionGlobalDataService } from '../session-global-data-service/session-global-data.service';

@Injectable({
  providedIn: 'root'
})

/**
 * @class PageService 
 * It is used to trigger events when changing pages
 */

export class PageService {

  private subject = new Subject<any>();

  private static openPages = ["SearchPage"];
  

  constructor(private sessionGlobalDataService : SessionGlobalDataService) { }

  //When the page is changed we trigger an event
  changePagesEvent(sourcePage : string, nextOpenPages : string[]){
    

    PageService.openPages = nextOpenPages

    this.subject.next({});

  }

  //All the pages components listen for this event to check if they should be open or not
  pageStatus(sourcePage : string ,callback : any){
  
    this.subject.asObservable().subscribe((eventObj)=>{

        callback(PageService.openPages.includes(sourcePage));
    })
  }
}