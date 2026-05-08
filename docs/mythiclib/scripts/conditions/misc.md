# Miscellaneous

<div class="warning custom-block">
  <p class="custom-block-title custom-block-title-default">
    WARNING
  </p>
  <p>
    Under construction
  </p>
</div>

## If script caster can damage/target entity

<p>
  This is a central check in MMO plugins. It is used to determine if the
  player can damage/buff another entity without this action being illegal.
  Imagine you don't want your player skills to damage players within the
  same party, this can be done using this condition. Similarly, you don't
  want players to be able to use heals or buffs onto enemies.
</p>
<p>
  The very same condition is checked by MMOCore/MMOItems skills to make
  sure they aren't cast onto the wrong target which would constitute a gameplay
  flaw.
</p>
<p>
  This checks many things:
</p>
<ul>
  <li>
    if the target is a living entity (i.e if it has a health bar)
  </li>
  <li>
    if the target is not an unkillable NPC from Citizens
  </li>
  <li>
    if the player is not in the same party/guild as the script target
  </li>
  <li>
    WorldGuard/Residence/bukkit vanilla PvP flags.
  </li>
</ul>
<p>
  There are four different interaction types:
</p>
<ul>
  <li>
    <code>
      OFFENSE_SKILL
    </code>
    (skills that do damage)
  </li>
  <li>
    <code>
      OFFENSE_ACTION
    </code>
    (basic/melee/weapon attacks)
  </li>
  <li>
    <code>
      SUPPORT_SKILL
    </code>
    (skills that buff or heal, apply a positive effect on target)
  </li>
  <li>
    <code>
      SUPPORT_ACTION
    </code>
    (not used yet) every time you use the
    <code>
      can_target
    </code>
    condition you need to specify the type of interaction so that MythicLib
    knows what to check in case you happen to use a supported party/guild plugin!
  </li>
</ul>
<p>
  The following skill, called
  <code>
    slash
  </code>
  , deals 100 damage to nearby entities
  <strong>
    only if they can actually be damaged by the script runner
  </strong>
  .
</p>
<div class="language-">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span>
          slash:
        </span>
      </span>
      <span class="line">
        <span>
          mechanics:
        </span>
      </span>
      <span class="line">
        <span>
          execute_skill_onto_nearby_entities:
        </span>
      </span>
      <span class="line">
        <span>
          type: skill
        </span>
      </span>
      <span class="line">
        <span>
          name: slash_subskill
        </span>
      </span>
      <span class="line">
        <span>
          target:
        </span>
      </span>
      <span class="line">
        <span>
          type: nearby_entities
        </span>
      </span>
      <span class="line">
        <span>
          radius: 3
        </span>
      </span>
      <span class="line">
        <span>
          height: 1
        </span>
      </span>
      <span class="line">
        <span>
        </span>
      </span>
      <span class="line">
        <span>
          slash_subskill:
        </span>
      </span>
      <span class="line">
        <span>
          conditions: # Filters untargetable entities
        </span>
      </span>
      <span class="line">
        <span>
          cantarget:
        </span>
      </span>
      <span class="line">
        <span>
          type: can_target
        </span>
      </span>
      <span class="line">
        <span>
          interaction_type: OFFENSE_SKILL
        </span>
      </span>
      <span class="line">
        <span>
          mechanics:
        </span>
      </span>
      <span class="line">
        <span>
          deal_damage:
        </span>
      </span>
      <span class="line">
        <span>
          type: damage
        </span>
      </span>
      <span class="line">
        <span>
          amount: 100
        </span>
      </span>
    </code>
  </pre>
</div>

## Check for a player cooldown

<p>
  This checks if a player has something on cooldown. You have to select
  some string identifier, called cooldown paths, for MythicLib to save your
  cooldown information.
</p>
<p>
  If you'd like to check for cooldowns from MMOItems or MMOCore i.e item
  or skill cooldowns, please refer to
  <a href="./../variables#cooldownmap">
    this wiki section
  </a>
  which provides which cooldown path you need to use for which object.
