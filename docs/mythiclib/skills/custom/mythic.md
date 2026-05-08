# Using MythicMobs

<p>
  This page will help you register custom skills in MythicLib/MMOItems/MMOCore
  using the Mythic/MythicMobs scripting language. Here are the main steps:
</p>
<ol>
  <li>
    Code a Mythic script
  </li>
  <li>
    Register that script as a custom MythicLib skill,
  </li>
  <li>
    Reload the plugins.
  </li>
</ol>

## 1/ Code a MythicMobs skill

<p>
  The first step is to code what your skill does using the MythicMobs scripting
  language. In this tutorial, we'll consider a skill example that we found
  in the MythicMobs manual. It is a simple fire projectile that deals 10
  damage and slows the first enemy it hits for 2 sec.
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
          FireBolt
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # The main skill
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          Skills
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
          'projectile{onTick=FireBolt-Tick;onHit=FireBolt-Hit;v=8;i=1;hR=1;vR=1;hnp=true}
          @targetLocation'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          FireBolt-Tick
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          Skills
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
          'effect:particles{p=flame;amount=20;speed=0;hS=0.2;vS=0.2} @origin'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          FireBolt-Hit
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          Skills
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
          'damage{a=10}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'potion{type=SLOW;duration=40;lvl=2}'
        </span>
      </span>
    </code>
  </pre>
</div>

## 2/ Declare it as a MythicLib skill

<p>
  Go to the
  <code>
    MythicLib/skill
  </code>
  folder and create a YAML configuration file, which name can be whatever
  you want - let's say you name it
  <code>
    tutorial.yml
  </code>
  . Just like in MythicMobs, you can:
</p>
<ul>
  <li>
    have multiple skills within the same config file
  </li>
  <li>
    organize your files into subfolders
  </li>
  <li>
    file and folder names can be whatever you want
  </li>
</ul>
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
          FIRE_BOLT
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          source
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          mythicmobs:FireBolt
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # trigger: RIGHT_CLICK # Not needed here as we are making an active skill
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          name
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          Firebolt
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
          'You conjure a flaming ball and'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'ball and hurl it at your target.'
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
          '&amp;e{cooldown}s Cooldown'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '&amp;9Costs {mana} {mana_name}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          icon
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          BLAZE_POWDER
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Edit default values of the ability parameters
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          parameters
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          damage
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
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
          Damage
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          player
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          base
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          2
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          per-level
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
          item
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          5.0
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          duration
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
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
          Duration
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          player
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '2 + {level} * 1'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          item
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          5.0
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          extra-skills
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          FireBolt
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # The main skill
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          Skills
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
          'projectile{onTick=FireBolt-Tick;onHit=FireBolt-Hit;v=8;i=1;hR=1;vR=1;hnp=true}
          @targetLocation'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          FireBolt-Tick
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          Skills
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
          'effect:particles{p=flame;amount=20;speed=0;hS=0.2;vS=0.2} @origin'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          FireBolt-Hit
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          Skills
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
          'damage{a=10}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'potion{type=SLOW;duration=40;lvl=2}'
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # You can have multiple skills in one config file
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #ANOTHER_SKILL:
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #source: ...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #....
        </span>
      </span>
    </code>
  </pre>
</div>

### Config Options

#### Skill Identifier

<p>
  Let's go through the
  <code>
    FIRE_BOLT
  </code>
  configuration section. First, nicely format the config section name so
  that it matches that
  <code>
    UPPERCASE_ID_FORMAT
  </code>
  because it's the one used for skills in MMOItems/MMOCore.
</p>

#### Skill Source

<p>
  Then, provide the "source" of your skill. Since we are implementing a
  MythicLib skill using MythicMobs, the source must be
  <code>
    mythicmobs:FireBolt
  </code>
  , where
  <code>
    FireBolt
  </code>
  is the name of the MythicMobs skill that we defined earlier. The table
  below indicates all skill sources that you can actually use with MythicLib:
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Source
      </th>
      <th>
        Format
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="https://www.spigotmc.org/resources/5702/" target="_blank" rel="noreferrer">
          MythicMobs
        </a>
      </td>
      <td>
        <code>
          mythicmobs:&lt;MythicMobsSkillname&gt;
        </code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://www.spigotmc.org/resources/90306/" target="_blank" rel="noreferrer">
          MythicLib
        </a>
      </td>
      <td>
        <code>
          mythiclib:&lt;mythiclib_script_name&gt;
        </code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://www.spigotmc.org/resources/91913/" target="_blank" rel="noreferrer">
          Fabled
        </a>
      </td>
      <td>
        <code>
          fabled:&lt;FabledAbilityName&gt;
        </code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://www.spigotmc.org/resources/125126/" target="_blank" rel="noreferrer">
          CoreTools
        </a>
      </td>
      <td>
        <code>
          coretools:&lt;CoreToolsScriptName&gt;
        </code>
      </td>
    </tr>
  </tbody>
