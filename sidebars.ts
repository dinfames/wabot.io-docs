import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/overview',
        'getting-started/signup',
        'getting-started/dashboard',
        'getting-started/connect-account',
        'getting-started/first-message',
      ],
    },
    {
      type: 'category',
      label: 'Core Features',
      collapsed: false,
      link: { type: 'doc', id: 'features/index' },
      items: [
        'features/chatbots',
        'features/broadcast',
        'features/automation',
        'features/autoresponder',
        'features/live-chat',
        'features/templates',
      ],
    },
    {
      type: 'category',
      label: 'Managing Contacts',
      items: [
        'contacts/audience',
        'contacts/all-contacts',
      ],
    },
    {
      type: 'category',
      label: 'Tools & Utilities',
      items: [
        'tools/file-manager',
        'tools/queue',
        'tools/link-generator',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      link: { type: 'doc', id: 'integrations/index' },
      items: [
        'integrations/google-sheets',
        'integrations/wordpress',
        'integrations/automation-platforms',
        'integrations/webhooks',
      ],
    },
    'pricing',
    'faq',
  ],
};

export default sidebars;
