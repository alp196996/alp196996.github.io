# 🔧 Miscellaneous

<div class="warning custom-block">
  <p class="custom-block-title custom-block-title-default">
    WARNING
  </p>
  <p>
    Under construction
  </p>
</div>

## Apply cooldown

<p>
  In MMOItems/MMOCore, any object that has a cooldown (an item, parrying,
  dodging, a skill etc.) has a cooldown key associated with it (see
  <a href="./../variables#cooldownmap">
    here
  </a>
  ). As long as it's not being used in MMOItems/MMOCore, you can claim any
  string key for your plugin and use it for anything.
</p>
<p>
  MythicLib fully lets you setup cooldowns. Paired with cooldown conditions
  you can fully check, compute and apply cooldowns inside of your scripts.
</p>
<p>
  Cooldown value is in seconds.
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
          example_mechanic
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
          'apply_cooldown{path=myplugin_someskill;value=10}'
        </span>
      </span>
    </code>
  </pre>
</div>

## Reduce cooldown of target

</h2>
<div class="tip custom-block">
  <p class="custom-block-title custom-block-title-default">
    TIP
  </p>
  <p>
    First learn above the mechanic above.
  </p>
</div>
<p>
  <code>
    value
  </code>
  determines the amount of cooldown reduction, by default in seconds. Parameter
  <code>
    reduction
  </code>
  determines the "reduction mode" as explained below.
</p>
<p>
  If the mode is set to
  <code>
    FLAT
  </code>
  , target cooldown will be reduced by a set amount of seconds. If the mode
  is set to
  <code>
    INITIAL
  </code>
  , target cooldown will be reduced by X% of its initial value. For an initial
  cooldown of 10s, a 20% cooldown reduction with mode
  <code>
    INITIAL
  </code>
  will reduce the target cooldown by
  <code>
    20% * 10 = 2s
  </code>
  .
</p>
<p>
  If the mode is set to
  <code>
    REMAINING
  </code>
  , target cooldown will be reduced by X% of its remaining (not total) value.
  For a 10s cooldown, if 3s have passed, remaining cooldown is 7s. A 20%
  remaining cooldown reduction is equivalent to a flat
  <code>
    20% * (10 - 3) = 1.4s
  </code>
  cooldown reduction.
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
          example_mechanic
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
          'reduce_cooldown{path=myplugin_someskill;value=5;reduction=FLAT}'
        </span>
      </span>
    </code>
  </pre>
</div>

## Adding delay to your script

<p>
  Delay is in
  <strong>
    ticks
  </strong>
  . ML will wait a certain number of ticks before executing the next mechanic.
  Make sure the delay parameter is above zero.
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
          example_mechanic
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
          'delay{amount=10}'
        </span>
      </span>
    </code>
  </pre>
</div>

## Dispatch a command

<p>
  Set
  <code>
    from_console
  </code>
  to
  <code>
    true
  </code>
  to have the command dispatched by console instead, otherwise ML takes
  the script target entity. Set
  <code>
    op
  </code>
  to true to have the command ran as op.
  <code>
    target
  </code>
  is optional.
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
          example_mechanic
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
          'dispatch_command{from_console=true;op=false;format="mmocore admin skill-points
          add &lt;caster.name&gt; 10";target=caster}'
        </span>
      </span>
    </code>
  </pre>
</div>

## Play an entity effect

<p>
  Entity effects available
  <a href="https://hub.spigotmc.org/javadocs/spigot/org/bukkit/EntityEffect.html"
  target="_blank" rel="noreferrer">
    on the Spigot javadocs
  </a>
  . For instance,
  <code>
    HURT
  </code>
  is very useful, it just simulates a 0-damage attack - perfect for improving
  skills with non-damaging effects -.
  <code>
    target
  </code>
  is the entity on which the effect will be played. If not provided, it
  defaults to the script target entity, or script caster.
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
          'entity_effect{effect=HURT;target=target}'
        </span>
      </span>
    </code>
  </pre>
</div>

## Trigger a lightning strike

<p>
  Setting
  <code>
    effect
  </code>
  to
  <code>
    false
  </code>
  makes the lightning deal no damage.
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
          'lightning_strike{effect=false;target_location=target}'
        </span>
      </span>
    </code>
  </pre>
</div>

## Cast another script

<p>
  This mechanic is pretty special. It can be used to cast another script
  will specific target entities and locations. It can also be used to modify
  the source location of a script.
</p>
<p>
  All of its parameters are optional. You can provide an entity targeter
  (for the script target entity, through
  <code>
    target
  </code>
  ) and two location targeters (one for the script source location through
  <code>
    source
  </code>
  , and one for the script target location through
  <code>
    target_location
  </code>
  ).
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
          'script{name=other_script_name;target=......;target_location=.....;source=.....}'
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Other script being called
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          other_script_name
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # ..
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  This can also be used to cast the same script multiple times in a row,
  while counting the amount of times it has been cast so far. The following
  script casts 12 times the script called
  <code>
    ite
  </code>
  . The variable
  <code>
    iteration_count
  </code>
  is used to count the amount of times the script has been cast so far.
  It can therefore be accessed using the placeholder
  <code>
    &lt;iteration_count&gt;
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
          'script{name=iterated_script;iterations=12;counter=iteration_count}'
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Script ran multiple times
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          iterated_script
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
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Can use variable "iteration_count" inside this script
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'give_item{material=DIAMOND;amount=&lt;var.iteration_count&gt;;target=caster}'
        </span>
      </span>
    </code>
  </pre>
</div>

## Give an item

<p>
  Give a vanilla item to a player.
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
          'give_item{amount=&lt;modifier.amount&gt;;material=DIAMOND;target=caster}'
        </span>
      </span>
    </code>
  </pre>
</div>

## Shoot an arrow

<p>
  Have the player shoot an arrow.
  <code>
    from_item
  </code>
  is used by MMOItems for weapon types.
  <code>
    player_attack_damage
  </code>
  makes the arrow use the player's attack damage attribute as base damage.
  <code>
    velocity
  </code>
  is a multiplier for the arrow's speed. Default is 1.0 (normal speed).
</p>
<p>
  <code>
    damage_types
  </code>
  is a comma-separated list of damage types to apply to the arrow. By default,
  arrows deal physical/weapon damage unless modified in the MythicLib config
  file.,
</p>
<p>
  <code>
    hit
  </code>
  is the name of a script to be executed when the arrow hits an entity or
  block.
  <code>
    land
  </code>
  is the name of a script to be executed when the arrow lands on the ground
  without hitting anything.
  <code>
    tick
  </code>
  is the name of a script to be executed every tick while the arrow is flying.
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
          'shoot_arrow{from_item=false;player_attack_damage=false;hit=on_hit_script;land=on_land_script;tick=on_tick_script;velocity=1.5;damage_types="physical,weapon"}'
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          on_hit_script
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #.....
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          on_land_script
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #.....
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          on_tick_script
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
          'particle{effect=FLAME}'
        </span>
      </span>
    </code>
  </pre>
</div>

## Cancel event

<p>
  If the script was triggered by an event (like EntityDamageByEntityEvent,
  PlayerInteractEvent, etc.), this mechanic will cancel that event. Otherwise,
  it will print out an error.
</p>
<p>
  This can be used to prevent damage during an entity damage event, for
  instance.
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
          'cancel_event{}'
        </span>
      </span>
    </code>
  </pre>
</div>
