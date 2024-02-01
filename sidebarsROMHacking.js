/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Scripting',
      link: {
        type: 'generated-index',
        slug: 'category/scripting',
        description: 'Everything about ev_scripts.',
      },
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Setting up',
          link: {
            type: 'generated-index',
            slug: 'category/scripting/setup',
            description: 'Setup instructions and guides on editing in-game ev_scripts. This is all done in RomFS.',
          },
          collapsed: true,
          items: [
            'scripting/setup/ev-as',
            'scripting/setup/placedatas',
            'scripting/setup/scripting-guide',
          ],
        },
        {
          type: 'category',
          label: 'Commands',
          collapsed: true,
          items: [
            'scripting/commands/end',
            'scripting/commands/time-wait',
            'scripting/commands/cmpwk',
            'scripting/commands/jump',
            'scripting/commands/call',
            'scripting/commands/ret',
            'scripting/commands/if-jump',
            'scripting/commands/if-call',
            'scripting/commands/ifval-jump',
            'scripting/commands/ifval-call',
            'scripting/commands/switch',
            'scripting/commands/case-jump',
            'scripting/commands/case-cancel',
            'scripting/commands/flag-set',
            'scripting/commands/arrive-flag-set',
            'scripting/commands/flag-reset',
            'scripting/commands/flag-check',
            'scripting/commands/if-flagon-jump',
            'scripting/commands/if-flagoff-jump',
            'scripting/commands/if-flagon-call',
            'scripting/commands/if-flagoff-call',
            'scripting/commands/flag-check-wk',
            'scripting/commands/flag-set-wk',
            'scripting/commands/trainer-flag-set',
            'scripting/commands/trainer-flag-reset',
            'scripting/commands/trainer-flag-check',
            'scripting/commands/if-tr-flagon-jump',
            'scripting/commands/if-tr-flagoff-jump',
            'scripting/commands/if-tr-flagon-call',
            'scripting/commands/if-tr-flagoff-call',
            'scripting/commands/add-wk',
            'scripting/commands/sub-wk',
            'scripting/commands/ldval',
            'scripting/commands/talkmsg',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'ExeFS Editing',
      link: {
        type: 'generated-index',
        slug: 'category/exefs',
        description: 'Modifying the underlaying game code, or Executable File System (ExeFS).',
      },
      collapsed: true,
      items: [
        'exefs/guide',
        'exefs/ghidra',
        'exefs/exlaunch',
        'exefs/headers',
        'exefs/hooks',
        'exefs/logging',
        'exefs/debugging',
      ],
    },
    {
      type: 'category',
      label: 'Art',
      link: {
        type: 'generated-index',
        slug: 'category/art',
        description: 'Guides for editing textures models and animations.',
      },
      collapsed: true,
      items: [
        'art/animations',
        'art/mesh_and_texture_replacement',
      ],
    },
    {
      type: 'category',
      label: 'Editing music and sound files.',
      link: {
        type: 'generated-index',
        slug: 'category/audio',
        description: 'Editing music and sound files.',
      },
      collapsed: true,
      items: [
        'audio/labels',
      ],
    },
    {
      type: 'category',
      label: 'Documentation',
      link: {
        type: 'generated-index',
        slug: 'category/documentation',
        description: 'Guides for editing textures models and animations.',
      },
      collapsed: true,
      items: [
        'documentation/map-info-locations',
      ],
    },
  ]
};

module.exports = sidebars;
