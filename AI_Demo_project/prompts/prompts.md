# Project Name: Generate, Validate, Automate, Iterate (GVAI) approach
Using AI to "pilot" or drive testing with following steps:
Generate: Using CoPilot "Ask" mode  to generate testcases
Validate: Using CoPilot "Agent" mode plus Playwright MCP  to execute test cases
Automate: Using CoPilot "Agent" mode plus Playwright MCP server to generate automated test cases, 
Iterate: Using CoPilot "Edit" to refactor the automation code

########################################################################################
# Prompt Technique: Task, Context, Reference, Constraints (TCRC)

## Generate Prompts 
# Copilot mode: 'ask'

### Use case 1: Application domain
Generate manual test cases with test steps for a shopping cart application, where users can add, edit or delete items from the basket

### Use case 2: Jira story 
Generate manual test cases using a user story as below

Title: Add a grocery item to a Shopping cart cart

As a user,  
I want to add a grocery item to my shopping list,  
So that I can keep track of items I need to purchase.

Acceptance Criteria:
1. The user can input the name of the grocery item.
2. The user can click a "Submit" button to save the item.
3. The item is successfully stored in the database and displayed in the list.

Additional Notes:
- The application should validate that the input is not empty before submission.
- The database connection should handle errors gracefully.
- The application is hosted at http://localhost:3002

### Use case 3: Acceptance criteria
Generate a test case in BDD format to add an item to a shopping cart and the application is hosted at http://localhost:3002


### Use case 4: Product requirements document
Generate test conditions by referring to the prd.md file. This file is a Product Requirements Document(PRD) for a software application. This file is located under prompts/prd.md


########################################################################################
# How to install project dependencies 
Project dependencies can be installed manually by following the step by step in the readme.md 
or 
By asking the Copilot to install the dependencies using the below prompt:
Install via Prompt:
Can you install the required dependencies for the ToDoList_Project by reading the readme.md file and bootstrap the database by running using the queries.sql

########################################################################################
# Validate Prompts
Validate using AI Agent with Playwright MCP Server
# Copilot: 'agent'

## Use case 1 : Add an item to the shopping list
Use the Playwright MCP Server to execute the following steps:
Browse to http://localhost:3002
And add a new grocery item to the list 
When I click on Submit button
Then connect to the database and check if the grocery item is saved sucessfully 

## Use case 2: Edit and update an existing item from the shopping list
Use the Playwright MCP Server to execute the following steps:
Browse to http://localhost:3002
And update Milk to semi skimmed milk
When I click on Submit button
Then the grocery item should be updated on the page

## Use case 3: Delete a shopping list item 
Browse to http://localhost:3002
And delete Oranges from the list
Then the grocery item should be deleted from the page

########################################################################################

# Automate 
# Copilot: 'agent'
### reference: 
(Playwright documentation)[https://playwright.dev/docs/intro]

## Prompt: Check if the Playwright is already installed and if not, then install Playwright


## Use case 1:  Navigate to a site and Add a new grocery item to the shopping list application
Generate a Playwright test script using best practices. This includes role based locators and Playwrights auto waiting assertions such as expect locator toHaveText, toHaveCount and Use the .filter() method to avoid strict mode violations when needed. 
Use the following test steps:
Browse to http://localhost:3002
And add a new grocery item to the list 
When I click the "+" button
Then check if the grocery item is saved successfully on the webpage
Save the script with filename "add-grocery-item.spec.ts"
And under the /tests directory

## Use case 2: Edit an existing item from the shopping list
Generate a Playwright test script using best practices. This includes role based locators and Playwrights auto waiting assertions such as expect locator toHaveText, toHaveCount and Use the .filter() method to avoid strict mode violations when needed. 
Use the following test steps:
Browse to http://localhost:3002
And check if "Gala Apples" item exists on the page
And if it exists then update the text of the "Gala Apples" item to "Fresh Apples"
Then click on Submit button
And check if the grocery item is updated successfully on the webpage
Save the script with filename "edit-grocery-item.spec.ts"
And under the /tests directory


########################################################################################
# Iterate
# Copilot: 'agent'

## BEFORE refinement
Use case 1: Create a script
Generate a Playwright test script using best practices. This includes role based locators and Playwrights auto waiting assertions such as expect locator toHaveText, toHaveCount and Use the .filter() method to avoid strict mode violations when needed. 
Use the following test steps:
Browse to http://localhost:3002
And check if "Gala Apples" item exists on the page
And if it exists on the page then delete the "Gala Apples" Item 
And check if the grocery item is deleted successfully 


## AFTER refinement
Use case: Refine the script via prompt

Generate a Playwright test script using best practices. This includes role based locators and Playwrights auto waiting assertions such as expect locator toHaveText, toHaveCount and Use the .filter() method to avoid strict mode violations when needed. 
Use the following test steps:
Browse to http://localhost:3002
And check if "Gala Apples" item exists on the page
And if it exists on the page then click the input Type Checkbox of the "Gala Apples" element
By clicking the Checkbox the item gets deleted
And check if the grocery item is deleted successfully 
Take a screenshot of the page and save it under playwright-report



## Refactor existing automation scripts using the Agent Edit mode
Use case 1:
Generate a Playwright test script using best practices. This includes role based locators and Playwrights auto waiting assertions such as expect locator toHaveText, toHaveCount and Use the .filter() method to avoid strict mode violations when needed. 
Use the following test steps:
Browse to http://localhost:3002
And add a new grocery item to the list 
When I click on Submit button
Then check if the grocery item is saved successfully on the webpage

########################################################################################
# EDIT mode
# Copilot: 'Edit'
### Use case 1: 
# Copilot: 'Edit'
Prompt: Review the groceryList.spec.ts file and refactor the code into page object pattern

### Use case 2: Review and analyze a site, identify gaps in test coverage, generate playwright tests
# Copilot: 'Edit'

Prompt:
You are a playwright test generator. Ensure the site is fully tested.
- Use Playwrights best practices to generate tests for the site. This includes
role based locators and Playwrights auto waiting assertions such as expect locator toHaveText, toHaveCount etc. Use the .filter() method to avoid strict mode violiations when needed
- Use Playwright MCP server to navigate to the site and generate tests based on the current state of the site. Do not generate tests based on assumptions instead first use the site like a user would and manually test the site and then generate playwright tests based on what you have manually tested. Do not generate duplicate tests or test code.