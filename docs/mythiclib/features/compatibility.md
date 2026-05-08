# 🦾 Plugin Compatibility

<p>
  This section lists all plugin hooks implemented by MythicLib.
</p>

## RPG Plugins

<div class="info custom-block">
  <p class="custom-block-title custom-block-title-default">
    INFO
  </p>
  <p>
    While we recommend using
    <a href="https://www.spigotmc.org/resources/70575/" target="_blank" rel="noreferrer">
      MMOCore
    </a>
    for full native plugin compatibility, the MMO plugin suite also works
    when using other RPG core plugins.
  </p>
</div>
<p>
  The MMO plugins support the following RPG plugins. Player levels and classes
  apply to MMOItems item requirements and MMOInventory slot restrictions.
  Mana and stamina apply to MMOItems and MMOCore item and skill resource
  costs.
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Plugin
      </th>
      <th style="text-align:center;">
        Level
      </th>
      <th style="text-align:center;">
        Class
      </th>
      <th style="text-align:center;">
        Mana
      </th>
      <th style="text-align:center;">
        Stamina
      </th>
      <th>
        Note
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="https://www.spigotmc.org/resources/70575/" target="_blank" rel="noreferrer">
          MMOCore
        </a>
      </td>
      <td style="text-align:center;">
        ✔
      </td>
      <td style="text-align:center;">
        ✔
      </td>
      <td style="text-align:center;">
        ✔
      </td>
      <td style="text-align:center;">
        ✔
      </td>
      <td>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://www.spigotmc.org/resources/24734/" target="_blank" rel="noreferrer">
          Heroes
        </a>
      </td>
      <td style="text-align:center;">
        ✔
      </td>
      <td style="text-align:center;">
        ✔
      </td>
      <td style="text-align:center;">
        ✔
      </td>
      <td style="text-align:center;">
        ✔
      </td>
      <td>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://www.spigotmc.org/resources/91913/" target="_blank" rel="noreferrer">
          Fabled
        </a>
      </td>
      <td style="text-align:center;">
        ✔
      </td>
      <td style="text-align:center;">
        ✔
      </td>
      <td style="text-align:center;">
        ✔
      </td>
      <td style="text-align:center;">
        ❌
      </td>
      <td>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://www.spigotmc.org/resources/8981/" target="_blank" rel="noreferrer">
          Skills
        </a>
        /
        <a href="https://www.spigotmc.org/resources/skills-pro.8981/" target="_blank"
        rel="noreferrer">
          SkillsPro
        </a>
      </td>
      <td style="text-align:center;">
        ✔
      </td>
      <td style="text-align:center;">
        ✔
      </td>
      <td style="text-align:center;">
        ✔
      </td>
      <td style="text-align:center;">
        ❌
      </td>
      <td>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://www.spigotmc.org/resources/28029/" target="_blank" rel="noreferrer">
          RacesAndClasses
        </a>
      </td>
      <td style="text-align:center;">
        ✔
      </td>
      <td style="text-align:center;">
        ✔
      </td>
      <td style="text-align:center;">
        ✔
      </td>
      <td style="text-align:center;">
        ❌
      </td>
      <td>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://www.spigotmc.org/resources/11096/" target="_blank" rel="noreferrer">
          RPGPlayerLeveling
        </a>
      </td>
      <td style="text-align:center;">
        ✔
      </td>
      <td style="text-align:center;">
        ❌
      </td>
      <td style="text-align:center;">
        ✔
      </td>
      <td style="text-align:center;">
        ✔
      </td>
      <td>
        Stamina is
        <em>
          power
        </em>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://www.spigotmc.org/resources/81069/" target="_blank" rel="noreferrer">
          AureliumSkills
        </a>
        /
        <a href="https://www.spigotmc.org/resources/81069/" target="_blank" rel="noreferrer">
          AuraSkills
        </a>
      </td>
      <td style="text-align:center;">
        ✔
      </td>
      <td style="text-align:center;">
        ❌
      </td>
      <td style="text-align:center;">
        ✔
      </td>
      <td style="text-align:center;">
        ❌
      </td>
      <td>
        Level is
        <em>
          power level
        </em>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://www.spigotmc.org/resources/battlelevels.2218/" target="_blank"
        rel="noreferrer">
          BattleLevels
        </a>
      </td>
      <td style="text-align:center;">
        ✔
      </td>
      <td style="text-align:center;">
        ❌
      </td>
      <td style="text-align:center;">
        ❌
      </td>
      <td style="text-align:center;">
        ❌
      </td>
      <td>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://www.spigotmc.org/resources/official-mcmmo.64348/" target="_blank"
        rel="noreferrer">
          mcMMO
        </a>
      </td>
      <td style="text-align:center;">
        ✔
      </td>
      <td style="text-align:center;">
        ❌
      </td>
      <td style="text-align:center;">
        ❌
      </td>
      <td style="text-align:center;">
        ❌
      </td>
      <td>
        Level is
        <em>
          power level
        </em>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://www.spigotmc.org/resources/mcrpg.63020/" target="_blank"
        rel="noreferrer">
          McRPG
        </a>
      </td>
      <td style="text-align:center;">
        ✔
      </td>
      <td style="text-align:center;">
        ❌
      </td>
      <td style="text-align:center;">
        ❌
      </td>
      <td style="text-align:center;">
        ❌
      </td>
      <td>
        Level is
        <em>
          power level
        </em>
      </td>
    </tr>
    <tr>
      <td>
        MythicLib
      </td>
      <td style="text-align:center;">
        ❌
      </td>
      <td style="text-align:center;">
        ❌
      </td>
      <td style="text-align:center;">
        ✔
      </td>
      <td style="text-align:center;">
        ✔
      </td>
      <td>
        Read more
        <a href="./../misc/mana-stamina">
          here
        </a>
      </td>
    </tr>
    <tr>
      <td>
        Placeholders
      </td>
      <td style="text-align:center;">
        ✔
      </td>
      <td style="text-align:center;">
        ✔
      </td>
      <td style="text-align:center;">
        ❌
      </td>
      <td style="text-align:center;">
        ❌
      </td>
      <td>
        Read more
        <a href="#using-placeholders">
          below
        </a>
      </td>
    </tr>
  </tbody>
