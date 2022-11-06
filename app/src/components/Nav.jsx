import { NavLink } from 'react-router-dom'

const Nav = () => {

    return (
    <>
    <nav className="nav">
    
    <ul className='listados'>
        
        {/* <li><NavLink to="series">series</NavLink></li> */}
        <li className='peliculas'><NavLink to="peliculas"><h1 className='titulo'>peliculas</h1></NavLink></li>
        <li className='series'><NavLink to="series"><h1 className='titulo'>series</h1></NavLink></li>
    </ul>
    

    </nav>
    
    </>
    )

}

export default Nav;