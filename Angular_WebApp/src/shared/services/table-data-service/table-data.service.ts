import { Injectable } from '@angular/core';

import { SessionGlobalDataService } from '../session-global-data-service/session-global-data.service';

@Injectable({
  providedIn: 'root'
})

/**
 * @class TableDataService
 * It provides: Data formats for each table, Which tables can be searched in from a given table,
 * Which tables can be navigated to from a given table, Whether a table has an image column,
 * Whether a table has a checkbox column, The column index of the checkbox column,
 * And the constraints imposed by a table when searching for data in a connected table
 *
 */

export class TableDataService {

  private tables : string[] = 
  [ "ProjectOverview", 
    "ProjectScope","EnvironmentalIssuesCatalog",
    "SolutionCategories","TechnologyStack",
    "ImpactReports","ContinuousImprovementPlan",
    "CommunityForums","Users","Posts","SubmittedSolutions",
    "ReviewApprovalWorkflow","EventsCalendar","EducationalPrograms",
    "ResourceLibrary","MarketingOutreachStrategy",
    "Stakeholders","FundingSources",
    "CollaborationOpportunities","ProjectTimeline"]

  private tableFormats :string[][][] = [
  [["ProjectID", "text"],["ProjectLogo","text"],["ProjectName","text"],["ProjectDescription","text"],["ProjectPurpose","text"]],
  [["ProjectScopeID", "text"],["ProjectScopeDescription","text"],["ProjectID","text"]],
  [["IssueID","text"],["IssueName", "text"],["ProjectScopeID","text"]],
  [["CategoryID","text"],["CategoryName","text"],["IssueID","text"]],
  [["TechnologyID","text"],["TechnologyLogo", "text"],["TechnologyName","text"],["TechnologyDescription","text"],["CategoryID","text"]],
  [["ImpactReportID","text"],["ImpactScore", "text"],["ImpactReportDescription","text"],["CategoryID","text"]],
  [["ImprovementPlanID", "text"],["PlanStrategy","text"],["PlanDeadline","text"],["PlanResponsibleParty", "text"],["ImpactReportID","text"]],
  [["ForumID","text"],["ForumLogo","text"],["ForumTitle","text"],["ForumDescription","text"],["ProjectID","text"]],
  [["UserID", "text"],["UserImage","text"],["Username","text"],["Password","text"],["UserEmail","text"],["UserType","text"],["IsAdmin","checkbox"]],
  [["PostID","text"],["PostImage", "text"],["PostTitle", "text"],["PostContent", "text"],["PostDate","text"],["ForumID","text"],["UserID","text"]],
  [["SubmissionID","text"],["SubmissionImage", "text"],["SubmissionDescription","text"],["SubmissionDate","text"],["UserID","text"]],
  [["ReviewID","text"],["ApprovalStatus","text"],["ReviewComment","text"],["ReviewerID","text"],["ForumID","text"],["SubmissionID","text"]],
  [["EventID", "text"],["EventLogo","text"],["EventName","text"],["EventDescription","text"],["EventDate","text"],["EventLocation","text"]],
  [["ProgramID","text"],["ProgramLogo", "text"],["ProgramName","text"],["ProgramDescription","text"],["ProjectID","text"],["EventID","text"]],
  [["ResourceID","text"],["ResourceLogo", "text"],["ResourceTitle","text"],["ResourceType", "text"],["ResourceLink", "text"],["ResourceDescription","text"],["ProgramID","text"]],
  [["StrategyID","text"],["StrategyDescription","text"],["TargetAudience", "text"],["ProgramID","text"]],
  [["StakeholderID","text"],["StakeholderName","text"],["StakeholderType", "text"],["ProjectID","text"]],
  [["FundingID","text"],["FundingName","text"],["FundingType","text"],["FundingAmount", "text"],["StakeholderID","text"]],
  [["CollaborationID","text"],["CollaborationDescription","text"],["StakeholderID","text"]],
  [["TimelineID","text"],["Deadline","text"],["ProjectID","text"]]
  ]

  constructor(private sessionGlobalDataService : SessionGlobalDataService) { }

