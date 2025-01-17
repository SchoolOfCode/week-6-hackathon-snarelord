# Find Those Ducks!

## Overview
Create our own JavaScript programming challenge for others to solve utilising unit testing with vitest to confirm solutions. Work in a team to support and test eachothers ideas. 


### Ideas & Concepts
1. Duck based challenge 
   - Counting missing ducks in a function 
   - Returns all missing duck IDs 
   - Sorts ducks into groups of 10 as 'flocks'. IDs ranging from 1-10, 11-20 and so forth
   - Nested flocks

# Story 
Hi there! You've stumbled across a farm where all the ducks have escaped and the farmer needs your help to find them. 

Your mission is to complete the findMissingDucks function that takes in an array of present duck IDs. This array is unsorted and possibly contains duplicates. 

There are 40 ducks in total
The output array of missingDucks should have all missing IDs in ascending order. 

Example 
Input (ducks that are NOT missing): [30, 23, 12, 10, 5, 28, 17, 2, 9, 11, 16, 39, 24, 21, 18]

Complete the function below to see if it passes! 


### MVPS
- Completed working tests for returning an array of duck IDs and verified by solutions 
- Implement the 'flocks' array of arrays into the tests

## Planning Phase
- Utilise the duck idea to return an array of missing ducks 
- Follow TDD for writing the tests
- Install vitest in project repo and set up a test script to run vitest
- Write skeleton export function findMissingDucks in main.js 
- For example from numbers ranging 1-10 a given input of an array [3, 6, 7, 1, 9], would return [2, 4, 5, 8, 10]
- Import test, expect and findMissingDucks function in main.test.js and begin writing several tests to verify correct solutions:
  - "Finds missing ducks"
  - "Handles all missing ducks"
  - "Handles all ducks present"
  - "Handles duplicate ids"
  - "Handles single inputted duck"
  - "Handles non numeric and negatives"
- Feedback with group 
- Test with several solutions to ensure the tests are correct

### Progress Tracking
- MVP1 functionality ✅
  - Set project up and install dependencies ✅
  - Write unit tests and feedback with group ✅
  - Test using solutions ✅
- MVP2 implement flock array of arrays
  - Update tests to handle the correct structure and output of array/s
  - Test using solutions

### Technical Documentation
```javascript
# Example code block
 test("Example test", () => {
  // test specifics 
 })
```

### Challenges & Solutions
| Challenge | Solution | Status |
|-----------|----------|---------|
| Returned arrays not formatting correctly | Lot's of debugging and googling| Pending
Time consuming writing the digits 1-40 in tests | Create helper function | ✅


## User Feedback

-
-
-


## Next Steps (test planning)
- Finding all ducks and grouping into flocks with the correct structure

## Next Steps (array of arrays solution planning)
- Implement the array of arrays concept to group missing ducks into nested arrays based on flock number, 1-10 11-20 etc by iterating with a loop to check what is missing.

- Then check if it is not included and calculate what range the duck belongs to using IDs 1-10 will be 0 the first group, 11-20 will be 1 the second group and so on. 

- If the nested array for the range does not already exist init with an empty array to store corresponding duck id. 

---