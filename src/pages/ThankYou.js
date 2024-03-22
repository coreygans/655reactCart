import React from "react";
import SiteHeader from "../components/Header";

export default function ThankYou() {
  return (
    <div className="thankYou">
      <SiteHeader />
      <div className="thankYouMsg">
        <h1> Thank You for your order!</h1>
        <p>We will process your order in the next 24 hours. Estimated shipping time is 48-72 hours. <br />
    If you selected local pickup, please give us 2 hours to pull your order together. 
        </p>
        <p>
          Thank you for your patronage! <br /><br />
          Sincerely,<br />
          The Food Store Team
        </p>
      </div>
    </div>
  );
}
