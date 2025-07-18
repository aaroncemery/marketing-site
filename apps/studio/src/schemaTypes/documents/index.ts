import {blogIndex} from './blog-index'
import {faq} from './faq'
import {navbar} from './navbar'
import {page} from './page'
import {settings} from './settings'
import {homePage} from './home-page'
import {footer} from './footer'
import {author} from './author'
import {blog} from './blog'
import {navbarSimple} from './navbar-simple'
import {product} from './product'

export const singletons = [homePage, blogIndex, settings, footer, navbar, navbarSimple]

export const documents = [blog, page, product, faq, author, ...singletons]
