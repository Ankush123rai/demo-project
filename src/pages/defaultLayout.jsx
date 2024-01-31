import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Notification from '../components/Notification'

const defaultLayout = () => {
  return (
    <div className="flex h-screen">
    <Sidebar />
    <div className="flex-1 flex flex-col overflow-hidden">
      <Header />
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div className="container mx-auto px-6 py-8">
            <h1>hello woed</h1>
        </div>
      </main>
    </div>
   <div className="sticky top-0 right-0 mb-4 mr-4 bg-slate-500 w-[280px]">
     <Notification />
   </div>
  </div>
  )
}
export default defaultLayout