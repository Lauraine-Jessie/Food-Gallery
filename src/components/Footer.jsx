import React from 'react'

const Footer = () => {
  return (
   <footer>
    <p>&copy; {new Date().getFullYear()} My Website</p>
    <nav>
      <ul>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </nav>
    </footer>       
  )
}

export default Footer