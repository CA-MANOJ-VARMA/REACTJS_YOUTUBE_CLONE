import './index.css'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faHouse,
  faFireFlameCurved,
  faGamepad,
  faFloppyDisk,
} from '@fortawesome/free-solid-svg-icons'
import themeContext from '../../context/themeContext'

const SideBar = () => (
  <themeContext.Consumer>
    {value => {
      const {isDarkThemeActive} = value

      const backgroundcolorgray = isDarkThemeActive
        ? 'css-background-dark-color-181818'
        : 'css-background-light-color-f9f9f9'

      const textColor = isDarkThemeActive
        ? 'css-textColor-dark-color-f9f9f9'
        : 'css-textColor-light-color-0f0f0f'
      return (
        <>
          <div
            className={`css-sidebar-container ${backgroundcolorgray} ${textColor}`}
          >
            <div>
              <ul className="css-ul-list-home">
                <Link style={{textDecoration: 'none'}} to="/">
                  <li className={`css-Link-Style ${textColor}`}>
                    <div style={{marginRight: '10px'}}>
                      <FontAwesomeIcon icon={faHouse} />
                    </div>
                    <p>Home</p>
                  </li>
                </Link>
                <Link to="/trending" style={{textDecoration: 'none'}}>
                  <li className={`css-Link-Style ${textColor}`}>
                    <div style={{marginRight: '10px'}}>
                      <FontAwesomeIcon icon={faFireFlameCurved} />
                    </div>
                    <p>Trending</p>
                  </li>
                </Link>
                <Link to="/gaming" style={{textDecoration: 'none'}}>
                  <li className={`css-Link-Style ${textColor}`}>
                    <div style={{marginRight: '10px'}}>
                      <FontAwesomeIcon icon={faGamepad} />
                    </div>
                    <p>Gaming</p>
                  </li>
                </Link>
                <Link to="/savedVideos" style={{textDecoration: 'none'}}>
                  <li className={`css-Link-Style ${textColor}`}>
                    <div style={{marginRight: '10px'}}>
                      <FontAwesomeIcon icon={faFloppyDisk} />
                    </div>
                    <p>Saved videos</p>
                  </li>
                </Link>
              </ul>
            </div>
            <div style={{padding: '10px'}}>
              <p>CONTACT US</p>
              <ul className="css-ul-list-home-logos">
                <li>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                    className="css-logo-style"
                  />
                </li>
                <li>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                    className="css-logo-style"
                  />
                </li>
                <li>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                    className="css-logo-style"
                  />
                </li>
              </ul>
              <p>Enjoy!Now to see your channels and recomendations!</p>
            </div>
          </div>
        </>
      )
    }}
  </themeContext.Consumer>
)

export default SideBar
