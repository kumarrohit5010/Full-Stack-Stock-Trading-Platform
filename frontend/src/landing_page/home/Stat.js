import React from "react";
import { Link } from 'react-router-dom';

function Stat() {
  return (
    <div className="container mt-5 mb-5 p-5">
      <div className="row ">
        <div className="col-6 ml-1 p-5">
          <h1 className="mt-5">Trust with Confidence.</h1>

          <div>
            <h4 className="mt-5 ">Customer-first always</h4>
            <p className="text-muted">
              That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh
              crores worth of equity investments.
            </p>
          </div>
          <div>
            <h4>No Spam or Gimmicks</h4>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>
          <div>
            <h4>The Zerodha Universe </h4>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>
          <div>
            <h4>Do Better with money</h4>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with
              money
            </p>
          </div>
        </div>
        <div className="col-6 p-5">
          <img
            src="./images/ecosystem.png"
            alt="Ecosystem"
            style={{ width: "90%" }}
          />
          <div className="text-center">
            <Link to="/product" className="mx-5" style={{ textDecoration: "none" }}>
              Explore Our Products{" "}
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </Link>
            <Link to="/product" style={{ textDecoration: "none" }}>
              Try kit demo <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stat;
