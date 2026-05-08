# ⚔️ Combat

## Combat Logging

<p>
  Combat logging is a useful feature that lets players know when they enter
  or quit combat. Combat log is handled via chat messages. It is a very simple
  feature in itself, but
  <strong>
    it ties in so nicely with other mechanics like skills
  </strong>
  .
</p>
<p>
  <img src="/assets/combat_enter.DrFTWXNH.png" alt="image">
</p>
<p>
  For instance, there is a built-in MMOCore skill that makes players deal
  increased melee damage when entering combat. Using the
  <code>
    %mmocore_since_enter_combat%
  </code>
  placeholder, you could also imagine a skill that increases damage dealt
  based on how long the player has been in combat.
</p>

## Resource Regeneration

<p>
  Combat log also dictates when the player should be able to regen their
  <a href="./../misc/resources">
    resources
  </a>
  (health, mana and stamina).
</p>
<p>
  For instance, you can set up a
  <em>
    Warrior
  </em>
  class with a base flat health regeneration rate, and with an additional
  10% missing health regeneration per second
  <strong>
    when out of combat
  </strong>
  . This can be applied to any class, any resource, the off combat option
  can be disabled, the % can scale on the player's level, and you can make
  it so the regenerated amount also scales on the player's
  <strong>
    missing
  </strong>
  health instead.
</p>

## Placeholders

<p>
  MMOCore features multiple
  <a href="./../general/placeholders#combat">
    PlaceholderAPI placeholders
  </a>
  that you can use to check if a player is in combat, in PvP Mode (see below),
  the time since the last hit...
</p>

## Friendly Fire

<p>
  Everyone knows the concept of friendly fire: the ability to accidentally
  or intentionally harm allies with attacks. In MMOCore, this concept is
  extended to all player interactions, not just offensive skills.
</p>
<p>
  These rules are referred to as "interaction rules". They define when and
  how a player can "interact" with another player, whether through a skill
  or a weapon attack. For example, you might want to prevent players from
  using offensive skills on members of the same guild, faction, or party,
  while still allowing them to cast healing or buffing skills on each other.
  Simply disabling all skills would not work, since support interactions
  are also essential.
</p>
<div class="tip custom-block">
  <p class="custom-block-title custom-block-title-default">
    TIP
  </p>
  <p>
    In short, interaction rules in MMOCore define
    <em>
      Friendly Fire
    </em>
    for any skill or attack, offensive or supportive.
  </p>
</div>

### Configuration

<p>
  MythicLib lets you configure a three-dimensional array where you can choose
  to enable OR disable interactions for any combination of these three parameters:
</p>
<ul>
  <li>
    if PvP is enabled (
    <code>
      on
    </code>
    or
    <code>
      off
    </code>
    )
  </li>
  <li>
    the interaction type (
    <code>
      support
    </code>
    or
    <code>
      offense
    </code>
    )
  </li>
  <li>
    the players' relationship (
    <code>
      party_member
    </code>
    ,
    <code>
      guild_enemy
    </code>
    etc.)
  </li>
</ul>
<p>
  This code snippet is located in the MythicLib
  <code>
    config.yml
  </code>
  .
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
          interaction_rules
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # When enabled, apply PvP interaction rules for skills, melee and projectile
          hits.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # This option is toggled off by default to reduce confusion for new users.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          enabled
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
          # When disabled, support-based skills (buffs or heals)
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # may only be applied onto players.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          support_skills_on_mobs
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
          # When PvP is turned off
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          pvp_off
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Ability to heal other players when PvP is off
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          support
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          party_member
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
          party_other
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
          guild_ally
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
          guild_neutral
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
          guild_enemy
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
          ## When PvP is turned on
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          pvp_on
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Ability to heal other players when PvP is on
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          support
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          party_member
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
          party_other
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          false
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          guild_ally
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
          guild_neutral
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
          guild_enemy
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          false
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Friendly fire for guilds/parties
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          offense
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          party_member
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          false
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          guild_ally
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          false
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          guild_neutral
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
<p>
  The
  <code>
    support_skills_on_mobs
  </code>
  determines if you can cast support skills/heals/buffs onto monsters. This
  applies to all built-in MythicLib skills. To have this option apply to
  custom skills as well, you need to use the
  <code>
    mmoCanTarget
  </code>
  MythicMob custom condition (see
  <a href="#using-mythicmobs-skills">
    below
  </a>
  ).
</p>

### Supported Plugins

<p>
  Please refer to
  <a href="./parties">
    this wiki page
  </a>
  to see the list of party plugins supported by MMOCore. MMOCore will take
  into account party members during friendly fire checks.
</p>
<p>
  Please refer to
  <a href="./guilds">
    this wiki page
  </a>
  to see the list of group plugins supported by MMOCore (
  <em>
    by "groups", we mean factions, guilds, clans, kingdoms, etc
  </em>
  ). MMOCore will take into account group members during friendly fire checks.
</p>

### Where do these rules apply?

<p>
  These rules apply to:
