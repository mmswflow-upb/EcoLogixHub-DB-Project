-- Insert statements for ProjectOverview Table
INSERT INTO ProjectOverview (
        ProjectName,
        ProjectLogo,
        ProjectDescription,
        ProjectPurpose
    )
VALUES (
        'Project 1',
        'assets/images/Logo_1.webp',
        'Description of Project 1',
        'Purpose of Project 1'
    );
INSERT INTO ProjectOverview (
        ProjectName,
        ProjectLogo,
        ProjectDescription,
        ProjectPurpose
    )
VALUES (
        'Project 2',
        'assets/images/Logo_2.webp',
        'Description of Project 2',
        'Purpose of Project 2'
    );
INSERT INTO ProjectOverview (
        ProjectName,
        ProjectLogo,
        ProjectDescription,
        ProjectPurpose
    )
VALUES (
        'Project 3',
        'assets/images/Logo_3.webp',
        'Description of Project 3',
        'Purpose of Project 3'
    );
INSERT INTO ProjectOverview (
        ProjectName,
        ProjectLogo,
        ProjectDescription,
        ProjectPurpose
    )
VALUES (
        'Project 4',
        'assets/images/Logo_4.webp',
        'Description of Project 4',
        'Purpose of Project 4'
    );
INSERT INTO ProjectOverview (
        ProjectName,
        ProjectLogo,
        ProjectDescription,
        ProjectPurpose
    )
VALUES (
        'Project 5',
        'assets/images/Logo_5.webp',
        'Description of Project 5',
        'Purpose of Project 5'
    );
-- Insert statements for ProjectScope Table
INSERT INTO ProjectScope (ProjectScopeDescription, ProjectID)
VALUES ('Scope Description for Project 1', 1);
INSERT INTO ProjectScope (ProjectScopeDescription, ProjectID)
VALUES ('Scope Description for Project 2', 2);
INSERT INTO ProjectScope (ProjectScopeDescription, ProjectID)
VALUES ('Scope Description for Project 3', 3);
INSERT INTO ProjectScope (ProjectScopeDescription, ProjectID)
VALUES ('Scope Description for Project 4', 4);
INSERT INTO ProjectScope (ProjectScopeDescription, ProjectID)
VALUES ('Scope Description for Project 5', 5);
-- Insert statements for EnviromentalIssuesCatalog Table
INSERT INTO EnvironmentalIssuesCatalog (IssueName, ProjectScopeID)
VALUES ('Water Pollution', 1);
INSERT INTO EnvironmentalIssuesCatalog (IssueName, ProjectScopeID)
VALUES ('Air Quality', 2);
INSERT INTO EnvironmentalIssuesCatalog (IssueName, ProjectScopeID)
VALUES ('Deforestation', 3);
INSERT INTO EnvironmentalIssuesCatalog (IssueName, ProjectScopeID)
VALUES ('Climate Change', 4);
INSERT INTO EnvironmentalIssuesCatalog (IssueName, ProjectScopeID)
VALUES ('Waste Management', 5);
-- Insert statements for SolutionCategories Table
INSERT INTO SolutionCategories (CategoryName, IssueID)
VALUES ('Recycling Solutions', 1);
INSERT INTO SolutionCategories (CategoryName, IssueID)
VALUES ('Emission Reductions', 2);
INSERT INTO SolutionCategories (CategoryName, IssueID)
VALUES ('Reforestation', 3);
INSERT INTO SolutionCategories (CategoryName, IssueID)
VALUES ('Renewable Energy', 4);
INSERT INTO SolutionCategories (CategoryName, IssueID)
VALUES ('Waste Treatment', 5);
-- Insert statements for TechnologyStack Table
INSERT INTO TechnologyStack (
        TechnologyName,
        TechnologyLogo,
        TechnologyDescription,
        CategoryID
    )
VALUES (
        'Eco-Friendly Packaging',
        'assets/images/TechLogo_1.webp',
        'Description of Eco-Friendly Packaging',
        1
    );
INSERT INTO TechnologyStack (
        TechnologyName,
        TechnologyLogo,
        TechnologyDescription,
        CategoryID
    )
