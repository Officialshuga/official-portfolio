"use client"
import React from 'react';
import Typed from 'typed.js';

export function MyComponent() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>I am a</i> Web Developer ', 'and a Virtual Assistant'],
      typeSpeed: 50,
      loop: true,
      startDelay: 1000,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}