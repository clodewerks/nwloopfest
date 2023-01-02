import React from "react";

function HomePage() {
  return (
    <>
      <div className="jumbotron">
        <h1>NW Loopfest</h1>
      </div>
      <div className="container">
        <div className="container center">
          <h2>2022 Festival</h2>
        </div>
        <div className="container-fluid"><div className="row">
          <div className="col-sm center">
            <p>Watch it back here: </p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLQ-siEB7QOARHPQ7ZLucDFBuQE1dN2e1A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
