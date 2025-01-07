import React from "react";
import {fests} from "../stores/LoopStore"


const FestsPage = props => {
    return (
        <>
        <div className="jumbotron">
          <h1>Past Loopfests</h1>
        </div>
      {fests.map((fest) => { return(<div className="container center">
        <h3 className="center">{fest.year}</h3>
        <b>Performances:</b><br/>
        {fest.performances.map((performance, i)=> { return(
          <>
          {performance.link == "" ? 
            <a className="big-link" href={performance.link} target="_blank"  rel="noopener noreferrer">{performance.artist}</a> :
            <a className="big-link" href="#" >{performance.artist}</a> 
          }
          {i !== fest.performances.length -1 && <>,&nbsp;</> }
          </>
        )})}

       {fest.sponsors.length > 0 &&  <p> <b>Sponsored By:</b><br/>
        {fest.sponsors.map((sponsor, i)=> { return(
          <>
          <a href={sponsor.link} target="_blank"  rel="noopener noreferrer">{sponsor.sponsor}</a>
          {i !== fest.sponsors.length -1 && <>,&nbsp;</> }
          </>
        )})}
        </p>}
        </div>
        )})}
        </>);
}

export default FestsPage;