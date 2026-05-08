# 📊 Player Stats

<p>
  MythicLib stats API design is similar to the Spigot attribute modifiers
  API. Stat data from every numeric MMOItems/MMOCore stat is stored in a
  <code>
    StatMap
  </code>
  accessible using the following method.
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
          MMOPlayerData playerData
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          MMOPlayerData.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          get
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          /* player or UUID */
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          );
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          StatMap statMap
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          playerData.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getStatMap
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ();
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  Using that class you can access instances of
  <code>
    StatInstance
  </code>
  which correspond to one specific stat.
</p>

## Stat Instances

<p>
  Just like Spigot's attribute instances, stat instances feature a map that
  <strong>
    stores stat modifiers
  </strong>
  . There are two different types of stat modifiers:
</p>
<ul>
  <li>
    fixed stat modifiers, which add a fixed/flat amount (+10 Atk Damage)
  </li>
  <li>
    % stat modifiers, which multiply the total stat value by a certain constant
    (+10% Atk Damage)
  </li>
</ul>
<p>
  The advantage of using attributes is that any plugin can add its own attributes,
  and MythicLib can easily gather all of them and calculate the total stat
  value based on these attributes. For instance, MMOCore uses attributes
  to handle experience party buffs:
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
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          // Modifier that adds +10% exp gained
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          StatModifier experienceModifier
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          new
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          StatModifier
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "myCustomPluginKey"
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ,
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "ADDITIONAL_EXPERIENCE"
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ,
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          10
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          , ModifierType.FLAT);
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          // Register the modifier
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          experienceModifier.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          register
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (playerData);
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          // Access all currently registered modifiers this way
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          statMap.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getInstance
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "ADDITIONAL_EXPERIENCE"
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ).
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getModifiers
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ().
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          forEach
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (mod
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          -&gt;
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          /* code */
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          );
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  Notice how any plugin can access all the modifiers created by all the
  plugins. That means you must make sure your plugin only manipulates the
  attributes you create which can be done by choosing a very specific
  <strong>
    modifier key
  </strong>
  like "mmocorePartyBuff" or "mmoitemsItemSetBonus".
</p>

## Adding a stat modifier

<p>
  There are multiple ways of generating a stat modifier. The most exhaustive
  constructor is the following
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
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          StatModifier
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (UUID, String, String,
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          double
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          , ModifierType, ModifierSource, EquipmentSlot)
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  The first parameter is the UUID. When not provided, a random UUID gets
  assigned to your new modifier. Every modifier is identified by a UUID.
  The second parameter, the
  <strong>
    modifier key
  </strong>
  can also be used to quickly identify the plugin which registered the modifier,
  but it's
  <strong>
    NOT UNIQUE!!
  </strong>
  The plugin key should be your plugin name, to make sure that there are
  no collisions with other systems or plugins. Again, this modifier key is
  <strong>
    no longer unique
  </strong>
  since MythicLib 1.6.2 builds.
</p>
<p>
  The third parameter is the stat being modified. This can be
  <code>
    ATTACK_DAMAGE
  </code>
  or
  <code>
    SKILL_CRITICAL_STRIKE_CHANCE
  </code>
  for instance.
</p>
<p>
  The
  <strong>
    equipment slot
  </strong>
  was implemented to keep track of where that modifier is coming from. It's
  mostly used by MMOItems and MMOInventory to apply the right stats from
  an item depending on where it's equipped in the player inventory.
</p>
<p>
  The
  <strong>
    modifier source
  </strong>
  was implemented to differenciate stat modifiers given by melee and ranged
  weapons. This is also used by MI and MMOInventory to fix similar issues.
</p>
<div class="tip custom-block">
  <p class="custom-block-title custom-block-title-default">
    TIP
  </p>
  <p>
    Use
    <code>
      ModifierSource#OTHER
    </code>
    and
    <code>
      EquipmentSlot#OTHER
    </code>
    for general buffs, or if you're unsure about what to use.
  </p>
</div>
<p>
  You can also use this simpler constructor if you don't need to specify
  the UUID, modifier source and equipment slot.
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
          StatModifier modifier
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          new
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          StatModifier
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (String, String,
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          double
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          , ModifierType);
        </span>
      </span>
    </code>
  </pre>
</div>

### Register the stat modifier

<p>
  In order to register your stat modifier, you can use the following method.
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
          MMOPlayerData playerData
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          MMOPlayerData.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          get
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          /* player UUID */
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          );
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          modifier.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          register
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (playerData);
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  You may also use this method which does exactly the same thing:
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
          StatModifier modifier
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
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          StatInstance instance
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          statMap.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getInstance
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (modifier.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getStat
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ());
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          instance.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          addModifier
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (modifier);
        </span>
      </span>
    </code>
  </pre>
