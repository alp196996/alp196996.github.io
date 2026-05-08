# 🔗 Binding Skills

<p>
  In order to be cast, skills need to be bound to specific skill slots.
  There can be at most one skill bound to one skill slot. Each skill slot
  corresponds to a different keybind, or key combo. There are multiple ways
  to bind skills:
</p>
<ul>
  <li>
    you can either let the players choose their keybinds through the
    <code>
      /skills
    </code>
    GUI,
  </li>
  <li>
    enable/disable the editing of keybinds and hard-code the keybinds (like
    on Wynncraft, for instance),
  </li>
  <li>
    enable/disable the binding of specific passive skills altogether,
  </li>
  <li>
    or use commands to bind skills to skill slots.
  </li>
</ul>
<p>
  For example, a skill bound to skill slot n1 could be cast by pressing
  the [1] key (or combo
  <em>
    Left-Right
  </em>
  ), while the skill bound to skill slot n2 could be cast by pressing [2]
  (or by performing combo
  <em>
    Left-Right
  </em>
  ).
</p>

## Skill Slots

<p>
  Skill slots are class-specific, which means that classes can have a varying
  number of skill slots, as well as different skill slot properties. For
  instance, magic-oriented classes like Mages, Wizards or Paladins could
  have more skill slots than melee-oriented classes like Warriors or Brutes.
</p>
<p>
  To edit the skill slots of a class, open up the class config file and
  look for/create the
  <code>
    skill-slots
  </code>
  section. Each entry under this config section corresponds to a single
  skill slot.
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
          skill-slots
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # First skill slot
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '1'
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
          "Skill Slot I"
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
          "&amp;eReduces by &amp;610% &amp;ethe cooldown of"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "&amp;ethe skill bound to it."
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          can-manually-bind
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          true
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          unlocked-by-default
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          true
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          formula
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "&lt;ACTIVE&gt;"
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Can only be bound to active skills.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # This decreases by 10% cooldown of bound skill
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          skill-buffs
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
          'skill_buff{modifier="cooldown";amount=-10;type="RELATIVE"}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Second skill slot
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '2'
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
          "Skill Slot II"
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
          "&amp;eGives &amp;640 &amp;eadditional damage to"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "&amp;ethe skill bound to it!"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "&amp;eThis slot is for Aqua/Fire active skills."
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          can-manually-bind
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          true
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          unlocked-by-default
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          true
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          formula
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "(&lt;AQUA&gt; &amp;&amp; &lt;ACTIVE&gt;) || (&lt;FIRE&gt; &amp;&amp;
          &lt;ACTIVE&gt;)"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # This gives +40 Damage to bound skill
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          skill-buffs
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
          'skill_buff{modifier="damage";amount=+40;type="FLAT"}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #........
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  Let's go over each parameter one by one.
</p>

### Name and lore

<p>
  Options
  <code>
    name
  </code>
  and
  <code>
    lore
  </code>
  are used to define the item name and lore of your skill slot as seen in
  the
  <code>
    /skills
  </code>
  menu.
</p>

### Other Options

<p>
  <code>
    can-manually-bind
  </code>
  determines if the player is allowed to manually bind skills to this slot.
  It is set to
  <code>
    true
  </code>
  by default. When set to
  <code>
    false
  </code>
  , the only way to bind skills to this slot is by using an admin command.
</p>
<p>
  <code>
    unlocked-by-default
  </code>
  is set to
  <code>
    true
  </code>
  by default. When set to
  <code>
    false
  </code>
  , this skill slot needs to be
  <a href="#unlocking-skill-slots">
    unlocked
  </a>
  , just like a skill in order to be usable. Until it is unlocked, the player
  cannot bind any skill to it.
</p>

### Formula

<p>
  Each slot also has a formula (specified by the
  <code>
    formula
  </code>
  entry) which determines the set of skills that can be bound to it (the
  set of
  <em>
    compatible skills
  </em>
  ).
</p>
<div class="tip custom-block">
  <p class="custom-block-title custom-block-title-default">
    TIP
  </p>
  <p>
    Comment out this line or set it to
    <code>
      "true"
    </code>
    to disable this option. If no formula is specified, all skills will be
    compatible with this skill slot.
  </p>
</div>
<p>
  This option can be used to create things like
  <em>
    Passive skill slots
  </em>
  , where the player can only bind passive skills. If other skill slots
  are
  <em>
    Active-only
  </em>
  , you can make sure the player has at most one passive skill.
