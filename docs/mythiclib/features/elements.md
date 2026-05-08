# 🌱 Elements

<p>
  Elements are a big part of a RPG server. Using MythicLib custom elements,
  you can create elemental attacks with fully configurable attack effects.
  You can also setup elemental critical strikes which are attacks that have
  some chance of triggering when dealing elemental damage. Custom elements
  were introduced in MythicLib 1.3.4
</p>
<p>
  The config file you'll be editing is
  <code>
    /MythicLib/elements.yml
  </code>
</p>

## Elemental attacks

<p>
  Skills can be used to deal
  <strong>
    elemental damage
  </strong>
  using the following MythicMobs mechanic where you can replace
  <code>
    FIRE
  </code>
  with any element identifier.
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
          mmodamage{amount="10";types=PHYSICAL,WEAPON;element=FIRE}
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  Elemental attacks also trigger when performing weapon (melee or ranged)
  attacks.
</p>

## Damage Calculation

### Incoming Damage

<p>
  There are two different stats for increasing a player's elemental damage.
  You can either give a
  <strong>
    flat amount
  </strong>
  of elemental damage like this item. The following item deals an extra
  10 damage on hit. The corresponding stat is
  <code>
    &lt;ELEMENT_NAME&gt;_DAMAGE
  </code>
  , for instance
  <code>
    FIRE_DAMAGE
  </code>
  .
</p>
<p>
  <img src="/assets/fire_damage.ByW9dfuk.png" alt="image">
</p>
<p>
  You can also use
  <code>
    &lt;ELEMENT_NAME&gt;_DAMAGE_PERCENT
  </code>
  which will increase your elemental damage by a certain coefficient. For
  instance, wearing the following item will increase your Fire Damage by
  13%. Since it's a damage multiplier, you won't deal any fire damage if
  you have no item dealing base/flat damage.
</p>
<p>
  <img src="/assets/fire_damage_percent.BSutR8Vw.png" alt="image">
</p>

### Defense

<p>
  Elemental defense reduces incoming elemental damage. The stat
  <code>
    &lt;ELEMENT_NAME&gt;_DEFENSE
  </code>
  provides flat defense while
  <code>
    &lt;ELEMENT_NAME&gt;_DEFENSE_PERCENT
  </code>
  provides X% extra elemental defense points.
</p>
<p>
  <img src="/assets/fire_defense.Cx8AyGgo.png" alt="image">
</p>

### Weakness

<p>
  Elemental weakness increases elemental damage taken by a certain factor.
  For instance, 10% Fire Weakness will increase incoming fire damage by 10%.
  The corresponding player stat is
  <code>
    &lt;ELEMENT_NAME&gt;_WEAKNESS
  </code>
  .
</p>
<p>
  <img src="/assets/fire_weakness.Z7RBpFyk.png" alt="image">
</p>

### Final Formula

<p>
  Here are the formulas that summerizes all the previous explanations. The
  last formula uses the default MythicLib defense formula.
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
          Effective Damage = &lt;Flat damage&gt; * (1 + &lt;Extra damage&gt;) *
          (1 + &lt;Opponent weakness&gt;)
        </span>
      </span>
      <span class="line">
        <span>
          Effective Defense = &lt;Flat opponent defense&gt; * (1 + &lt;Extra opponent
          defense&gt;)
        </span>
      </span>
      <span class="line">
        <span>
          Damage Mitigation = &lt;Defense&gt; / (&lt;Defense&gt; + 5 * &lt;Damage&gt;)
        </span>
      </span>
    </code>
  </pre>
</div>

## Element Config Example

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
          FIRE
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Main translation MMOCore and MMOItems will use
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
          Fire
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
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
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Purely cosmetic, used in the MMOItems item editor
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          lore-icon
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '🔥'
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Used in the MMOItems item lore
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          color
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '&amp;c'
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Used in the MMOItems item lore
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # What gets executed when a normal elemental is performed
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          regular-attack
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          mythiclib-skill-id
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          fire_elemental_attack
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # What gets executed when a elemental critical strike is performed
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # This one is optional. If not specified, no crits can occur
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          crit-strike
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          mythiclib-skill-id
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          fire_critical_strike
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  There's one config section per element and you are free to add, edit and
  remove any config section. Once you're done editing you can use
  <code>
    /ml reload
  </code>
  which will reload the new config into MythicLib. Then hit
  <code>
    /mi reload
  </code>
  or
  <code>
    /mmocore reload
  </code>
  to have the changes propagate to MMOItems and MMOCore.
</p>
<p>
  The
  <code>
    name
  </code>
  ,
  <code>
    icon
  </code>
  ,
  <code>
    lore-icon
  </code>
  and
  <code>
    color
  </code>
  options are all cosmetic. The most importants are
  <code>
    regular-attack
  </code>
  which is the skill that is cast by the attacker when performing an elemental
  attack, and
  <code>
    crit-strike
  </code>
  which is the skill cast when performing an elemental critical strike.
  By default, MythicLib uses custom scripts to handle these attack skills
  yet you can use other plugins like MythicMobs or Fabled.
</p>

### Using other skill plugins

<p>
  Just change
  <code>
    mythiclib-skill-id
  </code>
  to
  <code>
    mythicmobs-skill-id
  </code>
  (and indicate the right MM skill identifier) if you'd like to use a MythicMobs
  skill. You can also use
  <code>
    fabled-skill-id
  </code>
  if you're using Fabled. This is the same config section but with that
  small config key change:
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
          FIRE
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
          Fire
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
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          lore-icon
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '🔥'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          color
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '&amp;c'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          regular-attack
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
          fire_elemental_attack
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          crit-strike
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
          fire_critical_strike
        </span>
      </span>
    </code>
  </pre>
</div>

## Elemental Attack Effects

<p>
  MythicLib comes with preconfigured on-hit attack effects for every element
  although you can definitely adapt them to your likings.
</p>
<p>
  By default, elemental on-hit attack effects are implemented using MythicLib
  scripts, which can be found inside
  <code>
    MythicLib/script/elemental_attacks.yml
  </code>
  . These on-hit effects depend on the element applied.
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Element
      </th>
      <th>
        Crit Effect
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        Fire
      </td>
      <td>
        Sets target entity on fire (duration scales with atk damage)
      </td>
    </tr>
    <tr>
      <td>
        Ice
      </td>
      <td>
        Roots target entity (duration scales with atk damage)
      </td>
    </tr>
    <tr>
      <td>
        Wind
      </td>
      <td>
        Area-of-effect knockback
      </td>
    </tr>
    <tr>
      <td>
        Earth
      </td>
      <td>
        Area-of-effect knock-up
      </td>
    </tr>
    <tr>
      <td>
        Thunder
      </td>
      <td>
        Deals 20% of the initial atk damage to nearby entities
      </td>
    </tr>
    <tr>
      <td>
        Water
      </td>
      <td>
        Area-of-effect slow (duration scales with atk damage)
      </td>
    </tr>
  </tbody>
</table>

## Damage Indicators

<p>
  Elemental damage dealt is displayed when damaging entities. Learn more
  about damage indicators on
  <a href="./../features/damage#damage-indicators">
    this wiki page
  </a>
  . On the following screenshot, on can see two holograms of
  <code>
    15 Fire Damage
  </code>
  dealt to the mob, along with the flame particles of the on-hit attack
  effect.
</p>
<p>
  <img src="/assets/damage_indicators_element.YN0Vppdx.png" alt="image">
</p>
