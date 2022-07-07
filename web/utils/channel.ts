// 1. Facebook Login
export async function facebookLogin() {
  return new Promise<any>(async (resolve, reject) => {
    FB.login(
      async function (response) {
        if (response.authResponse) {
          resolve(response)
        } else {
          reject(response)
        }
      },
      {
        scope:
          'public_profile,instagram_basic,instagram_content_publish,pages_show_list,pages_read_engagement',
        return_scopes: true,
      }
    )
  })
}

// 2. Get FB User ID
export async function getFBUserID() {
  return new Promise<any>(async (resolve, reject) => {
    try {
      window.FB.api(
        '/me',
        'get',
        {fields: 'id'},
        async function (response: any) {
          resolve(response.id)
        }
      )
    } catch (error) {
      console.log(error)
      reject(error)
    }
  })
}

// 3. Get IG User Accounts
export async function getIGUserAccounts(fbUserID) {
  return new Promise<any>((resolve, reject) => {
    try {
      window.FB.api(
        `/${fbUserID}`,
        'get',
        {fields: 'accounts{name,id,access_token}'},
        async function (response: any) {
          resolve(response)
        }
      )
    } catch (error) {
      console.log(error)
      reject(error)
    }
  })
}

export async function getAccessToken(fbUserID) {
  console.log(fbUserID)
  return new Promise<any>((resolve, reject) => {
    try {
      window.FB.api(
        `/${fbUserID}`,
        'get',
        {fields: 'accounts{access_token}'},
        async function (response: any) {
          resolve(response)
        }
      )
    } catch (error) {
      console.log(error)
      reject(error)
    }
  })
}

// 4. Get IG Business Account ID
export async function getIGBusinessAcountID(igUserAccounts) {
  return new Promise<any>((resolve, reject) => {
    try {
      window.FB.api(
        `${igUserAccounts}`,
        'get',
        {fields: 'instagram_business_account{id}'},
        async function (response: any) {
          resolve(response)
        }
      )
    } catch (error) {
      console.log(error)
      reject(error)
    }
  })
}