</p>
<p>
  The only limit is your imagination. Here are some examples of formulas
  you can use.
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Formula
      </th>
      <th>
        Usage
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>
          &lt;passive&gt;
        </code>
      </td>
      <td>
        Only passive skills
      </td>
    </tr>
    <tr>
      <td>
        <code>
          &lt;active&gt;
        </code>
      </td>
      <td>
        Only active skills
      </td>
    </tr>
    <tr>
      <td>
        <code>
          &lt;active&gt; &amp;&amp; &lt;fire&gt;
        </code>
      </td>
      <td>
        Only active skills with category
        <code>
          fire
        </code>
      </td>
    </tr>
    <tr>
      <td>
        <code>
          &lt;active&gt; &amp;&amp; (!&lt;fire&gt;)
        </code>
      </td>
      <td>
        Any skill that does not have category
        <code>
          fire
        </code>
      </td>
    </tr>
    <tr>
      <td>
        <code>
          &lt;passive&gt; || &lt;fire&gt;
        </code>
      </td>
      <td>
        Only passive skills with category
        <code>
          fire
        </code>
      </td>
    </tr>
    <tr>
      <td>
        <code>
          (&lt;passive&gt; &amp;&amp; &lt;fire&gt;) || &lt;active&gt;
        </code>
      </td>
      <td>
        Only passive skills with category
        <code>
          fire
        </code>
        , OR active skills
      </td>
    </tr>
    <tr>
      <td>
        <code>
          &lt;firebolt&gt; || (!&lt;water&gt;)
        </code>
      </td>
      <td>
        Only skill named
        <code>
          firebolt
        </code>
        , or any skill that does not have category
        <code>
          water
        </code>
      </td>
    </tr>
  </tbody>
</table>
<p>
  These formulas support
  <a href="./../../mythiclib/skills/custom/mythic#skill-categories">
    skill categories
  </a>
  and support boolean algebra operators:
  <code>
    !&lt;aaa&gt;
  </code>
  (logical not),
  <code>
    &lt;aaa&gt; &amp;&amp; &lt;bbb&gt;
  </code>
  (logical and),
  <code>
    &lt;aaa&gt; || &lt;bbb&gt;
  </code>
  (logical or).
</p>
<p>
  The following code defines a skill slot where the player can only bind
  the skill named
  <code>
    FIRE_STORM
  </code>
  . Note that this is the skill ID, and not the skill name.
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
          skill-slots
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '1'
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          ...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          formula
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "&lt;FIRE_STORM&gt;"
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Only targets skill "Fire Storm"
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  The following code snippet defines a slot where the player can only bind
  skills that are active and have the category
  <code>
    fire
  </code>
  :
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
          skill-slots
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '1'
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          ...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Same as "&lt;active&gt; &amp;&amp; &lt;fire&gt;"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Only targets skills with category "fire", that are active
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          formula
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "!&lt;passive&gt; &amp;&amp; &lt;fire&gt;"
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  The following code snippet can be used to define the categories of a skill.
  Note that this syntax is to be used inside of a MythicLib skill config.
  Please read
  <a href="./../../mythiclib/skills/custom/mythic#skill-categories">
    this MythicLib wiki page
  </a>
  to learn how to define the categories of a skill.
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
          MY_CUSTOM_SKILL
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          ...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          categories
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
          "CATEGORY_1"
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #Referened with &lt;CATEGORY_1&gt; in a formula
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "CATEGORY_2"
        </span>
      </span>
    </code>
  </pre>
</div>

### Skill Buffs

<p>
  Skill buffs can also be granted to skill slots. A skill buff is a specific
  buff applied on one specific parameter of a set of skills, for instance
  <em>
    +10% Damage
  </em>
  or
  <em>
    -10% Cooldown
  </em>
  . These skill buffs will only apply to the skill bound to that skill slot.
  Find more information about skill buffs in
  <a href="./intro#skill-buffs">
    this wiki page
  </a>
  .
</p>
<p>
  This feature can be used to create, for instance,
  <em>
    Fire slots
  </em>
  or
  <em>
    Water slots
  </em>
  which provide additional damage to lower cooldowns to a specific set of
  skills (which can be specified using skill formulas, see above).
</p>
<p>
  Skill buffs provided by skill slots should be placed under the
  <code>
    skill-buffs
  </code>
  config entry of the skill slot config.
</p>

## Hardcoded Keybinds

<p>
  If you plan to have a limited number of skills per class, you might not
  need to give your players the option to choose their skill keybinds. On
  some RPG servers, the skill keybinds, or combos, are hardcoded and cannot
  be changed by the player.
</p>
<p>
  In this case, go to your class config file and edit its skill slots:
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
          skill-slots
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '1'
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
          "Skill Slot I"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          lore
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          : []
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          hardset
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          FIREBALL
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # &lt;========================
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # other skill slots....
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  By setting the
  <code>
    hardset
  </code>
  parameter to a skill ID, like
  <code>
    FIREBALL
  </code>
  (or whatever skill you have
  <a href="./config">
    configured
  </a>
  for the class), you forcefully bind that skill to this skill slot for
  all players.
