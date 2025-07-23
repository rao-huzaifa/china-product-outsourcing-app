import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'hjoc1p23',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-07-08',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_READ_TOKEN,
})

export async function createSanityDocument(type, data) {
  return sanityClient.create({
    _type: type,
    ...data,
  })
}