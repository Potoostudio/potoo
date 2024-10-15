import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function NotFound() {

    const [counter, setCounter] = useState(4);

    setInterval(() => {
        setCounter(counter - 1);
    }, 2000);

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 8000)
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
                  <h5 className="404-h5 pt-lg-5 text-center">
                        We don't have this page.
                  </h5>
                  <h6 className="404-h5 pt-lg-5 text-center">
                        We will redirect you to the right page in {counter} s
                  </h6>
                  <p className="404-p text-center pt-lg-5">
                      Go back to 
                      <Link href="/"className="404-a color-off-white pl-2">
                        Homepage
                      </Link>
                  </p>
              </div>
          </div>
      </div>
    </>
  )
}
