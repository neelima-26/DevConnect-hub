import React, { forwardRef } from 'react';

const Explore = forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ marginTop: "100px" }}>
      <h1>Explore Developers</h1>

      <div className="cards">

        <div>
          <p>Name: NEELIMA</p>
          <p>Skills: HTML, CSS</p>
        </div>

        <div>
          <p>Name: Krishna</p>
          <p>Skills: JavaScript, CSS, HTML</p>
        </div>

        <div>
          <p>Name: Moksha Sri</p>
          <p>Skills: HTML, CSS, React</p>
        </div>

        <div>
          <p>Name: Jyothi</p>
          <p>Skills: HTML, CSS, JavaScript</p>
        </div>

        <div>
          <p>Name: Rajesh</p>
          <p>Skills: HTML, CSS</p>
        </div>

        <div>
          <p>Name: Lalitha</p>
          <p>Skills: HTML, CSS</p>
        </div>

      </div>
    </div>
  );
});

export default Explore;