VALUES (
        'Carbon Capture Tech',
        'assets/images/TechLogo_2.webp',
        'Description of Carbon Capture Tech',
        2
    );
INSERT INTO TechnologyStack (
        TechnologyName,
        TechnologyLogo,
        TechnologyDescription,
        CategoryID
    )
VALUES (
        'Tree Planting Drones',
        'assets/images/TechLogo_3.webp',
        'Description of Tree Planting Drones',
        3
    );
INSERT INTO TechnologyStack (
        TechnologyName,
        TechnologyLogo,
        TechnologyDescription,
        CategoryID
    )
VALUES (
        'Solar Panels',
        'assets/images/TechLogo_4.webp',
        'Description of Solar Panels',
        4
    );
INSERT INTO TechnologyStack (
        TechnologyName,
        TechnologyLogo,
        TechnologyDescription,
        CategoryID
    )
VALUES (
        'Advanced Composting',
        'assets/images/TechLogo_5.webp',
        'Description of Advanced Composting',
        5
    );
-- Insert statements for ImpactReports Table
INSERT INTO ImpactReports (ImpactScore, ImpactReportDescription, CategoryID)
VALUES (
        75.5,
        'Air Quality Improvement in Urban Areas',
        2
    );
INSERT INTO ImpactReports (ImpactScore, ImpactReportDescription, CategoryID)
VALUES (
        82.3,
        'Water Conservation Efforts in Arid Regions',
        1
    );
INSERT INTO ImpactReports (ImpactScore, ImpactReportDescription, CategoryID)
VALUES (90.0, 'Forest Restoration Impact Assessment', 3);
INSERT INTO ImpactReports (ImpactScore, ImpactReportDescription, CategoryID)
VALUES (88.5, 'Renewable Energy Adoption Rates', 4);
INSERT INTO ImpactReports (ImpactScore, ImpactReportDescription, CategoryID)
VALUES (
        79.2,
        'Waste Management and Recycling Efficacy',
        5
    );
-- Insert statements for ContinuousImprovementPlan Table
INSERT INTO ContinuousImprovementPlan (
        PlanStrategy,
        PlanDeadline,
        PlanResponsibleParty,
        ImpactReportID
    )
VALUES (
        'Expand Urban Green Spaces',
        '2024-12-31',
        'City Planning Department',
        1
    );
INSERT INTO ContinuousImprovementPlan (
        PlanStrategy,
        PlanDeadline,
        PlanResponsibleParty,
        ImpactReportID
    )
VALUES (
        'Implement Water-Saving Technologies',
        '2025-06-30',
        'Regional Water Authority',
        2
    );
INSERT INTO ContinuousImprovementPlan (
        PlanStrategy,
        PlanDeadline,
        PlanResponsibleParty,
        ImpactReportID
    )
VALUES (
        'Increase Community Reforestation Efforts',
        '2024-11-15',
        'Forest Conservation Group',
        3
    );
INSERT INTO ContinuousImprovementPlan (
        PlanStrategy,
        PlanDeadline,
        PlanResponsibleParty,
        ImpactReportID
    )
VALUES (
        'Promote Solar Panel Installations',
        '2025-09-30',
        'Renewable Energy Board',
        4
    );
INSERT INTO ContinuousImprovementPlan (
        PlanStrategy,
        PlanDeadline,
        PlanResponsibleParty,
        ImpactReportID
    )
VALUES (
        'Enhance Recycling Facilities',
        '2024-08-20',
        'Waste Management Corporation',
        5
    );
-- Insert statements for CommunityForums Table
INSERT INTO CommunityForums (
        ForumTitle,
        ForumLogo,
        ForumDescription,
        ProjectID
    )
VALUES (
        'Urban Sustainability',
        'assets/images/UrbanSustainability.webp',
        'Discussion on sustainable living in urban areas',
        1
    );
INSERT INTO CommunityForums (
        ForumTitle,
        ForumLogo,
        ForumDescription,
        ProjectID
    )
VALUES (
        'Water Conservation',
        'assets/images/WaterConservation.webp',
        'Sharing ideas and practices on water conservation',
        2
    );
INSERT INTO CommunityForums (
        ForumTitle,
        ForumLogo,
        ForumDescription,
        ProjectID
    )
