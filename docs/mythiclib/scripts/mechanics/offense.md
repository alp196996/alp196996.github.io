# ⚔️ Offense

## Deal damage to an entity

<p>
  Deals damage to the entity provided. This applies on-hit effects, crit
  strikes, damage mitigation... (fully compatible with MMOItems and MMOCore).
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Parameter
      </th>
      <th>
        Alias
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
        amount
      </td>
      <td>
        amt, a, damage, dmg, d, value, val, v
      </td>
      <td>
        The amount of damage to deal.
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        knockback
      </td>
      <td>
        kb, knock
      </td>
      <td>
        If true, applies knockback to the target.
      </td>
      <td>
        true
      </td>
    </tr>
    <tr>
      <td>
        ignore_immunity
      </td>
      <td>
        ii
      </td>
      <td>
        If true, ignores the target's invulnerability frames.
      </td>
      <td>
        false
      </td>
    </tr>
    <tr>
      <td>
        damage_type
      </td>
      <td>
        dtype, dt
      </td>
      <td>
        The damage type(s) to deal. Separate damage types with commas and no spaces.
        See available damage types
        <a href="./../../features/damage">
          here
        </a>
        .
      </td>
      <td>
        magic,skill
      </td>
    </tr>
    <tr>
      <td>
        element
      </td>
      <td>
        -
      </td>
      <td>
        The element name to deal damage with. See available elements
        <a href="./../../features/elements">
          here
        </a>
      </td>
      <td>
        none
      </td>
    </tr>
    <tr>
      <td>
        target
      </td>
      <td>
        -
      </td>
      <td>
        The target entity or entities to deal damage to.
      </td>
      <td>
        target or caster
      </td>
    </tr>
  </tbody>
</table>
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
          example_script
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
          'damage{amount="100 * (1 + &lt;modifier.extra&gt; / 100)";dtype="PHYSICAL,WEAPON";kb=true;ii=false;element=FIRE;target={type=nearby_entities;radius=3}}'
        </span>
      </span>
    </code>
  </pre>
</div>

## Multiply the current attack damage

<p>
  Multiplies the current attack damage by a given amount.
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Parameter
      </th>
      <th>
        Alias
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
        value
      </td>
      <td>
        val, v, amount, amt, a, scalar, s, coef, c
      </td>
      <td>
        The amount to multiply the damage by. Can be an expression.
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        damage_type
      </td>
      <td>
        dtype, dt
      </td>
      <td>
        The damage type to modify. See available damage types
        <a href="./../../features/damage">
          here
        </a>
      </td>
      <td>
        none
      </td>
    </tr>
    <tr>
      <td>
        additive
      </td>
      <td>
        -
      </td>
      <td>
        If true, this damage buff will stack additively with other additive buffs.
      </td>
      <td>
        false
      </td>
    </tr>
    <tr>
      <td>
        element
      </td>
      <td>
        -
      </td>
      <td>
        The element name to modify. See available elements
        <a href="./../../features/elements">
          here
        </a>
      </td>
      <td>
        none
      </td>
    </tr>
  </tbody>
</table>
<p>
  If no damage type is provided the entire attack damage is modified. Otherwise
  only the specific portion of the attack due to the given damage type is
  affected. If an element name is provided, only damage due to that specific
  element will be affected.
</p>
<p>
  You cannot provide both an element and a damage type. When providing an
  element name, the damage type parameter is ignored.
</p>
<p>
  If
  <code>
    additive
  </code>
  is set to
  <code>
    true
  </code>
  , this damage buff will stack with stats like PvE damage, Undead Damage
  (which stacks additively i.e
  <code>
    10% + 10% &lt;=&gt; +20%
  </code>
  ). Otherwise, buffs stack up geometrically i.e
  <code>
    110% * 110% = 121% &lt;=&gt; +21%
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
          example_script
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
          'multiply_damage{amount="1 + &lt;modifier.extra&gt; / 100";damage_type=PHYSICAL;element=FIRE;additive=false}
        </span>
      </span>
    </code>
  </pre>
</div>

## Apply potion effect

