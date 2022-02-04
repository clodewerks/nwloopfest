import React from "react";
import {fests} from "../stores/LoopStore"

function HomePage() {
  return (
    <>
    <div className="jumbotron">
    <h1>NW Loopfest</h1>
    </div>
    <div className="container">
    <div className="container center">
    <h2>2021 Festival: </h2>
    <p><strong>August 28th, 7PM </strong><br/> Online with loopers from around the globe<br/><a href="https://youtu.be/Bs9BlA5XPW0">https://youtu.be/Bs9BlA5XPW0</a></p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Bs9BlA5XPW0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p><strong>August 29th, 1PM</strong> <br/>At <a href="https://www.mayflypdx.com/" target="_blank"  rel="noopener noreferrer">Mayfly</a><br/>8350 N Fenwick Ave, Portland, OR</p>
    <p>Sponsored by <a href="https://www.liveloop.live/" target="_blank" rel="noopener noreferrer">LiveLoop</a>!</p>
    <p>
      <strong>Featuring:</strong><br/>
      {fests[0].performances.map((performance, i)=> { return(
          <>
          <a className="big-link" href={performance.link} target="_blank"  rel="noopener noreferrer">{performance.artist}</a><br/>
         
          </>
        )})}
      </p>
    </div>
    </div>
    </>
  );
}

export default HomePage;