VALUES (
        'Forest Regrowth',
        'assets/images/ForestRegrowth.webp',
        'Strategies for forest restoration and conservation',
        3
    );
INSERT INTO CommunityForums (
        ForumTitle,
        ForumLogo,
        ForumDescription,
        ProjectID
    )
VALUES (
        'Renewable Energy',
        'assets/images/RenewableEnergy.webp',
        'Advancements and challenges in renewable energy',
        4
    );
INSERT INTO CommunityForums (
        ForumTitle,
        ForumLogo,
        ForumDescription,
        ProjectID
    )
VALUES (
        'Recycling Innovations',
        'assets/images/RecyclingInnovations.webp',
        'New trends in recycling and waste management',
        5
    );
-- Insert statements for Users Table
INSERT INTO Users (
        Username,
        UserImage,
        Password,
        UserEmail,
        UserType,
        IsAdmin
    )
VALUES (
        'AlexSmith',
        'assets/images/AlexSmith.webp',
        'password123',
        'alex.smith@example.com',
        'Environmentalist',
        0
    );
INSERT INTO Users (
        Username,
        UserImage,
        Password,
        UserEmail,
        UserType,
        IsAdmin
    )
VALUES (
        'SaraJohnson',
        'assets/images/SaraJohnson.webp',
        'password456',
        'sara.johnson@example.com',
        'Researcher',
        1
    );
INSERT INTO Users (
        Username,
        UserImage,
        Password,
        UserEmail,
        UserType,
        IsAdmin
    )
VALUES (
        'MikeBrown',
        'assets/images/MikeBrown.webp',
        'password789',
        'mike.brown@example.com',
        'Activist',
        0
    );
INSERT INTO Users (
        Username,
        UserImage,
        Password,
        UserEmail,
        UserType,
        IsAdmin
    )
VALUES (
        'EmilyWilson',
        'assets/images/EmilyWilson.webp',
        'password321',
        'emily.wilson@example.com',
        'Scientist',
        0
    );
INSERT INTO Users (
        Username,
        UserImage,
        Password,
        UserEmail,
        UserType,
        IsAdmin
    )
VALUES (
        'JohnDavis',
        'assets/images/JohnDavis.webp',
        'password654',
        'john.davis@example.com',
        'Policy Maker',
        1
    );
-- Insert statements for Posts Table
INSERT INTO Posts (
        PostTitle,
        PostImage,
        PostContent,
        PostDate,
        ForumID,
        UserID
    )
VALUES (
        'Green City Initiatives',
        'assets/images/GreenCity.webp',
        'Exploring new initiatives for urban green spaces',
        '2023/07/15',
        1,
        1
    );
INSERT INTO Posts (
        PostTitle,
        PostImage,
        PostContent,
        PostDate,
        ForumID,
        UserID
    )
VALUES (
        'Saving Water in Homes',
        'assets/images/WaterSaving.webp',
        'Effective strategies for reducing water usage in households',
        '2023/08/10',
        2,
        2
    );
INSERT INTO Posts (
        PostTitle,
        PostImage,
        PostContent,
        PostDate,
        ForumID,
        UserID
    )
VALUES (
        'Community Reforestation Projects',
        'assets/images/Reforestation.webp',
        'Success stories from local reforestation projects',
        '2023/09/05',
        3,
        3
    );
INSERT INTO Posts (
        PostTitle,
        PostImage,
        PostContent,
        PostDate,
        ForumID,
        UserID
    )
VALUES (
        'Solar Power Benefits',
        'assets/images/SolarPower.webp',
        'Discussing the benefits and challenges of solar energy',
        '2023/10/20',
        4,
        4
    );
INSERT INTO Posts (
        PostTitle,
        PostImage,
        PostContent,
        PostDate,
        ForumID,
        UserID
    )
VALUES (
        'Innovative Recycling Methods',
        'assets/images/RecyclingMethods.webp',
        'Sharing innovative recycling methods in urban areas',
        '2023/11/12',
        5,
        5
    );
-- Insert statements for SubmittedSolutions Table
INSERT INTO SubmittedSolutions (
        SubmissionImage,
        SubmissionDescription,
        SubmissionDate,
        UserID
    )
