import { Link, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../routes/Provider/AuthProvider";


const Login = () => {
  const {sinIn} = useContext(AuthContext);
  const location = useLocation();
  console.log('location in the login page',location)
    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const from = new FormData(e.currentTarget);
        const email = from.get('email')
        const password = from.get('password')
        console.log(email,password)

        sinIn(email,password)
        .then(result=>{
          console.log(result.user)
        // navigator after login
        navigator(location?.state ? location.state:'/');
        })
        .catch(error=>{
          console.log(error);
        })
    }
    return (
        <div>
            <Navbar></Navbar>

        <h2 className="text-3xl my-10 text-center">Please Login</h2>
      <form   onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        
      </form>
      <p className="text-center mt-4">Dont’t Have An Account ? <Link className="text-red-500" to="/register">Register</Link></p>
    </div>
 
    
    );
};

export default Login;