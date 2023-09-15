'use client'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@lib/firebase' // import your Firebase config file
import { useState, useEffect } from 'react'
import Link from 'next/link'
export default function Box() {
  const [businesses, setBusinesses] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      // Get a reference to the 'business' collection
      const businessesCollectionRef = collection(db, 'business')

      // Fetch all documents in the 'business' collection
      const businessesSnapshot = await getDocs(businessesCollectionRef)

      // Map over the documents and get the data of each one
      const businessesData = businessesSnapshot.docs.map((doc) => doc.data())

      // Set the businesses state
      setBusinesses(businessesData)
    }

    fetchData()
  }, [])

  return (
    <>
      <div className="body-font text-gray-600">
        <div className="container mx-auto px-5 py-0">
          <div className="-m-4 flex flex-wrap">
            {businesses.map((business, index) => (
              <div key={index} className="p-4 md:w-1/2 xl:w-1/4">
                <Link href={`/bus/${business.uid}`}>
                  <div className="rounded-lg bg-gray-100 p-6">
                    <img
                      className="mb-6 h-40 w-full rounded object-cover object-center"
                      src={business.photoURL}
                      alt={business.businessName}
                    />
                    <h3 className="title-font text-xs font-medium tracking-widest text-indigo-500">
                      {business.typeOf}
                    </h3>
                    <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
                      {business.businessName}
                    </h2>
                    <p className="text-base leading-relaxed">
                      Phone no: {business.phoneNumber}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