</table>

#### Skill Icon, Name and Lore

<p>
  The
  <code>
    icon
  </code>
  options lets you modify the item that MMOCore will use inside the skill
  UI to display that skill. You can use any valid Minecraft material name.
</p>
<p>
  In order to add custom model data, item model... use the following syntax.
  Note that all of these parameters are optional.
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
          FIRE_BOLT
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          icon
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
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
          DIAMOND_SWORD
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          custom_model_data
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          1234
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          item_model
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'minecraft:dirt'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          item_flags
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          : [
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          HIDE_ATTRIBUTES
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ,
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          HIDE_ENCHANTS
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ]
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #...
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  The
  <code>
    lore
  </code>
  option lets you customize the skill description that players will see
  in the MMOCore skill UI. Note the use of placeholders such as
  <code>
    {cooldown}
  </code>
  ,
  <code>
    {mana}
  </code>
  ,
  <code>
    {mana_name}
  </code>
  that will be dynamically replaced when the skill is displayed.
</p>
<p>
  The
  <code>
    name
  </code>
  option lets you customize the skill name. Note that this is the only field
  used by MMOItems, as the icon and lore are only being used by MMOCore.
</p>

#### Trigger

<p>
  The
  <code>
    trigger
  </code>
  option defines the default trigger type/casting method for that skill.
  Unless specified again in a MMOCore skill config, that skill will inherit
  this trigger. The list of available trigger types is available on
  <a href="./../triggers">
    this wiki page
  </a>
  .
</p>
<div class="tip custom-block">
  <p class="custom-block-title custom-block-title-default">
    TIP
  </p>
  <p>
    Recall that skills that have a trigger are considered "passive skills"
    as they trigger automatically. Skills with no triggers are considered "active
    skills" as they need to be manually
    <a href="./../../../mmocore/skills/casting">
      cast by players
    </a>
    .
  </p>
</div>

#### Skill Categories

<p>
  Each skill can be assigned to a list of categories through the field
  <code>
    categories
  </code>
  . By default, each skill is associated with two categories: its skill
  ID (
  <code>
    FIREBALL
  </code>
  for instance, not to be mistaken with the skill name), and either
  <code>
    ACTIVE
  </code>
  or
  <code>
    PASSIVE
  </code>
  depending on if it is an active or passive skill. These categories can
  be used inside
  <a href="./../../../mmocore/skills/binding#skill-slots">
    skill slot formulas
  </a>
  .
</p>
<p>
  The following code snippet sets the categories of the
  <em>
    Firebolt
  </em>
  skill:
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
          FIREBOLT
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # ...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          categories
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          : [
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          fire
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ,
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          projectile
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ]
        </span>
      </span>
    </code>
  </pre>
</div>

#### Skill Parameters

<p>
  The
  <code>
    parameters
  </code>
  section lets you define the skill modifiers that your skill will use.
  In our example, we defined two skill modifiers:
  <code>
    damage
  </code>
  and
  <code>
    duration
  </code>
  . Each modifier has a
  <code>
    name
  </code>
  (displayed in the skill UI), a
  <code>
    player
  </code>
  section (which defines how the modifier scales with player level) and
  an
  <code>
    item
  </code>
  section (which defines how the modifier scales with item level).
</p>
<p>
  The
  <code>
    player
  </code>
  section dictates the scaling of the skill modifier when the skill is cast
  through MMOCore classes. The
  <code>
    item
  </code>
  section dictates the default skill parameter value when the skill is placed
  onto an MMOItems item. The
  <code>
    name
  </code>
  field is used by both MMOCore UIs and MMOItems for the item lore.
</p>
<p>
  Note that you have two possibilities to provide the
  <code>
    player
  </code>
  section. You can either provide a
  <code>
    base
  </code>
  and
  <code>
    per-level
  </code>
  value, which will result in a linear scaling:
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
          FIRE_BOLT
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          parameters
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          damage
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
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
          Damage
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          player
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          base
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          2
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          per-level
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
          item
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          5.0
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  You can also provide a fully custom formula using the
  <code>
    {level}
  </code>
  placeholder, which represents the player skill level:
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
          FIRE_BOLT
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          parameters
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          duration
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
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
          Duration
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          player
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '2 + {level} * 1'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          item
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          5.0
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  The
  <code>
    item
  </code>
  field, however, is always a flat decimal number.
