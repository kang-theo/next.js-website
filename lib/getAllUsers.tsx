export default async function getAllUsers() {
  // jsonplaceholder.typicode.com
  const res = await fetch('https://jsonplaceholder.typicode.com/users')

  if (!res.ok) return undefined // throw new Error('failed to fetch data')

  return res.json()
}
