import Navigation from './Navigation';

function Header ({ setCurrentPage }) {
    return (
        <header>
            <h1>Armando Rodriguez</h1>
            <Navigation setCurrentPage={setCurrentPage} />
        </header>
    );
}

export default Header;