</p>
<h3 id="extra-skills" tabindex="-1">
  <code>
    extra-skills
  </code>
  <a class="header-anchor" href="#extra-skills" aria-label="Permalink to “extra-skills”">
    ​
  </a>
</h3>
<p>
  As you can see, you can put Mythic scripts inside of the MythicLib config
  file. That is what the
  <code>
    extra-skills
  </code>
  config section is all about - any Mythic script that you place inside
  this configuration section will be passed to Mythic. In order to register
  MythicLib custom skills, you can either put your Mythic scripts inside
  of the ML config file, or simply pass a reference (the script name i.e
  <code>
    FireBolt
  </code>
  ) to an existing Mythic script. Either way, the Mythic script names must
  match:
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
          FIRE_BOLT
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #...
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          extra-skills
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          FireBolt
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # These two must match
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #...
        </span>
      </span>
    </code>
  </pre>
</div>

## 3/ Reload the plugins

<ol>
  <li>
    Reload MythicMobs using
    <code>
      /mm reload
    </code>
    . By now, you should be able to use
    <code>
      /mm debug cast FireBolt
    </code>
    to test your MythicMobs skill.
  </li>
  <li>
    Reload MythicLib using
    <code>
      /ml reload
    </code>
    . By now, your skill should be registered in MythicLib, and you should
    be able to use
    <code>
      /ml debug cast FIRE_BOLT
    </code>
    to test your MMO skill.
  </li>
</ol>
<p>
  That's it! You do not need additional config files for MMOItems or MMOCore,
  as both of these plugins directly use the MythicLib skill registry.
</p>

## Skill Conditions

<p>
  Custom MM skills also support skill conditions. If any of the skill conditions
  is not met, the skill won't cast and no mana will be consumed.
</p>

## Retrieving MMO skill modifiers inside MythicMobs skills

<div class="warning custom-block">
  <p class="custom-block-title custom-block-title-default">
    WARNING
  </p>
  <p>
    Some of the features described below are not available in the free version
    of MythicMobs.
  </p>
</div>
<p>
  Let's consider the
  <code>
    Fire-Bolt
  </code>
  skill again.
</p>
<p>
  As seen before, the following skill currently deals a flat 10 damage.
  We would like this value to scale with the MMOCore skill level or MMOItems
  item power.
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
          SomeSkill
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          Mechanics
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
          damage{a=10}
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  The following skill deals damage equivalent to the
  <code>
    damage
  </code>
  MythicLib skill modifier. The
  <code>
    &lt;modifier.xxx&gt;
  </code>
  allows to forward MythicLib skill parameter values to MythicMobs math
  formulas used inside mechanics, conditions...
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
          SomeSkill
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          Mechanics
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
          damage{a="&lt;modifier.damage&gt;"}
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  These placeholders can be combined with math formulas. In the following
  example, the
  <code>
    duration
  </code>
  modifier is multiplied by 20 to convert seconds into ticks.
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
          SomeSkill
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          Mechanics
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
          potion{type=SLOW;duration="&lt;modifier.duration&gt; * 20";lvl=2}
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  Here is the full list of placeholders implemented by MythicLib, available
  inside MythicMobs skills.
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
          &lt;modifier.(mod_name)&gt;
        </code>
      </td>
      <td>
        Skill modifier, as decimal number
      </td>
    </tr>
    <tr>
      <td>
        <code>
          &lt;modifier.int.(mod_name)&gt;
        </code>
      </td>
      <td>
        Skill modifier, as integer
      </td>
    </tr>
    <tr>
      <td>
        <code>
          &lt;cooldown.skill_(name)&gt;
        </code>
      </td>
      <td>
        Remaining cooldown for a skill
      </td>
    </tr>
    <tr>
      <td>
        <code>
          &lt;mmostat.(stat_name)&gt;
        </code>
      </td>
      <td>
        Player stat value, as decimal number. Ex:
        <code>
          &lt;mmostat.attack_damage&gt;
        </code>
      </td>
    </tr>
    <tr>
      <td>
        <code>
          &lt;mana&gt;
        </code>
      </td>
      <td>
        The player's current mana (MMOCore)
      </td>
    </tr>
    <tr>
      <td>
        <code>
          &lt;stamina&gt;
        </code>
      </td>
      <td>
        The player's current stamina (MMOCore)
      </td>
    </tr>
    <tr>
      <td>
        <code>
          &lt;stellium&gt;
        </code>
      </td>
      <td>
        The player's current stellium (MMOCore)
      </td>
    </tr>
  </tbody>
</table>

## Dealing Damage

<div class="info custom-block">
  <p class="custom-block-title custom-block-title-default">
    INFO
  </p>
  <p>
    This is subject to change for better support of the MythicLib damage system
    in the future.
  </p>
