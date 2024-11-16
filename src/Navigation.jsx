import { Link } from 'react-router-dom';
import { useContext } from 'react';

const Nav = ({ search,setSearch,posts,setPost }) => {
    return (
        <nav className="Nav">
            <form className="searchForm" onSubmit={(e) => {e.preventDefault();setSearch('')}}>
                <label htmlFor="search">Search Posts</label>
                <input
                    id="search"
                    type="text"
                    placeholder="Search Posts"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li> <Link to='/newpost'>new Post</Link></li>

            </ul>
        </nav>
    )
}

export default Nav