</p>

## Unlocking Skill Slots

<p>
  By default, all skill slots are unlocked. If not, they can be unlocked
  using the following command, where
  <code>
    &lt;slot_number&gt;
  </code>
  starts at 1 (not 0).
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
          /mmocore admin slot lock &lt;player&gt; &lt;slot_number&gt;
        </span>
      </span>
      <span class="line">
        <span>
          /mmocore admin slot unlock &lt;player&gt; &lt;slot_number&gt;
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  Locked skill slots are not visible in the skill GUI.
</p>
<details class="details custom-block">
  <summary>
    Default Config for Skill Slots
  </summary>
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
            skill-slots
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '1'
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
            "&amp;aSkill Slot I"
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            unlocked-by-default
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            true
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '2'
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
            "&amp;aSkill Slot II"
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            unlocked-by-default
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            true
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '3'
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
            "&amp;aSkill Slot III"
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            unlocked-by-default
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            true
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '4'
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
            "&amp;aSkill Slot IV"
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            unlocked-by-default
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            true
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '5'
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
            "&amp;aSkill Slot V"
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            unlocked-by-default
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            true
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '6'
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
            "&amp;aSkill Slot VI"
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            unlocked-by-default
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            true
          </span>
        </span>
      </code>
    </pre>
  </div>
</details>

## Binding Active Skills

<p>
  Since active skills are proactively
  <a href="./casting">
    cast
  </a>
  by players, they all require to be bound to a specific skill slot before
  being used.
</p>
<p>
  Players can bind skills to skill slots from inside the
  <code>
    /skills
  </code>
  GUI. In the skill GUI, available skills are displayed on the left. Click
  the skill you would like to bind (the GUI name should update), then on
  the rightside, click the skill slot where you'd like to bind your skill.
  Once an active skill is bound, you can
  <a href="./casting">
    cast
  </a>
  it.
</p>
<p>
  <img src="/assets/bind_active.DOWAcMwn.gif" alt="skillgui">
</p>

## Passive Skills

## Binding Passive Skills

<p>
  By definition,
  <a href="./config#passive-skills">
    passive skills
  </a>
  do not require any proactive action from the player to be cast. For this
  reason, you can choose to make them automatically take effect as soon as
  they are unlocked, without the need to be bound to a skill slot.
</p>
<p>
  This behavior can be defined at the plugin level for all skills using
  the following option in the MMOCore
  <code>
    config.yml
  </code>
  file:
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
          # When set to true, passive skills must be bound in order to take effect.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # When set to false, unlocked skills will take effect right away.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # This is only the default behavior for skills but can be overridden by
          specifying true/false to
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # the needs-bound field in the class skills section.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          passive-skill-need-bound
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          true
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  This default behavior can be overridden for specific skills in the class
  config file using the
  <code>
    needs-bound
  </code>
  field. If
  <code>
    needs-bound
  </code>
  is set to
  <code>
    false
  </code>
  , this passive skill will be permanent, meaning that it will always take
  effect as soon as it is unlocked, without the need to be bound. Conversely,
  if
  <code>
    needs-bound
  </code>
  is set to
  <code>
    true
  </code>
  , this passive skill will require binding in order to take effect.
</p>
<p>
  In the following example taken from the
  <code>
    classes/mage/mage.yml
  </code>
  config file, the skill
  <code>
    POWER_MARK
  </code>
  is a passive skill that does not need to be bound to take effect.
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
          skills
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          POWER_MARK
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          level
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
          max-level
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          30
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          ...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          needs-bound
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          false
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Does not need to be bound to apply its effects
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  The default MMOCore config files for the
  <em>
    Mage
  </em>
  class features three
  <em>
    Passive skill slots
  </em>
  where players can only bind passive skills.
</p>
<p>
  <img src="/assets/bind_passive.BimutQw8.gif" alt="upgrade2">
</p>

## Using commands

<p>
  If you don't want players to bind their skills and keybinds, you can use
  the following command to bind skills to specific slots instead.
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
          /mmocore admin slot bind
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
          slot_number
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          &gt;
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          &lt;
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          skill
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          &gt;
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          /mmocore admin slot unbind
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
          slot_number
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          &gt;
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  The bind command will work, even if the designated skill OR skill slot
  is not unlocked by the player. If the designated skill is not unlocked
  by the player, the skill will be bound but the skill will remain locked,
  and the player will get a friendly error message when trying to cast it.
  If the designated skill slot is not unlocked, the skill will be castable
  but the skill slot will remain locked.
</p>
