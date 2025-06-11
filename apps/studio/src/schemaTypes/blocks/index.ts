import {cta} from './cta'
import {faqAccordion} from './faq-accordion'
import {featureCardsIcon} from './feature-cards-icon'
import {hero} from './hero'
import {imageLinkCards} from './image-link-cards'

// All blocks
export const pageBuilderBlocks = [hero, cta, featureCardsIcon, faqAccordion, imageLinkCards]

// Categorized blocks
export const headerBlocks = [hero, cta]
export const contentBlocks = [faqAccordion, imageLinkCards]

// Block names for menu groups
export const headerBlockNames = headerBlocks.map((block) => block.name)
export const contentBlockNames = contentBlocks.map((block) => block.name)