VALUES (
        'assets/images/SolutionImg_1.webp',
        'Solar powered water purification system',
        '2023/06/15',
        1
    );
INSERT INTO SubmittedSolutions (
        SubmissionImage,
        SubmissionDescription,
        SubmissionDate,
        UserID
    )
VALUES (
        'assets/images/SolutionImg_2.webp',
        'Biodegradable packaging material',
        '2023/07/20',
        2
    );
INSERT INTO SubmittedSolutions (
        SubmissionImage,
        SubmissionDescription,
        SubmissionDate,
        UserID
    )
VALUES (
        'assets/images/SolutionImg_3.webp',
        'Community based recycling program',
        '2023/08/10',
        3
    );
INSERT INTO SubmittedSolutions (
        SubmissionImage,
        SubmissionDescription,
        SubmissionDate,
        UserID
    )
VALUES (
        'assets/images/SolutionImg_4.webp',
        'AI-driven energy consumption optimizer',
        '2023/09/05',
        4
    );
INSERT INTO SubmittedSolutions (
        SubmissionImage,
        SubmissionDescription,
        SubmissionDate,
        UserID
    )
VALUES (
        'assets/images/SolutionImg_5.webp',
        'Urban vertical farming techniques',
        '2023/10/12',
        5
    );
-- Insert statements for ReviewApprovalWorkflow Table
INSERT INTO ReviewApprovalWorkflow (
        ApprovalStatus,
        ReviewComment,
        UserID,
        ForumID,
        SubmissionID
    )
VALUES (
        'Approved',
        'Excellent application of AI in energy management',
        1,
        4,
        4
    );
INSERT INTO ReviewApprovalWorkflow (
        ApprovalStatus,
        ReviewComment,
        UserID,
        ForumID,
        SubmissionID
    )
VALUES (
        'Approved',
        'Innovative and sustainable solution',
        2,
        1,
        1
    );
INSERT INTO ReviewApprovalWorkflow (
        ApprovalStatus,
        ReviewComment,
        UserID,
        ForumID,
        SubmissionID
    )
VALUES ('Pending', 'Further details required', 3, 2, 2);
INSERT INTO ReviewApprovalWorkflow (
        ApprovalStatus,
        ReviewComment,
        UserID,
        ForumID,
        SubmissionID
    )
VALUES (
        'Rejected',
        'Not feasible in the current context',
        4,
        3,
        3
    );
INSERT INTO ReviewApprovalWorkflow (
        ApprovalStatus,
        ReviewComment,
        UserID,
        ForumID,
        SubmissionID
    )
VALUES (
        'Pending',
        'Promising but needs more practical testing',
        5,
        5,
        5
    );
-- Insert statements for EventsCalendar Table
INSERT INTO EventsCalendar (
        EventName,
        EventLogo,
        EventDescription,
        EventDate,
        EventLocation
    )
VALUES (
        'Green Tech Symposium',
        'assets/images/GreenTechLogo.webp',
        'Annual symposium on green technologies',
        '2023/09/15',
        'New York'
    );
INSERT INTO EventsCalendar (
        EventName,
        EventLogo,
        EventDescription,
        EventDate,
        EventLocation
    )
VALUES (
        'Water Conservation Workshop',
        'assets/images/WaterWorkshopLogo.webp',
        'Workshop on innovative water conservation techniques',
        '2023/07/20',
        'San Francisco'
    );
INSERT INTO EventsCalendar (
        EventName,
        EventLogo,
        EventDescription,
        EventDate,
        EventLocation
    )
VALUES (
        'Sustainable Agriculture Conference',
        'assets/images/AgriConfLogo.webp',
        'Conference on sustainable farming practices',
        '2023/11/05',
        'Amsterdam'
    );
INSERT INTO EventsCalendar (
        EventName,
        EventLogo,
        EventDescription,
        EventDate,
        EventLocation
    )
VALUES (
        'Renewable Energy Fair',
        'assets/images/EnergyFairLogo.webp',
        'Exhibition of renewable energy solutions',
        '2023/08/12',
        'Berlin'
    );
INSERT INTO EventsCalendar (
        EventName,
        EventLogo,
        EventDescription,
        EventDate,
        EventLocation
    )
