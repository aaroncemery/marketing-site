import {blogIndex} from './blog-index'
import {faq} from './faq'
import {navbar} from './navbar'
import {page} from './page'
import {settings} from './settings'
import {homePage} from './home-page'
import {footer} from './footer'
import {author} from './author'
import {blog} from './blog'

export const singletons = [homePage, blogIndex, settings, footer, navbar]

export const documents = [blog, page, faq, author, ...singletons]
