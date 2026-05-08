# Using Fabled

<p>
  Fabled, formerly known as ProSkillAPI, or SkillAPI, is a powerful skill
  creation and management plugin. You can create custom skills inside Fabled
  and use them inside MythicLib.
</p>
<div class="info custom-block">
  <p class="custom-block-title custom-block-title-default">
    INFO
  </p>
  <p>
    As of MythicLib 1.6.2 snapshots, SkillAPI and ProSkillAPI are no longer
    supported, as both plugins are no longer being actively maintained. We
    ask users to move to Fabled instead.
  </p>
</div>

## Custom Skill Registration

<p>
  Similarly to MythicMobs, you can register custom skills into MythicLib
  using the Fabled skill editor. The process is the exact same as in
  <a href="./mythic#custom-skill-registration">
    this tutorial
  </a>
  apart from the format of the MythicLib skill configuration file.
</p>
<p>
  First, code your skill using the Fabled skill editor. Let's assume the
  skill you coded has ID
  <code>
    Firebolt
  </code>
  . Open up a YML config file within the
  <code>
    MythicLib/skill
  </code>
  folder and paste the following:
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
          FIREBOLT
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
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
          'fabled:&lt;Fabled_skill_identifier&gt;'
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
          'Firebolt'
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Parameters/modifiers are not supported.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #parameters: {}
        </span>
      </span>
    </code>
  </pre>
</div>

## Skill Modifiers

<p>
  There is currently no way to retrieve skill modifiers when using Fabled
  skills, unlike when using MythicMobs. The
  <code>
    parameters
  </code>
  section in the config snippet above can therefore be omitted.
</p>

## Skill Level

<p>
  That being said, all skills registered using Fabled have a
  <code>
    level
  </code>
  skill modifier which hooks directly into Fabled skill level system. You
  can setup skill mechanic numerical parameters to linearly scale on the
  skill level. Using MythicMobs you'd have been able to setup any type of
  scaling you want (not limited to linear scaling).
</p>
<p>
  Just like
  <code>
    cooldown
  </code>
  <code>
    mana
  </code>
  and
  <code>
    stamina
  </code>
  , the
  <code>
    level
  </code>
  modifier is automatically registered.
</p>
<div class="tip custom-block">
  <p class="custom-block-title custom-block-title-default">
    TIP
  </p>
  <p>
    While Fabled remains an option for custom skill creation, we still recommend
    using MythicMobs instead
  </p>
</div>
