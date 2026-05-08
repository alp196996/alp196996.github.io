# 🎨 GUI Syntax

<p>
  MythicLib provides unifixed syntax for chest UI inventories. This includes
  MMOItems crafting stations, the MMOProfiles profile selection UI, and all
  MMOCore UIs including player stats, waypoints, party &amp; friends, class
  selection, etc.
</p>
<p>
  GUI plugin configs are located inside the
  <code>
    gui
  </code>
  or
  <code>
    language/gui
  </code>
  folder.
</p>
<p>
  In this tutorial, we will be focusing on the MMOCore attributes menu.
</p>
<details class="details custom-block">
  <summary>
    Original Config
  </summary>
  <div class="language-yml">
    <button title="Copy Code" class="copy">
    </button>
    <span class="lang">
      yml
    </span>
    <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
    tabindex="0" dir="ltr">
      <code>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # GUI display name
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            name
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            Player Attributes
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Number of slots in your inventory. Must be
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # between 9 and 54 and must be a multiple of 9.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            slots
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            27
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            items
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            reallocate
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            slots
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            : [
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            26
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ]
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            function
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            reallocation
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            item
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            CAULDRON
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            name
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;aReallocate Skill Points'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            lore
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            ''
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'You have spent a total of &amp;6{total}&amp;7 skill points.'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;7Right click to reallocate them.'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            ''
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;eCosts 1 attribute reallocation point.'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;e◆ Attribute Reallocation Points: &amp;6{points}'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            str
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            slots
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            : [
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            11
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ]
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            function
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            attribute_strength
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            name
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;a{name}'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            item
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            GOLDEN_APPLE
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            lore
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # {buffs} returns amount of buffs
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            ''
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;7Points Spent: &amp;6{spent}&amp;7/&amp;6{max}'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;7Current {name}: &amp;6&amp;l{current}'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            ''
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;8When Leveled Up:'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;7 +{buff_weapon_damage}% Weapon Damage (&amp;a+{total_weapon_damage}%&amp;7)'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;7 +{buff_max_health} Max Health (&amp;a+{total_max_health}&amp;7)'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            ''
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;eClick to level up for 1 attribute point.'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;e◆ Current Attribute Points: {attribute_points}'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            dex
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            slots
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            : [
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            13
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ]
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            function
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            attribute_dexterity
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            name
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;a{name}'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            item
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            LEATHER_BOOTS
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            hide-flags
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            true
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            lore
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            ''
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;7Points Spent: &amp;6{spent}&amp;7/&amp;6{max}'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;7Current {name}: &amp;6&amp;l{current}'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            ''
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;8When Leveled Up:'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;7 +{buff_physical_damage}% Physical Damage (&amp;a+{total_physical_damage}%&amp;7)'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;7 +{buff_projectile_damage}% Projectile Damage (&amp;a+{total_projectile_damage}%&amp;7)'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;7 +{buff_attack_speed} Attack Speed (&amp;a+{total_attack_speed}&amp;7)'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            ''
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;eClick to level up for 1 attribute point.'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;e◆ Current Attribute Points: {attribute_points}'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            int
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            slots
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            : [
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            15
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ]
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            function
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            attribute_intelligence
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            name
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;a{name}'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            item
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            BOOK
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            lore
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            ''
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;7Points Spent: &amp;6{spent}&amp;7/&amp;6{max}'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;7Current {name}: &amp;6&amp;l{current}'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            ''
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;8When Leveled Up:'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;7 +{buff_magic_damage}% Magic Damage (&amp;a+{total_magic_damage}%&amp;7)'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;7 +{buff_cooldown_reduction}% Cooldown Reduction (&amp;a+{total_cooldown_reduction}%&amp;7)'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            ''
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;eClick to level up for 1 attribute point.'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;e◆ Current Attribute Points: {attribute_points}'
          </span>
        </span>
      </code>
    </pre>
  </div>
</details>

## General Options

<p>
  You can edit the general GUI settings like its name and slots.
</p>
<div class="language-yml">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
    yml
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          name
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'Player Attributes'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          slots
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          27
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  Notice how the config sections that fall under the
  <code>
    items
  </code>
  section share very similar properties:
  <code>
    name
  </code>
  (the item display name),
  <code>
    lore
  </code>
  (the item description/lore),
  <code>
    item
  </code>
  (the item material),
  <code>
    slots
  </code>
  (where the item is placed in the inventory, it can be a list) and
  <code>
    function
  </code>
  (what the item does). These can (and should) all be edited to your needs.
