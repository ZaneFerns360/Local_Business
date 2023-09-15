'use client'
import React, { useState, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@lib/firebase'
import Image from 'next/image'
import { auth } from '@lib/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Link from 'next/link'
import { collection, getDocs } from 'firebase/firestore'

// ...

const BusinessDetails = () => {
  const [user, loading, error] = useAuthState(auth)
  const [businessData, setBusinessData] = useState(null)
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const docRef = doc(db, 'business', user.uid)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setBusinessData(docSnap.data())
        } else {
          console.log('No such document!')
        }

        // Get a reference to the 'items' collection
        const itemsCollectionRef = collection(db, 'business', user.uid, 'items')

        // Fetch all documents in the 'items' collection
        const itemsSnapshot = await getDocs(itemsCollectionRef)

        // Map over the documents and get the data of each one
        const itemsData = itemsSnapshot.docs.map((doc) => doc.data())

        // Set the items state
        setItems(itemsData)
      }
    }

    fetchData()
  }, [user])

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100 p-5">
      <h1 className="mb-5 text-4xl font-bold text-blue-500">
        Your Business Details
      </h1>
      {businessData ? (
        <div className="flex w-full flex-col items-center rounded-lg bg-white p-10 shadow-md sm:w-3/4 lg:w-1/2">
          <h2 className="mb-2 text-3xl font-semibold text-gray-700">
            {businessData.businessName}
          </h2>
          <p className="mb-2 text-xl text-gray-500">{businessData.typeOf}</p>
          <p className="mb-2 text-xl text-gray-500">
            Phone no: {businessData.phoneNumber}
          </p>
          <p className="mb-5 text-lg text-gray-500">
            Address: {businessData.location}
          </p>
          <div className="flex w-full items-center justify-center">
            <Image
              height={500}
              width={500}
              src={businessData.photoURL}
              alt="Business"
              className="rounded-lg"
            />
          </div>
          <div className="py-10">
            <Link
              className="mr-3 rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0 "
              href="/userDetails"
            >
              Change business details
            </Link>
          </div>
          <div className="pb-5 ">
            <Link
              className="mr-3 rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0 "
              href="/userDetails/products"
            >
              Add items
            </Link>
          </div>
          {/* Map over the items and display their data */}
          {items.map((item, index) => (
            <div
              key={index}
              className="mb-5 flex w-full flex-col items-center rounded-lg border border-gray-200 p-5"
            >
              <div className="flex flex-row items-start justify-center">
                <div className="pr-36 pt-4">
                  <Image
                    height={90}
                    width={90}
                    src={item.photoURL}
                    alt={item.itemName}
                    className="rounded-lg"
                  />
                </div>

                <div className="flex flex-col items-center justify-center">
                  <h3 className="mb-2 text-xl font-semibold">
                    {item.itemName}
                  </h3>
                  <p className="mb-2 text-lg">Stock: {item.stock}</p>
                  <p className="mb-2 text-lg">Description: {item.desc}</p>
                  <p className="mb-2 text-lg">Price: {item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="font-bold">Loading...</p>
      )}
    </div>
  )
}

export default BusinessDetails
