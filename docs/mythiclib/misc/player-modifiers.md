# 📌 Player Modifiers

<div class="warning custom-block">
  <p class="custom-block-title custom-block-title-default">
    WARNING
  </p>
  <p>
    This feature is not available yet. It will be used in the future for MMOCore/profession
    exp tables, MMOItems set bonuses, MMOCore skill trees, etc.
  </p>
</div>

## Overview

<p>
  A player modifier can be any type of passive behaviour that modifies your
  player to make it stronger or weaker. Stat modifiers, skills, permanent
  potion effects are all considered player modifiers and can granted to players
  using items, full item set bonuses, MMOCore parties, MMOCore player classes...
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Player Modifier
      </th>
      <th>
        Description
      </th>
      <th>
        Identifier
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        Stat modifier
      </td>
      <td>
        Modifies a player stat value
      </td>
      <td>
        <code>
          stat
        </code>
      </td>
    </tr>
    <tr>
      <td>
        Attribute modifier
      </td>
      <td>
        Modifies the value of a MMOCore attribute
      </td>
      <td>
        <code>
          attribute
        </code>
      </td>
    </tr>
    <tr>
      <td>
        Skill
      </td>
      <td>
        Gives the player some triggerable skill
      </td>
      <td>
        <code>
          skill
        </code>
      </td>
    </tr>
    <tr>
      <td>
        Potion Effect
      </td>
      <td>
        A permanent potion effect like Speed II
      </td>
      <td>
        <code>
          potion
        </code>
      </td>
    </tr>
    <tr>
      <td>
        Particle Effect
      </td>
      <td>
        A permanent particle effect
      </td>
      <td>
        <code>
          particle
        </code>
      </td>
    </tr>
  </tbody>
</table>
<p>
  When configurating MMOItems or MMOCore you will sometimes be asked to
  define player modifiers in specific scenarii, like when creating item sets
  in MMOItems and defining what modifiers to give the player when wearing
  3 items from the same set.
</p>

## Stat Modifiers

<p>
  When applied onto a player, a stat modifier increases the value of a player
  stat by a certain amount. It can be either a flat stat modifier (+10 Atk
  Dmg) or a multiplicative modifier (+10% Atk Dmg) which scales on the initial
  player's stat value.
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
          modifierId
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
          stat
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # This indicates the modifier is a stat modifier
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          stat
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          ATTACK_DAMAGE
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          value
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
          multiplicative
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
          key
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          mmocoreParty
        </span>
      </span>
    </code>
  </pre>
</div>

## Skills

<p>
  Skills are a special type of player modifiers. Read
  <a href="./../skills/intro">
    this wiki page
  </a>
  to learn more about skills in the MMO plugins.
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
          modifierId
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
          item_skill
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # This indicates the modifier is an item skill
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          skill
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          FIREBOLT
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          trigger
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          RIGHT_CLICK
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          modifiers
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
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          10
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          mana
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          3
        </span>
      </span>
    </code>
  </pre>
</div>
