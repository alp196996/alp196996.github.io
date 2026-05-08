# 💖 Buffs & Stats

<div class="warning custom-block">
  <p class="custom-block-title custom-block-title-default">
    WARNING
  </p>
  <p>
    Under construction
  </p>
</div>

## Add Temporary Stats

<p>
  This adds a stat to the player. You can use all the stats within MMOCore
  and MMOItems. It will be removed when the server restarts.
</p>
<p>
  For temporary stat buffs/debuffs, you can add a duration using the
  <code>
    lifetime
  </code>
  parameter (in ticks). Set
  <code>
    relative
  </code>
  to
  <code>
    true
  </code>
  and the buff will grant 10% Atk Damage instead of a flat +10 Atk Damage.
</p>
<p>
  The
  <code>
    key
  </code>
  parameter is optional. It's the key you need to provide to remove your
  modifier later on if you need. There can be multiple stats using the same
  key, and using the
  <code>
    remove_stat
  </code>
  mechanic with that key will remove all of them.
</p>
<p>
  Set
  <code>
    unique
  </code>
  to
  <code>
    true
  </code>
  if you want only one modifier with the same key to be active at a time.
  <strong>
    If a new modifier is added with the same key, it will replace the previous
    one.
  </strong>
  This is useful for buffs that you want to refresh periodically.
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
          script_give_stat
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
          'add_stat{amount="10 + &lt;modifier.extra&gt;";time="20 * (1 + &lt;modifier.extra_time&gt;
          )";stat=ATTACK_DAMAGE;key=my_custom_skill;relative=false;target=caster;unique=false}'
        </span>
      </span>
    </code>
  </pre>
</div>

## Remove Temporary Stats

<p>
  The following mechanic removes all stat modifiers with the associated
  <code>
    key
  </code>
  . It does not matter if the stat modifiers are temporary or permanent.
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
          script_rem_stat
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
          'remove_stat{stat=ATTACK_DAMAGE;key=my_custom_skill;target=caster}'
        </span>
      </span>
    </code>
  </pre>
</div>

## Heal target

<p>
  <code>
    reason
  </code>
  (why the target is being healed) is optional (
  <code>
    CUSTOM
  </code>
  by default). It's better to indicate it so that other plugins know the
  healing source. Available sources
  <a href="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/entity/EntityRegainHealthEvent.RegainReason.html"
  target="_blank" rel="noreferrer">
    here
  </a>
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
          script_health_target
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
          'heal{amount="10 + &lt;caster.health&gt; / 50";reason=CUSTOM;target=caster}'
        </span>
      </span>
    </code>
  </pre>
</div>

## Give food to target

<p>
  Highest food level is 20. A player's food level is always an integer (unlike
  health). This mechanic
  <strong>
    SETS
  </strong>
  the player's food level.
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
          give_food_script
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
          'feed{amount="10 + 8 / 2";target=caster}'
        </span>
      </span>
    </code>
  </pre>
</div>

## Restore saturation of target

<p>
  This mechanic
  <strong>
    SETS
  </strong>
  the target's saturation level.
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
          set_sat_level
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
          'saturate{amount="10 + 1";target=caster}'
        </span>
      </span>
    </code>
  </pre>
</div>
