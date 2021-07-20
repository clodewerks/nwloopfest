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
        <p>Drop an email if you are interested in being notified when applications open: <a href="mailto:info@nwloopfest.org">info@nwloopfest.org</a></p>
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
