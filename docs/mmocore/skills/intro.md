# 🔥 Skills

<p>
  Skills are amazing and unique abilities that players can use to defeat
  their enemies or buff their party mates fighting and surviving.
</p>
<p>
  Skills are either
  <strong>
    active or passive
  </strong>
  . Active skills refer to skills proactively
  <a href="./casting">
    cast by the player
  </a>
  . Passive skills cannot be cast - instead, they automatically trigger
  on specific events (attacks, clicks, movements, other skills...).
</p>
<p>
  Skills are class-specific. When changing class, the player will "lose"
  the progress they made on their skills and unlock new ones. Previous progress
  is recovered when switching classes again.
</p>

## Custom Skills

<p>
  While MMOCore comes with more than 90 built-in skills, you can create
  as many custom skills as you want using the most popular skill/scripting
  languages available, including MythicMobs, MythicLib or Fabled.
</p>
<p>
  Note that custom skills are registered in MythicLib. Any skill you register
  in MythicLib will be automatically forwarded to both MMOCore and MMOItems.
  Please read
  <a href="./../../mythiclib/skills/intro">
    this wiki page
  </a>
  to learn how to create and register custom skills.
</p>

## Overview

<p>
  In order to use a skill, players need to:
</p>
<ol>
  <li>
    Choose a
    <a href="./../features/classes">
      class
    </a>
    <span class="VPBadge info">
      optional
    </span>
  </li>
  <li>
    <a href="./unlocking">
      Unlock
    </a>
    a skill
    <span class="VPBadge info">
      optional
    </span>
  </li>
  <li>
    <a href="./binding">
      Bind
    </a>
    the skill to a compatible skill slot
    <span class="VPBadge info">
      optional
    </span>
  </li>
  <li>
    <a href="./casting">
      Cast
    </a>
    the skill
  </li>
</ol>
<p>
  However, the MMOCore skill system is really permissive:
</p>
<ol>
  <li>
    The default class can also have skills, so technically players do not
    need to choose a class to be able to cast skills. If you don't plan on
    using the class system, you can still use MMOCore skills.
  </li>
  <li>
    Skills can be unlocked when reaching a certain level, finishing a quest,
    unlocking a node in a skill tree or virtually anything else. Skills can
    also be made unlocked by default.
  </li>
  <li>
    Skills can be manually bound using commands, or hard-set to automatically
    bound to skill slots if you don't like the MMOCore skill binding feature.
  </li>
  <li>
    Obviously skill casting is a mandatory step, it is the only one that you
    cannot skip!
  </li>
</ol>

## Skill GUI

<p>
  Players can open up the skills GUI by using
  <code>
    /skills
  </code>
  . This UI allows players to visualize their available skills and their
  effects, upgrade their available skills, and bind their skills to skill
  slots.
</p>

## Upgrading a skill

<p>
  Upgrading a skill
  <strong>
    increases its power
  </strong>
  . Players can choose the skill they would like to upgrade based on their
  play style and skill path they want to follow. Upgrading a skill takes
  <strong>
    one skill point
  </strong>
  .
</p>
<p>
  Skill points are a currency which players can use to upgrade their skills.
  One upgrade costs one skill point. Skill points can be granted using the
  following
  <a href="./../general/commands">
    admin command
  </a>
  :
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
          /mmocore admin skill
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          -
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          points give
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
          amount
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          &gt;
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  <img src="/assets/upgrade1.Cr3v1DRG.gif" alt="upgrade1">
</p>
<p>
  In the GUI, select the skill you'd like to upgrade by clicking it. The
  name of the selected skill displays in the UI name. You can then upgrade
  the selected skill by clicking the
  <em>
    Upgrade Skill
  </em>
  button. Items next to the
  <em>
    Upgrade Skill
  </em>
  button let the user visualize how strong the skill would be with a higher
  level.
</p>

## Skill Buffs

<p>
  A skill buff modifies the value of a certain skill modifier. It can target
  one or multiple skills using
  <a href="./">
    category formulas
  </a>
  and can only target 1 modifier. Skill Buffs can only be granted through
  <a href="./binding#skill-slots">
    skill slots
  </a>
  and
  <a href="./../misc/triggers">
    triggers
  </a>
  (and per extension, skill trees).
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
          triggers
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # -10% cooldown to ALL skills
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'skill_buff{formula="true";modifier="cooldown";amount=-10;type=RELATIVE}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # +20 Flat damage to skill with name FIRE_STORM
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'skill_buff{formula="&lt;FIRE_STORM&gt;";modifier="damage";amount=20;type=FLAT}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # 20 Flat damage to skills with category MY_OWN_CATEGORY
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'skill_buff{formula="&lt;MY_OWN_CATEGORY&gt;";modifier="damage";amount=20;type="FLAT"}'
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  Note that the syntax for targeting a skill category or a specific skill
  name is the same.
</p>

## Editing the skill GUI

<p>
  The skill GUI can be edited by modifying the
  <code>
    gui/skill-view.yml
  </code>
  config file.
</p>
<div class="tip custom-block">
  <p class="custom-block-title custom-block-title-default">
    TIP
  </p>
  <p>
    We recommend opening this file with a text editor on the side while reading
    the rest of this section.
  </p>
</div>
<p>
  First, please refer to
  <a href="./../../mythiclib/misc/ui-syntax">
    this wiki page
  </a>
  to learn about the general MMOCore UI syntax.
</p>

### Item Functions

<p>
  The
  <code>
    next
  </code>
  and
  <code>
    previous
  </code>
  functions are used for pagination.
</p>
<p>
  <code>
    skill
  </code>
  is the item displayed for every skill available to the player. Its lore
  is a bit complicated:
</p>
<ul>
  <li>
    The line starting with
    <code>
      {unlocked}
    </code>
    only displays if the player has unlocked the skill
  </li>
  <li>
    The line starting with
    <code>
      {locked}
    </code>
    only displays if the player has NOT unlocked the skill yet
  </li>
  <li>
    The line starting with
    <code>
      {max_level}
    </code>
    displays when the player has reached the max skill level
  </li>
  <li>
    <code>
      {lore}
    </code>
    just copies and pastes the entire skill description
  </li>
</ul>
<p>
  <img src="/assets/item_skill.CJXgT6sZ.png" alt="image">
</p>
<p>
  <code>
    switch
  </code>
  is the item that you'd click when switching from binding to upgrading
  mode
</p>
<p>
  <img src="data:image/png;base64,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"
  alt="image">
</p>
<p>
  <code>
    skill-slot
  </code>
  is the item used in the binding mode
</p>
<p>
  <img src="/assets/item_slot.DWnJakgS.png" alt="image">
</p>
<p>
  <code>
    skill-level
  </code>
  are the items used to tell the player how the selected skill would behave
  if it had a higher level
</p>
<p>
  <img src="/assets/item_level.BPUwfCvz.png" alt="image">
</p>
<p>
  <code>
    upgrade
  </code>
  is the item clicked when you want to upgrade the selected skill
</p>
<p>
  <img src="/assets/item_upgrade.CauTLTdJ.png" alt="image">
</p>
