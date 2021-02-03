import React from "react"
import { Route, Link } from "react-router-dom"

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>Now</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link>Newsletter</Link>
        </li>
        <li>
          <Link>Portfolio</Link>
        </li>
        <li>
          <Link>My Story</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
