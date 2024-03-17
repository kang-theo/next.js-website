import React, { Suspense } from 'react'
import getUser from '@/lib/getUser'
import getUserPosts from '@/lib/getUserPosts'
import UserPosts from './components/UserPosts'
import type { Metadata } from 'next'
import getAllUsers from '@/lib/getAllUsers'

import { notFound } from 'next/navigation'

type Params = {
  params: {
    userId: string
  }
}

export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId)
  const user: User = await userData
  if (!user?.name) {
    return {
      title: "User Not Found"
    }
  }

  return {
    title: user.name,
    description: `This is the page of${user.name}`
  }
}

// 3. fetch data where it's used
// SSR to SSG (2) get params from generateStaticParams. It get userId from http request each time without generateStaticParams
export default async function UserPage({ params: { userId } }: Params) {
  // 1. fetch data on the server using Server Components
  const userData: Promise<User> = getUser(userId)
  const userPostsData: Promise<Post[]> = getUserPosts(userId)

  // 2. fetch data in parallel, not waterfall
  // const [user, userPosts] = await Promise.all([userData, userPostsData])

  const user = await userData

  if (!user?.name) return notFound()

  return (
    // segment
    <>
      {/* 4. use Suspense [Loading UI, Streaming] to progressively render a pae while the rest of the content loads */}
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading ...</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  )
}

//  SSR to SSG (1)
//  generates static parameters for the userId pages by fetching data about users,
//  and returning an array of objects with userId as a parameter.
//  check by running `npm run build`
export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers()
  const users = await usersData

  return users.map(user => ({
    userId: user.id.toString()
  }))
}