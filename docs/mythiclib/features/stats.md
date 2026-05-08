# 💪 Player Stats

<p>
  MMOItems and MMOCore share the same stat system. Any stat that you gain
  through an MMOItems item, MMOCore class, or item placed inside a MMOInventory
  inventory, will propagate to all MMO plugins.
</p>

## Temporary Stats

<p>
  Temporary stats, or
  <em>
    stat modifiers
  </em>
  , are stats boosts/debuffs that are given to players for a limited/unlimited
  amount of time. In either way, these stats are removed when the server
  restarts.
</p>

### Using a script

<p>
  Note that you can give temporary stats to players using the
  <code>
    add_stat
  </code>
  script mechanic. You will find more information on
  <a href="./../scripts/mechanics/buffs#add-temporary-stats">
    this wiki page
  </a>
  . These stats will be removed when the server restarts.
</p>

### Using commands

<p>
  The easiest way to provide temporary stats to players is through commands.
</p>
<div class="language-cmd">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
    cmd
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          /ml stat
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          add
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          &lt;
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          player
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          &gt;
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          &lt;
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          stat
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          &gt;
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          &lt;
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          amount
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          &gt;
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (duration) (key) (unique)
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          /ml stat
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          remove
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          &lt;
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          player
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          &gt;
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          &lt;
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          stat
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          &gt;
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          &lt;
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          key
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          &gt;
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          /ml stat
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          clear
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          &lt;
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          player
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          &gt;
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          &lt;
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          key
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          &gt;
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  Using the
  <code>
    add
  </code>
  subcommand, you can provide a stat modifier to a player.
</p>
<ul>
  <li>
    If you provide a duration through the
    <code>
      duration
    </code>
    parameter (in ticks), the stat will be temporary and removed after that
    time.
  </li>
  <li>
    If you provide a
    <code>
      key
    </code>
    , you can later remove this stat modifier using the
    <code>
      remove
    </code>
    subcommand. If you do not provide any, it will use the default key
    <code>
      default
    </code>
    .
  </li>
  <li>
    If you set
    <code>
      unique
    </code>
    to true, only one modifier with the same key will be active at a time;
    adding a new one will replace the previous one. This is useful for buffs
    that you want to refresh periodically.
  </li>
</ul>
<div class="tip custom-block">
  <p class="custom-block-title">
    Example
  </p>
  <p>
    The following command provides a flat +10 Attack Damage stat to the player
    <code>
      Notch
    </code>
    for 5 seconds (100 ticks), using the key
    <code>
      my_custom_buff
    </code>
    . If you execute the same command again, it will not override the previous
    one since
    <code>
      unique
    </code>
    is set to false, and it will stack with itself.
  </p>
  <div class="language-cmd">
    <button title="Copy Code" class="copy">
    </button>
    <span class="lang">
      cmd
    </span>
    <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
    tabindex="0" dir="ltr">
      <code>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            /ml stat
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            add
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            Notch ATTACK_DAMAGE
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            10
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            100
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            my_custom_buff
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            false
          </span>
        </span>
      </code>
    </pre>
  </div>
</div>
<p>
  Using the
  <code>
    remove
  </code>
  subcommand, you can remove a specific stat modifier from a player using
  its
  <code>
    key
  </code>
  .
</p>
<div class="tip custom-block">
  <p class="custom-block-title">
    Example
  </p>
  <p>
    The following command unregisters the stat modifier given in the previous
    example.
  </p>
  <div class="language-cmd">
    <button title="Copy Code" class="copy">
    </button>
    <span class="lang">
      cmd
    </span>
    <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
    tabindex="0" dir="ltr">
      <code>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            /ml stat
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            remove
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            Notch ATTACK_DAMAGE my_custom_buff
          </span>
        </span>
      </code>
    </pre>
  </div>
</div>
<p>
  Using the
  <code>
    clear
  </code>
  subcommand, you can remove all stat modifiers with the associated
  <code>
    key
  </code>
  from a player.
