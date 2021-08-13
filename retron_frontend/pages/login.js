import Head from 'next/head'
import Link from "next/link"  
import React from 'react'
const Login = () => {
    const loginForm = () => {
        return (
            <form >
                <div className="form-group pt-3 pb-3">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Type your email"
                    />
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Type your password"
                    />
                </div>

                <div className=" row d-flex justify-content-center">
                    <div className="col-12 p-2 d-flex justify-content-center">
                    <button className="btn btn-primary btn-block">Log In</button>
                    </div>
                    <div className="d-flex justify-content-center align-item-center">
                    <h5>OR</h5>
                    </div>
                    <div className="col-12 pb-5 d-flex justify-content-center">
                        <Link href="/register">
                    <button className="btn btn-block btn-primary ">Create an Account</button></Link>
                    </div>
                </div>
            </form>
        );
    };
    
    return (
            <>
                <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" 
                    integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous"/>
                </Head>
                <div className="container-fluid pt-5">
                    <div className="container-fluid bg-white" >
                        <div className="row d-flex justify-content-center align-item-center">
                            <div className=" col-md">
                                {loginForm()}
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </>
    );
};

export default Login;