VALUES (
        'Eco-Friendly Architecture Summit',
        'assets/images/EcoArchSummitLogo.webp',
        'Summit on eco-friendly architectural designs',
        '2023/10/22',
        'London'
    );
-- Insert statements for EducationalPrograms Table
INSERT INTO EducationalPrograms (
        ProgramName,
        ProgramLogo,
        ProgramDescription,
        ProjectID,
        EventID
    )
VALUES (
        'Solar Energy Fundamentals',
        'assets/images/SolarProgramLogo.webp',
        'An introductory course on solar energy applications',
        1,
        4
    );
INSERT INTO EducationalPrograms (
        ProgramName,
        ProgramLogo,
        ProgramDescription,
        ProjectID,
        EventID
    )
VALUES (
        'Water Saving Techniques',
        'assets/images/WaterProgramLogo.webp',
        'A program focusing on water conservation methods',
        2,
        2
    );
INSERT INTO EducationalPrograms (
        ProgramName,
        ProgramLogo,
        ProgramDescription,
        ProjectID,
        EventID
    )
VALUES (
        'Renewable Resources',
        'assets/images/RenewableResourcesLogo.webp',
        'Program on utilizing renewable resources effectively',
        3,
        1
    );
INSERT INTO EducationalPrograms (
        ProgramName,
        ProgramLogo,
        ProgramDescription,
        ProjectID,
        EventID
    )
VALUES (
        'Urban Farming Practices',
        'assets/images/UrbanFarmingLogo.webp',
        'Exploring urban farming and vertical gardens',
        5,
        3
    );
INSERT INTO EducationalPrograms (
        ProgramName,
        ProgramLogo,
        ProgramDescription,
        ProjectID,
        EventID
    )
VALUES (
        'Eco-Construction Methods',
        'assets/images/EcoConstructionLogo.webp',
        'Course on sustainable building techniques',
        4,
        5
    );
-- Insert statements for ResourceLibrary Table
INSERT INTO ResourceLibrary (
        ResourceTitle,
        ResourceLogo,
        ResourceType,
        ResourceLink,
        ResourceDescription,
        ProgramID
    )
VALUES (
        'Solar Panel Installation Guide',
        'assets/images/SolarGuide.png',
        'Document',
        'solar-guide-link',
        'Comprehensive guide on installing solar panels',
        1
    );
INSERT INTO ResourceLibrary (
        ResourceTitle,
        ResourceLogo,
        ResourceType,
        ResourceLink,
        ResourceDescription,
        ProgramID
    )
VALUES (
        'Water Conservation Tips',
        'assets/images/WaterTips.png',
        'Video',
        'water-tips-link',
        'Video series on practical water conservation tips',
        2
    );
INSERT INTO ResourceLibrary (
        ResourceTitle,
        ResourceLogo,
        ResourceType,
        ResourceLink,
        ResourceDescription,
        ProgramID
    )
VALUES (
        'Vertical Farming eBook',
        'assets/images/VerticalFarming.png',
        'eBook',
        'vertical-farming-link',
        'eBook on the basics of vertical farming in urban areas',
        3
    );
INSERT INTO ResourceLibrary (
        ResourceTitle,
        ResourceLogo,
        ResourceType,
        ResourceLink,
        ResourceDescription,
        ProgramID
    )
VALUES (
        'Green Building Standards',
        'assets/images/GreenBuilding.png',
        'Document',
        'green-building-link',
        'Document on international green building standards',
        4
    );
INSERT INTO ResourceLibrary (
        ResourceTitle,
        ResourceLogo,
        ResourceType,
        ResourceLink,
        ResourceDescription,
        ProgramID
    )
VALUES (
        'Renewable Energy Resources',
        'assets/images/RenewableEnergy.png',
        'Web Page',
        'renewable-energy-link',
        'Web page detailing various renewable energy sources',
        5
    );
-- Insert statements for MarketingOutreachStrategy Table
INSERT INTO MarketingOutreachStrategy (StrategyDescription, TargetAudience, ProgramID)
VALUES (
        'Exhibitions on eco-friendly construction',
        'Architects & Builders',
        1
    );
