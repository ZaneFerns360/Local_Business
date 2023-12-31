'use client'
import React, { useState, useEffect } from 'react'
import { db } from '@lib/firebase'
import Image from 'next/image'
import { auth } from '@lib/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Link from 'next/link'
import {
  getDocs,
  getDoc,
  doc,
  setDoc,
  deleteDoc,
  query,
  updateDoc,
  collection,
} from 'firebase/firestore'
import {
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from 'firebase/storage'
import { storage } from '@lib/firebase'
// ...

const BusinessDetails = ({ params }) => {
  const [user, loading, error] = useAuthState(auth)
  const [businessData, setBusinessData] = useState(null)
  const [items, setItems] = useState([])
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      if (params.id) {
        const docRef = doc(db, 'business', params.id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setBusinessData(docSnap.data())
        } else {
          console.log('No such document!')
        }

        // Get a reference to the 'items' collection
        const itemsCollectionRef = collection(
          db,
          'business',
          params.id,
          'items'
        )

        // Fetch all documents in the 'items' collection
        const itemsSnapshot = await getDocs(itemsCollectionRef)

        // Map over the documents and get the data of each one
        const itemsData = itemsSnapshot.docs.map((doc) => doc.data())

        // Set the items state
        setItems(itemsData)

        // Get a reference to the 'comments' collection
        const commentsCollectionRef = collection(
          db,
          'business',
          params.id,
          'comments'
        )

        // Fetch all documents in the 'comments' collection
        const commentsSnapshot = await getDocs(commentsCollectionRef)

        // Map over the documents and get the data of each one
        const commentsData = commentsSnapshot.docs.map((doc) => doc.data())

        // Set the comments state
        setComments(commentsData)
      }
    }

    fetchData()
  }, [params.id])

  const handleCommentSubmit = async (event) => {
    event.preventDefault()

    if (user) {
      // Create a reference to the new comment document
      const docRef = doc(db, 'business', params.id, 'comments', user.uid)

      // Set the comment data
      await setDoc(
        docRef,
        { comment: newComment, xuser: user.uid.substring(0, 5) },
        { merge: true }
      )

      // Reset the comment field
      setNewComment('')
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100 p-5">
      <h1 className="mb-5 text-4xl font-bold text-blue-500">
        Business Details
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
          {/* Map over the items and display their data */}
          {items.map((item, index) => (
            <div
              key={index}
              className="mb-5 flex w-full flex-col items-center rounded-lg border border-gray-200 p-5"
            >
              <Image
                height={80}
                width={80}
                src={item.photoURL}
                alt={item.itemName}
                className="rounded-lg"
              />
              <h3 className="mb-2 text-xl font-semibold">{item.itemName}</h3>
              <p className="mb-2 text-lg">Price: {item.price}</p>
              <p className="mb-2 text-lg">Stock: {item.stock}</p>
              <p className="mb-2 text-lg">Description: {item.desc}</p>
            </div>
          ))}
          {/* Map over the comments and display their data */}
          {comments.map((comment, index) => (
            <div
              key={index}
              className="mb-5 w-full rounded-lg border border-gray-200 p-5"
            >
              <p className="text-lg">{comment.comment}</p>
              <p className="text-sm text-gray-500">User: {comment.xuser}</p>
            </div>
          ))}
          {/* Comment form */}
          <form onSubmit={handleCommentSubmit} className="mt-5 w-full">
            <textarea
              value={newComment}
              onChange={(event) => setNewComment(event.target.value)}
              placeholder="Add a comment"
              className="mb-2 w-full rounded-lg border border-gray-200 p-2"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-500 p-2 text-white"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <p className="font-bold">Loading...</p>
      )}
    </div>
  )
}

export default BusinessDetails
