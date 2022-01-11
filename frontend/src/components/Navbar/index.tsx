import { ReactComponent as GithubIcons } from "assets/img/Vector.svg"
import './style.css';


function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSmovie</h1>
                    <a href="https://github.com/devsuperior/sds-dsmovie">
                        <div className="dsmovie-contact-container">
                            <GithubIcons />
                            <p className="dsmovie-contact-link">/devSuperior</p>
                        </div>

                    </a>
                </div>


            </nav>

        </header >
    );
}
export default Navbar;