# Using MythicLib

<p>
  MythicLib
  <a href="./../../scripts/intro">
    scripts
  </a>
  can easily be turned into custom skills that can be used in MMOItems or
  MMOCore. We first need to write a MythicLib script, then declare it as
  a skill. A script basically says "what happens", while a skill provides
  more metadata including its mana cost, cooldown, damage, GUI lore, icon....
</p>

## 1/ Code a MythicLib script

<p>
  First, navigate to the
  <code>
    MythicLib/script
  </code>
  folder and open an existing/create a new YML config file to start writing
  your MythicLib script.
</p>
<p>
  For this tutorial, we will use the builtin
  <code>
    staff_attack
  </code>
  script that comes with MythicLib. You can find it inside the
  <code>
    MythicLib/script/example_skills.yml
  </code>
  file. This script shoots a magic projectile dealing 10 damage to the first
  entity it hits.
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
          # The script that you cast to peform the staff attack
        </span>
      </span>
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
          'raytrace{hit_entity=staff_attack_hit_entity;tick=staff_attack_tick;size=1}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'sound{sound=ENTITY_BLAZE_SHOOT;pitch=1;volume=1}'
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # The effect when the attack hits an entity
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          staff_attack_hit_entity
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
          'can_target'
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
          'damage{amount=10;ignore_immunity=true}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'particle{particle=LAVA;amount=32}'
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # The tick effect while the raytrace is ongoing
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          staff_attack_tick
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
          'particle{particle=REDSTONE;amount=4;x=.5;y=.5;z=.5}'
        </span>
      </span>
    </code>
  </pre>
</div>

## 2/ Declare the script as a skill

<p>
  Now that we have our MythicLib script called
  <code>
    staff_attack
  </code>
  , we need to declare it as a skill and provide additional metadata. Now,
  navigate to the
  <code>
    MythicLib/skill
  </code>
  folder and create a new/open an existing YML config. Copy the following
  code into the file:
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
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # This will register a skill with ID 'MY_NEW_SKILL'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          STAFF_ATTACK
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # This points to the MythicLib script you want to use
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # located in the MythicLib/scripts folder
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          source
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'mythiclib:staff_attack'
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          name
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'Staff Attack'
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # The skill name shown in the GUI
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
          'BLAZE_ROD'
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # The skill icon shown in the GUI
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          lore
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
          '§7Shoot a magic projectile'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '§7that deals damage to'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '§7the first entity it hits.'
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # This is optional. These are the skill parameters/modifiers
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # that will be passed to MMOItems/MMOCore when the skill is executed.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # You can add as many as you need.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          parameters
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          damage
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
          Damage
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          player
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
          item
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
          slow_duration
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
          Effect Duration
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          player
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          5
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          item
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          5
        </span>
      </span>
    </code>
  </pre>
</div>

## 3/ Reload MythicLib

<p>
  Use
  <code>
    /ml reload
  </code>
  to both reload MythicLib scripts and skills. You can test your new skill
  with the following command:
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
          /ml debug cast staff_attack
        </span>
      </span>
    </code>
  </pre>
</div>
