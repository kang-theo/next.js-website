// async function means it returns a promise implicitly. The promise will resolve with the JSON data 
export default async function getUserPosts(userId: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, { next: { revalidate: 60 } })
  // { cache: 'no-store' }, { cache: 'force-cache' }, { cache: 'no-cache' }, { cache: 'only-if-cached' }
  // { next: {revalidate: 60} }

// throw new Error('failed to fetch all posts')
// return notFound()
  if (!res.ok) return undefined 

  return res.json()
}
