// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import richText from './objects/richText'
// import openGraph from './objects/openGraph'
// import captionImage from './objects/captionImage'
// import blockContent from './objects/blockContent'
// import crewMember from './documents/crewMember'
// import castMember from './documents/castMember'
// import movie from './documents/movie'
import person from './objects/person'

import role from './objects/role'
import screening from './documents/screening'
// import plotSummary from './documents/plotSummary'
// import plotSummaries from './documents/plotSummaries'
import edition from './documents/edition'
import { translateFields } from './fieldTranslation'
import { localeString } from './objects/localeString'
import { localeBlock } from './objects/localeBlock'
import { movie } from './documents/movie'
import { activity } from './documents/activity'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // Any base object you've defined,
    // or document type that should not have
    // field-level validations
    localeBlock,
    localeString,
    activity,
    screening,
    role,
    person,
    richText,
    movie,
    edition,
  ]),
  // .concat(translateFields([ ])),
})
