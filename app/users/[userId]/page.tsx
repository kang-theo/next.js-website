import React, { Suspense } from 'react'
import getUser from '@/lib/getUser'
import getUserPosts from '@/lib/getUserPosts'
import UserPosts from './components/UserPosts'
import type { Metadata } from 'next'

type Params = {
  params: {
    userId: string
  }
}

export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId)
  const user: User = await userData

  return {
    title: user.name,
    description: `This is the page of${user.name}`
  }
}

// 3. fetch data where it's used
export default async function UserPage({ params: { userId } }: Params) {
  // 1. fetch data on the server using Server Components
  const userData: Promise<User> = getUser(userId)
  const userPostsData: Promise<Post[]> = getUserPosts(userId)

  // 2. fetch data in parallel, not waterfall
  // const [user, userPosts] = await Promise.all([userData, userPostsData])

  const user = await userData

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
