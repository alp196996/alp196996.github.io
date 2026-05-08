# 🗡️ On-Hit Effects

<p>
  <em>
    On-Hit Effects
  </em>
  are special effects that trigger when a player deals damage to another
  entity (either a monster or a player).
</p>
<p>
  For instance,
  <em>
    Skill
  </em>
  and
  <em>
    Weapon Critical Strikes
  </em>
  are considered on-hit effects.
  <em>
    Lifesteal
  </em>
  , which heals the attacker based on a percentage of the damage dealt,
  is another example of an on-hit effect.
  <em>
    Manasteal
  </em>
  , which restores mana to the attacker based on a percentage of the damage
  dealt, is also an on-hit effect.
</p>
<p>
  Most on-hit effects directly depend on numerical player stats, such as
  <em>
    Critical Strike Chance
  </em>
  or
  <em>
    Lifesteal Percentage
  </em>
  . In this page, we go over the built-in on-hit effects provided by MythicLib,
  as well as how to create custom ones.
</p>

## Builtin On-Hit Effects

<p>
  MythicLib comes with several on-hit effects built in, including:
</p>
<ul>
  <li>
    <em>
      Weapon
    </em>
    &amp;
    <em>
      Skill Critical Strikes
    </em>
  </li>
  <li>
    <em>
      Lifesteal
    </em>
    ,
    <em>
      Skill Vampirism
    </em>
  </li>
</ul>

## Custom On-Hit Effects

<p>
  You can create your own custom on-hit effects by adding new sections to
  the
  <code>
    MythicLib/on_hit_effects.yml
  </code>
  file. Each section should follow the same structure as the built-in on-hit
  effects. The next section goes over the different parameters available
  for on-hit effects, using
  <em>
    Weapon Critical Strikes
  </em>
  as an example.
</p>
<p>
  While you can certainly recreate similar
  <em>
    On-Hit Effects
  </em>
  using other plugins or scripting solutions, MythicLib aims to provide
  an easy-to-use framework finetuned to RPG server use cases.
</p>

## An Example

<p>
  All on-hit effects are configured in the
  <code>
    MythicLib/on_hit_effects.yml
  </code>
  file. Each on-hit effect has its own section in the file, where you can
  customize its behavior and parameters. Let us go over the built-in config
  section for
  <em>
    Weapon Critical Strikes
  </em>
  as an example:
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
          weapon_crits
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          pre_attack
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          skill_crit_script_check
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Formula for cooldown between two consecutive weapon crits (in seconds)
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # To disable cooldown, delete this line, or comment it out
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          cooldown
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '3 * (1 - &lt;stat.critical_strike_cooldown_reduction&gt; / 100)'
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Chance to successfully perform a weapon crit
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # This formula should return a value between 0 and 1 (0 being 0% chance,
          1 being 100% chance)
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Note that, by default, weapon crit strike is capped at 80% (see stats.yml)
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          roll
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '&lt;stat.critical_strike_chance&gt; / 100'
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Script/skill ran on weapon crit
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          on_attack
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          weapon_crit_script
        </span>
      </span>
    </code>
  </pre>
</div>

### Cooldown

<p>
  The option
  <code>
    cooldown
  </code>
  indicates that such on-hit effect has a cooldown. It cannot occur more
  frequently than once every X seconds, where X is the value returned by
  the formula. The default formula for
  <em>
    Weapon Critical Strikes
  </em>
  is
  <code>
    3 * (1 - &lt;stat.critical_strike_cooldown_reduction&gt; / 100)
  </code>
  , meaning that the base cooldown is 3 seconds, but it can be reduced by
  the player's
  <em>
    Critical Strike Cooldown Reduction
  </em>
  stat.
</p>
<p>
  This is an optional parameter. If you wish to disable the cooldown for
  an on-hit effect, simply delete the
  <code>
    cooldown
  </code>
  line or comment it out.
</p>

### Roll

