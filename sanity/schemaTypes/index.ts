import { type SchemaTypeDefinition } from 'sanity'
import { author } from './author'
import { recommendations } from './recommendations'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author,recommendations],
}