</p>

### Editing Item Slots

<p>
  If you want to have your item displayed on multiple slots, use the following
  syntax:
</p>
<div class="language-yml">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
    yml
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          slots
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          : [
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          1
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ,
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          2
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ,
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          3
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ,
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          4
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ]
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #slots: 1 # This won't work
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #slot: 1 # This won't work
        </span>
      </span>
    </code>
  </pre>
</div>

## Item Functions

<p>
  <code>
    function
  </code>
  tells MythicLib what the item does when clicked, and what placeholders
  to apply in the item lore. A function that works inside the MMOCore attribute
  menu will not work inside the MMOProfiles profile selection menu. Each
  GUI comes with its own set of built-in item functions.
</p>
<p>
  In general, you don't really want to change it, unless you are adding
  a generic item function like a
  <em>
    Go Back
  </em>
  or
  <em>
    Close
  </em>
  button. You can edit the item visuals as much as you want, but changing
  the function will change the item behavior and the placeholders that are
  applied to it, so make sure you know what you are doing before editing
  it.
</p>
<p>
  In the following example, the item uses a builtin
  <code>
    attribute_&lt;attribute_name&gt;
  </code>
  function that applies placeholders and click handlers related to the MMOCore
  player attribute.
</p>
<div class="language-yml">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
    yml
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # [...]
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          items
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # [...]
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          item_strength
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          slots
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          : [
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          15
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ]
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          function
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          attribute_strength
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          name
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '&amp;a{name}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          item
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          BOOK
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          lore
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #.....
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '&amp;8When Leveled Up:'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '&amp;7 +{buff_weapon_damage}% Weapon Damage (&amp;a+{total_weapon_damage}%&amp;7)'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '&amp;7 +{buff_max_health} Max Health (&amp;a+{total_max_health}&amp;7)'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #.....
        </span>
      </span>
    </code>
  </pre>
</div>

## Lore Placeholders

<p>
  Choosing the item function unlocks specific placeholders that you can
  use inside the item name and lore. For instance, the
  <code>
    attribute_&lt;attribute_name&gt;
  </code>
  function inside the MMOCore attribute menu unlocks the following placeholders:
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Placeholder
      </th>
      <th>
        Description
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>
          {spent}
        </code>
      </td>
      <td>
        Amount of attribute points spent by the player in that attribute
      </td>
    </tr>
    <tr>
      <td>
        <code>
          {max}
        </code>
      </td>
      <td>
        Maximum amount of attribute points you may spend in that attribute
      </td>
    </tr>
    <tr>
      <td>
        <code>
          {name}
        </code>
      </td>
      <td>
        Attribute name
      </td>
    </tr>
    <tr>
      <td>
        <code>
          {current}
        </code>
      </td>
      <td>
        The current attribute of the player. Takes into account modifiers from
        MMOItems and other plugins.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          {buff_&lt;stat&gt;}
        </code>
      </td>
      <td>
        Buff granted for each point spent in that attribute.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          {total_&lt;stat&gt;}
        </code>
      </td>
      <td>
        Total buff granted by all the points spent in that attribute (the product
        of
        <code>
          {spent}
        </code>
        and
        <code>
          {buff_xxx}
        </code>
        ).
      </td>
    </tr>
  </tbody>
</table>

## Clickable Items

<p>
  If you don't specify any function for an item, you can provide a
  <a href="./../scripts/intro">
    MythicLib script
  </a>
  to be executed when the item is clicked, using the following syntax:
</p>
<div class="language-yml">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
    yml
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          items
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          log_out
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          slots
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          : [
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          44
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ]
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          item
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          BELL
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          name
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "&amp;cLog Out"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          script
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          command{format="kick %player_name% You successfully logged out"}
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  Instead of a list of mechanics, you can also provide the name of a MythicLib
  script.
</p>
<div class="language-yml">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
    yml
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          items
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          log_out
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # [...]
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          script
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          my_custom_kick_mythiclib_script
        </span>
      </span>
    </code>
  </pre>
</div>
