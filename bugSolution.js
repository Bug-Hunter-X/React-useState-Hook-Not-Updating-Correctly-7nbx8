```javascript
//In a React component
const MyComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    //Correct usage of setState
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
```