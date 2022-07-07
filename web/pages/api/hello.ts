// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//TODO change name of file

import fetch from 'node-fetch'
import {supabase} from '../../utils/supabaseClient'

const FACEBOOK_GRAPH_URL = 'https://graph.facebook.com/v13.0/'
const APP_ID = process.env.MENETREND_FACEBOOK_APP_ID
const APP_SECRET = process.env.MENETREND_FACEBOOK_APP_SECRET

export default async function handler(req, res) {
  const AppAccesToken = await getAppAccessToken()
  const scopes = await debugToken(AppAccesToken, req.query.token)

  console.log(scopes)

  res.json({scopes})
}

const getAppAccessToken = async () => {
  const response = await fetch(
    `${FACEBOOK_GRAPH_URL}oauth/access_token?grant_type=client_credentials&client_id=${APP_ID}&client_secret=${APP_SECRET}`
  )
  console.log(response)

  const data: {access_token: string} = await response.json()

  return data.access_token
}

const debugToken = async (AppAccesToken: string, UserToken: string) => {
  const response = await fetch(
    `${FACEBOOK_GRAPH_URL}debug_token?input_token=${UserToken}&access_token=${AppAccesToken}`
  )

  const data: {data: {scopes: string[]}} = await response.json()

  return data
}
