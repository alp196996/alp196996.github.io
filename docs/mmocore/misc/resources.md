# 💖 Player Resources

<p>
  There are four player resources in MMOCore, with different objectives.
  These resources regenerate over time.
</p>
<ul>
  <li>
    <strong>
      health
    </strong>
  </li>
  <li>
    <strong>
      mana
    </strong>
    and
    <strong>
      stamina
    </strong>
    , used to cast
    <a href="./../skills/intro">
      skills
    </a>
    and use items
  </li>
  <li>
    <strong>
      stellium
    </strong>
    , used for
    <a href="./../features/waypoints">
      waypoints
    </a>
  </li>
</ul>

## Base Resource Regen

<p>
  MMOCore has
  <strong>
    two
  </strong>
  types of resource regen. First of all, every class has a base
  <strong>
    flat
  </strong>
  resource regeneration stat, for any of the four resource. For instance,
  <em>
    10 Stamina Regen
  </em>
  means that players regenerate 10 stamina points every second. If you toggle
  on the
  <code>
    off-combat-stamina-regen
  </code>
  class option, players will only regenerate that flat amount when they
  are out of combat.
</p>
<p>
  Every class also has another regeneration stat, like
  <code>
    Max Health Regeneration
  </code>
  which is expressed in % max health per second. It is the percentage of
  your maximum health that you will regenerate every second. This second
  stat stacks up with the first regen.
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
          # classes/mage/mage.yml
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          options
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          off-combat-health-regen
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
          attributes
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          health-regeneration
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
          0.13
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
          0
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          max-health-regeneration
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
          1
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
          0
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  In the default MMOCore config, mages only regenerate their health when
  they are out of combat,
  <em>
    as they are rather weak and must concentrate to get their forces back
  </em>
  . Mages have a base regen of 0.13 health + 1% of their max health/sec.
</p>

## Special Resource Regen

<p>
  This second type of resource regen in MMOCore can almost be considered
  a passive skill. Classes can be setup to have special type of resource
  regen, that scales on the player's amount of max/missing resource. This
  special resource regen can also be toggled off during combat.
</p>
<p>
  This can be particularly useful if you want to develop new classes which
  have a special type of resource. For instance, warriors with
  <em>
    Rage
  </em>
  instead of
  <em>
    Mana
  </em>
  , can have their Rage slowly decrease when out of combat at a more flexible
  rate.
</p>
<p>
  The rate at which the resources regenerate (or is lost) can be configured
  as well. You can also make it so that regen does not apply when in combat,
  by toggling off the
  <code>
    off-combat
  </code>
  option.
  <strong>
    Unlike the first type of resource regen, this one is completely independant
    of the items the player is wearing. It only depends on the player's level.
  </strong>
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
          resource
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Health resource
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          health
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          type
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          MAX
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          value
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
          10
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
          max
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          20
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          off-combat
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
          # Mana resource
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          mana
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          type
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          MISSING
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #......
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Other resources....
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  That would be a really OP melee fighting class where players would regen
  10-20% of their maximum health (based on their current level) every second,
  when out of combat.
</p>
<p>
  The
  <code>
    type
  </code>
  option is either
  <code>
    MAX
  </code>
  (scales with max resource) or
  <code>
    MISSING
  </code>
  (scales with missing resource) depending on what you want the resource
  regen to scale on. The
  <code>
    value
  </code>
  entry corresponds to the % of resource regenerated every second. You may
  use the
  <code>
    min
  </code>
  and
  <code>
    max
  </code>
  options to create bounded linear functions of the player level.
</p>