</div>
<p>
  Use the
  <code>
    mmodamage
  </code>
  mechanic instead of the native
  <code>
    damage
  </code>
  mechanic to deal damage with MMO damage types.
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
          SomeSkill
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          Mechanics
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
          mmodamage{amount="&lt;modifier.damage&gt; + 10";types=SKILL,MAGIC,PROJECTILE;element=FIRE}
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  You can specify the ability damage using
  <code>
    amount
  </code>
  or
  <code>
    a
  </code>
  as well as the damage types using
  <code>
    types
  </code>
  or
  <code>
    t
  </code>
  . The list of available damage types can be found
  <a href="./../../features/damage">
    here
  </a>
  .
</p>
<p>
  It works just like the default
  <code>
    damage
  </code>
  mechanic, except that it completely supports the MythicLib damage system,
  which means that it will apply damage buff stats (additional skill damage,
  etc), damage reduction stats, on-hit effects (on-hit abilities from MMOItems
  when using the WEAPON damage type), skills from MMOCore that trigger when
  dealing damage to entities....
</p>
<p>
  The following mob deals 10 Physical-Weapon damage every 2 seconds to all
  nearby entities.
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
          ZombieWarrior
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          Type
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          ZOMBIE
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          Damage
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          10
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          Skills
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
          'mmodamage{amount=10;type=PHYSICAL,WEAPON} @NearbyEntities{r=5} ~onTimer:40'
        </span>
      </span>
    </code>
  </pre>
</div>

## Increase/Decrease Damage Dealt

<p>
  You may also use the following skill mechanic:
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
          SomeSkill
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          Mechanics
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
          multiplydamage{type=SKILL;amount="1 + &lt;modifier.extra&gt; / 100"}
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  This has the effect of multiplying
  <em>
    Skill
  </em>
  damage by a specific factor. Currently this factor is
  <code>
    1 + &lt;modifier.extra&gt; / 100
  </code>
  so if the
  <code>
    extra
  </code>
  skill modifier is set to 50,
  <em>
    Skill
  </em>
  damage will be increased by 50%. You can use this mechanic to increase
  incoming damage dealt by entities or players by a certain factor (e.g increase
  damage when low on health).
</p>
<p>
  If you want to increase damage from any source (with no damage type),
  use:
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
          SomeSkill
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          Mechanics
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
          multiplydamage{amount="1 + &lt;modifier.extra&gt; / 100"}
        </span>
      </span>
    </code>
  </pre>
</div>

## Checking if the skill caster can target another entity

<p>
  Using the
  <code>
    mmoCanTarget{..}
  </code>
  MythicMobs condition, you can check if any player can target another entity.
  Here is the format:
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
          SomeSkill
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          Conditions
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
          mmoCanTarget{interaction=OFFENSE_ACTION}
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  There are two different interaction types:
  <code>
    OFFENSE_ACTION
  </code>
  ,
  <code>
    SUPPORT_ACTION
  </code>
  . For instance, a player will be able to target another player when using
  a buffing skill (like a heal or a speed boost) but the same target won't
  be valid if that skill becomes offensive (deals damage or inflicts debuffs).
  It is therefore very important to specify what type of interaction you
  are talking about. The PvP/PvE Interaction Rules user guide is available
  <a href="./../../../mmocore/features/combat">
    here
  </a>
  .
</p>
<p>
  Here are some examples:
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
          COMBAT_ONE
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          mythicmobs-skill-id
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          combat_one_run
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          modifiers
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
          damage
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          duration
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          extra-skills
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          combat_one_run
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          TargetConditions
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
          mmoCanTarget{interaction=SUPPORT_ACTION} true
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          Skills
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
          jsonmessage{m="[{'text':'SUPPORT_ACTION','color':'red'}]"} @self
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          COMBAT_TWO
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          mythicmobs-skill-id
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          combat_two_run
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          modifiers
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
          damage
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          duration
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          extra-skills
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          combat_two_run
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          TargetConditions
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
          mmoCanTarget{interaction=OFFENSE_ACTION} true
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          Skills
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
          jsonmessage{m="[{'text':'OFFENSE_ACTION','color':'red'}]"} @self
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          COMBAT_THREE
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          mythicmobs-skill-id
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          combat_three_run
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          modifiers
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
          damage
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          duration
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          extra-skills
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          combat_three_run
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          Skills
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
          mmodamage{amount=10;types=SKILL,MAGIC,PROJECTILE} @Target{conditions=[
          - mmoCanTarget{interaction=OFFENSE_ACTION} true ]}
        </span>
      </span>
    </code>
  </pre>
</div>
