'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@lib/firebase'

const ResetPassword = () => {
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const handleSubmit = async (event) => {
    event.preventDefault()

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{10,}$/

    if (!passwordRegex.test(password1)) {
      setError(
        'Password must be at least 10 characters long and contain a number and a capital letter'
      )
      return
    }

    if (password1 !== password2) {
      setError('Passwords do not match')
      return
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password1)
      router.push('/login')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <section className="pt-30 flex-center w-full max-w-full flex-col pb-64">
      <form
        onSubmit={handleSubmit}
        className="glassmorphism mt-10 flex w-full max-w-2xl flex-col gap-7"
      >
        <label>
          <span className="font-satoshi text-base font-semibold text-gray-700">
            Email
          </span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="form_input"
          />
        </label>
        <label>
          <span className="font-satoshi text-base font-semibold text-gray-700">
            New Password
          </span>
          <input
            type="password"
            value={password1}
            onChange={(event) => setPassword1(event.target.value)}
            className="form_input"
          />
        </label>
        <label>
          <span className="font-satoshi text-base font-semibold text-gray-700">
            Confirm Password
          </span>
          <input
            type="password"
            value={password2}
            onChange={(event) => setPassword2(event.target.value)}
            className="form_input"
          />
        </label>
        {error && <p>{error}</p>}
        <button type="submit">Create account</button>
      </form>
    </section>
  )
}

export default ResetPassword