</div>

## Temporary stat modifiers

<p>
  Note that you can also add
  <strong>
    temporary stat modifiers
  </strong>
  using the following method. The long parameter corresponds to the duration
  of the modifier in ticks.
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
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          new
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          TemporaryStatModifier
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (String, String,
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          double
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          , ModifierType, EquipmentSlot, ModifierSource).
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          register
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (MMOPlayerData,
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          long
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          );
        </span>
      </span>
    </code>
  </pre>
</div>

## Remove a stat modifier

<p>
  The following code uses the key we were talking about to remove all stat
  modifiers registered by a specific plugin, or which key starts with a specific
  prefix, etc.
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
          statInstance.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          removeIf
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (key
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          -&gt;
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          key.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          startsWith
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "mmoitems"
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ));
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          statInstance.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          removeIf
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "MyAwesomePlugin"
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          ::
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          equals);
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  You can also pinpoint a specific modifier and remove it using its UUID.
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
          statInstance.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          removeModifier
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          /* modifier UUID */
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          );
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  You can also unregister the stat modifier directly from the modifier instance.
  This does exactly the same thing as the previous method, and you do not
  need to provide the modifier UUID.
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
          modifier.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          unregister
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (playerData);
        </span>
      </span>
    </code>
  </pre>
</div>

## Calculating player stats

<p>
  The following code snippet shows how to calculate the total value of a
  stat.
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
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          // calculate the player's crit strike chance
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          double
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          critChance
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          statMap.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getStat
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "CRITICAL_STRIKE_CHANCE"
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          );
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  Stat values depend on the player's action hand. Most of the time, they
  are interacting with their main hand (right hand), but sometimes they might
  be using their off hand (left hand) like when shooting a bow or throwing
  a snowball. In that case, MythicLib must ignore some stat modifiers depending
  on which hand is being used.
</p>
<p>
  By default, MythicLib assumes the action hand is the right hand. If you
  need to compute a stat value with the left hand as action hand, you can
  use the following method:
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
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          double
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          attackSpeed
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          statMap.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getInstance
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "ATTACK_SPEED"
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ).
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getTotal
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (EquipmentSlot.OFF_HAND);
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  MythicLib does fancy calculation to determine which modifiers to ignore,
  and which to keep, based on the equipment slot and modifier sources of
  the registered stat modifiers. All of this is already taken care of internally,
  so you don't have to worry about it!
</p>

## <em>Total</em> vs <em>Final</em> Stat Value

<p>
  Vanilla attribute-based stats like Attack Damage, Max Health, Movement
  Speed are a little harder to deal with. This is because, as they are handled
  by Minecraft itself, MythicLib has no guarantee that it is the only plugin
  modifying these stats. Other plugins may also add their own attribute modifiers,
  and Minecraft itself applies some default modifiers depending on the player's
  equipment.
</p>
<p>
  For this reason, the
  <em>
    final
  </em>
  stat value refers to
  <strong>
    the value that Minecraft would return
  </strong>
  , that is, taking into account all attribute modifiers from all plugins
  and Minecraft itself. The
  <em>
    total
  </em>
  stat value refers to the value that MythicLib computes, taking into account
  only the stat modifiers registered through MythicLib's API.
</p>
<p>
  For example, if a player with 20 base Max Health is wearing a +10 Max
  Health armor (MythicLib API), and another plugin adds +5 Max Health through
  its own Minecraft attribute modifier, then the total Max Health would be
  30, while the final Max Health would be 35.
</p>
<div class="info custom-block">
  <p class="custom-block-title custom-block-title-default">
    INFO
  </p>
  <p>
    For non-vanilla stats like
    <em>
      Critical Strike Chance
    </em>
    or
    <em>
      Skill Damage
    </em>
    , the total and final stat values are always the same, as these stats
    are not handled by Minecraft itself.
  </p>
</div>
<p>
  The following methods return the final stat value of a stat
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
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          double
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          moveSpeedFinal
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          statMap.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getStat
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "MOVEMENT_SPEED"
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          );
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          double
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          moveSpeedFinal
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          statMap.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getInstance
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "MOVEMENT_SPEED"
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ).
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getFinal
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ();
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  The following method returns the total stat value of a stat.
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
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          double
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          moveSpeedTotal
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          statMap.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getInstance
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "MOVEMENT_SPEED"
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ).
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getTotal
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ();
        </span>
      </span>
    </code>
  </pre>
</div>
