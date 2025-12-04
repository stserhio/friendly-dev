import {Link} from "react-router";


const NotFoundPage = () => {
  return(
      <div className='flex flex-col items-center justify-center text-center px-6 min-h-[70vh]'>
        <h1 className='text-6xl font-extrabold text-blue-400 mb-2'>404</h1>
          <h2 className="text-2xl font-semibold text-gray-100 mb-2">Page not found</h2>
          <p className='text-gray-400 mb-6 '>
              Sorry, we could not find any page. Please try again.
          </p>
          <Link to='/' className='inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition' >
              Go home
          </Link>
      </div>
  )
}

export default NotFoundPage;