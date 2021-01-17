import React from "react";
import {artists} from "../stores/LoopStore"


const ArtistPage = props => {
    return (
        <>
        <div className="jumbotron">
          <h1>Loopfest Alumni</h1>
        </div>
      {artists.map((artist) => { return(<p>
        <b>{artist.name} ({artist.location}) - </b><br/>
        {artist.desc}<br/> <a target="_blank"  rel="noopener noreferrer" href={artist.url}>See More</a></p>
        )})}
        </>);
}

export default ArtistPage;