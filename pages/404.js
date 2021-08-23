import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function NotFound() {

    const [counter, setCounter] = useState(4);

    setInterval(() => {
        setCounter(counter - 1);
    }, 1000);

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 4000)
    }, [])


  return (
    <>
      <Head>
        <title>Not found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container error-container pl-lg-5 mb-lg-5">
          <div className="row justify-content-center">
              <div className="col-lg-10">
                  <h1 className="404-h1 text-center">
                      Ooooops..
                  </h1> 
                  <h5 className="404-h5 pt-lg-5 text-center">
                        This page cannot be found.
                  </h5>
                  <h6 className="404-h5 pt-lg-5 text-center">
                        Hang on, we will redirect you to Homepage in {counter} s
                  </h6>
                  <p className="404-p text-center pt-lg-5">
                      Go back to 
                      <Link href="/">
                        <a  className="404-a"> Homepage</a>
                      </Link>
                  </p>
              </div>
          </div>
      </div>
    </>
  )
}
