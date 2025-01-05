# React useState Hook Bug
This repository demonstrates a common bug related to the `useState` hook in React and provides a solution.

## Bug Description
The `useState` hook in the `MyComponent` component fails to update the count state correctly when the increment button is clicked. This is because the `setCount` function isn't being used correctly to update the state based on the current state value.

## Solution
The solution uses the functional form of `setState` to resolve the issue. The new `setCount` function takes a callback function that takes the previous state as its argument and returns the updated state.