</table>

### Notes

<p>
  MythicLib has a built-in module for mana and stamina. When running the
  MMO plugin suite, Mana is usually provided by MMOCore. For users who would
  like to use MMOItems without MMOCore, we provide this barebones Mana/Stamina
  solution. This built-in module replaces the old
  <a href="https://github.com/mmopluginteam/mmoitems-mana" target="_blank"
  rel="noreferrer">
    Mana &amp; Stamina Addon
  </a>
  (no longer maintained).
</p>
<p>
  Some plugins like
  <a href="https://www.spigotmc.org/resources/official-mcmmo.64348/" target="_blank"
  rel="noreferrer">
    mcMMO
  </a>
  or
  <a href="https://www.spigotmc.org/resources/mcrpg.63020/" target="_blank"
  rel="noreferrer">
    McRPG
  </a>
  have a
  <em>
    power level
  </em>
  , which is usually the sum of the individual player's skill levels. MythicLib
  interprets this power level as the player's level.
</p>
<p>
  Several plugins only have one type of player resource, which is usually
  Mana. In that case, Stamina is replaced by food level. The second player
  resource is almost always Stamina.
</p>

### Using Placeholders

<p>
  You can also provide player classes and levels to MMO plugins using PlaceholderAPI
  placeholders. MythicLib will parse the placeholders using PlaceholderAPI
  and forward the results to the MMO plugins.
</p>
<p>
  For example, if your RPG plugin
  <code>
    SomeRpgCore
  </code>
  is not natively supported by MMOCore but provides a
  <code>
    %somerpgcore_class%
  </code>
  placeholder for the class name, set
  <code>
    class-plugin
  </code>
  to
  <code>
    %somerpgcore_class%
  </code>
  . MythicLib will then use the placeholder output as the player's current
  class name. Similarly, if your RPG plugin provides a
  <code>
    %somerpgcore_level%
  </code>
  placeholder, you can use it for
  <code>
    level-plugin
  </code>
  .
</p>
<div class="warning custom-block">
  <p class="custom-block-title custom-block-title-default">
    WARNING
  </p>
  <p>
    Note that the placeholder used to provide the player's level must return
    a properly formatted integer, as MythicLib will parse it as an integer.
  </p>
</div>

### Configuration

