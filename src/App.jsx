import { useState } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses'
import Card from './Components/Card/Card'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const totalCredits = 15;

function App() {

  const [carts, setCart] = useState([]);
  const handleCourseSelect = (course) => {

    const newCourseData = [...carts, course];
    const credits = carts.reduce((p, c) => p + c.credit, 0);
    if (credits + course.credit > totalCredits) {
      return toast.error(`you can only use ${totalCredits} Credits`)
    }
    const alreadyExists = carts.find((c) => c.id === course.id);
    if (alreadyExists) {
      toast.warn('Course already selected')
    }
    else {
      setCart(newCourseData)
      toast.success('Successfully Course added')
    }
  }
  return (
    <>
      <div className='p-4 lg:mx-5'>
        <h1 className='text-3xl font-bold text-center mb-3'>courses registration</h1>
        {/* <div className='grid md:grid-cols-12 my-4 gap-5'> */}
        <div className='md:flex md:gap-3'>
          <div className='lg:w-4/5 md:w-9/12'>
            <Courses handleCourseSelect={handleCourseSelect}></Courses>
          </div>
          <div className='lg:w-1/5 my-3'>
            <Card carts={carts}></Card>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  )
}

export default App