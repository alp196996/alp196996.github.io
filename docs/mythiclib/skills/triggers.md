# 💥 Triggers

<p>
  When using MMOItems or MMOCore, you will need to specify when a specific
  skill should be executed: when damaging an entity, when being damaged,
  when crouching etc. This is done using triggers. MMOItems used to call
  them
  <em>
    casting modes
  </em>
  .
</p>

## Available Triggers

<p>
  These are the trigger types that you can use in MMO plugins to define
  when some skill is supposed to run.
</p>

### Combat & Damage

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Skill Trigger
      </th>
      <th>
        Description
      </th>
      <th>
        Target Entity
      </th>
      <th>
        Target Block
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        KILL_ENTITY
      </td>
      <td>
        Activates the skill when a player kills an entity
      </td>
      <td>
        The killed entity
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        KILL_PLAYER
      </td>
      <td>
        Activates the skill when a player kills an player
      </td>
      <td>
        The killed player
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        ATTACK
      </td>
      <td>
        Activates the skill when the player attacks something
      </td>
      <td>
        The entity the player attacked
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        DAMAGED
      </td>
      <td>
        Activates the skill when the player takes damage
      </td>
      <td>
        -
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        DAMAGED_BY_ENTITY
      </td>
      <td>
        Activates the skill when the player takes damage from an entity
      </td>
      <td>
        The entity that damaged the player
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        DEATH
      </td>
      <td>
        Activates the skill when the player dies
      </td>
      <td>
        -
      </td>
      <td>
        -
      </td>
    </tr>
  </tbody>
</table>

### Projectiles

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Skill Trigger
      </th>
      <th>
        Description
      </th>
      <th>
        Target Entity
      </th>
      <th>
        Target Block
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        SHOOT_TRIDENT
      </td>
      <td>
        When the player shoots a trident
      </td>
      <td>
        The projectile
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        TRIDENT_TICK
      </td>
      <td>
        Activates every tick when a trident is still midair
      </td>
      <td>
        The projectile
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        TRIDENT_LAND
      </td>
      <td>
        When a trident lands on the ground
      </td>
      <td>
        The projectile
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        TRIDENT_HIT
      </td>
      <td>
        When a thrown trident hits an entity
      </td>
      <td>
        The hit entity
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        SHOOT_BOW
      </td>
      <td>
        When the player fires an arrow
      </td>
      <td>
        The projectile
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        ARROW_TICK
      </td>
      <td>
        Activates every tick when an arrow is still midair
      </td>
      <td>
        The projectile
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        ARROW_LAND
      </td>
      <td>
        When an arrow lands on the ground
      </td>
      <td>
        The projectile
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        ARROW_HIT
      </td>
      <td>
        When a fired arrow hits an entity
      </td>
      <td>
        The hit entity
      </td>
      <td>
        -
      </td>
    </tr>
  </tbody>
</table>

### Player Clicks

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Skill Trigger
      </th>
      <th>
        Description
      </th>
      <th>
        Target Entity
      </th>
      <th>
        Target Block
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        RIGHT_CLICK
      </td>
      <td>
        On player right click
      </td>
      <td>
        -
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        LEFT_CLICK
      </td>
      <td>
        On player left click
      </td>
      <td>
        -
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        SHIFT_RIGHT_CLICK
      </td>
      <td>
        On player right click while sneaking
      </td>
      <td>
        -
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        SHIFT_LEFT_CLICK
      </td>
      <td>
        On player left click while sneaking
      </td>
      <td>
        -
      </td>
      <td>
        -
      </td>
    </tr>
  </tbody>
</table>

### Blocks

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Skill Trigger
      </th>
      <th>
        Description
      </th>
      <th>
        Target Entity
      </th>
      <th>
        Target Block
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        BREAK_BLOCK
      </td>
      <td>
        When a player breaks a block
      </td>
      <td>
        -
      </td>
      <td>
        Location of mined block
      </td>
    </tr>
    <tr>
      <td>
        PLACE_BLOCK
      </td>
      <td>
        When a player places a block
      </td>
      <td>
        -
      </td>
      <td>
        Located of placed block
      </td>
    </tr>
  </tbody>