  //This function will return the tables which are available to be searched in
  //It will return the tables which are connected to the sourceTable
  //If no sourceTable is provided, then it will return the 3 main tables
  getAvailableTablesForSearch(sourceTable? : string) : any{

    
    if (!sourceTable){

      return ["Users", "ProjectOverview", "EventsCalendar"]
    }

    if(sourceTable == "Users"){
    
      return ["Posts","SubmittedSolutions"];
    }

    if (sourceTable == "ProjectOverview"){
    
      return ["EducationalPrograms","Stakeholders"];
    }

    if (sourceTable == "EventsCalendar"){
      return ["EducationalPrograms"]
    }

    if (sourceTable == "EducationalPrograms"){
      return ["ResourceLibrary", "MarketingOutreachStrategy"]
    }

    if (sourceTable == "ProjectScope"){
      return ["EnvironmentalIssuesCatalog"]
    }

    if (sourceTable == "EnvironmentalIssuesCatalog"){
      return ["SolutionCategories"]
    }

    if (sourceTable == "SolutionCategories"){
      return ["ImpactReports", "TechnologyStack"]
    }

    if (sourceTable == "Stakeholders"){
      return ["FundingSources", "CollaborationOpportunities"]
    }

    if (sourceTable == "CommunityForums"){
      return ["Posts"]
    }

    if (sourceTable == "ReviewApprovalWorkflow"){
      return ["SubmittedSolutions"]
    }
    

    return undefined
  }

  //This function will return tables which we 
  //can navigate to from the overview page of the sourceTable
  getNavigationTables() : string[]{

    const sourceTable = this.sessionGlobalDataService.getOverviewDisplayedTable();


    if (sourceTable === "ProjectOverview"){
      return ["ProjectTimeline", "ProjectScope","CommunityForums"]
    }

    if(sourceTable === "ProjectTimeline"){
      return ["ProjectOverview"]
    }

    if (sourceTable === "ProjectScope"){
      return ["ProjectOverview"]
    }

    if(sourceTable === "EnvironmentalIssuesCatalog"){
      return ["ProjectScope"]
    }

    if (sourceTable === "SolutionCategories"){
      return ["EnvironmentalIssuesCatalog"]
    }

    if (sourceTable === "TechnologyStack"){
      return ["SolutionCategories"]
    }

    if (sourceTable === "ImpactReports"){
      return ["ContinuousImprovementPlan"]
    }

    if (sourceTable === "ContinuousImprovementPlan"){
      return["ImpactReports"]
    }

    if (sourceTable === "CommunityForums"){
      return ["ReviewApprovalWorkflow", "ProjectOverview"]
    }

    if (sourceTable === "Posts"){
      return ["Users", "CommunityForums"]
    }

    if (sourceTable === "SubmittedSolutions"){
      return ["ReviewApprovalWorkflow", "Users"]
    }

    if (sourceTable === "ReviewApprovalWorkflow"){
      return ["CommunityForums"]
    }

    if (sourceTable === "EducationalPrograms"){
      return ["ProjectOverview", "EventsCalendar"]
    }

    if (sourceTable === "ResourceLibrary"){
      return ["EducationalPrograms"]
    }

    if (sourceTable === "MarketingOutreachStrategy"){
      return ["EducationalPrograms"]
    }

    if (sourceTable === "Stakeholders"){
      return ["ProjectOverview"]
    }

    if (sourceTable === "FundingSources"){
      return ["Stakeholders"]
    }

    if (sourceTable === "CollaborationOpportunities"){
      return ["Stakeholders"]
    }

    return []
  }

  //How we display info on the overview page or create new entry form page
  getTableDataTemplate(sourceTable : string) : string[][]{
    let index = this.tables.indexOf(sourceTable);
    const tableData = this.tableFormats.at(index);
    return tableData ? tableData : [];
  }

  //Returns whether the table has an image column
  hasImage(sourceTable : string) : boolean{

    if (["Users", "ProjectOverview", "EventsCalendar","SubmittedSolutions",
        "Posts","CommunityForums","ResourceLibrary","EducationalPrograms","TechnologyStack"].includes(sourceTable)){
      return true;
    }
    return false;
  }

