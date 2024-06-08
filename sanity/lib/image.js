import createImageUrlBuilder from '@sanity/image-url'

import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || 't1jyu8bw',
  dataset: dataset || 'production',
})

export const urlForImage = (source) => {
  return imageBuilder?.image(source).auto('format').fit('max').url()
}
