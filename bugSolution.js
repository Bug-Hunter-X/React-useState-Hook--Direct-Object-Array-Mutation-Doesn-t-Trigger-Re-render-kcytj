```javascript
import React, { useState } from 'react';

function MyComponent() {
  const [data, setData] = useState({ count: 0 });

  const incrementCount = () => {
    setData({ ...data, count: data.count + 1 }); // Correct: Creates a new object
  };

  return (
    <div>
      <p>Count: {data.count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default MyComponent;
```