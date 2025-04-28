/**
 * @fileoverview Plugin that adds a presentation URL action to Sanity documents.
 * This plugin enables opening documents in a presentation view via a custom action button.
 */

import {EarthGlobeIcon} from '@sanity/icons'
import {useToast} from '@sanity/ui'
import {useCallback} from 'react'
import {definePlugin, type DocumentActionComponent, useGetFormValue} from 'sanity'
import {useRouter} from 'sanity/router'

/**
 * @interface PresentationUrlAction
 * @description Interface defining the properties required for the presentation URL action
 * @property {string} documentId - The ID of the document to be presented
 */
interface PresentationUrlAction {
  documentId: string
}

/**
 * @description Sanity Studio plugin that adds a presentation URL action to documents.
 * The plugin adds a button to open documents in a presentation view, accessible via
 * the document actions menu.
 *
 * @example
 * // Usage in sanity.config.ts:
 * export default defineConfig({
 *   // ...
 *   plugins: [presentationUrl()],
 * })
 */
export const presentationUrl = definePlugin(() => {
  return {
    name: 'presentationUrl',
    document: {
      unstable_fieldActions: (props: DocumentActionComponent[]) => {
        return [
          {
            name: 'open-in-presentation',
            /**
             * @description Hook that creates the presentation URL action.
             * Retrieves the document's slug and navigates to the presentation view.
             * Shows an error toast if no slug is found.
             *
             * @param {PresentationUrlAction} params - The action parameters
             * @returns {Object} Action configuration including the button setup and click handler
             */
            useAction: ({documentId}: PresentationUrlAction) => {
              const getFormValue = useGetFormValue()
              const router = useRouter()
              const toast = useToast()

              /**
               * @description Callback function that handles opening the document in presentation view.
               * Retrieves the document's slug from form values and navigates to the presentation URL.
               * Displays an error toast if no valid slug is found.
               */
              const handlePresentationOpen = useCallback(() => {
                const slug = getFormValue(['slug', 'current'])

                if (typeof slug !== 'string') {
                  toast.push({
                    title: 'No slug found',
                    status: 'error',
                    description: 'Please ensure the doucment has a valid slug',
                  })
                  return
                }

                router.navigateUrl({
                  path: `/presentation?preview=${encodeURIComponent(slug)}`,
                })
              }, [getFormValue, toast, router])

              return {
                type: 'action' as const,
                icon: EarthGlobeIcon,
                hidden: documentId === 'root',
                renderAsButton: true,
                onAction: handlePresentationOpen,
                title: 'Open in Presentation',
              }
            },
          },
          ...props,
        ]
      },
    },
  }
})
