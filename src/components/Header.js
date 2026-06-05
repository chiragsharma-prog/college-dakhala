import "../styles/listing.css";

const Header = () => {
    return (
                    <header className="navbar">
                <div className="nav-container">

                    <a href="#" className="logo">
                        <img width="120px" height="90px"
                             src="https://www.collegedakhla.com/assets/front/images/resources/cd-logo-hd.svg"/>
                    </a>

                    <nav className="nav-links">
                        <a href="#">Home</a>
                        <a href="#">Colleges</a>
                        <a href="#">Courses</a>
                        <a href="#" className="active">Blogs</a>
                        <a href="#">Contact</a>
                    </nav>
                    <button className="nav-container btn-primary" onClick={() => window.location.href = "/admin"}>
                        Admin
                    </button>
                </div>

            </header>
    )
}

export default Header;