<p>
  The option
  <code>
    roll
  </code>
  is a formula that returns the chance of successfully performing the on-hit
  effect. The formula should return a value between 0 and 1, where 0 means
  0% chance and 1 means 100% chance. In the case of
  <em>
    Weapon Critical Strikes
  </em>
  , the default formula is
  <code>
    &lt;stat.critical_strike_chance&gt; / 100
  </code>
  , meaning that if the player has 25%
  <em>
    Critical Strike Chance
  </em>
  , they have a 25% chance to perform a weapon critical strike on each attack.
</p>
<p>
  This is an optional parameter. If you wish for the on-hit effect to always
  trigger (when not on cooldown), simply set the value to
  <code>
    1
  </code>
  .
</p>

### Pre-Attack Script

<p>
  The script
  <code>
    pre_attack
  </code>
  is executed before the on-hit effect is rolled for. It can be used to
  set up any necessary variables or conditions for the on-hit effect. In
  the case of
  <em>
    Weapon Critical Strikes
  </em>
  , the default script is
  <code>
    skill_crit_script_check
  </code>
  , which makes sure that the attack contains either
  <em>
    Weapon
  </em>
  or
  <em>
    Unarmed
  </em>
  damage, as weapon crits only apply on these damage types.
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
          skill_crit_script_check
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
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
          'has_damage_type{types="skill"}'
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  This is an optional parameter. If you do not need any pre-attack setup,
  you can simply omit the
  <code>
    pre_attack
  </code>
  line.
</p>
<div class="info custom-block">
  <p class="custom-block-title custom-block-title-default">
    INFO
  </p>
  <p>
    Note that all built-in scripts used by on-hit effects are all located
    in the
    <code>
      MythicLib/script/on_hit_effects
    </code>
    config file. You can view and edit them as you wish.
  </p>
</div>

### Attack Script

<p>
  Last but not least, the script
  <code>
    on_attack
  </code>
  is executed when the on-hit effect successfully triggers. This script
  only executes if the following conditions are met:
</p>
<ul>
  <li>
    the on-hit effect is not on cooldown,
  </li>
  <li>
    the roll check is successful,
  </li>
  <li>
    any conditions specified in the
    <code>
      pre_attack
    </code>
    script are met,
  </li>
  <li>
    the Bukkit event
    <code>
      OnHitEffectEvent
    </code>
    is not cancelled by any plugin.
  </li>
</ul>
<p>
  In the case of
  <em>
    Weapon Critical Strikes
  </em>
  , the default script is
  <code>
    weapon_crit_script
  </code>
  , which applies the critical strike damage multiplier to the attack.
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
          weapon_crit_script
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
          # increase weapon/unarmed damage by crit power
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'set_double{var=crit_coef;val="&lt;stat.critical_strike_power&gt; / 100"}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'multiply_damage{scalar="&lt;crit_coef&gt;";dtype=WEAPON}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'multiply_damage{scalar="&lt;crit_coef&gt;";dtype=UNARMED}'
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # play sound and particle effect
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #Uncomment for an action bar message
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #- 'action_bar{m="&amp;6You landed a crit for &amp;c&lt;attack.damage&gt;
          &amp;6damage!";target=caster;priority=40;duration=30}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "play_sound{sound=ENTITY_PLAYER_ATTACK_CRIT;volume=1;pitch=1}"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "particle{particle=CRIT;amount=32;offset_x=.5;offset_y=.5;offset_z=.5;speed=0.5;target_location={type=target;position=BODY}}"
        </span>
      </span>
    </code>
  </pre>
</div>

### Skip Event

<p>
  This is an optional parameter for performance. Set
  <code>
    skip_event
  </code>
  to
  <code>
    true
  </code>
  to skip firing the
  <code>
    OnHitEffectEvent
  </code>
  Bukkit event when this on-hit effect triggers. This way, this on-hit event
  cannot be listened to or cancelled by any plugin.
</p>
