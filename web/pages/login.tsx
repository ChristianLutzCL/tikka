/* eslint-disable react/no-unescaped-entities */
import {useState, useEffect} from 'react'
import Head from 'next/head'
import {signIn} from '../utils/supabaseClient'
import logo from '../public/menetrend_dark.svg'
import Image from 'next/image'
import Button from '../components/button'
import Input from '../components/iconinput'
import Link from 'next/link'
import {MailOutlined, LockOutlined} from '@ant-design/icons'
import image from '../public/heroImg.png'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    if (email && password) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [email, password])

  return (
    <div className='flex justify-center bg-gray-50 overflow-hidden'>
      <Head>
        <title>Menetrend - Social Media Management for Indie Hackers</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex h-screen w-screen'>
        <div className='flex justify-center w-screen xl:w-3/4 content-between'>
          <div className='md:w-2/3 xl:w-5/12 grid content-between'>
            <div className='flex justify-center md:justify-start pt-8'>
              <Link passHref href={'/'}>
                <a>
                  <Image src={logo} width={168} height={32} alt='Menetrend' />
                </a>
              </Link>
            </div>
            <div className='px-6'>
              <div className='text-3xl font-extrabold text-center text-background pb-2'>
                Log In to your account
              </div>
              <div className='text-base font-light text-background pb-12 text-center'>
                Or{' '}
                <Link href='/signup'>
                  <a className='text-purple-800 hover:text-purple-700'>
                    start your 14-day trial
                  </a>
                </Link>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  signIn(email, password)
                }}
                className='space-y-2'>
                <Input
                  autoComplete='email'
                  onChange={(e) => setEmail(e.target.value)}
                  maxlength='60'
                  minlength='10'
                  type='email'
                  placeholder='Email'>
                  <MailOutlined />
                </Input>
                <Input
                  autoComplete='current-password'
                  onChange={(e) => setPassword(e.target.value)}
                  maxlength='35'
                  minlength='10'
                  type='password'
                  placeholder='Password'>
                  <LockOutlined />
                </Input>
                <Button type='submit' disabled={isDisabled}>
                  Log In
                </Button>
                <p className='text-md text-gray-600'>
                  <Link href='/resetpassword'>
                    <a className='text-purple-800 hover:text-purple-700'>
                      Forgot your password?
                    </a>
                  </Link>
                </p>
              </form>
            </div>
            <div className='px-6 pb-8'>
              <p className='text-md text-gray-600'>
                Need an Account?{' '}
                <Link href='/signup'>
                  <a className='text-purple-800 hover:text-purple-700'>
                    Sign Up
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className='hidden xl:flex xl:w-2/4 bg-gray-900 h-screen p-20 text-white'>
          <div>
            <div className='text-white bg-gradient-to-br from-menetrend-blue to-menetrend-pink w-52 justify-center flex py-1 rounded-full font-semibold mb-20'>
              New from Menetrend
            </div>
            <div className='text-4xl font-bold w-4/5 mb-8'>
              Introducing: A composer to preview your Instagram posts.{' '}
            </div>
            <div className='text-base font-light w-4/5'>
              No more incorrect posts on your profile. - With Composer you have
              the ability to create and review your posts before you publish
              them.
            </div>
            <div className='relative z-1 pt-20 animate-fade-in-down '>
              <Image
                src={image}
                alt='image'
                width={1800}
                height={979}
                quality='100'
                layout='intrinsic'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      protected: false,
      auth: true,
    },
  }
}
