```javascript
//In a React component
const MyComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    //Incorrect usage of setState
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
```