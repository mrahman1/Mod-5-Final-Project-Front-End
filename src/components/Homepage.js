import React from 'react'
import { Link } from "react-router-dom";

const Homepage = (props) => {
  return(
  <div class="pusher">
  <div class="ui inverted vertical masthead center aligned segment">
    <div class="ui text container" id="banner">
      <h1 class="ui inverted header" id="homepage-header">
        Trumpet ATS
      </h1>
      <h2 class> Recruiting Software & Applicant Tracking System</h2>
      <Link to={'/signup'}>
        <div class="ui huge primary button">
          Get Started
          <i class="right arrow icon"></i>
        </div>
      </Link>
    </div>
  </div>

  <div class="ui vertical stripe segment">
    <div class="ui middle aligned stackable grid container">
      <div class="row">
        <div class="eight wide column">
          <h3 class="ui header">Find better candidates and improve your entire recruiting process.</h3>
          <p>Trumpet is an applicant tracking system and recruiting software designed to optimize your entire recruiting process. Find better candidates, conduct more focused interviews, and make data-driven hiring decisions.</p>
          <h3 class="ui header">Optimize Your Recruiting Process</h3>
          <p>The applicant tracking system you need to recruit better candidates, get more organized, and make great hires.</p>
        </div>
        <div class="six wide right floated column">
          <img src="https://image.flaticon.com/icons/svg/176/176546.svg" alt="avatar"/>
        </div>
    </div>
  </div>
</div>
</div>



  )
}

export default Homepage;
