import React from 'react'

export default async function getWikiResults(searchTerm: string) {
  // URLSearchParams here is related to wikipedia API
  const searchParams = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: searchTerm,
    gsrlimit: '20',
    prop: 'pageimages|extracts',
    exchars: '100',
    exintro: 'true',
    explaintext: 'true',
    exlimit: 'max',
    format: 'json',
    origin: '*',
  })

  const response = await fetch('https://en.wikipedia.org/w/api.php?' + searchParams)


  // const data = await response.json();
  // console.log(data);


  // if (!response.ok) return undefined
  return response.json()
}
