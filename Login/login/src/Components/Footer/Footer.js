import './Footer.css'

import { BsLinkedin, BsGithub} from 'react-icons/bs'

import { Link } from 'react-router-dom'

const Footer = () => {

  const name = "Rubismar Carlos"

  return (
    <footer>
        <div className='box-ctt'>
          <div>
            <Link to="https://github.com/Rubismar-Carlos" target="_blank">
              <BsGithub />
            </Link>
          </div>
          <div>
            <Link to="https://www.linkedin.com/in/rubismar-carlos-09a912246/" target="_blank">
              <BsLinkedin />
            </Link>
          </div>
        </div>
        <div>
          <p>Desenvolvido por {name}</p>
        </div>
    </footer>
  )
}

export default Footer