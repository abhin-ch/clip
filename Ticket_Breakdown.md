# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here


# Ticket Breakdown

## Ticket 1: Add custom id field to Agent table

**Description:** To enable Facilities to save their own custom ids for each Agent, we need to add a new field "custom_id" to the Agents table in our database. This new field will be a string type and will allow Facilities to store their own identifier for each Agent they work with.

**Acceptance Criteria:**

-   A new field "custom_id" is added to the Agents table in the database
-   The new field is a string type and can store up to 50 characters
-   The API endpoint for creating/updating Agents is updated to include the new "custom_id" field
-   The API endpoint for getting Shifts by Facility is updated to return the custom_id field for each Agent
-   The generateReport function is updated to use the custom_id field instead of the internal database id when generating reports

**Time/Effort Estimate:** 4-6 hours

## Ticket 2: Add UI for Facilities to manage custom ids

**Description:** Facilities need a way to manage the custom ids they have assigned to Agents. We will add a new page to the facility dashboard where they can view and update the custom ids for their Agents.

**Acceptance Criteria:**

-   A new page is added to the facility dashboard for managing custom ids
-   The page displays a list of all Agents the Facility has worked with, including their internal database id, name, and custom id
-   The page allows Facilities to add or update the custom id for each Agent
-   The page includes a submit button that saves any changes made to the custom ids

**Time/Effort Estimate:** 6-8 hours

## Ticket 3: Validation and Error Handling for custom ids

**Description:** To prevent invalid or duplicate custom ids, we need to add validation and error handling to the custom id field in the Agents table.

**Acceptance Criteria:**

-   The custom_id field is required when creating or updating an Agent
-   The custom_id field must be unique across all Agents for a Facility
-   The custom_id field can contain only alphanumeric characters and underscores
-   The custom_id field is case-insensitive
-   When adding or updating a custom id, the system checks if the custom id already exists for the Facility and returns an error if it does
-   When adding or updating a custom id, the system validates that it contains only alphanumeric characters and underscores and returns an error if it does not

**Time/Effort Estimate:** 4-6 hours

## Ticket 4: Update API Documentation

**Description:** We need to update the API documentation to reflect the new custom_id field and its usage.

**Acceptance Criteria:**

-   The API documentation is updated to include the new custom_id field and its data type
-   The API documentation is updated to include instructions on how to use the custom_id field when generating reports
-   The API documentation is updated to include any new endpoints or changes to existing endpoints related to the custom_id field

**Time/Effort Estimate:** 2-4 hours

## Ticket 5: Testing

**Description:** We need to test the new feature thoroughly to ensure it meets the requirements and is bug-free.

**Acceptance Criteria:**

-   All new code is unit tested and passes all tests
-   The custom_id field is tested for validation and error handling
-   The generateReport function is tested to ensure it uses the custom_id field instead of the internal database id
-   End-to-end tests are run to ensure the entire feature works as expected
-   Any bugs or issues discovered during testing are fixed and retested

**Time/Effort Estimate:** 8-10 hours


