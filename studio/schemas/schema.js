// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import page from './documents/page'
import route from './documents/route'
import siteConfig from './documents/siteConfig'
import board from './documents/board'
import service from './documents/service'
import event from './documents/event'

// Custom Full Pages
import boardPage from './objects/boardPage'
import boardPageEsp from './objects/boardPageEsp'
import servicesPage from './objects/servicesPage'
import servicesPageEsp from './objects/servicesPageEsp'
import english from './objects/english'
import español from './objects/español'


// Object types
import cta from './objects/cta'
import embedHTML from './objects/embedHTML'
import figure from './objects/figure'
import internalLink from './objects/internalLink'
import link from './objects/link'
import portableText from './objects/portableText'
import simplePortableText from './objects/simplePortableText'

// Landing page sections
import hero from './objects/hero'
import imageSection from './objects/imageSection'
import mailchimp from './objects/mailchimp'
import textSection from './objects/textSection'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    board,
    boardPage,
    boardPageEsp,
    cta,
    embedHTML,
    english,
    español,
    event,
    figure,
    hero,
    imageSection,
    internalLink,
    link,
    mailchimp,
    page,
    portableText,
    route,
    service,
    servicesPage,
    servicesPageEsp,
    simplePortableText,
    siteConfig,
    textSection
  ])
})