</p>
<p>
  MythicLib fully lets you setup cooldowns. Paired with cooldown mechanics
  (learn more in the
  <em>
    Mechanics
  </em>
  wiki section) you can fully check, compute and apply cooldowns inside
  of your scripts.
</p>
<div class="language-">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span>
          example_condition:
        </span>
      </span>
      <span class="line">
        <span>
          type: cooldown
        </span>
      </span>
      <span class="line">
        <span>
          path: 'skill_life_ender' # This checks if the Life Ender skill is on cooldown!
        </span>
      </span>
    </code>
  </pre>
</div>

## Check for the script caster's food level

<p>
  Checks if the script caster has enough food. You could do the exact same
  condition using the
  <code>
    compare
  </code>
  generic condition but we're keeping this one for backwards compatibility.
</p>
<div class="language-">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span>
          example_condition:
        </span>
      </span>
      <span class="line">
        <span>
          type: food
        </span>
      </span>
      <span class="line">
        <span>
          amount: '10 + &lt;caster.health&gt; / 2'
        </span>
      </span>
    </code>
  </pre>
</div>

# Check if attack which triggered the script has some damage type

<p>
  Please first learn about
  <a href="./../../skills/triggers">
    triggers
  </a>
  . When using the
  <code>
    ATTACK
  </code>
  trigger type, sine the script was triggered by an attack you can actually
  access information about this attack using the
  <code>
    &lt;attack&gt;
  </code>
  internal variable.
</p>
<p>
  This condition can be used to check if the attack which triggered the
  script contains some type of damage. This is very useful for player skills
  which should for instance only apply on weapon attacks: you just have to
  check if the attack contains some
  <code>
    WEAPON
  </code>
  damage.
</p>
<p>
  You can use multiple damage types. If the attack contains ANY of the damage
  type provided the condition will be met. It will throw a console error
  if the script was not triggered by an entity attack.
</p>
<div class="language-">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span>
          example_condition:
        </span>
      </span>
      <span class="line">
        <span>
          type: has_damage_type
        </span>
      </span>
      <span class="line">
        <span>
          types: 'WEAPON,PHYSICAL,PROJECTILE'
        </span>
      </span>
    </code>
  </pre>
</div>

## Check if the target entity is living

<p>
  Checks if the target entity has a health bar.
</p>
<div class="language-">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span>
          example_condition:
        </span>
      </span>
      <span class="line">
        <span>
          type: is_living
        </span>
      </span>
    </code>
  </pre>
</div>

## Check if the target entity is on fire

<p>
  Use this to check if the script target entity is on fire. This will check
  for the script caster if
  <code>
    caster
  </code>
  is set to true (false by default);
</p>
<div class="language-">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span>
          example_condition:
        </span>
      </span>
      <span class="line">
        <span>
          type: on_fire
        </span>
      </span>
      <span class="line">
        <span>
          caster: false
        </span>
      </span>
    </code>
  </pre>
</div>

## Permission check

<p>
  Use this to check if the script caster has a specific permission.
</p>
<div class="language-">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span>
          example_condition:
        </span>
      </span>
      <span class="line">
        <span>
          type: condition
        </span>
      </span>
      <span class="line">
        <span>
          name: 'mmoitems.ability.fireball'
        </span>
      </span>
    </code>
  </pre>
</div>

## Time check

<p>
  Checks if the script world is within a certain time period:
  <code>
    DAY
  </code>
  (0 to 12000 ticks),
  <code>
    DUSK
  </code>
  (12000 to 13000),
  <code>
    NIGHT
  </code>
  (13000 to 23000) or
  <code>
    DAWN
  </code>
  (23000 to 24000). According to the wiki a Minecraft day lasts 20 minutes
  which is equivalent to 24k ticks.
</p>
<p>
  This could be used for cool werewolf/dark mage passive skills which only
  trigger during the night!
</p>
<div class="language-">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span>
          example_condition:
        </span>
      </span>
      <span class="line">
        <span>
          type: time
        </span>
      </span>
      <span class="line">
        <span>
          period: NIGHT
        </span>
      </span>
    </code>
  </pre>
</div>
