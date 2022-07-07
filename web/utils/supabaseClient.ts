import {createClient} from '@supabase/supabase-js'
import Router from 'next/router'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function getSession() {
  const session = supabase.auth.session()
}

export async function signUpWithEmail(userEmail, userPassword): Promise<any> {
  const {user, error} = await supabase.auth.signUp({
    email: userEmail,
    password: userPassword,
  })

  if (user) {
    Router.push('/activate')
  } else if (error) {
    console.log(error)
  }

  return {user, error}
}

export async function signIn(userEmail, userPassword) {
  const {user, session, error} = await supabase.auth.signIn({
    email: userEmail,
    password: userPassword,
  })
  Router.push('/publish/home')
}

export async function signInWithFacebook() {
  const {user, session, error} = await supabase.auth.signIn({
    provider: 'facebook',
  })
}

export async function signout() {
  const {error} = await supabase.auth.signOut()
  Router.push('/login')
}

export async function resetPassword(userEmail) {
  const {data, error} = await supabase.auth.api.resetPasswordForEmail(userEmail)
  console.log(data, error)
}
