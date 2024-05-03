import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1 className='nav-head'>Family Wellness</h1>
            <p className='nav-para'>MASSAGE THERAPY</p>
            <ul className='nav-list'>
                <li className='nav-list-item ' id='home'>Home</li>
                <li className='nav-list-item'>About</li>
                <li className='nav-list-item'>Services</li>
                <li className='nav-list-item'>FAQ</li>
                <li className='nav-list-item'>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;
