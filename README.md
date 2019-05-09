# Assessment 4

**READ THIS DOCUMENT COMPLETELY BEFORE STARTING THE ASSESSMENT**

## Overview
Now that **Ali Snobba** has a stellar back end thanks to your work, they have asked Cognizant to help create the UI.

The product search API you created in Assessment 2 needs an Angular front end.

## Your Task
- Finish this partially done Angular application so that the current tests pass.  Angular routing has been established, but there is only the redirect route in the app-routing module.
- Finish the application so that it consumes the ProductSearch API and feeds the template in the ProductSearch Component.

## Time to Complete
- You have 1 hour and 30 minutes to complete this assessment.  (Ends at 5pm.)
- Once you are done, you have completed the S2 FSD training!!

## Stories
- As a customer, I can filter search results by brand.
- As a customer, I can filter search results by color.
- As a customer, I can filter search results by price range.
- As a customer, I can combine multiple filters.

## Implementation
- Create an Angular Class that has the same shape as the test data
coming from the ProductSearch API.
- Create an Angular Service that consumes the API.
- Inject this service into the ProductSearch Component and use it to filter and display the items according to the user's search criteria.

## Test Data (Coming from your ProductSearch API)
| category | brand |color	| price |
| :--- | :--- | :--- | :--- |
| dresses	| Gucci	| yellow | 2,272.00 |
| dresses	| Gucci | red	| 1,966.00 |
| dresses	| Marni	| brown	| 999.00 |
| dresses	| Marni	| pink	| 1,129.00 |
| dresses	| Bottega Veneta | black | 2,200.00 |
| dresses | Prada	| black | 1,650.00 |
| dresses	| Victoria Beckham | blue | 927.00 |
| dresses | Celine | beige | 1,901.00 |
| dresses | Jil Sander | orange | 511.00 |

## Technical requirements
- Use Angular CLI and VS Code.
- Write clean, modularized code.
- Make small, meaningful git commits.
- Write unit tests!!
- Use linting.

## Notes
- Write your tests in the spec file.
- Make your tests pass.
- You will be creating an Angular Service and Class from scratch.
- ONLY implement what is specified above. If you aren’t sure whether something is in scope, ask!

## How to Submit Your Work
- **Fork** this repo to your own github account.
- Check out your new repo into your IDE.
- Commit your code often and when you're done with the assessment.
- Don't change the name of the repo.

## Grading Rubric
-  5% - Project completed.
- 10% - Code compiles, builds and runs.
- 10% - Unit tests passed.
- 15% - Followed instructions fully.
- 20% - Unit tests written.
- 20% - Coding best practices used.
- 20% - Implemented all stories.