</p>
<ul>
  <li>
    all PvP/PvE melee attacks,
  </li>
  <li>
    damage dealt by vanilla projectiles,
  </li>
  <li>
    all skill damage dealt by MythicMobs custom skills,
  </li>
  <li>
    damage or buffs inflicted by
    <a href="./../../mythiclib/skills/builtin">
      built-in MythicLib skills
    </a>
    ...
  </li>
</ul>

### Inside MythicMobs Skills

<p>
  You can check if a player can interact with a given entity, from inside
  a MythicMob custom skill, using the
  <code>
    mmoCanTarget
  </code>
  condition. Please refer to
  <a href="./../../mythiclib/skills/custom/mythic#checking-if-the-skill-caster-can-target-another-entity">
    this wiki page
  </a>
  for more information.
</p>
<p>
  This condition has a very interesting side effect. Without this condition,
  offensive projectiles stop on the target entity, even if this entity cannot
  be damaged. The
  <code>
    damage
  </code>
  mechanic calls a Bukkit damage event, which MMOCore then cancels as it
  notices that the two players are in the same party/guild...
</p>
<p>
  Then, no damage is dealt, but MythicMobs still kills the projectile. Had
  the
  <code>
    mmoCanTarget
  </code>
  condition been used, the skill would have checked ahead of time that the
  entity was damageable, and the entity would have been ignored by the projectile.
</p>

## PvP Mode

<p>
  This feature is specially designed for PvE-focused servers which still
  want to leave some options for players to fight. In specific WorldGuard
  regions where PvP is disabled by default, players can use
  <code>
    /pvpmode
  </code>
  to toggle on PvP back and fight other players!
  <strong>
    Only players with PvP enabled can fight and attack each other.
  </strong>
  Furthermore, this feature is fully compatible with the PvP interaction
  rules defined above.
</p>
<p>
  This works well for RPG or even profession/job-oriented survival servers.
</p>
<div class="warning custom-block">
  <p class="custom-block-title custom-block-title-default">
    WARNING
  </p>
  <p>
    PvP Mode only works with WorldGuard! It won't work with other flag plugins
    like Residence.
  </p>
</div>

### How to setup PvP Mode

<ul>
  <li>
    first setup PvP interaction rules as explained above
  </li>
  <li>
    select an existing/create a new WorldGuard region
  </li>
  <li>
    toggle
    <strong>
      ON
    </strong>
    server PvP, world PvP as well as the PvP flag
  </li>
  <li>
    toggle on the
    <code>
      pvp-mode
    </code>
    WorldGuard flag. It is toggled off by default
  </li>
</ul>
<p>
  You are now good to go! When the
  <code>
    pvp-mode
  </code>
  flag is on, players have access to the
  <code>
    /pvpmode
  </code>
  command and MMOCore will take care of the rest.
</p>

### Configuration

<p>
  In order to prevent abuse, you can configure PvP Mode so that players
  can't exit it while they are still in combat. Moreover, you can setup cooldowns
  for that command.
</p>
<p>
  The following code snippet is located in the MMOCore config
  <code>
    config.yml
  </code>
  .
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
          pvp_mode
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Requires /reload when changed
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          enabled
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          false
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Minimum level in order to fight other players.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Set to 0 to fully disable
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          min_level
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          0
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Maximum level difference in order to fight other players.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Set to 0 to fully disable
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          max_level_difference
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
          # Delay after any attack during which the player will stay in PvP Mode
          (seconds)
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Has to be lower than 'cooldown.combat'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          combat_timeout
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          30
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Invulnerability triggered when:
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - entering a PvP region with PvP Mode turned on.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - using the /pvpmode command inside of a PvP region.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          invulnerability
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          time
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          region_change
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          60
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          command
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          30
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # When enabled, players can damage other players
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # to end this invulnerable time period.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          can_damage
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          false
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # When enabled, leaving a no-PVP zone and entering a
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # PVP zone will apply the SAME invulnerability time.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Requires /reload when changed
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          apply_to_pvp_flag
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
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          cooldown
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Cooldown before being able to use the /pvpmode
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # command when entering a PvP Mode region.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          region_enter
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          20
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Cooldown before being able to use the /pvpmode
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # command when entering a PvP Mode region.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          region_leave
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          20
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Delay before being able to use /pvpmode after being in combat (seconds).
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Has to be greater than the 'combat_timeout'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          combat
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          45
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Cooldown when toggling on PvP Mode, before being able to toggle it off
          (seconds)
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          toggle_on
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          5
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Cooldown when toggling off PvP Mode (seconds)
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          toggle_off
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          3
        </span>
      </span>
    </code>
  </pre>
</div>

### Disabling PvP Mode

<p>
  In order to disable PvP Mode:
</p>
<ul>
  <li>
    remove the
    <code>
      pvp-mode
    </code>
    config section from
    <code>
      commands.yml
    </code>
  </li>
  <li>
    set
    <code>
      pvp_mode.enabled
    </code>
    to
    <code>
      false
    </code>
    inside
    <code>
      MMOCore/config.yml
    </code>
  </li>
</ul>