<p>
  MythicLib allows to separately chose the class, level, and mana plugins.
  For instance, you can simultaneously use classes from MMOCore, levels from
  mcMMO and mana/stamina from Fabled. You can use the same plugin for levels,
  classes and/or mana/stamina.
</p>
<p>
  In order to choose your class plugin, go to your MythicLib
  <code>
    config.yml
  </code>
  and set the
  <code>
    class-plugin
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
          # Plugin providing classes. This will propagate to MMOItems for
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # item requirements and MMOInventory for class slot requirements.
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
          class-plugin
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
<p>
  In order to choose your level plugin, go to your MythicLib
  <code>
    config.yml
  </code>
  and set the
  <code>
    level-plugin
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
          # Plugin providing player levels. This will propagate to MMOItems
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # for items requirements and MMOInventory for level slot requirements.
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
          level-plugin
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

## Flag Plugins

<p>
  Supported flag plugins:
</p>
<ul>
  <li>
    WorldGuard
  </li>
  <li>
    Residence
  </li>
</ul>
<p>
  Here is the full list of all the available flags for both MMOCore and
  MMOItems.
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Flag
      </th>
      <th>
        Description
      </th>
      <th>
        Default
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>
          MI_WEAPONS
        </code>
      </td>
      <td>
        Disables MMOItems weapons
      </td>
      <td>
        Enabled
      </td>
    </tr>
    <tr>
      <td>
        <code>
          MI_COMMANDS
        </code>
      </td>
      <td>
        Disables MMOItems commands
      </td>
      <td>
        Enabled
      </td>
    </tr>
    <tr>
      <td>
        <code>
          MI_CONSUMABLES
        </code>
      </td>
      <td>
        Disable MI consumables
      </td>
      <td>
        Enabled
      </td>
    </tr>
    <tr>
      <td>
        <code>
          MI_TOOLS
        </code>
      </td>
      <td>
        Disables MI tools
      </td>
      <td>
        Enabled
      </td>
    </tr>
    <tr>
      <td>
        <code>
          MMO_ABILITIES
        </code>
      </td>
      <td>
        Disable MMOCore/MI skills
      </td>
      <td>
        Enabled
      </td>
    </tr>
    <tr>
      <td>
        <code>
          PVP_MODE
        </code>
      </td>
      <td>
        Disables PvP
      </td>
      <td>
        Disabled
      </td>
    </tr>
  </tbody>
</table>

## <s>Dual Wield Plugins</s>

<p>
  <s>
    MythicLib (and therefore MMOItems and MMOCore) features full compatibility
    (damage calculation and off hand attack effects application) with the following
    dual wield plugins:
  </s>
</p>
<ul>
  <li>
    <s>
      <a href="https://www.spigotmc.org/resources/dualwield.82349/" target="_blank"
      rel="noreferrer">
        DualWield
      </a>
    </s>
  </li>
  <li>
    <s>
      <a href="https://www.spigotmc.org/resources/%E2%9C%85-real-dualwield-attack-with-both-hands-with-real-animation-without-mods.30816/"
      target="_blank" rel="noreferrer">
        RealDualWield
      </a>
    </s>
  </li>
</ul>

## Hologram Plugins

<p>
  The following plugins are compatible with MythicLib and are used to display
  damage and regen indicators for example. Note that with the addition of
  text displays in 1.20.6, MythicLib now provides a stable and lag-free basic
  implementation of holograms.
</p>
<ul>
  <li>
    <a href="https://dev.bukkit.org/projects/holographic-displays" target="_blank"
    rel="noreferrer">
      HolographicDisplays
    </a>
  </li>
  <li>
    <a href="https://modrinth.com/plugin/decentholograms" target="_blank"
    rel="noreferrer">
      DecentHolograms
    </a>
  </li>
  <li>
    <a href="https://www.spigotmc.org/resources/3742/" target="_blank" rel="noreferrer">
      CMI
    </a>
  </li>
  <li>
    <a href="https://www.spigotmc.org/resources/trhologram-outdated.75503/"
    target="_blank" rel="noreferrer">
      TrHologram
    </a>
  </li>
  <li>
    <a href="https://www.spigotmc.org/resources/holograms.4924/" target="_blank"
    rel="noreferrer">
      Holograms
    </a>
  </li>
</ul>
