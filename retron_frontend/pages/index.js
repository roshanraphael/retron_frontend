import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"  
import Login from './login'
export default function Home() {
  return (
    <>
    <Head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" 
    integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous"/>
    </Head>
    <div className="container-fluid bg-warning pt-5" style={{height:"700px", width:"100%"}}>
      <div className="row p-5">
        <div className='col d-flex justify-content-center align-item-center'>
          <div>
            LOGO
          </div>
        </div>
        <div className="col d-flex justify-content-center align-item-center shadow-lg bg-white" style={{borderBottomLeftRadius: 40, borderBottomRightRadius:40, borderTopRightRadius: 40, borderTopLeftRadius: 40}}>
          <Login />
        </div>
      </div>

    </div>
    </>
  )
}
