// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import projectPage from './documents/projectPage'
import metaData from './documents/metaData'
import projectPageHero from './documents/projectPageHero'
import projectPageInfo from './documents/projectPageInfo'
import projectPageMap from './documents/projectPageMap'
import projectPageTheme from './documents/projectPageTheme'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    metaData,
    projectPage,
    projectPageHero,
    projectPageInfo,
    projectPageMap,
    projectPageTheme
  ]),
})