<p>
  Gives a potion effect to the target entity, for a given duration, with
  given level. Potion effect names are available on the
  <a href="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html"
  target="_blank" rel="noreferrer">
    Spigot javadocs
  </a>
  .
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Parameter
      </th>
      <th>
        Alias
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
        effect
      </td>
      <td>
        eff, e, type, pe
      </td>
      <td>
        Name of potion effect to take off
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        duration
      </td>
      <td>
        dur, d, ticks, t, time
      </td>
      <td>
        Duration of potion effect in ticks
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        level
      </td>
      <td>
        lvl, l
      </td>
      <td>
        Level of potion effect (0 = level 1, 1 = level 2, etc.)
      </td>
      <td>
        0
      </td>
    </tr>
    <tr>
      <td>
        ambient
      </td>
      <td>
        amb
      </td>
      <td>
        If true, the potion effect will be ambient.
      </td>
      <td>
        false
      </td>
    </tr>
    <tr>
      <td>
        particles
      </td>
      <td>
        part
      </td>
      <td>
        If false, the potion effect will have no particles.
      </td>
      <td>
        true
      </td>
    </tr>
    <tr>
      <td>
        icon
      </td>
      <td>
        ic
      </td>
      <td>
        If false, the potion effect will have no icon.
      </td>
      <td>
        true
      </td>
    </tr>
    <tr>
      <td>
        target
      </td>
      <td>
        -
      </td>
      <td>
        The target entity to set on fire.
      </td>
      <td>
        target or caster
      </td>
    </tr>
  </tbody>
</table>
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
          example_script
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
          'potion{type=INCREASE_DAMAGE;level=5;duration=80;ambient=true;particles=false;icon=true;target=caster}'
        </span>
      </span>
    </code>
  </pre>
</div>

## Remove potion effect

<p>
  Takes off a potion effect from the target entity. Potion effect names
  are available on the
  <a href="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html"
  target="_blank" rel="noreferrer">
    Spigot javadocs
  </a>
  .
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Parameter
      </th>
      <th>
        Alias
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
        effect
      </td>
      <td>
        eff, e, type, pe
      </td>
      <td>
        Name of potion effect to take off
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        target
      </td>
      <td>
        -
      </td>
      <td>
        The target entity to set on fire.
      </td>
      <td>
        target or caster
      </td>
    </tr>
  </tbody>
</table>
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
          example_script
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
          'remove_potion{effect=slowness;target=caster}'
        </span>
      </span>
    </code>
  </pre>
</div>

## Set on fire

<p>
  Sets the target entity on fire for a certain amount of time (in ticks).
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Parameter
      </th>
      <th>
        Alias
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
        ticks
      </td>
      <td>
        t, duration, dur, d, time
      </td>
      <td>
        Amount of time to set the entity on fire for, in ticks.
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        stack
      </td>
      <td>
        add
      </td>
      <td>
        If true, adds the provided ticks to the entity's current fire ticks instead
        of setting it.
      </td>
      <td>
        false
      </td>
    </tr>
    <tr>
      <td>
        max
      </td>
      <td>
        -
      </td>
      <td>
        If true, takes to the maximum between the current fire ticks and the provided
        ticks.
      </td>
      <td>
        false
      </td>
    </tr>
    <tr>
      <td>
        min
      </td>
      <td>
        -
      </td>
      <td>
        If true, takes the minimum between the current fire ticks and the provided
        ticks.
      </td>
      <td>
        false
      </td>
    </tr>
    <tr>
      <td>
        target
      </td>
      <td>
        -
      </td>
      <td>
        The target entity to set on fire.
      </td>
      <td>
        target or caster
      </td>
    </tr>
  </tbody>
</table>
<p>
  <code>
    stack
  </code>
  has precedence over
  <code>
    max
  </code>
  and
  <code>
    min
  </code>
  , and
  <code>
    max
  </code>
  has precedence over
  <code>
    min
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
          example_script
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
          'set_on_fire{ticks=20;stack=false;max=false;min=false;target=target}'
        </span>
      </span>
    </code>
  </pre>
</div>

## Set no damage ticks

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Parameter
      </th>
      <th>
        Alias
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
        ticks
      </td>
      <td>
        t, duration, dur, d, time
      </td>
      <td>
        Duration of invulnerability in ticks
      </td>
      <td>
        10
      </td>
    </tr>
    <tr>
      <td>
        stack
      </td>
      <td>
        add
      </td>
      <td>
        If true, adds the provided ticks to the entity's no damage ticks instead
        of setting it.
      </td>
      <td>
        false
      </td>
    </tr>
    <tr>
      <td>
        max
      </td>
      <td>
        -
      </td>
      <td>
        If true, takes the maximum between the current no damage ticks and the
        provided ticks.
      </td>
      <td>
        false
      </td>
    </tr>
    <tr>
      <td>
        min
      </td>
      <td>
        -
      </td>
      <td>
        If true, takes the minimum between the current no damage ticks and the
        provided ticks.
      </td>
      <td>
        false
      </td>
    </tr>
    <tr>
      <td>
        target
      </td>
      <td>
        -
      </td>
      <td>
        The target entity
      </td>
      <td>
        target or caster
      </td>
    </tr>
  </tbody>
</table>
<p>
  Makes the target entity invulnerable for the provided amount of time (in
  ticks).
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
          example_script
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
          'set_no_damage_ticks{target=caster;ticks="40 + 20 * &lt;modifier.extra&gt;"}'
        </span>
      </span>
    </code>
  </pre>
</div>
