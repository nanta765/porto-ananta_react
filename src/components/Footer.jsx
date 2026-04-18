import { personalInfo } from '../data/portfolio'
import '../styles/footer.css'

function Footer() {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()}{' '}
        <span>{personalInfo.fullName}</span>. All rights reserved.
      </p>
      <p>
        {personalInfo.role} · <span>{personalInfo.university}</span>
      </p>
    </footer>
  )
}

export default Footer
