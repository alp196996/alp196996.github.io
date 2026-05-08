# 💧 Mana & Stamina

<p>
  MMOItems and MMOCore use mana and stamina for item/skill resource costs.
  Many RPG plugins that implement Mana and/or Stamina are natively supported
  by the MMO plugins. Please see
  <a href="./../features/compatibility#rpg-plugins">
    this wiki page
  </a>
  for the full list of supported plugins.
</p>
<p>
  In order to choose your mana/stamina plugin, go to your MythicLib
  <code>
    config.yml
  </code>
  and set the
  <code>
    mana-plugin
  </code>
  option.
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
          # Plugin providing mana and stamina. This works on MMOItems item
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # requirements and skill costs for MMOItems/MMOCore.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # For plugins that features only one resource, which is then
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # usually named Mana, Stamina is replaced by food level.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Supported Plugins:
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # ...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          mana-plugin
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          MMOCORE
        </span>
      </span>
    </code>
  </pre>
</div>

## Built-in Solution

<p>
  If you are not using any RPG plugin, you can stick to the built-in mana
  and stamina module that comes with MythicLib. This module/addon adds two
  resources, Mana and Stamina, as well as the following stats:
</p>
<ul>
  <li>
    <em>
      Mana and Stamina Regeneration
    </em>
    , which is the amount of resource passively regenerated every second,
  </li>
  <li>
    <em>
      Max Mana and Stamina
    </em>
    , which is the maximum amount of resource a player can have.
  </li>
</ul>
<p>
  This module also supports MMOProfiles. When switching profiles, mana and
  stamina is temporarily stored. When switching back to a previously opened
  profile, the old mana and stamina values are stored.
</p>
<div class="info custom-block">
  <p class="custom-block-title custom-block-title-default">
    INFO
  </p>
  <p>
    To enable this module, go to your MythicLib
    <code>
      config.yml
    </code>
    and set
    <code>
      mana-plugin
    </code>
    to
    <code>
      MYTHICLIB
    </code>
    .
  </p>
</div>

### Configuration

<p>
  Once enabled, you can edit mana/stamina options in the
  <code>
    builtin_mana
  </code>
  config section of your MythicLib
  <code>
    config.yml
  </code>
  . Note that these options are useless when usign any other mana plugin.
</p>
<details>
  <summary>
    Full Config (Last Updated, 3.2026)
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
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # MythicLib features a default mana/stamina module if you are not using
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # MMOCore nor any RPG plugin that has mana/stamina.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Set 'resource-plugin' to 'MYTHICLIB' to enable. Otherwise, these settings
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # are useless.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            builtin_mana
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Change default stat values inside MythicLib/stats.yml
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Stat names are MAX_MANA, MANA_REGENERATION, MAX_STAMINA, STAMINA_REGENERATION
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # The interval at which regeneration should happen in ticks.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Default value is 10 ticks which is the same as half a second.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            refresh_rate
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            10
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # The percentage of their max mana/stamina which players
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # get as mana/stamina when logging in for the first time
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            login_ratio
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            mana
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            75
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            stamina
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            75
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Edit here the character used in the resource bars
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # in the %mmoitems_mana_&lt;mana/stamina&gt;_bar% placeholder.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            bar
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            mana
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            char
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            █
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            length
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            20
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            color
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            full
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            AQUA
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            half
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            DARK_AQUA
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            empty
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            WHITE
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            stamina
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            char
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            █
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            length
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            20
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            color
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            full
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            GREEN
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            half
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            DARK_GREEN
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            empty
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            WHITE
          </span>
        </span>
      </code>
    </pre>
  </div>
</details>
<p>
  You can also edit the base/min/max values of resource stats (Max Mana,
  Stamina Regen...) inside your MythicLib
  <code>
    stats.yml
  </code>
  . Note that this syntax also works when using MMOCore as your mana plugin.
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
          #Min/max values of stats
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          min-max-values
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          ...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          MAX_MANA
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '0 = 1000'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          MAX_STAMINA
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '0 = 1000'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          ...
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Base stat values
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          base-stat-value
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          ...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          MAX_MANA
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          20
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          MAX_STAMINA
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          20
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          STAMINA_REGENERATION
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          1
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          MANA_REGENERATION
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          .3
        </span>
      </span>
    </code>
  </pre>
</div>

## Placeholders

<p>
  The following PAPI placeholders are available when using the built-in
  MythicLib mana module.
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
          %mythiclib_mana%
        </code>
      </td>
      <td>
        Current mana of the player.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mythiclib_stamina%
        </code>
      </td>
      <td>
        Current stamina of the player.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mythiclib_mana_bar%
        </code>
      </td>
      <td>
        Displays the player's stamina, as a bar using display options provided
        in the MythicLib
        <code>
          config.yml
        </code>
        .
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mythiclib_stamina_bar%
        </code>
      </td>
      <td>
        Displays the player's stamina as a bar, using display options provided
        in the MythicLib
        <code>
          config.yml
        </code>
        .
      </td>
    </tr>
  </tbody>
</table>
