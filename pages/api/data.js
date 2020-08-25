const data = []
import React from 'react'
import { useCollection } from '@nandorojo/swr-firestore'
import { Text } from 'react-native'

//export default 
function UserList() {
  const { data, update, error } = useCollection(`users`)

  if (error) return <Text>Error!</Text>
  if (!data) return <Text>Loading...</Text>

  return data.map((user) => <Text key={user.id}>{user.name}</Text>)
}
function shouldFail() {
  return Math.random() > 0.8
}

export default (req, res) => {
  if (req.method === 'POST') {
//     const body = JSON.parse(req.body)
//     // sometimes it will fail, this will cause a regression on the UI
//     if (!shouldFail()) {
//       data.push(body.text);
//     }
    let pu = Date.now()
    data.unshift(pu)
    res.json(data)
    return
  } else {
    let re = UserList()
    re = JSON.stringify(re,null,4)
    res.json(re)
  }

  setTimeout(() => {
    res.json(data)
  }, 2000)
}

