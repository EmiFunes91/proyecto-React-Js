// React and react router imports
import { Link } from "react-router-dom";
import './Logo.scss'

const Logo = () => {
    return (
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/">
            <div className="logo">
                <img src="../EFSports.png" alt="EFSports logo" />
            </div>
        </Link>
    )
}

export default Logo;