# ⚔️ Damage

## PlayerAttackEvent

<p>
  A
  <code>
    PlayerAttackEvent
  </code>
  bukkit event is called every time a player deals damage to another entity.
  The event contains all the info about the player attacking, the damage
  being dealt and the attack target.
</p>
<p>
  <code>
    AttackMetadata
  </code>
  contains:
</p>
<ul>
  <li>
    the player attacking
  </li>
  <li>
    the entity being attacked
  </li>
  <li>
    a cached map of the player statistics which was generated when the player
    cast the skill/attack
  </li>
  <li>
    an instance of DamageMetadata
  </li>
</ul>
<p>
  <code>
    DamageMetadata
  </code>
  handles all the damage calculations. When accessing this class you can:
</p>
<ul>
  <li>
    increase any damage due to a specific type by X%
  </li>
  <li>
    add extra elemental/typed damage packets
  </li>
  <li>
    get all the damage values
  </li>
</ul>
<p>
  A damage metadata is composed of a set of damage packets. A damage packet
  is one double indicating the amount of damage dealt as well as a set of
  damage types. This packet method lets MythicLib distinguish damage sources
  and only apply modifiers to some of them.
</p>
<p>
  Using damage packets, you can have your skill deal like 10 weapon-physical
  damage + 15 skill-magical damage, under one DamageMetadata. And if the
  player happens to have a stat like +50% Skill Damage, this stat will only
  apply to the packets which have at least SKILL as damage type! This allows
  for insane on-hit extra RPG styled damage calculations. Example use:
</p>
<div class="language-java">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
    java
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          @
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          EventHandler
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          public
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          void
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          onAttack
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (PlayerAttackEvent event) {
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          AttackMetadata attack
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          event.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getAttack
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ();
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          DamageMetadata damage
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          attack.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getDamage
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ();
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          damage.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          add
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          10
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          , DamageType.WEAPON, DamageType.PHYSICAL);
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          // add 10 weapon-physical damage
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          damage.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          multiplicativeModifier
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          1.5
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          , DamageType.SKILL);
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          // increase skill damage by 50%
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          damage.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          collectTypes
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ().
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          foreach
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (type
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          -&gt;
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          whatever);
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          // collect all damage types present in the damage packets
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          }
        </span>
      </span>
    </code>
  </pre>
</div>

## Using DamageManager

<p>
  It's the class MythicLib uses to centralize all the player attacks from
  MMOItems and MMOCore. The following code snippet can be used to force a
  player to deal damage to a certain entity. You first have to specify the
  damage you want to deal, as well as the damage types. Then cache the player's
  statistics before defining the AttackMetadata and registering it using
  MythicLib's damage manager.
</p>
<div class="language-java">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
    java
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          PlayerData playerData
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          /* TODO */
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ;
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          // player attacking
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          DamageMetadata damage
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          new
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          DamageMetadata
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          12
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          , DamageType.SKILL, DamageType.MAGIC);
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          StatMap.CachedStatMap statMap
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          playerData.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getMMOPlayerData
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ().
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getStatMap
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ().
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          cache
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (EquipmentSlot.MAIN_HAND);
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          AttackMetadata attack
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          new
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          AttackMetadata
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (damage, statMap);
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          boolean
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          knockback
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          true
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ;
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          // If you want your attack to deal knockback
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          LivingEntity target
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ...;
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          // Entity being targeted
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          MythicLib.plugin.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getDamage
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ().
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          damage
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (damage, target, knockback);
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          // Finally deal damage
        </span>
      </span>
    </code>
  </pre>
</div>

## Compatibility with other plugins which have a damage system

<p>
  Take any other plugin which implement magic skills like Fabled or Heroes.
  MMOCore needs a way to detect when a player damages an entity using a skill,
  so that it can apply the
  <code>
    Skill Damage
  </code>
  stat for instance. It's what the
  <code>
    DamageManager
  </code>
  class is all about: monitoring all damage dealt by players.
</p>
<p>
  Other plugins with have a damage system need to register their damage
  info in MythicLib whenever an entity is damaged by a player, so that MythicLib
  knows that some custom damage is being applied. If MythicLib detects player
  damage but cannot find the source plugin, it is considered a melee weapon
  attack.
</p>
<p>
  In order to register that damage info in MythicLib, you need to create
  an instance of the
  <code>
    DamageHandler
  </code>
  class and register it in the
  <code>
    DamageManager
  </code>
  instance of MythicLib using the following method:
</p>
<div class="language-java">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
    java
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          MythicLib.plugin.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getDamage
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ().
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          registerHandler
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (damageHandler);
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  A damage handler can be registered at any time
  <strong>
    after MythicLib has loaded
  </strong>
  .
</p>

## Damage Mitigation

<p>
  Whenever a mitigation type is triggered by a player, an instance of
  <code>
    DamageMitigationEvent
  </code>
  is called. You can retrieve the mitigation type using
  <code>
    event#getType()
  </code>
  . This event is cancelable.
</p>

## On-Hit Effects

<p>
  Whenever an on-hit effect is triggered, an instance of
  <code>
    OnHitEffectEvent
  </code>
  is called. You can retrieve the on-hit effect using
  <code>
    event#getEffect()
  </code>
  . This event is cancelable.
</p>

## Damage Indicators

<p>
  When an indicator displays on an entity, an instance of
  <code>
    IndicatorDisplayEvent
  </code>
  is called. You can retrieve the indicator message using
  <code>
    event#getMessage()
  </code>
  and set it using
  <code>
    event#setMessage(String)
  </code>
  . This event is cancelable.
</p>
