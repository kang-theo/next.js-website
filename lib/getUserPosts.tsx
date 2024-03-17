// async function means it returns a promise implicitly. The promise will resolve with the JSON data 
export default async function getUserPosts(userId: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

  if (!res.ok) throw new Error('failed to fetch all posts')

  return res.json()
}
