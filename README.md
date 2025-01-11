# React useState Hook: Direct Object/Array Mutation Doesn't Trigger Re-render

This repository demonstrates a common React bug involving the `useState` hook and the incorrect modification of object/array states.  Directly modifying objects or arrays within the `useState` hook doesn't trigger a re-render because React performs a shallow comparison. To resolve this, you must create a copy of the object/array before modifying and updating the state.

## Bug
The `bug.js` file showcases the problematic code.  The `incrementCount` function directly increments the `count` property of the `data` object. This does not trigger a re-render because the reference to the `data` object is not changing.

## Solution
The `bugSolution.js` file illustrates the correct approach. It creates a new object using the spread syntax (`...data`) before updating the `count` property. This creates a new object with a different reference, triggering a re-render.