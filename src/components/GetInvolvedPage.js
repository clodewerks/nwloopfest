import React from "react";

class GetInvolvedPage extends React.Component {
  render() {
    return (
      <>
        <div className="jumbotron">
          <h1>Get Involved</h1>
        </div>
        <div className="container">
        <h3>Play</h3>
        <p>Apply to play at this year's NW Loopfest here: <a href="https://forms.gle/YbRyNHwHpt15Npsf6">2021 NW Loopfest Application</a></p>
        <h3>Volunteer</h3>
        <p>We are always looking for folks to help with planning, promoting, and running the event. If you would like to help out, contact us at <a href="mailto:info@nwloopfest.org">info@nwloopfest.org</a>.</p>
        <h3>Sponsor</h3>
        <p>Loopfest is made possible through our wonderful sponsors. If you would like to become a sponsor, contact us at <a href="mailto:info@nwloopfest.org">info@nwloopfest.org</a>.</p>
        </div>
      </>
    );
  }
}

export default GetInvolvedPage;
