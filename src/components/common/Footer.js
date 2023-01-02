import React from "react";
import "../../styles/site.css"

function Footer() {
  return (
    <div className="container-fluid footer">
       <div className="row">
    <div className="col-sm">
    <h4>What is NW Loopfest?</h4>
    <p>NW Loopfest is a Live looping showcase in the beautiful Pacific North West. Featuring local, regional and international looping technology artists.</p>
    </div>
    <div className="col-sm">
      <h4>Connect with Us</h4>
      <ul>
        <li><a href="https://www.facebook.com/nwloopfest">Facebook</a></li>
        <li><a href="https://www.instagram.com/nwloopfest">Instagram</a></li>
        <li><a href="https://www.youtube.com/channel/UCgcYGCINDGbFHlQqpwFlryQ">Youtube</a></li>
        <li><a href="mailto:info@nwloopfest.org">Email</a></li>
        <li><a href="https://discord.gg/9dmc5TDKu3">Discord</a></li>
        <li style={{display:"none"}}>
          <div id="mc_embed_signup">
            <form action="https://nwloopfest.us2.list-manage.com/subscribe/post?u=c43d8d031a3bc4e079f9bee86&amp;id=0631cb57df" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                <div id="mc_embed_signup_scroll">
              <label htmlFor="mce-EMAIL">Subscribe</label>
              <input type="email" defaultValue="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required ></input>
                <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_c43d8d031a3bc4e079f9bee86_0631cb57df" tabIndex="-1" defaultValue=""></input></div>
                <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"></input></div>
                </div>
            </form>
          </div>
        </li>
      </ul>
    </div>
    <div className="col-sm">
      <h4>Donate</h4>
      <li><a href="https://givebutter.com/2021nwloopfest">Online</a></li>
      <li>By Texting "loops" to (202) 858-1233</li>
    </div>
  </div>
    </div>
  );
}
 
export default Footer;
