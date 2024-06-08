import 'server-only';

import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: 'published',
})

export async function sanityFetch({query, params, tags}) {
  return client.fetch(query, params, {
    next: {
      revalidate: 5,
      tags,
    },
    cache: 'force-cache',
  });
}