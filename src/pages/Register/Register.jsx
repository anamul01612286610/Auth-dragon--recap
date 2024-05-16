import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../routes/Provider/AuthProvider";


const Register = () => {
const {createUser} = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const from = new FormData(e.currentTarget);

        const name = from.get('name')
        const photo = from.get("photo")
        const email = from.get('email');
        const  password = from.get('password');
        console.log(name,photo,email,password);

        // createUser

        createUser(email,password)
        .then(result=>{
          console.log(result.user)
        })
        .catch(error=>{
          console.log(error)
        })
      }
    return (
        <div>
        <Navbar></Navbar>

    <h2 className="text-3xl my-10 text-center">Please Register</h2>
  <form   onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
  <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="name" placeholder="Name" name="name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo Url</span>
      </label>
      <input type="text" placeholder="photo url" name="photo" className="input input-bordered" required />
    </div>
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
      <button className="btn btn-primary">Register</button>
    </div>
    
  </form>
  <p className="text-center mt-4">Already  have An Account ? <Link className="text-red-500" to="/login">Login</Link></p>
</div>

    );
};

export default Register;