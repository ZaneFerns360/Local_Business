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

const Items = () => {
  // Create a storage reference from our storage service

  const [user, loading] = useAuthState(auth)
  const router = useRouter()
  const [name, setName] = useState('')
  const [stock, setStock] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const storageRef = ref(storage, user.uid + '/items/' + name)

    // Get the file from the form
    const file = document.getElementById('file_input').files[0]

    try {
      const snapshot = await uploadBytesResumable(storageRef, file)

      // Get the download URL of the uploaded file
      const downloadURL = await getDownloadURL(snapshot.ref)

      // Create a new collection 'items' in the 'business' document with user's uid
      const itemsCollectionRef = collection(db, 'business', user.uid, 'items')

      const docRef = doc(db, 'business', user.uid, 'items', name)

      // Set the document data
      await setDoc(
        docRef,
        {
          itemName: name,
          stock: stock,
          desc: description,
          photoURL: downloadURL,
          price: price,
          uid: user.uid,
        },
        { merge: true }
      )
      // Reset form fields
      setName('')
      setStock('')
      setDescription('')
      setPrice('')
    } catch (err) {
      setError(err.message)
      console.error(err)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center pb-48 pt-20">
      <h1 className="px-4 py-4 text-2xl font-bold">Add a New Item</h1>
      <form className="glassmorphism" onSubmit={handleSubmit}>
        <div class="mb-6">
          <label
            for="email"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Item Name
          </label>
          <input
            type="text"
            id="name"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="2x4 Photo Frame"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            placeholder="A newly designed photo frame"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Price
          </label>
          <input
            type="text"
            id="price"
            placeholder="A newly designed photo frame"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div class="mb-6">
          <label
            for="repeat-password"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Stock
          </label>
          <input
            type="text"
            id="stock"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required
            placeholder="102"
            value={stock}
            onChange={(event) => setStock(event.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            for="file_input"
          >
            Upload Photo
          </label>
          <input
            class="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
            id="file_input"
            type="file"
          />
        </div>
        {error && <p className="py-4 text-red-700">{error}</p>}
        <button
          type="submit"
          class="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add items
        </button>
      </form>
    </div>
  )
}

export default Items
