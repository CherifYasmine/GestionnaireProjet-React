import React, {useState} from 'react';
import "./Login.css";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const forward = () => {
        window.open("/", "_self");
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username==='') setUsernameError('this field is required*');
        if (password==='') setPasswordError('this field is required*');    
        if (username!=='' && password!=='') forward ();    
    };

  return (
    <div className="container register">
    <div className="row">
        <div className="col-md-3 register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
            <h3>Welcome</h3>
            <div  className="notaccount">
            <p>Don't have an account?</p>
            <input onClick={forward} type="submit" name="" value="Register Now"/><br/>
            </div>
            
        </div>
        <div className="col-md-9 register-right">
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <h3 className="register-heading">Login</h3>
                    <form onSubmit={handleSubmit}> 
                    <div className="row register-form">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                        <div className="error">{usernameError}</div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Usename *" onChange={(event) =>{
                                    setUsername(event.target.value);
                                    setUsernameError('');
                                } } />
                            </div>
                            <br/>
                            <div className="error">{passwordError}</div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password *" onChange={(event) => {
                                    setPassword(event.target.value);
                                    setPasswordError('');
                                }} />
                            </div>
                        
                        </div>
                        <div className="col-md-6">
                            <input type="submit" className="btnRegister" value="Login" />
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

</div>
    
  );
};

export default Login;
