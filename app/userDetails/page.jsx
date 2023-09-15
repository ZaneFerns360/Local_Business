'use client'
import { db } from '@lib/firebase'
import { useState } from 'react'
import { auth } from '@lib/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

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

const Details = () => {
  const [user, loading] = useAuthState(auth)
  const router = useRouter()
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const Regex2 = /^[0-9]{10}$/
    const storageRef = ref(storage, 'business/' + user.uid)

    // Get the file from the form
    const file = document.getElementById('file_input').files[0]

    if (!Regex2.test(phoneNumber)) {
      setError('Phone no. is invalid')
      return
    }

    try {
      const snapshot = await uploadBytesResumable(storageRef, file)

      // Get the download URL of the uploaded file
      const downloadURL = await getDownloadURL(snapshot.ref)

      const userRef = doc(db, 'business', user.uid)
      await setDoc(
        userRef,
        {
          businessName: name,
          typeOf: type,
          phoneNumber: phoneNumber,
          location: address,
          photoURL: downloadURL,
          uid: user.uid,
        },
        { merge: true }
      )
      // Reset form fields
      setName('')
      setType('')
      setPhoneNumber('')
      setAddress('')
      router.push('/')
    } catch (err) {
      setError(err.message)
      console.error(err)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center pb-48 pt-20">
      <h1 className="px-4 py-4 text-2xl font-bold">Add a New business</h1>
      <form className="glassmorphism" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Business Name
          </label>
          <input
            type="text"
            id="name"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Pop Tates"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Type of Business
          </label>
          <input
            type="text"
            id="Type"
            placeholder="Bookshop, Hotel..."
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required
            value={type}
            onChange={(event) => setType(event.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Address of Business
          </label>
          <input
            type="text"
            id="address"
            placeholder="420 Nagori Lane...."
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="repeat-password"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Business Phone no.
          </label>
          <input
            type="text"
            id="phoneNumber"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required
            placeholder="7021022888"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="file_input"
          >
            Upload Photo
          </label>
          <input
            className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
            id="file_input"
            type="file"
          />
        </div>
        <div className="mb-6 flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="terms"
              type="checkbox"
              value=""
              className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="terms"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{' '}
            <Link
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </Link>
          </label>
        </div>
        {error && <p className="py-4 text-red-700">{error}</p>}
        <button
          type="submit"
          className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add details
        </button>
      </form>
    </div>
  )
}

export default Details
