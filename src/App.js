import React, { useState } from 'react';
//importing Rating https://react-rating.onrender.com/?#highlight_only_selected
import { Rating } from '@smastrom/react-rating';
//importing CSS
import '@smastrom/react-rating/style.css';

import './style.css';

export default function App() {
  const [ratingValue, setRatingValue] = useState(2);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Rating
        style={{ maxWidth: 180 }}
        value={ratingValue}
        onChange={(selectedValue) => setRatingValue(selectedValue)}
      />
    </div>
  );
}
