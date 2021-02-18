### Developing flow
Build out additional features using JS mantra: event, fetch, and DOM manipulation flow

### OOJS Refactor
Create a separate branch on git to refactor
Create a JS class
Link book.js ti index.html
Create a constructor pushes all instances of `this` into an empty array
Refactor render functionality by creating a render function in JS class
Create a render function I can use in both my 'read' and 'create' functions
Create a static method in JS class that finds an object based on its id

Update actions generally consist of 3 things:
1. listen for an action to occur to initiate the update
2. Perform a fetch with the method of patch/put to update the back-end
3. Have the update reflrected on the DOM