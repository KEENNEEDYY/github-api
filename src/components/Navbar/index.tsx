import './styles.css';


const Navbar = () => {
    return(
        <nav className="navbar bg-primary main-nav">
            <div className="container-fluid">
                <a className="nav-logo-text" href="/">
                    <h1>Github API</h1>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;