'use client'
import { useRouter } from 'next/navigation'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { auth } from '@lib/firebase'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault()

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{10,}$/

    if (!passwordRegex.test(password)) {
      setError(
        'Password must be at least 10 characters long and contain a number and a capital letter'
      )
      return
    }

    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user
          // ...
        }
      )

      router.push('/userDetails')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <section className="pt-30 flex-center w-full max-w-full flex-col pb-96">
      <form
        onSubmit={handleSubmit}
        className="glassmorphism mt-10 flex w-full max-w-2xl flex-col gap-7"
      >
        {error && <p className="text-red-500">{error}</p>}
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
            Password
          </span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="form_input"
          />
        </label>
        {error && <p>{error}</p>}
        <button type="submit">Sign In</button>
      </form>
    </section>
  )
}

export default Login
