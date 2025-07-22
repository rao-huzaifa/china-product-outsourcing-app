import { createClient } from 'next-sanity'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'hjoc1p23',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-07-08',
  useCdn: true,
})

export async function createSanityDocument(type, data) {
  return sanityClient.create({
    _type: type,
    ...data,
  })
} 