import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {
  BookMarked,
  CogIcon,
  File,
  FileText,
  HomeIcon,
  type LucideIcon,
  MessageCircleQuestion,
  PanelBottomIcon,
  PanelTopDashedIcon,
  Settings2,
  User,
} from 'lucide-react'
import type {StructureBuilder, StructureResolverContext} from 'sanity/structure'

import type {SchemaType, SingletonType} from './schemaTypes'
import {getTitleCase} from './utils/helper'

type Base<T = SchemaType> = {
  id?: string
  type: T
  preview?: boolean
  title?: string
  icon?: LucideIcon
}

type createSingleton = {
  S: StructureBuilder
} & Base<SingletonType>

const createSingleton = ({S, type, title, icon}: createSingleton) => {
  const newTitle = title ?? getTitleCase(type)
  return S.listItem()
    .title(newTitle)
    .icon(icon ?? File)
    .child(S.document().schemaType(type).documentId(type))
}

type CreateList = {
  S: StructureBuilder
} & Base

const createList = ({S, type, icon, title, id}: CreateList) => {
  const newTitle = title ?? getTitleCase(type)
  return S.documentTypeListItem(type)
    .id(id ?? type)
    .title(newTitle)
    .icon(icon ?? File)
}

type CreateIndexList = {
  S: StructureBuilder
  list: Base
  index: Base<SingletonType>
  context: StructureResolverContext
}

const createIndexListWithOrderableItems = ({S, index, list, context}: CreateIndexList) => {
  const indexTitle = index.title ?? getTitleCase(index.type)
  const listTitle = list.title ?? getTitleCase(list.type)
  return S.listItem()
    .title(listTitle)
    .icon(index.icon ?? File)
    .child(
      S.list()
        .title(indexTitle)
        .items([
          S.listItem()
            .title(indexTitle)
            .icon(index.icon ?? File)
            .child(
              S.document().views([S.view.form()]).schemaType(index.type).documentId(index.type),
            ),
          orderableDocumentListDeskItem({
            type: list.type,
            S,
            context,
            icon: list.icon ?? File,
            title: `${listTitle}`,
          }),
        ]),
    )
}

export const structure = (S: StructureBuilder, context: StructureResolverContext) => {
  return S.list()
    .title('Content')
    .items([
      createSingleton({S, type: 'homePage', icon: HomeIcon}),
      S.divider(),
      createList({S, type: 'page', title: 'Pages'}),
      createIndexListWithOrderableItems({
        S,
        index: {type: 'blogIndex', icon: BookMarked},
        list: {type: 'blog', title: 'Blogs', icon: FileText},
        context,
      }),
      createList({
        S,
        type: 'faq',
        title: 'FAQs',
        icon: MessageCircleQuestion,
      }),
      createList({S, type: 'author', title: 'Authors', icon: User}),
      S.divider(),
      S.listItem()
        .title('Site Configuration')
        .icon(Settings2)
        .child(
          S.list()
            .title('Site Configuration')
            .items([
              createSingleton({
                S,
                type: 'navbar',
                title: 'Navigation',
                icon: PanelTopDashedIcon,
              }),
              createSingleton({
                S,
                type: 'navbar-simple',
                title: 'Navigation - Simple',
                icon: PanelTopDashedIcon,
              }),
              createSingleton({
                S,
                type: 'footer',
                title: 'Footer',
                icon: PanelBottomIcon,
              }),
              createSingleton({
                S,
                type: 'settings',
                title: 'Global Settings',
                icon: CogIcon,
              }),
            ]),
        ),
    ])
}