INSERT INTO MarketingOutreachStrategy (StrategyDescription, TargetAudience, ProgramID)
VALUES (
        'Workshops on water conservation in schools',
        'Students',
        2
    );
INSERT INTO MarketingOutreachStrategy (StrategyDescription, TargetAudience, ProgramID)
VALUES (
        'Webinars on sustainable agriculture practices',
        'Farmers',
        3
    );
INSERT INTO MarketingOutreachStrategy (StrategyDescription, TargetAudience, ProgramID)
VALUES (
        'Social media campaign for renewable energy awareness',
        'Young Adults',
        4
    );
INSERT INTO MarketingOutreachStrategy (StrategyDescription, TargetAudience, ProgramID)
VALUES (
        'Community meetings for urban farming initiatives',
        'Local Residents',
        5
    );
-- Insert statements for Stakeholders Table
INSERT INTO Stakeholders (StakeholderName, StakeholderType, ProjectID)
VALUES ('GreenTech Inc.', 'Corporate Partner', 1);
INSERT INTO Stakeholders (StakeholderName, StakeholderType, ProjectID)
VALUES ('City Water Department', 'Government', 2);
INSERT INTO Stakeholders (StakeholderName, StakeholderType, ProjectID)
VALUES ('Farmers Association', 'Community Group', 3);
INSERT INTO Stakeholders (StakeholderName, StakeholderType, ProjectID)
VALUES ('Urban Gardeners Society', 'NGO', 4);
INSERT INTO Stakeholders (StakeholderName, StakeholderType, ProjectID)
VALUES (
        'EcoBuilders Collective',
        'Industry Association',
        5
    );
-- Insert statements for FundingSources Table
INSERT INTO FundingSources (
        FundingName,
        FundingType,
        FundingAmount,
        StakeholderID
    )
VALUES (
        'Angel Investors',
        'Private Investment',
        100000,
        1
    );
INSERT INTO FundingSources (
        FundingName,
        FundingType,
        FundingAmount,
        StakeholderID
    )
VALUES ('City Grant', 'Government Grant', 50000, 2);
INSERT INTO FundingSources (
        FundingName,
        FundingType,
        FundingAmount,
        StakeholderID
    )
VALUES ('Research Grant', 'Academic Grant', 30000, 3);
INSERT INTO FundingSources (
        FundingName,
        FundingType,
        FundingAmount,
        StakeholderID
    )
VALUES (
        'Crowdfunding Campaign',
        'Public Donation',
        25000,
        4
    );
INSERT INTO FundingSources (
        FundingName,
        FundingType,
        FundingAmount,
        StakeholderID
    )
VALUES (
        'Corporate Sponsorship',
        'Corporate Funding',
        75000,
        5
    );
-- Insert statements for CollaborationOpportunities Table
INSERT INTO CollaborationOpportunities (CollaborationDescription, StakeholderID)
VALUES (
        'Partnership for developing new solar technologies',
        1
    );
INSERT INTO CollaborationOpportunities (CollaborationDescription, StakeholderID)
VALUES (
        'Joint project on urban water conservation methods',
        2
    );
INSERT INTO CollaborationOpportunities (CollaborationDescription, StakeholderID)
VALUES (
        'Collaborative research on sustainable farming',
        3
    );
INSERT INTO CollaborationOpportunities (CollaborationDescription, StakeholderID)
VALUES (
        'Community initiative for promoting urban gardening',
        4
    );
INSERT INTO CollaborationOpportunities (CollaborationDescription, StakeholderID)
VALUES (
        'Industry collaboration for eco-friendly building materials',
        5
    );
-- Insert statements for ProjectTimeline Table
INSERT INTO ProjectTimeline (Deadline, ProjectID)
VALUES ('2024-12-31', 1);
INSERT INTO ProjectTimeline (Deadline, ProjectID)
VALUES ('2023-06-30', 2);
INSERT INTO ProjectTimeline (Deadline, ProjectID)
VALUES ('2025-09-15', 3);
INSERT INTO ProjectTimeline (Deadline, ProjectID)
VALUES ('2024-05-20', 4);
INSERT INTO ProjectTimeline (Deadline, ProjectID)
VALUES ('2023-11-10', 5);