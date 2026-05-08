# 🛡️ Damage Mitigation

<p>
  <em>
    Damage Mitigation
  </em>
  refers to the various ways a player can reduce or avoid incoming damage
  from attacks. While MythicLib provides several built-in mitigation types
  (
  <em>
    Block
  </em>
  ,
  <em>
    Dodge
  </em>
  , and
  <em>
    Parry
  </em>
  ), you can also create custom mitigation types to suit your server's needs.
</p>

## Built-in Mitigation Types

### Blocking

<p>
  When blocking a melee or projectile attack, a player reduces damage taken
  by a significant amount. Both the block chance and block power (percentage
  of damage you are blocking) can be increased by items. Blocking power has
  a default value and a cap, meaning that if a player has no item giving
  him extra block power, he will block at least 20% of the damage taken.
  Blocking power can't exceed 75%. The chance of blocking an attack is determined
  by the
  <em>
    Block Rating
  </em>
  stat.
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
          STEEL_BREASTPLATE
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          material
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          IRON_CHESTPLATE
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          block-power
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
          block-rating
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          5
        </span>
      </span>
    </code>
  </pre>
</div>

### Dodging

<p>
  When dodging a melee or projectile attack, a player entirely
  <strong>
    negates
  </strong>
  damage taken and performs a quick dash backwards, allowing him to escape
  from the fight. The chance of dodging an attack is capped at 80%.
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
          SWIFT_LEATHER_BOOTS
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          material
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
          dodge-rating
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          10
        </span>
      </span>
    </code>
  </pre>
</div>

### Parrying

<p>
  Just like dodging, parrying entirely negates attack damage and knocks
  the attacker back.
</p>
<p>
  The knockback force can be edited in the main MythicLib config file.
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
          DWARVEN_SHIELD
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          material
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          SHIELD
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          parry-rating
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          10
        </span>
      </span>
    </code>
  </pre>
</div>

### Mitigation Cooldown Reduction

<p>
  Every mitigation stat also features a cooldown reduction stat. By default,
  a player cannot dodge, parry or block more than one attack every few seconds.
  These cooldown stats lower that delay, which can be really useful if the
  player is running low on health.
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
          ROGUE_AMULET
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          material
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          RED_DYE
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          dodge-cooldown-reduction
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          40
        </span>
      </span>
    </code>
  </pre>
</div>

## Custom Mitigation Types

<p>
  You can create your own custom mitigation types by adding new sections
  to the
  <code>
    MythicLib/mitigation_types.yml
  </code>
  file. Each section should follow the same structure as the built-in mitigation
  types. The following section goes over the different parameters available
  for mitigation types, using
  <em>
    Blocking
  </em>
  as an example.
</p>
<p>
  While you can certainly recreate similar
  <em>
    Mitigation Types
  </em>
  using other plugins or scripting solutions, MythicLib aims to provide
  an easy-to-use framework finetuned to RPG server use cases.
</p>

## An Example

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
          block
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # For backwards compatibility only.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # If none of your plugins use the old MythicLib mitigation
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # events, you can safely remove/comment out this option.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          legacy
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          block
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Formula for cooldown between two consecutive blocks (in seconds)
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # To disable cooldown, delete this line, or comment it out
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Note that, by default, cooldown reduction is capped at 80% (see stats.yml)
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          cooldown
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '3 * (1 - &lt;stat.block_cooldown_reduction&gt; / 100)'
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Chance to successfully block an attack
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # This formula should return a value between 0 and 1 (0 being 0% chance,
          1 being 100% chance)
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Note that, by default, block rating is capped at 80% (see stats.yml)
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          roll
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '&lt;stat.block_rating&gt; / 100'
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Script/skill ran on damage
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          on_damage
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          mitigation_on_block
        </span>
      </span>
    </code>
  </pre>
</div>

### Cooldown

<p>
  The option
  <code>
    cooldown
  </code>
  indicates that such mitigation type has a cooldown. It cannot occur more
  frequently than once every X seconds, where X is the value returned by
  the formula. The default formula for
  <em>
    Blocking
  </em>
  is
  <code>
    3 * (1 - &lt;stat.block_cooldown_reduction&gt; / 100)
  </code>
  , meaning that the base cooldown is 3 seconds, but it can be reduced by
  the player's
  <em>
    Block Cooldown Reduction
  </em>
  stat.
</p>

### Roll

<p>
  The option
  <code>
    roll
  </code>
  is a formula that returns the chance of successfully performing the mitigation.
  The formula should return a value between 0 and 1, where 0 means 0% chance
  and 1 means 100% chance. In the case of
  <em>
    Blocking
  </em>
  , the default formula is
  <code>
    &lt;stat.block_rating&gt; / 100
  </code>
  , meaning that if the player has 25%
  <em>
    Block Rating
  </em>
  , they have a 25% chance to block each incoming attack.
</p>

### Pre-Damage Script

<p>
  The script
  <code>
    pre_damage
  </code>
  is executed before the mitigation is rolled for. It can be used to set
  up any necessary variables or conditions for the mitigation. In the case
  of
  <em>
    Blocking
  </em>
  , there is no pre-damage script by default, but you can add one if needed
  using the following syntax:
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
          my_mitigation_type
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          pre_damage
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          my_custom_pre_damage_script
        </span>
      </span>
    </code>
  </pre>
</div>
<div class="info custom-block">
  <p class="custom-block-title custom-block-title-default">
    INFO
  </p>
  <p>
    Note that all built-in scripts used by mitigation types are all located
    in the
    <code>
      MythicLib/script/mitigation_types
    </code>
    config file. You can view and edit them as you wish.
  </p>
</div>

### On-Damage Script

<p>
  Last but not least, the script
  <code>
    on_damage
  </code>
  is executed when the mitigation successfully triggers. This script only
  executes if the following conditions are met:
</p>
<ul>
  <li>
    the mitigation is not on cooldown,
  </li>
  <li>
    the mitigation roll was successful,
  </li>
  <li>
    all conditions in the pre-damage script (if any) were met,
  </li>
  <li>
    the
    <code>
      DamageMitigationEvent
    </code>
    Bukkit event was not cancelled by another plugin.
  </li>
</ul>
<p>
  For
  <em>
    Blocking
  </em>
  , the default on-damage script is
  <code>
    mitigation_on_block
  </code>
  , which reduces the incoming damage by a percentage based on the player's
  <em>
    Block Power
  </em>
  stat.
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
          mitigation_on_block
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          mechanics
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # First, compute block coefficient and reduce damage
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'set_double{variable="block_coef";value="&lt;stat.block_power&gt;/100"}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'multiply_damage{amount="1 - &lt;block_coef&gt;"}'
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Send message and play sound effect
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'set_double{variable="damaged_blocked";value="&lt;attack.damage&gt; *
          &lt;block_coef&gt;"}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'action_bar{m="&amp;cYou blocked &lt;damaged_blocked&gt; damage!";target=caster;priority=31}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'play_sound{sound=ENTITY_ZOMBIE_ATTACK_IRON_DOOR;volume=1;pitch=2}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'set_double{variable=max_angle;value=120}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'script{name=mitigation_block_particle_effect}'
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          mitigation_block_particle_effect
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Sound and particle effect logic
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # [...]
        </span>
      </span>
    </code>
  </pre>
</div>