</table>

### MMOCore Triggers

<p>
  These triggers are only available when MMOCore is installed. If you try
  to use them without MMOCore installed, you will run into errors.
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Skill Trigger
      </th>
      <th>
        Description
      </th>
      <th>
        Target Entity
      </th>
      <th>
        Target Block
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        ENTER_COMBAT
      </td>
      <td>
        Activates skills when a player enters
        <a href="./../../mmocore/features/combat">
          combat
        </a>
        .
      </td>
      <td>
        -
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        QUIT_COMBAT
      </td>
      <td>
        Activates skills when a player quits
        <a href="./../../mmocore/features/combat">
          combat
        </a>
        .
      </td>
      <td>
        -
      </td>
      <td>
        -
      </td>
    </tr>
  </tbody>
</table>

### Items

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Skill Trigger
      </th>
      <th>
        Description
      </th>
      <th>
        Target Entity
      </th>
      <th>
        Target Block
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        DROP_ITEM
      </td>
      <td>
        Activates the skill when a player press Q
      </td>
      <td>
        The dropped item
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        SHIFT_DROP_ITEM
      </td>
      <td>
        Activates the skill when a player press Shift + Q
      </td>
      <td>
        The dropped item
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        SWAP_ITEMS
      </td>
      <td>
        Activates the skill when a player press F
      </td>
      <td>
        -
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        SHIFT_SWAP_ITEMS
      </td>
      <td>
        Activates the skill when a player press Shift + F
      </td>
      <td>
        -
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        <s>
          EQUIP_ARMOR
        </s>
      </td>
      <td>
        Activates the skill when a player enquip armor
      </td>
      <td>
        The player
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        <s>
          UNEQUIP_ARMOR
        </s>
      </td>
      <td>
        Activates the skill when a player unenquip armor
      </td>
      <td>
        The player
      </td>
      <td>
        -
      </td>
    </tr>
  </tbody>
</table>

### Miscellaneous

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Skill Trigger
      </th>
      <th>
        Description
      </th>
      <th>
        Target Entity
      </th>
      <th>
        Target Block
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        LOGIN
      </td>
      <td>
        Activates the skill when a player logins
      </td>
      <td>
        -
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        SNEAK
      </td>
      <td>
        Activates the skill when a player sneaks
      </td>
      <td>
        -
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        TELEPORT
      </td>
      <td>
        Activates the skill when a player teleport
      </td>
      <td>
        -
      </td>
      <td>
        The target teleport location
      </td>
    </tr>
    <tr>
      <td>
        TIMER
      </td>
      <td>
        Casts the skill every X ticks
      </td>
      <td>
        -
      </td>
      <td>
        -
      </td>
    </tr>
  </tbody>
</table>

## When a skill/script is triggered

<p>
  Some trigger types pass on special properties to the script/skill they
  trigger. For instance; when using the
  <code>
    ATTACK
  </code>
  trigger type:
</p>
<ul>
  <li>
    The
    <code>
      &lt;target&gt;
    </code>
    internal variable can be used to access the entity being damaged,
  </li>
  <li>
    The
    <code>
      &lt;attack&gt;
    </code>
    internal variable returns metadata about the current attack,
  </li>
  <li>
    <code>
      &lt;attack.damage&gt;
    </code>
    returns the attack damage.
  </li>
</ul>
<p>
  Trigger types featuring entities/projectiles like
  <code>
    ATTACK
  </code>
  ,
  <code>
    DAMAGED
  </code>
  ,
  <code>
    DAMAGED_BY_ENTITY
  </code>
  ,
  <code>
    KILL_ENTITY
  </code>
  ,
  <code>
    SHOOT_TRIDENT
  </code>
  ,
  <code>
    ARROW_TICK
  </code>
  etc. allow the user to use the
  <code>
    &lt;target&gt;
  </code>
  internal variable to access the shot projectile. These triggers also unlock
  the use of
  <a href="./../scripts/targeters/intro">
    entity and location targeters
  </a>
  such as
  <code>
    target
  </code>
  and
  <code>
    target_location
  </code>
  .
