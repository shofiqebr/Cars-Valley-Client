import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProviders';
import { Link } from 'react-router-dom';

const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] =useState(true)
    const {signIn} = useContext(AuthContext);
    useEffect( () =>{
        loadCaptchaEnginge(6); 
    },[])

    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email, password)
        .then(result => {
            const user =result.user;
            console.log(user);
        })
    }
    const handleValidateCaptcha = e =>{
       const user_captcha_value = captchaRef.current.value;
       if (validateCaptcha(user_captcha_value)) {
        setDisabled(false);
    }

    else {
        setDisabled(true)
    }
    }
    return (
        <div>
           <div className="hero bg-base-200 min-h-screen mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left lg:w-1/2">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl lg:w-1/2">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
         
        </div>


        <div className="form-control">
          <label className="label">
           < LoadCanvasTemplate />
          </label>
          <input type="text" name="captcha" ref={captchaRef} placeholder="type the captcha above" className="input input-bordered" required />
          <button onClick={handleValidateCaptcha} className="btn btn-outline btn-accent btn-xs mt-3">Validate</button>
        </div>
        <div className="form-control mt-6">
          <button disabled={disabled} className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className='p-10'><small>New Here? <Link to="/signup"><span className='text-blue-500'>Create an account</span></Link> </small></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;