import { Container } from "@material-ui/core"
import React from "react"
import "../App.css"

export default function SecurityAudit() {
  return (
    <header className="App-header">
      <h2>Security Audit</h2>
      <Container>
        <p>
          HITRUST (CCSFP) and CISA certified professional with a decade of
          experience delivering control design, implementation, and testing
          services to companies as both an internal leader and a trusted
          external partner. This experience has come across organizations from
          start-ups to large public companies within the financial services,
          healthcare, and technology industries. Proven ability to lead multiple
          teams in a wide range of operational and technical control reviews
          including SOC 1 and 2 readiness and attestations, business and
          technology risk and control assessments, and Sarbanes–Oxley 404
          attestation reviews. Skilled project manager with experience in system
          implementations. Senior management and board level communicator,
          skilled at analyzing the business impact of control observations.
        </p>
        <p>
          If you'd like to have a quick introductory call to discuss how I could
          help you, schedule it
          <a href="https://calendly.com/stevenvandenburg/intro" target="_blank">
            here
          </a>
          . Or if you have a specific question in mind (e.g. How to address a
          specfici HITRUST requirement?, Which GRC product is best?, etc. ) go
          ahead and schedule
          <a
            href="https://calendly.com/stevenvandenburg/consult"
            target="_blank"
          >
            here
          </a>
          .
        </p>
      </Container>
    </header>
  )
}
