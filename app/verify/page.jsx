'use client'
import Image from 'next/image'
import { auth } from '@lib/firebase'
import { getAuth, sendEmailVerification } from 'firebase/auth'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Verify = () => {
  const user = auth.currentUser
  const [isSent, setIsSent] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && user.emailVerified) {
        router.push('/userDetails')
      }
    })

    return () => unsubscribe()
  }, [user])

  useEffect(() => {
    const interval = setInterval(() => {
      router.reload()
    }, 15000)

    return () => clearInterval(interval)
  }, [router])

  const handleSendVerificationEmail = async () => {
    try {
      await sendEmailVerification(auth.currentUser)
      setIsSent(true)
      setIsDisabled(true)
      setTimeout(() => {
        setIsDisabled(false)
      }, 10000)
      setTimeout(() => {
        setIsSent(false)
      }, 10000)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex h-screen flex-col items-center  bg-gray-100 pt-10">
      <Image src="/assets/email.png" alt="Email" width={200} height={200} />
      <h1 className="mt-8 text-3xl font-bold text-gray-900">
        {isSent ? 'Verification email sent' : 'Send verification email'}
      </h1>
      {!isSent && (
        <button
          className={`mt-4 rounded px-4 py-2 font-bold text-white ${
            isDisabled
              ? 'cursor-not-allowed bg-gray-500'
              : 'bg-blue-500 hover:bg-blue-700'
          }`}
          onClick={handleSendVerificationEmail}
          disabled={isDisabled}
        >
          {isDisabled ? 'Resend' : 'Send'}
        </button>
      )}
    </div>
  )
}

export default Verify
