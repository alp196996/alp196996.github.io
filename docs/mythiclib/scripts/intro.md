# 📜 Introduction

<p>
  MythicLib provides a custom scripting language that allows you to perform
  actions, check conditions... to create custom behaviours for all MMO plugins.
  Scripts can be used to send messages, play particle effects, check for
  conditions, damage other entities, and many other things.
</p>
<p>
  Scripts perform specific actions which are called
  <a href="./mechanics/intro">
    mechanics
  </a>
  . You can also setup
  <a href="./mechanics/intro">
    conditions
  </a>
  which have to be met for the script to run. Some mechanics require parameters
  like entities or positions: for instance if you'd like to spawn a particle
  at a given position, you need to specify that exact position, which is
  done using
  <a href="./targeters/intro">
    targeters
  </a>
  . There are targeters for both entities and locations.
</p>
<p>
  MythicLib scripts also feature
  <a href="./variables">
    variables
  </a>
  which you can use to save temporary information or do computations. For
  instance MythicLib has a wide variety of mechanics that you can use for
  vector calculation.
</p>
<p>
  MythicLib scripts can also be turned into MMOCore class skills or MMOItems
  item abilities, more information on this
  <a href="./../skills/custom/mythiclib">
    wiki page
  </a>
  .
</p>

## Very Important!

<div class="warning custom-block">
  <p class="custom-block-title custom-block-title-default">
    WARNING
  </p>
  <p>
    <strong>
      Scripts are not skills!
    </strong>
    You can turn scripts into skills, but not the other way around. MythicLib
    scripts are a way to implement skills which will then be used in MMOCore
    or MMOItems. Fabled and MythicMobs also provide their script/skill systems.
    Overall, the MythicLib scripting language is less capable but great for
    handling basic tasks and too-not-complex skills. You don't need to install
    anything else to use MythicLib scripts, they are built-in and ready to
    use.
  </p>
</div>
<p>
  The primary goal of the MythicLib custom skill system is the ability to
  register skills with the plugin which you like to program the most with.
  If MMOItems or MMOCore asks you to use ML scripts you can always use MythicMobs
  or Fabled instead to have custom scripts executed.
</p>
<p>
  Since scripts are used in MMOCore and MMOItems, they are heavily oriented
  towards creating custom abilities, skills or attack effects. Therefore,
  they feature premade tools like shaped mechanics which let you easily display
  cool particle effects, raycasts, projectiles etc.
</p>

## Script Example

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
          teststaff
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # The name of your script/the skill ID for MMOCore usage, this should
          be in full caps for MMOCore. (also called up with /ml cast *skill ID*)
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
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          raycast
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # This is a mechanic name. (this name can be whatever you want as long
          as it isn't the same as any other mechanic name in the file.)
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
          raytrace
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # This tells the script what mechanic to use, a list of mechanics can
          be found in the mechanics tab.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          hit_entity
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          teststaff_hit_entity
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # This calls upon another script when hitting an entity.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          tick
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          teststaff_tick
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # This calls upon another script on every tick. (A second is 20 ticks.)
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          size
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          1
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          teststaff_hit_entity
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # The name of a script, used to call upon this script in another script.
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
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          dealdamage
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
          damage
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # What mechanic to use.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          amount
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          10
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Sets the damage/mechanic parameter.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          showparticles
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # This is another mechanic name.
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
          particle
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # What mechanic to use.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          particle
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          LAVA
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # This sets which particle it should show/parameter 1.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          amount
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          32
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # This sets the amount of particles to use/parameter 2.
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          teststaff_tick
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # The name of a script, used to call upon this script in another script.
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
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          showparticles
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
          particle
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          particle
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          REDSTONE
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          amount
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          4
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          x
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          .5
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # This sets how far the particles can move on the x-axis on both sides
          around the source.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          y
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          .5
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # This sets how far the particles can move on the y-axis on both sides
          around the source.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          z
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          .5
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # This sets how far the particles can move on the z-axis on both sides
          around the source.
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  When a player runs the
  <code>
    teststaff
  </code>
  script it will send out a ray of redstone particles to the first entity
  in the casters line of sight and then at said entity and deals 10 damage.
</p>
<p>
  You can then reload your ML scripts using
  <code>
    /ml reload
  </code>
  and cast your new skill using
  <code>
    /ml cast YOUR_SCRIPT_NAME_HERE
  </code>
</p>

## Numeric Parameters

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
          dealdamage
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
          damage
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          amount
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '10 + &lt;var.damage&gt; / 2'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          target
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
          caster
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          knockback
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          false
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
          MAGIC,ON_HIT
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  Many mechanics include "numeric parameters": the amount of damage dealt
  by the
  <code>
    damage
  </code>
  mechanic, the duration in ticks of a potion effect being applied, the
  radius of a particle sphere...
</p>
<p>
  99% of these mechanics fully support mathematical formulas. This means
  that you can use numbers in conjunction with commonly used operators, math
  functions, and even PAPI placeholders to unlock full configurability with
  your custom skills. Numerical formulas also support
  <a href="./variables">
    internal variables
  </a>
  as described below.
</p>

## Text Parameters

<p>
  Mechanics which require strings support placeholders from PlaceholderAPI,
  although these are not the only placeholders you can use. MythicLib also
  has
  <a href="./variables">
    internal variables
  </a>
  that you can access using
  <code>
    &lt;...&gt;
  </code>
  instead of the usual
  <code>
    %...%
  </code>
  format from PlaceholderAPI.
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
          tellmsg
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
          tell
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          format
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'Skill was cast at &lt;source.x&gt; - &lt;source.y&gt; - &lt;source.z&gt;
          by %player_name%!!'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          target
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
          caster
        </span>
      </span>
    </code>
  </pre>
</div>

## JSON/YAML Syntaxes

<p>
  The two following formats for a skill are totally equivalent and both
  will work just fine, so you might just use the one you like the best. If
  you are more familiar with MythicMobs, use the second one. If you are more
  familiar with pure YAML or even Fabled, use the first one. The second JSON-ish
  format is only available starting with MythicLib 1.6.2+ development builds.
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
          staff_attack
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
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          raycast
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
          raytrace
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          hit_entity
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          staff_attack_hit_entity
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          tick
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          staff_attack_tick
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          size
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
          conditions
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          : {}
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  The second format uses a string list to store the script mechanics and
  conditions instead of configuration sections. This format is more compact
  but readability can be a little harder.
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
          staff_attack
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
          'raytrace{type=raytrace;hit_entity=staff_attack_hit_entity;tick=staff_attack_tick;size=1}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          conditions
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          : []
        </span>
      </span>
    </code>
  </pre>
</div>
