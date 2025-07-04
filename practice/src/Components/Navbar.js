import { Link, useLocation ,useNavigate} from 'react-router-dom'

const Navbar = () => {
  let location= useLocation()
  const navigate = useNavigate();
  const handleLogout =()=>{
    localStorage.removeItem('token');
    navigate('/login'); 
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top">
      <div className=" container-fluid">
        <h4 className=" navbar-brand  fw-bold mt-1 fs-4 text-black">iNote</h4>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link
                className={`nav-link ${location.pathname === '/' ? 'active text-white' : 'text-dark'}`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/about' ? 'active text-white' : 'text-dark'}`}
                to="/about"
              >
                Create Note
              </Link>
            </li>
          </ul>
        <>
        {!localStorage.getItem("token")?(
        <form className='d-flex'>
         <Link className="btn btn-primary" to="/login" role="button">Log in</Link>
         <Link className="btn btn-primary" to="/signup" role="button">Sign up</Link>
         </form>
         ):<button onClick={handleLogout} className='btn btn-primary text-black'>Logout</button>}
         </>
        </div>
      </div>
    </nav>
    
  )
}

export default Navbar