</p>
<div class="tip custom-block">
  <p class="custom-block-title">
    Example
  </p>
  <p>
    The following command removes all stat modifiers with the key
    <code>
      my_custom_buff
    </code>
    from the player
    <code>
      Notch
    </code>
    .
  </p>
  <div class="language-cmd">
    <button title="Copy Code" class="copy">
    </button>
    <span class="lang">
      cmd
    </span>
    <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
    tabindex="0" dir="ltr">
      <code>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            /ml stat
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            clear
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            Notch my_custom_buff
          </span>
        </span>
      </code>
    </pre>
  </div>
</div>

## Min/Max Stat Values

<p>
  Minimum and maximum values for the stat values. This means using '0 =
  100' for CRITICAL_STRIKE_CHANCE means that you cannot have less than 0%
  and cannot have more than 100% critical strike chance. This is an important
  tool for server balance. You can balance stats like block rating, defense,
  max health, damage reduction etc.
</p>
<ul>
  <li>
    General format is
    <code>
      {min_value} = {max_value}
    </code>
  </li>
  <li>
    Using only
    <code>
      = {max_value}
    </code>
    will disable the lower bound.
  </li>
  <li>
    Using only
    <code>
      {min_value} =
    </code>
    will disable the upper bound.
  </li>
  <li>
    If nothing is specified, there are no upper nor lower bounds.
  </li>
</ul>
<div class="info custom-block">
  <p class="custom-block-title custom-block-title-default">
    INFO
  </p>
  <p>
    There is a slight difference between base stat value and minimal value.
    Min/max values are used to clamp the total stat value. The total stat value
    is the sum of the base stat value and all modifiers. In other words, the
    base stat value is like a permanent stat buff.
  </p>
</div>
<p>
  You will find the following code snippet inside the
  <code>
    MythicLib/stats.yml
  </code>
  config file.
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
          min-max-values
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Crits
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          CRITICAL_STRIKE_CHANCE
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '0 = 80'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          CRITICAL_STRIKE_POWER
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '0 = 500'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          SKILL_CRITICAL_STRIKE_CHANCE
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '0 = 80'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          SKILL_CRITICAL_STRIKE_POWER
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '0 = 500'
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Mitigation
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          BLOCK_RATING
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '0 = 80'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          DODGE_RATING
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '0 = 80'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          PARRY_RATING
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '0 = 80'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          BLOCK_POWER
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '25 = 75'
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          BLOCK_COOLDOWN_REDUCTION
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '0 = 80'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          DODGE_COOLDOWN_REDUCTION
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '0 = 80'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          PARRY_COOLDOWN_REDUCTION
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '0 = 80'
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Other
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          MOVEMENT_SPEED
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '0 = .3'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          DEFENSE
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '0 = 10000'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          SPEED_MALUS_REDUCTION
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '0=80'
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Add as many as you want.
        </span>
      </span>
    </code>
  </pre>
</div>

## Base Stat Values

<p>
  This is where you can edit the base value of any stat. This has the exact
  same effect as a permanent stat buff. If a MMOCore class gives you 20 base
  HP, and if the base value in this config section is set to 10, it will
  result in 20 + 10 = 30 HP. It also works like that with MMOItems items
  as well.
</p>
<p>
  This is also an important tool for balancing your player stats. Note:
  If this value is lower than your minimum stat value (see above), it is
  most likely useless because your stat value will not be buffed.
</p>
<p>
  Default Minecraft stats like Health, Armor, Attack damage.... add up their
  vanilla base value. If you specify - say 1 Attack Damage -, this 1 will
  add up to the default player's attack damage which is 1, for a total of
  2 Attack Damage when not holding any item.
</p>
<div class="warning custom-block">
  <p class="custom-block-title custom-block-title-default">
    WARNING
  </p>
  <p>
    Note that there are both
    <code>
      MythicLib/stats.yml
    </code>
    and
    <code>
      MMOCore/stats.yml
    </code>
    . While they both define default player stat values, MMOCore has priority
    over MythicLib. Last but not least, stat formulas provided inside
    <a href="./../../mmocore/features/classes#class-stats">
      MMOCore class configs
    </a>
    override both of these configs.
  </p>
</div>
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
          base-stat-value
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Crits. By default, crits deal 2x damage
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          CRITICAL_STRIKE_POWER
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          200
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          SKILL_CRITICAL_STRIKE_POWER
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          200
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Mitigation
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          BLOCK_POWER
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          25
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Add as many as you want.
        </span>
      </span>
    </code>
  </pre>
</div>
