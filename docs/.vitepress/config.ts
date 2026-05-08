import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'Phoenix Wiki',
  description: 'Vite & Vue powered static site generator.',
  appearance: true,

  themeConfig: {
    collapse: 'deep',
    outline: 'deep',
    logo: '/favicon.ico',
    search: {
      provider: 'local',
    },

    editLink: {
      pattern:
        'https://gitlab.com/alp196996/phoenix-docs/-/tree/master/mmoitems/general/permissions.md',
      text: 'Edit this page',
    },

    docFooter: {
      before: `
      <div class="edit-info">
      <a class="edit-link-button" href="{{editLink}}" target="_blank" rel="noreferrer">
        <span class="vpi-square-pen edit-link-icon"></span>
        Edit this page
      </a>
    </div>
      `,
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/alp196996' },
      { icon: 'discord', link: 'https://discord.gg/XXXXXX' },
    ],

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tools', link: '/tools/', activeMatch: '^/tools/' },
      { text: 'MMOItems', link: '/mmoitems/', activeMatch: '^/mmoitems/' },
      { text: 'MMOCore', link: 'mmocore/', activeMatch: '^/mmoitems/' },
      { text: 'MMOInventory', link: '/mmoinventory/', activeMatch: '^/mmoitems/' },
      { text: 'MMOProfiles', link: '/mmoprofiles/', activeMatch: '^/mmoitems/' },
      { text: 'MythicLibs', link: '/mythiclibs/', activeMatch: '^/mmoitems/' },

      {
        text: 'Other',
        items: [
          { text: 'Contracts', link: '/contracts/', activeMatch: '^/mmoitems/' },
          { text: 'BountyHunters', link: '/bountyhunters/', activeMatch: '^/mmoitems/' },
        ],
      },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: {
      '/mmoitems': [
        {
          text: '🏠 Home',
          link: '/mmoitems/',
          items: [{ text: '🔌 Installation Guide', link: 'mmoitems/install' }],
        },

        {
          text: 'General',
          items: [
            { text: '💾 Commands', link: 'mmoitems/general/commands' },
            { text: '🧑‍⚖️ Permissions', link: 'mmoitems/general/permissions' },
            { text: '🏷️ Placeholders', link: 'mmoitems/general/placeholders' },
            { text: '🗒️ Default Configuration', link: 'mmoitems/general/default-config' },
          ],
        },

        {
          text: 'Items',
          items: [
            { text: '🖌️ Create An Item', link: 'mmoitems/items/creation' },
            { text: '🗡️ Item Templates', link: 'mmoitems/items/templates' },
            { text: '🏷️ Item Modifiers', link: 'mmoitems/items/modifiers' },
            { text: '🔄 Item Updates (Revision)', link: 'mmoitems/items/revision-id' },
            { text: '🎒 Obtain Items', link: 'mmoitems/items/obtain-items' },
            { text: '👛 Drop Tables', link: 'mmoitems/items/drop-tables' },
          ],
        },

        {
          text: 'Features',
          items: [
            { text: '💫 Skills & Abilities', link: 'mmoitems/items/skills' },
            { text: '🥘 Crafting Recipes', link: 'mmoitems/items/custom-recipes' },
            { text: '💥 Lootsplosion', link: 'mmoitems/items/lootsplosion' },
            { text: '🌱 Spawning Custom Blocks', link: 'mmoitems/items/world-gen-templates' },
            { text: '🎨 Item Textures', link: 'mmoitems/items/item-textures' },
            { text: '💍 Item Tiers', link: 'mmoitems/items/tiers' },
            { text: '💎 Gem Stones', link: 'mmoitems/items/gem-stones' },
            {
              text: '📊 Stats',
              collapsed: false,
              items: [
                { text: 'Item Stats', link: 'mmoitems/features/stats/stats' },
                { text: 'Numerical Stats', link: 'mmoitems/features/stats/numerical-stats' },
                { text: 'Advanced Stats', link: 'mmoitems//features/stats/stats-advanced' },
              ]
            },
            {
              text: '📜 Item Lore',
              collapsed: false,
              items: [
                { text: '🏷️ Name Placeholders', link: 'mmoitems/features/item-lore/name-placeholders' },
                { text: '📜 Lore Format', link: 'mmoitems/features/item-lore/lore-format' },
                { text: '🖼️ Item Tooltips', link: 'mmoitems/features/item-lore/tooltips' },
              ]
            },
            { text: '📦 Custom Blocks', link: 'mmoitems/features/custom-blocks' },
            { text: '🔨 Custom Durability', link: 'mmoitems/features/custom-durability' },
            { text: '🔨 Item Upgrades', link: 'mmoitems/features/upgrading' },
            { text: '🔮 Identification', link: 'mmoitems/features/identification' },
            { text: '🔮 Soulbound', link: 'mmoitems/features/soulbound' },
            { text: '🛠️ Item Types', link: 'mmoitems/features/types' },
            { text: '🛡️ Item Sets', link: 'mmoitems/features/sets' },
          ],
        },

        {
          text: 'Crafting Stations',
          items: [
            { text: '⚒️ Crafting Stations', link: 'mmoitems/stations/intro' },
            { text: '🥘 Crafting Recipes', link: 'mmoitems/stations/crafting-recipes' },
            { text: '🛠️ Upgrading Recipes', link: 'mmoitems/stations/upgrading-recipes' },
            { text: '🪵 Ingredients', link: 'mmoitems/stations/ingredients' },
            { text: '🔧 Triggers', link: 'mmoitems/stations/triggers' },
            { text: '✅ Conditions', link: 'mmoitems/stations/conditions' },
            { text: '🖼️ Station UI Layouts', link: 'mmoitems/stations/layout' },
          ],
        },

        {
          text: 'Compatibility',
          items: [
            {
              text: '🦾 Built-in Compatibility',
              link: 'mmoitems/compatibility/plugins',
            },
            { text: '🧟 MythicMobs', link: 'mmoitems/compatibility/mythic' },
            {
              text: '🔮 Enchant Plugins',
              link: 'mmoitems/compatibility/enchant-plugins',
            },
            { text: '📝 Denizen', link: 'mmoitems/compatibility/denizen' },
          ],
        },

        {
          text: 'API',
          items: [
            { text: '📦 Maven', link: 'mmoitems/api/maven' },
            { text: '💗 New Stats', link: 'mmoitems/api/new-stats' },
            { text: '🔧 Plugin API', link: 'mmoitems/api/main' },
          ],
        },
      ],

      'mmocore': [
        {
          text: '🏠 Home',
          link: '/mmocore/',
          items: [{ text: '🔌 Installation Guide', link: 'mmocore/install' }],
        },

        {
          text: 'General',
          items: [
            { text: '💾 Commands', link: 'mmocore/general/commands' },
            { text: '🧑‍⚖️ Permissions', link: 'mmocore/general/permissions' },
            { text: '🏷️ Placeholders', link: 'mmocore/general/placeholders' },
            { text: '🗒️ Default Configuration', link: 'mmocore/general/modularity' },
          ],
        },

        {
          text: 'Features',
          items: [
            { text: '🧙‍♂️ Classes', link: 'mmocore/features/classes' },
            { text: '💪 Attributes', link: 'mmocore/features/attributes' },
            { text: '🌱 Skill Trees', link: 'mmocore/features/skill-trees' },
            { text: '💪 Player Stats', link: 'mmocore/features/stats' },
            { text: '📌 Waypoints', link: 'mmocore/features/waypoints' },
            { text: '⛏️ Custom Mining', link: 'mmocore/features/mining' },
            { text: '⚔️ Combat', link: 'mmocore/features/combat' },
            { text: '💰 Drop Tables', link: 'mmocore/features/drop-tables' },
            { text: '🎁 Loot Chests', link: 'mmocore/features/loot-chests' },
            { text: '📖 Quests', link: 'mmocore/features/quests' },
            { text: '👯 Parties', link: 'mmocore/features/parties' },
            { text: '🛡️ Guilds', link: 'mmocore/features/guilds' },
            { text: '👯‍♀️ Friends', link: 'mmocore/features/friends' },
          ],
        },

        {
          text: 'Skills',
          items: [
            { text: '🔥 Skills', link: 'mmocore/skills/intro' },
            { text: '🗃️ Configuration', link: 'mmocore/skills/config' },
            { text: '🔐 Unlocking Skills', link: 'mmocore/skills/unlocking' },
            { text: '🔗 Binding Skills', link: 'mmocore/skills/binding' },
            { text: '💫 Skill Casting', link: 'mmocore/skills/casting' },
          ],
        },

        {
          text: 'Professions',
          items: [
            { text: 'Introduction', link: 'mmocore/profession/intro' },
            { text: '⛏️ Mining', link: 'mmocore/profession/mining' },
            { text: '🍹 Alchemy', link: 'mmocore/profession/alchemy' },
            { text: '🎣 Fishing', link: 'mmocore/profession/fishing' },
            { text: '🧙‍♂️ Enchanting', link: 'mmocore/profession/enchanting' },
            { text: '🔨 Smithing', link: 'mmocore/profession/smithing' },
          ],
        },

        {
          text: 'Experience & Levels',
          items: [
            { text: '⭐ Experience Boosters', link: 'mmocore/level/boosters' },
            { text: '📈 Experience Curves', link: 'mmocore/level/curves' },
            { text: '📋 Experience Tables', link: 'mmocore/level/tables' },
            { text: '🪴 Experience Sources', link: 'mmocore/level/sources' },
          ],
        },

        {
          text: 'Miscellaneous',
          items: [
            { text: '⚒️ Tool Restrictions', link: 'mmocore/misc/tool-restrictions' },
            { text: '✅ Conditions', link: 'mmocore/misc/conditions' },
            { text: '🌟 Vanilla Exp', link: 'mmocore/misc/vanilla-exp' },
            { text: '💖 Player Resources', link: 'mmocore/misc/resources' },
            { text: '💸 Economy', link: 'mmocore/misc/economy' },
            { text: '📦 Block Types', link: 'mmocore/misc/block-types' },
            { text: '🔧 Triggers', link: 'mmocore/misc/triggers' },
          ],
        },

        {
          text: 'Compatibility',
          items: [
            { text: '🏹 MMOItems', link: 'mmocore/compatibility/mmoitems' },
            { text: '🧌 MythicMobs', link: 'mmocore/compatibility/mythic' },
            { text: '💎 Resource Pack Plugins', link: 'mmocore/compatibility/rp-plugins' },
            { text: '🔌 Other Plugins', link: 'mmocore/compatibility/other-plugins' },
          ],
        },

        {
          text: 'API',
          items: [
            { text: '📦 Maven', link: 'mmocore/api/maven' },
            { text: '🔧 Plugin API', link: 'mmocore/api/api' },
          ],
        }
      ],

      'mmoinventory': [
        {
          text: '🏠 Home',
          link: '/mmoinventory/',
          items: [
            { text: '🔌 Installation Guide', link: 'mmoinventory/install' },
            { text: '🤔 FAQ', link: '/mmoinventory' }
          ],
        },

        {
          text: 'General',
          items: [
            { text: '💾 Commands', link: 'mmoinventory/general/commands' },
            { text: '🧑‍⚖️ Permissions', link: 'mmoinventory/general/permissions' },
            { text: '🏷️ Placeholders', link: 'mmoinventory/general/placeholders' },
            { text: '🗒️ Default Configuration', link: 'mmoinventory/general/default-config' },
          ],
        },

        {
          text: 'Features',
          items: [
            { text: '🎒 Custom Inventories', link: 'mmoinventory/features/custom-inventory' },
            { text: '🎒 Vanilla Inventory', link: 'mmoinventory/features/vanilla-inventory' },
            { text: '🎨 Inventory Textures', link: 'mmoinventory/features/custom-inventory-texture' },
            { text: '🪽 Elytra Slot', link: 'mmoinventory/features/elytra-slot' },
          ],
        },

        {
          text: 'Compatibility',
          items: [
            { text: '⚔️ MMOItems', link: 'mmoinventory/compatibility/mmoitems' },
            { text: '💎 Oraxen', link: 'mmoinventory/compatibility/oraxen' },
            { text: '🧙‍♂️ RPG Plugins', link: 'mmoinventory/compatibility/rpg' },
            { text: '🔌 Other Plugins', link: 'mmoinventory/compatibility/other' },
          ],
        },

        {
          text: 'API',
          items: [
            { text: '📦 Maven', link: 'mmoinventory/api/maven' },
            { text: '🔌 Overview', link: 'mmoinventory/api/overview' },
            { text: '📮 Events', link: 'mmoinventory/api/events' },
          ],
        },
      ],

      'mmoprofiles': [
        {
          text: '🏠 Home',
          link: '/mmoinventory/',
          items: [
            { text: '🔌 Installation Guide', link: 'mmoinventory/install' },
            { text: '🤔 FAQ', link: '/mmoinventory' }
          ],
        },

        {
          text: 'General',
          items: [
            { text: '💾 Commands', link: 'mmoprofiles/general/commands' },
            { text: '🧑‍⚖️ Permissions', link: 'mmoprofiles/general/permissions' },
            { text: '🏷️ Placeholders', link: 'mmoprofiles/general/placeholders' },
          ],
        },

        {
          text: 'Features',
          items: [
            { text: '😉 When Logging In', link: 'mmoprofiles/features/on-login' },
            { text: '🦾 Profile Selection', link: 'mmoprofiles/features/profile-select' },
            { text: '⚙️ Config Options', link: 'mmoprofiles/features/config' },
            { text: '🫅 Proxy-Based Profiles', link: 'mmoprofiles/features/proxy-based' },
            { text: '🦾 Compatibility', link: 'mmoprofiles/features/compatibility' },
          ],
        },

        {
          text: 'API',
          items: [
            { text: '📦 Maven', link: 'mmoprofiles/api/maven' },
            { text: '🪣 API Usage', link: 'mmoprofiles/api/usage' },
            { text: '🫅 Player Data', link: 'mmoprofiles/api/player-data' },
            { text: '📦 Custom Data Modules', link: 'mmoprofiles/api/custom-module' },
            { text: '🏷️ Adding Placeholders', link: 'mmoprofiles/api/placeholders' },
            { text: '📮 Events', link: 'mmoprofiles/api/events' },
          ],
        }
      ],

      'mythiclib': [
        {
          text: '🏠 Home',
          link: '/mmoinventory/',
          items: [
            { text: '🤔 What is MythicLib?', link: 'mythiclibs/wth' },
            { text: '🪲 Frequent Issues', link: 'mythiclib/faq' },
            { text: '🐜 Reporting a bug', link: 'mythiclib/report' },
          ],
        },

        {
          text: 'General',
          items: [
            { text: '💾 Commands', link: 'mythiclib/general/commands' },
            { text: '🏷️ Placeholders', link: 'mythiclib/general/placeholders' },
            { text: '🗒️ Config Options', link: 'mythiclib/general/config' },
          ],
        },

        {
          text: 'Features',
          items: [
            { text: '💔 Damage', link: 'mythiclib/features/damage' },
            { text: '🗡️ On-Hit Effects', link: 'mythiclib/features/on-hit-effects' },
            { text: '‼️ Damage Indicators', link: 'mythiclib/features/damage-indicators' },
            { text: '🛡️ Damage Mitigation', link: 'mythiclib/features/mitigation-types' },
            { text: '💪 Player Stats', link: 'mythiclib/features/stats' },
            { text: '🦾 Plugin Compatibility', link: 'mythiclib/features/compatibility' },
            { text: '🌱 Elements', link: 'mythiclib/features/elements' },
          ],
        },

        {
          text: 'Other',
          items: [
            { text: '🎨 GUI Syntax', link: 'mythiclib/misc/ui-syntax' },
            { text: '📌 Player Modifiers', link: 'mythiclib/misc/player-modifiers' },
            { text: '💬 Player Messages', link: 'mythiclib/misc/player-messages' },
            { text: '💧 Mana & Stamina', link: 'mythiclib/misc/mana-stamina' },
          ],
        },

        {
          text: 'Skills',
          items: [
            { text: '☄️ Introduction', link: 'mythiclib/skills/intro' },
            { text: '💥 Triggers', link: 'mythiclib/skills/triggers' },
            { text: '💫 Built-in Skills', link: 'mythiclib/skills/builtin' },
            { text: '⌚ Delays and Timers', link: 'mythiclib/skills/delay-timer' },
            {
              text: '💫 Creatingg Custom Skills',
              collapsed: false,
              items: [
                { text: 'Using MythicMobs', link: 'mythiclib/skills/custom/mythic' },
                { text: 'Using MythicLib', link: 'mythiclib/skills/custom/mythiclib' },
                { text: 'Using CoreTools', link: 'mythiclib/skills/custom/coretools' },
                { text: 'Using Fabled', link: 'mythiclib/skills/custom/fabled' },
              ],
            },
          ],
        },

        {
          text: 'Scripts',
          items: [
            { text: '📜 Introduction', link: 'mythiclib/scripts/intro' },
            { text: '📚 Variables', link: 'mythiclib/scripts/variables' },
            {
              text: '🔧 Mechanics',
              collapsed: true,
              items: [
                { text: 'Introduction', link: 'mythiclib/scripts/mechanics/intro' },
                { text: '💖 Buffs & Stats', link: 'mythiclib/scripts/mechanics/buffs' },
                { text: '🏹 Projectiles', link: 'mythiclib/scripts/mechanics/projectiles' },
                { text: '🔧 Miscellaneous', link: 'mythiclib/scripts/mechanics/misc' },
                { text: '🚶 Movement', link: 'mythiclib/scripts/mechanics/movement' },
                { text: '⚔️ Offense', link: 'mythiclib/scripts/mechanics/offense' },
                { text: '📐 Shapes', link: 'mythiclib/scripts/mechanics/shapes' },
                { text: '🧮 Variables', link: 'mythiclib/scripts/mechanics/variables' },
                { text: '🎨 Visual', link: 'mythiclib/scripts/mechanics/visual' },
                { text: '🎒 Inventory', link: 'mythiclib/scripts/mechanics/inventory' },
                { text: '👾 External', link: 'mythiclib/scripts/mechanics/external' },
              ],
            },
            {
              text: '✅ Conditions',
              collapsed: true,
              items: [
                { text: 'Introduction', link: 'mythiclib/scripts/conditions/intro' },
                { text: 'Generic', link: 'mythiclib/scripts/conditions/generic' },
                { text: 'Location', link: 'mythiclib/scripts/conditions/location' },
                { text: 'Miscellaneous', link: 'mythiclib/scripts/conditions/misc' },
              ],
            },
            {
              text: '🧟 Targeters',
              collapsed: true,
              items: [
                { text: 'Introduction', link: 'mythiclib/scripts/targeters/intro' },
                { text: 'Entity Targeters', link: 'mythiclib/scripts/targeters/entity' },
                { text: 'Location Targeters', link: 'mythiclib/scripts/targeters/location' },
              ],
            },
            {
              text: '🤓 Tutorials',
              collapsed: true,
              items: [
                { text: 'Introduction', link: 'mythiclib/scripts/tutorials/intro' },
                { text: 'Introduction', link: 'mythiclib/scripts/tutorials/parabola' },
                { text: 'Introduction', link: 'mythiclib/scripts/tutorials/helix' },
                { text: 'Introduction', link: 'mythiclib/scripts/tutorials/slash-skill' },
                { text: 'Introduction', link: 'mythiclib/scripts/tutorials/projectile' },
              ],
            }
          ],
        },

        {
          text: 'API',
          items: [
            { text: '📦 Maven', link: 'mythiclib/api/maven' },
            { text: '⚔️ Damage', link: 'mythiclib/api/damage' },
            { text: '📊 Player Stats', link: 'mythiclib/api/stats' },
          ],
        },
      ],

      'bountyhunters': [
        {
          text: '🏠 Home',
          link: '/bounty-hunters/',
          items: [],
        },

        {
          text: 'General',
          items: [
            { text: '💾 Commands', link: 'bounty-hunters/general/commands' },
            { text: '🧑‍⚖️ Permissions', link: 'bounty-hunters/general/permissions' },
            { text: '🏷️ Placeholders', link: 'bounty-hunters/general/placeholders' },
          ],
        },

        {
          text: 'Features',
          items: [
            { text: '📜 Bounties', link: 'bounty-hunters/features/bounties' },
            { text: '💸 Economy & Taxes', link: 'bounty-hunters/features/economy' },
            { text: '⛓️‍💥 Automatic Bounties', link: 'bounty-hunters/features/auto-bounties' },
            { text: '🛑 Bounty Restrictions', link: 'bounty-hunters/features/claim-restrictions' },
            { text: '🏅 Levels & Rewards', link: 'bounty-hunters/features/levels' },
            { text: '🏃‍♀️ Player Hunting', link: 'bounty-hunters/features/player-hunting' },
            { text: '💀 Head Hunting', link: 'bounty-hunters/features/head-hunting' },
            { text: '⌛ Bounty Expiration', link: 'bounty-hunters/features/bounty-expiration' },
            { text: '🔧 Miscellaneous', link: 'bounty-hunters/features/misc' },
          ],
        },

        {
          text: 'API',
          items: [
            { text: '📮 Events', link: 'bounty-hunters/api/events' },
            { text: '👨‍🚀 Player Data', link: 'bounty-hunters/api/players' },
            { text: '📜 Bounties', link: 'bounty-hunters/api/managing-bounties' },
          ],
        }
      ],

      'contracts': [
        {
          text: '🏠 Home',
          link: '/mmoinventory/',
          items: [],
        },
      ],


    },
  },
});