  //Returns whether the table has a checkbox column
  hasCheckbox(sourceTable : string) : boolean{

    if (["Users"].includes(sourceTable)){
      return true;
    }
    return false;
  }

  //Returns the column index of the checkbox column
  getBooleanColumnIndex(sourceTable : string) : number{
  
      if (["Users"].includes(sourceTable)){
        return 6;
      }
      return -1;
  }

  //Returns the name column of the table
  getNameColum(sourceTable : string) : string{
    
    let index = this.tables.indexOf(sourceTable);

    if (sourceTable === "ProjectTimeline" || sourceTable === "EnvironmentalIssuesCatalog"){

      return this.tableFormats[index][1][0]
    }

    return this.tableFormats[index][2][0];
  }

  //Returns the constraints a table imposes when searching for data
  generateConstraints(searchedTable : string, actualNameValue : string, foreignKeyValue : string) : any{

    

    //The source table is the table which is displayed on the overview page
    let sourceTable = this.sessionGlobalDataService.getOverviewDisplayedTable();
    let indexSourceTable = this.tables.indexOf(sourceTable);

    //The name column in the table where we're searching
    let indexSearchedTable = this.tables.indexOf(searchedTable);
    let nameColumn = this.getNameColum(searchedTable)

    //Checking to see if we're just searching, 
    //which we are not if index is not -1 (overview page is open)
    if (indexSourceTable >= 0){

      //We'll use the foreign key of the first column of the source table 
      //as the constraint and the name of the entries in the table in which we're searching
      let foreignKeyColumn = this.tableFormats[indexSourceTable][0][0]


      return [[nameColumn,actualNameValue],[foreignKeyColumn, foreignKeyValue]]
    }

    return [[nameColumn,actualNameValue]]
  }

  //Returns the constraints a table imposes when navigating to a directly connect table
  getNavTableConstraint(navTable : string, foreignKeyValue : string) : any {

    const sourceTable = this.sessionGlobalDataService.getOverviewDisplayedTable()
    const indexSourceTable = this.tables.indexOf(sourceTable)


    if (indexSourceTable >= 0){

      return [[this.tableFormats[indexSourceTable][0][0],foreignKeyValue]]
    
    }
    return [];
  }

  //Returns the column which is locked on the new entry form page
  getLockedForeignKeyColumn() : string{
      
      let sourceTable = this.sessionGlobalDataService.getOverviewDisplayedTable();
      let indexSourceTable = this.tables.indexOf(sourceTable);
  
      if (indexSourceTable >= 0){
        
        return this.tableFormats[indexSourceTable][0][0]
      }
  
      return ""
  }

  //returns the value of the locked foreign key on the new entry form page
  getLockedForeignKeyValue() : string{

    let sourceTable = this.sessionGlobalDataService.getOverviewDisplayedTable();
    let indexSourceTable = this.tables.indexOf(sourceTable);

    if (indexSourceTable >= 0){
      return this.sessionGlobalDataService.getOverviewDisplayedTableData()[0]
    }

    return ""
  }

  //Returns the column index of the locked foreign key column
  getLockedForeignKeyColumnIndex() : number{

    const tableIndex = this.tables.indexOf(this.sessionGlobalDataService.getFormDisplayedTable()) 

    const columnIndex = this.tableFormats[tableIndex].findIndex((column : any) => {
      return column[0] == this.getLockedForeignKeyColumn()
    })

    return columnIndex;
  }

  //Returns whether a table is a child table of another table
  isChildTable(tableChild: string, tableParent: string): boolean {


    const parentIndex = this.tables.indexOf(tableParent);
    const childIndex = this.tables.indexOf(tableChild);

    if (parentIndex >= 0 && childIndex >= 0) {
      const parentIdColumn = this.tableFormats[parentIndex][0][0];
      const childDataFormat = this.tableFormats[childIndex];


      for (const column of childDataFormat) {
        
        //column[0] is the column name
        if (column[0] === parentIdColumn) {


          return true;
        }
      }
    }
    return false;
  }

}