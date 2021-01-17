import React from "react";

class AboutPage extends React.Component {
  render() {
    return (
      <>
        <div className="jumbotron">
          <h1>About</h1>
        </div>
        <div className="container">
        <p>NW Loopfest is a unique and creative music festival that highlights the wide range of music that can be made using looping technology. Every year the acts range from singer/songwriter to beatboxers to experimental electronic musicians. 
The NW Loopfest is an official satellite of the <a href="https://www.y2kloopfest.com/">Y2K international Live Looping Festival</a>, which is celebrating it’s 20th year. This makes our festival part of festivals from 100 cities in 30 countries, worldwide. </p>
        <h3>Reviews</h3>
        <p><em>“This festival showcases some of the Northwest's most innovative musicians”</em> – Portland Mercury</p>
        <p><em>“even the parts that suck are going to be awesome”</em> – Oregon Artswatch</p>
        </div>
      </>
    );
  }
}

export default AboutPage;