</p>
<p>
  Trigger types featuring world locations like
  <code>
    TRIDENT_LAND
  </code>
  or
  <code>
    ARROW_HIT
  </code>
  unlock the
  <code>
    target_location
  </code>
  location targeter as well as the
  <code>
    &lt;target_location&gt;
  </code>
  internal variable.
</p>
<p>
  Some triggers like
  <code>
    TIMER
  </code>
  or
  <code>
    RIGHT_CLICK
  </code>
  do not unlock any additional internal variable.
</p>
<p>
  <code>
    ATTACK
  </code>
  is the only trigger type which unlocks the
  <code>
    &lt;attack&gt;
  </code>
  internal variable as well as special mechanics (
  <code>
    multiply_damage
  </code>
  ) or conditions (
  <code>
    has_damage_type
  </code>
  ).
</p>

## Custom Triggers

<p>
  MythicLib allows users to define their own triggers and manually call
  them. This is a complex - yet super powerful - functionality that adds
  another layer of configurability on top of existing skills.
</p>

### Defining custom triggers

<p>
  You can define custom triggers inside the
  <code>
    MythicLib/triggers.yml
  </code>
  configuration file. Note that this file only contains user-defined triggers,
  as the triggers presented above are hard-coded and cannot be edited.
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
          # Triggered on weapon crits
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Corresponding on-hit effect: on_hit_effects/weapon_crits
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Call in script: script/on_hit_effects.yml&gt;weapon_crit_script
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          CRIT
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # When set to false, send messages to the player
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # when skills cannot cast due to them being on cooldown,
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # missing mana/stamina....
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          silent
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          true
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Triggered on special mage abilities
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          MAGE_BURN
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          silent
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          true
        </span>
      </span>
    </code>
  </pre>
</div>

### Calling custom triggers

<p>
  You can call custom triggers from inside a MMOLib script using the
  <code>
    call_trigger
  </code>
  mechanic. "Calling a trigger" refers to casting all the skills of a given
  player with matching trigger. For instance, on all player/mob attacks,
  MMOLib calls the
  <code>
    ATTACK
  </code>
  trigger under the hood.
</p>
<p>
  Let's take the built-in weapon crits as an example. We would like to create
  a skill trigger, that gets called whenever a player performs a weapon critical
  strike while attacking.
</p>
<p>
  The following code snippet is taken from the default
  <code>
    MythicLib/script/on_hit_effects.yml
  </code>
  file, which defines the behavior of weapon crits.
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
          # Called to check if weapon crits may apply
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          weapon_crit_script_check
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          conditions
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
          'has_damage_type{types="weapon,unarmed"}'
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Called when a weapon crit occurs
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          weapon_crit_script
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
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'set_double{var=crit_coef;val="&lt;stat.critical_strike_power&gt; / 100"}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'multiply_damage{scalar="&lt;crit_coef&gt;";dtype=WEAPON}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'multiply_damage{scalar="&lt;crit_coef&gt;";dtype=UNARMED}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'mark_crit{dtype="WEAPON,UNARMED"}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'call_trigger{trigger=crit}'
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
<p>
  As you can see, when the
  <code>
    weapon_crit_script
  </code>
  script is called (i.e when a weapon crit occurs), the script eventually
  uses the
  <code>
    call_trigger
  </code>
  mechanic to call the
  <code>
    CRIT
  </code>
  user-defined skill trigger, that we defined earlier. This has the effect
  of casting all the caster's skills with trigger set to
  <code>
    CRIT
  </code>
  .
</p>
<div class="warning custom-block">
  <p class="custom-block-title custom-block-title-default">
    WARNING
  </p>
  <p>
    You can use the
    <code>
      call_trigger
    </code>
    mechanic to call ANY trigger, not only user-defined triggers. This can
    be used to create more complex behaviors like on-hit skill triggers, though
    it is the user's responsibility to make sure the proper skill metadata
    arguments are provided when calling built-in skill triggers.
  </p>
</div>

### Disabling user-defined triggers

<p>
  This feature is quite hard to comprehend - if you wish to disable this
  feature altogether, simply comment out/delete the content of the
  <code>
    triggers.yml
  </code>
  file. Do not delete the config file itself, otherwise it will regenerate
  with its default content.
</p>
