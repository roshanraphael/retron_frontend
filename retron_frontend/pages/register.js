import Head from 'next/head'
import Link from "next/link"  
import React from 'react'
const Register = () => {
    const registerForm = () => {
        return (
            <form >
                <div className="form-group pt-3 pb-3">
                <input
                        type="name"
                        className="form-control"
                        placeholder="Type your name"
                    />
                </div>
                <div className="form-group pb-3">
                <input
                        type="userName"
                        className="form-control"
                        placeholder="Type your username"
                    />
                </div>                
                <div className="form-group pb-3">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Type your email"
                    />
                </div>
                <div className="form-group pb-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Type your password"
                    />
                </div>

                <div className=" row d-flex justify-content-center">
                    <div className="col-12 p-2 d-flex justify-content-center">
                    <button className="btn btn-primary btn-block">Register</button>
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
                <div className="container-fluid pt-5 pb-5 bg-warning" style={{height:"650px"}}>
                    <div className="">
                    <div className="container bg-white p-5" style={{borderBottomLeftRadius: 40, borderBottomRightRadius:40, borderTopRightRadius: 40, borderTopLeftRadius: 40}} >
                        <div className="row d-flex justify-content-center align-item-center">
                            <div className=" col-md">
                                {registerForm()}
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <br />
            </>
    );
};

export default Register;