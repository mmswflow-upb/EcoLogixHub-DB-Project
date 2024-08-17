CREATE TABLE ProjectOverview(
    ProjectID INT AUTO_INCREMENT NOT NULL,
    ProjectLogo VARCHAR(1000) NOT NULL,
    ProjectName VARCHAR(50) NOT NULL,
    ProjectDescription VARCHAR(1000) NOT NULL,
    ProjectPurpose VARCHAR(1000) NOT NULL,
    PRIMARY KEY(ProjectID)
);
CREATE TABLE ProjectScope(
    ProjectScopeID INT AUTO_INCREMENT NOT NULL,
    ProjectScopeDescription VARCHAR(1000) NOT NULL,
    ProjectID INT,
    PRIMARY KEY(ProjectScopeID),
    FOREIGN KEY(ProjectID) REFERENCES ProjectOverview(ProjectID) ON DELETE CASCADE
);
CREATE TABLE EnvironmentalIssuesCatalog(
    IssueID INT AUTO_INCREMENT NOT NULL,
    IssueName VARCHAR(50) NOT NULL,
    ProjectScopeID INT,
    PRIMARY KEY(IssueID),
    FOREIGN KEY(ProjectScopeID) REFERENCES ProjectScope(ProjectScopeID) ON DELETE CASCADE
);
CREATE TABLE SolutionCategories(
    CategoryID INT AUTO_INCREMENT NOT NULL,
    CategoryName VARCHAR(50) NOT NULL,
    IssueID INT,
    PRIMARY KEY(CategoryID),
    FOREIGN KEY(IssueID) REFERENCES EnvironmentalIssuesCatalog(IssueID) ON DELETE CASCADE
);
CREATE TABLE TechnologyStack(
    TechnologyID INT AUTO_INCREMENT NOT NULL,
    TechnologyLogo VARCHAR(1000) NOT NULL,
    TechnologyName VARCHAR(50) NOT NULL,
    TechnologyDescription VARCHAR(1000) NOT NULL,
    CategoryID INT,
    PRIMARY KEY(TechnologyID),
    FOREIGN KEY(CategoryID) REFERENCES SolutionCategories(CategoryID) ON DELETE CASCADE
);
CREATE TABLE ImpactReports(
    ImpactReportID INT AUTO_INCREMENT NOT NULL,
    ImpactScore FLOAT NOT NULL,
    ImpactReportDescription VARCHAR(1000) NOT NULL,
    CategoryID INT,
    PRIMARY KEY(ImpactReportID),
    FOREIGN KEY(CategoryID) REFERENCES SolutionCategories(CategoryID) ON DELETE CASCADE
);
CREATE TABLE ContinuousImprovementPlan(
    ImprovementPlanID INT AUTO_INCREMENT NOT NULL,
    PlanStrategy VARCHAR(1000) NOT NULL,
    PlanDeadline VARCHAR(25) NOT NULL,
    PlanResponsibleParty VARCHAR(50) NOT NULL,
    ImpactReportID INT,
    PRIMARY KEY(ImprovementPlanID),
    FOREIGN KEY (ImpactReportID) REFERENCES ImpactReports(ImpactReportID) ON DELETE CASCADE
);
CREATE TABLE CommunityForums(
    ForumID INT AUTO_INCREMENT NOT NULL,
    ForumLogo VARCHAR(1000) NOT NULL,
    ForumTitle VARCHAR(50) NOT NULL,
    ForumDescription VARCHAR(1000) NOT NULL,
    ProjectID INT,
    PRIMARY KEY(ForumID),
    FOREIGN KEY(ProjectID) REFERENCES ProjectOverview(ProjectID) ON DELETE CASCADE
);
CREATE TABLE Users(
    UserID INT AUTO_INCREMENT NOT NULL,
    UserImage VARCHAR(1000) NOT NULL,
    Username VARCHAR(50) NOT NULL,
    Password VARCHAR(50) NOT NULL,
    UserEmail VARCHAR(50) NOT NULL,
    UserType VARCHAR(50) NOT NULL,
    IsAdmin INT NOT NULL,
    PRIMARY KEY(UserID)
);
CREATE TABLE Posts(
    PostID INT AUTO_INCREMENT NOT NULL,
    PostImage VARCHAR(1000) NOT NULL,
    PostTitle VARCHAR(50) NOT NULL,
    PostContent VARCHAR(1000) NOT NULL,
    PostDate VARCHAR(25) NOT NULL,
    ForumID INT,
    UserID INT,
    PRIMARY KEY(PostID),
    FOREIGN KEY(ForumID) REFERENCES CommunityForums(ForumID) ON DELETE CASCADE,
    FOREIGN KEY(UserID) REFERENCES Users(UserID) ON DELETE CASCADE
);
CREATE TABLE SubmittedSolutions(
    SubmissionID INT AUTO_INCREMENT NOT NULL,
    SubmissionImage VARCHAR(1000) NOT NULL,
    SubmissionDescription VARCHAR(1000) NOT NULL,
    SubmissionDate VARCHAR(25) NOT NULL,
    UserID INT,
    PRIMARY KEY(SubmissionID),
    FOREIGN KEY(UserID) REFERENCES Users(UserID) ON DELETE CASCADE
);
CREATE TABLE ReviewApprovalWorkflow(
    ReviewID INT AUTO_INCREMENT NOT NULL,
    ApprovalStatus VARCHAR(50) NOT NULL,
    ReviewComment VARCHAR(1000) NOT NULL,
    UserID INT,
    ForumID INT,
    SubmissionID INT,
    PRIMARY KEY(ReviewID),
    FOREIGN KEY(UserID) REFERENCES Users(UserID),
    FOREIGN KEY(ForumID) REFERENCES CommunityForums(ForumID) ON DELETE CASCADE,
    FOREIGN KEY(SubmissionID) REFERENCES SubmittedSolutions(SubmissionID) ON DELETE CASCADE
);
CREATE TABLE EventsCalendar(
    EventID INT AUTO_INCREMENT NOT NULL,
    EventLogo VARCHAR(1000) NOT NULL,
    EventName VARCHAR(50) NOT NULL,
    EventDescription VARCHAR(1000) NOT NULL,
    EventDate VARCHAR(25) NOT NULL,
    EventLocation VARCHAR(50) NOT NULL,
    PRIMARY KEY(EventID)
);
CREATE TABLE EducationalPrograms(
    ProgramID INT AUTO_INCREMENT NOT NULL,
    ProgramLogo VARCHAR(1000) NOT NULL,
    ProgramName VARCHAR(50) NOT NULL,
    ProgramDescription VARCHAR(1000) NOT NULL,
    ProjectID INT,
    EventID INT,
    PRIMARY KEY(ProgramID),
    FOREIGN KEY(ProjectID) REFERENCES ProjectOverview(ProjectID) ON DELETE CASCADE,
    FOREIGN KEY(EventID) REFERENCES EventsCalendar(EventID) ON DELETE CASCADE
);
CREATE TABLE ResourceLibrary(
    ResourceID INT AUTO_INCREMENT NOT NULL,
    ResourceLogo VARCHAR(1000) NOT NULL,
    ResourceTitle VARCHAR(50) NOT NULL,
    ResourceType VARCHAR(50) NOT NULL,
    ResourceLink VARCHAR(1000) NOT NULL,
    ResourceDescription VARCHAR(1000) NOT NULL,
    ProgramID INT,
    PRIMARY KEY(ResourceID),
    FOREIGN KEY(ProgramID) REFERENCES EducationalPrograms(ProgramID) ON DELETE CASCADE
);
CREATE TABLE MarketingOutreachStrategy(
    StrategyID INT AUTO_INCREMENT NOT NULL,
    StrategyDescription VARCHAR(1000) NOT NULL,
    TargetAudience VARCHAR(50) NOT NULL,
    ProgramID INT,
    PRIMARY KEY(StrategyID),
    FOREIGN KEY(ProgramID) REFERENCES EducationalPrograms(ProgramID) ON DELETE CASCADE
);
CREATE TABLE Stakeholders(
    StakeholderID INT AUTO_INCREMENT NOT NULL,
    StakeholderName VARCHAR(50) NOT NULL,
    StakeholderType VARCHAR(50) NOT NULL,
    ProjectID INT,
    PRIMARY KEY(StakeholderID),
    FOREIGN KEY(ProjectID) REFERENCES ProjectOverview(ProjectID) ON DELETE CASCADE
);
CREATE TABLE FundingSources(
    FundingID INT AUTO_INCREMENT NOT NULL,
    FundingName VARCHAR(50) NOT NULL,
    FundingType VARCHAR(50) NOT NULL,
    FundingAmount FLOAT NOT NULL,
    StakeholderID INT,
    PRIMARY KEY(FundingID),
    FOREIGN KEY(StakeholderID) REFERENCES Stakeholders(StakeholderID) ON DELETE CASCADE
);
CREATE TABLE CollaborationOpportunities(
    CollaborationID INT AUTO_INCREMENT NOT NULL,
    CollaborationDescription VARCHAR(1000) NOT NULL,
    StakeholderID INT,
    PRIMARY KEY(CollaborationID),
    FOREIGN KEY(StakeholderID) REFERENCES Stakeholders(StakeholderID) ON DELETE CASCADE
);
CREATE TABLE ProjectTimeline(
    TimelineID INT AUTO_INCREMENT NOT NULL,
    Deadline VARCHAR(25) NOT NULL,
    ProjectID INT,
    PRIMARY KEY(TimelineID),
    FOREIGN KEY(ProjectID) REFERENCES ProjectOverview(ProjectID) ON DELETE CASCADE
);