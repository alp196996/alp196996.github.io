# 💔 Damage

<p>MMOItems and MMOCore share the same damage system. Any attack, from melee sword hits to MMOCore abilities, has a specific set of damage types which can be any of the following:</p>

<ul>
  <li>
    <strong>
      physical
    </strong>
    ,
    <strong>
      magic
    </strong>
    or
    <strong>
      unarmed
    </strong>
    damage
  </li>
  <li>
    <strong>
      projectile
    </strong>
    damage
  </li>
  <li>
    <strong>
      weapon
    </strong>
    or
    <strong>
      skill
    </strong>
    damage
  </li>
  <li>
    <strong>
      on-hit
    </strong>
    damage (on-hit damage doesn't trigger on-hit effects)
  </li>
  <li>
    <strong>
      dot
    </strong>
    or damage over time
  </li>
  <li>
    <strong>
      minion
    </strong>
    damage
  </li>
</ul>

<p><strong>e.g:</strong> a bow deals weapon-physical-projectile damage. An ice crystal spell deals projectile-magic-skill damage.</p>

## Stats increasing damage dealt

<p>Attack damage can be increased by several stats including Physical/Magical/Projectile/Weapon/Skill damage, but also other damage stats including <strong>PvE/PvP/Undead Damage</strong> which rather depend on the entity you are attacking.</p>
<p>Since MythicLib 1.3 these stats all add up "linearly" and don't stack up geometrically. For instance, +50% skill damage and +50% magical damage will increase magical-skill damage by <code>50% + 50% = 100%</code> rather than <code>150% * 150% - 100% = 125%</code>. This 25% difference gets super huge when multiple stats are taken into account at the same time, like when adding PvE damage or Undead damage on top of it.</p>

## Stats reducing incoming damage

<p>These are stats like <code>Magic Damage Reduction</code> or <code>Damage Reduction</code>. Unlike damage-increasing stats, these stats do stack up geometrically. Combining <em>10% Dmg Red</em> and <em>10% Fall Dmg Red</em> will <strong>NOT</strong> result in <code>10% + 10% = 20%</code> damage reduction for fall damage, but rather <code>100% - 90% * 90% = 19%</code>. This 1% difference gets bigger the higher the player stats are.</p>
<p>This calculation makes these statistics less op when they get bigger, and also make sure the damage never reaches 0 and always stays positive. In a nutshell, when considering damage-increasing stats or damage reduction stats, MythicLib always considers what's worse for the attacker.</p>

## Defense

<p>Defense is a player stat which you can use in both MMOItems and MMOCore. It was introduced to bypass the 30 armor points vanilla limit which prevents users from having high armor values. The defense formula can be edited in the main MythicLib plugin config.</p>

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
          # Defines how defense behaves. The formula should return the
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # final amount of damage dealt, given the following inputs:
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - damage dealt #damage#
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - current player defense #defense#
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # The default formula is inspired from Path of Exile, you can
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # learn more about it on their wiki: https://pathofexile.fandom.com/wiki/Armour
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # natural &lt;-&gt; non-elemental damage
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # elemental &lt;-&gt; fire/water/.. damage
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          defense-application
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          natural
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '#damage# - #defense#'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          elemental
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '#damage# * (1 - (#defense# / (5 * #damage# + #defense#)))'
        </span>
      </span>
    </code>
  </pre>
</div>

<p>Here's a table indicating how much damage is dealt given an amount of elemental defense and initial attack points, using the default elemental defense formula which is the one used in Path of Exile. <img src="/assets/poe_armor.C-2kRLIh.png" alt="poe_armor"></p>

<p>This formula was changed in MythicLib 1.4 if you'd like to use the previous one, here it is. It has the downside of not taking into account the incoming amount of damage, making adjusting this formula for both high and low levels harder.</p>

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
          defense-application
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '#damage# * (1 - (#defense# / (#defense# + 100)))'
        </span>
      </span>
    </code>
  </pre>
</div>

<p>The most important math functions are supported by the formula interpreter. For instance, you can use <code>sqrt(16)</code> (returns 4), <code>pow(2, 3)</code> will return 8, <code>atan2</code>, <code>min(10, 5)</code> will return 5, etc. If you're unsure what methods are supported, just give them a try.</p>

## Critical Strikes

<p>Weapons and skills can deal critical strikes, increasing the damage dealt. Please refer to the <a href="./on-hit-effects">On-Hit Effects</a> page for more information about critical strikes.</p>

## Damage Mitigation

<p>Please refer to the <a href="./mitigation-types">Damage Mitigation</a> page for more information about damage mitigation.</p>

## Damage Indicators

<p>Please refer to <a href="./damage-indicators">this page</a> for more information about damage indicators.</p>

## MythicMobs Compatibility

<p>You can have mobs and skills from MythicMobs deal damage marked with MythicLib damage types. This way, player stats like <em>Magic Damage Reduction</em> or <em>Fire Defense</em> will apply to the damage dealt by MythicMobs.</p>
<p>To have a MythicMobs skill deal damage with MMO damage types, use the <a href="./../skills/custom/mythic.html#dealing-damage">mmodamage mechanic</a>. This mechanics works whether the skill caster is a player or a mob.</p>
<p>To have MythicMobs deal MMO-typed damage with their melee attacks, use the <code>setmmodamagesplits</code> mechanic. The following mob deals 10 Magic-Projectile damage on each melee hit:</p>

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
          ZombieWarrior
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          Type
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          ZOMBIE
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          Damage
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
          Skills
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
          'setmmodamagesplits{splits=MAGIC,PROJECTILE} @self ~onSpawn'
        </span>
      </span>
    </code>
  </pre>
</div>

<div class="info custom-block">
  <p class="custom-block-title custom-block-title-default">
    INFO
  </p>
  <p>
    The mob above casts
    <code>
      setmmodamagesplits
    </code>
    when it spawns. However, you can use this mechanic at any time! You can
    replace a mob's damage splits mid-fight, during a specific skill, etc.
    For instance, you can have a boss deal Physical damage during its first
    phase, then switch to Magic damage during its second phase.
  </p>
</div>

<p>In the following example, a third of the damage is dealt as Physical/Weapon, while the remaining two thirds are dealt as Skill-Magic damage.</p>

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
          ZombieWarrior
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          Type
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          ZOMBIE
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          Damage
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
          Skills
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
          'setmmodamagesplits{splits=[PHYSICAL,WEAPON]:1,[SKILL,MAGIC]:2} @self
          ~onSpawn'
        </span>
      </span>
    </code>
  </pre>
</div>

<p>The format for <code>splits</code> is <code>[TYPE1,TYPE2,...]:amount1,[TYPE3,TYPE4,...]:amount2</code> where each split is separated by a comma. The amount is optional and defaults to 1.</p>
