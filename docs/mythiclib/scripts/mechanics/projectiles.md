# 🏹 Projectiles

## Shoot Arrow

<p>
  Use this mechanic to have the skill caster fire an arrow.
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
        from_item
      </td>
      <td>
        -
      </td>
      <td>
        When true, MMOItems will take into account the bow stats for crits, attack
        damage...
      </td>
      <td>
        false
      </td>
    </tr>
    <tr>
      <td>
        player_attack_damage
      </td>
      <td>
        -
      </td>
      <td>
        Whether to use the player's attack damage attribute as base damage for
        the arrow.
      </td>
      <td>
        false
      </td>
    </tr>
    <tr>
      <td>
        velocity
      </td>
      <td>
        vel, speed, sp
      </td>
      <td>
        Multiplier for the arrow's speed.
      </td>
      <td>
        1.0
      </td>
    </tr>
    <tr>
      <td>
        hit
      </td>
      <td>
        -
      </td>
      <td>
        Script called when the arrow hits an entity or block.
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        land
      </td>
      <td>
        -
      </td>
      <td>
        Script called when the arrow lands on the ground without hitting anything.
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        tick
      </td>
      <td>
        -
      </td>
      <td>
        Script called every tick while the arrow is flying.
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        damage_types
      </td>
      <td>
        -
      </td>
      <td>
        Comma-separated list of damage types to apply to the arrow.
      </td>
      <td>
        <code>
          *
        </code>
      </td>
    </tr>
  </tbody>
</table>
<p>
  <code>
    *
  </code>
  The default damage types are the ones provided in the MythicLib config
  file for bow attacks.
</p>
<p>
  The following script is used by MMOItems to handle attacks from the
  <em>
    Crossbow
  </em>
  weapon type. It makes sure that arrows are only consumed when not in creative
  mode or when the arrow has the
  <code>
    MMOITEMS_DISABLE_ARROW_CONSUMPTION
  </code>
  tag. It also makes the arrow shoot faster based on the player's
  <code>
    arrow_velocity
  </code>
  stat, and adds a particle effect to the flying arrow.
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
          crossbow_attack
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          public
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
          'ammo{item=ARROW;creative_infinite=true;item_ignore_tag=MMOITEMS_DISABLE_ARROW_CONSUMPTION}'
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
          'take_ammo{item=ARROW;creative_infinite=true;item_ignore_tag=MMOITEMS_DISABLE_ARROW_CONSUMPTION}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'play_sound{sound=ENTITY_ARROW_SHOOT;pitch=.5}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'shoot_arrow{from_item=true;player_attack_damage=true;tick=crossbow_arrow_tick;velocity="non_zero(&lt;stat.arrow_velocity&gt;,
          1) * 3"}'
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          crossbow_arrow_tick
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
          'particle{particle=CRIT;speed=.05}'
        </span>
      </span>
    </code>
  </pre>
</div>

## Shulker Bullet

<p>
  Use this mechanic to have the skill caster fire a shulker bullet.
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
        life_span
      </td>
      <td>
        lifetime, l, ticks, duration, dur, d
      </td>
      <td>
        The lifespan of the shulker bullet in ticks.
      </td>
      <td>
        60
      </td>
    </tr>
    <tr>
      <td>
        hit_entity
      </td>
      <td>
        -
      </td>
      <td>
        Script called when the shulker bullet hits an entity.
      </td>
      <td>
        -
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
          shoot_shulker_bullet
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
          'shoot_shulker_bullet{life_span=100;hit_entity=shulker_bullet_hit}'
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          shulker_bullet_hit
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
          'damage{dmg=10}'
        </span>
      </span>
    </code>
  </pre>
</div>
