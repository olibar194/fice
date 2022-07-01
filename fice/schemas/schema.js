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
import person from './documents/person'

import role from './documents/role'
import screening from './documents/screening'
import jury from './documents/jury'
import call from './documents/convocatoria'

// import plotSummary from './documents/plotSummary'
// import plotSummaries from './documents/plotSummaries'
// import genre from './documents/genre'
import edition from './documents/edition'
import gallery from './objects/gallery'

import { localeString } from './objects/localeString'
import { localeBlock } from './objects/localeBlock'
import { movie } from './documents/movie'
import { activity } from './documents/activity'
import awards from './documents/awards'
import award from './objects/award'

import country from './documents/country'
import island from './documents/island'
import competition from './objects/competition'

import producer from './documents/producer'
import index from './documents/index'
import hashtag from './documents/hashtag'
import itinerary from './objects/itinerary'
import _break from './objects/break'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    index,
    edition,
    call,
    awards,
    award,
    competition,
    jury,
    screening,
    activity,
    island,
    hashtag,
    person,
    producer,
    country,
    localeBlock,
    localeString,
    role,
    richText,
    movie,
    gallery,
    itinerary,
    _break,
  ]),
})
