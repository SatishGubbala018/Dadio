import React from "react";
import "./ChildSafetyPolicy.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
const ChildSafetyPolicy = () => {
  return (
    <div className="">
      <Navbar />
      <div
        style={{ padding: "2rem", fontFamily: "sans-serif", lineHeight: "1.6" }}
      >
        <h1 style={{ textAlign: "center", fontSize: "22px" }}>
          Policy Against Child Abuse
        </h1>
        <p>
          <em>Last updated: August 4, 2025</em>
        </p>

        <p>
          We are deeply committed to protecting the safety and well-being of all
          users, especially children. Our platform has a zero-tolerance policy
          against any form of child abuse, including but not limited to child
          sexual abuse, exploitation, and any form of harmful content or
          behavior.
        </p>

        <p>
          The use of our platform to engage in, promote, or distribute content
          related to child abuse is strictly prohibited. This policy applies to
          all forms of user-generated content, including text, images, videos,
          and links. Any user found to be in violation of this policy will have
          their account immediately and permanently terminated, and we will
          report the activity to the appropriate legal authorities.
        </p>

        <h2>Our Commitment to Child Safety</h2>
        <p>
          We are dedicated to creating a safe and protective online space. Our
          commitment includes:
        </p>
        <ul>
          <li>
            <strong>Proactive Monitoring:</strong> We utilize both automated
            systems and human review to identify and remove content that
            violates this policy.
          </li>
          <li>
            <strong>Zero-Tolerance:</strong> We have a strict zero-tolerance
            stance against any content or behavior related to child abuse.
          </li>
          <li>
            <strong>Collaboration with Law Enforcement:</strong> We cooperate
            fully with law enforcement agencies and legal authorities to address
            any credible reports and investigations.
          </li>
        </ul>

        <h2>Reporting a Violation</h2>
        <p>
          We believe that a safe online community is a shared responsibility. If
          you encounter any content or user behavior that you believe violates
          this policy, we urge you to report it immediately. Your report is
          crucial in helping us maintain a safe environment.
        </p>

        <p>
          To report a violation, please contact us with as much detail as
          possible, including links, user names, and a description of the
          content. You can submit a report through the following channels:
        </p>
        <ul>
          <li>
            <strong>In-Platform Reporting:</strong> Use the "Report" feature
            available on user profiles or specific content.
          </li>
          <li>
            <strong>Email:</strong> Send a detailed report to [Your Dedicated
            Safety Email, e.g., safety@yourcompany.com].
          </li>
        </ul>

        <p>
          If you are in a country where the National Center for Missing &
          Exploited Children (NCMEC) is active, you can also file a report
          directly with them. Your report will be handled confidentially and
          with the utmost urgency.
        </p>

        <h2>Changes to this Policy</h2>
        <p>
          We may update this policy periodically to reflect changes in our
          practices or to comply with new regulations. We will notify users of
          any significant changes by posting the new policy on this page.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this policy or wish to report a
          concern, please contact us:
        </p>
        <ul>
          <input type="email" placeholder="Email" />
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default ChildSafetyPolicy;
