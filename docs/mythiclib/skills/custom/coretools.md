# Using CoreTools

<p>
  <a href="https://www.spigotmc.org/resources/coretools.125126/" target="_blank"
  rel="noreferrer">
    CoreTools
  </a>
  can be used to create skills that you can run in all MMO plugins.
</p>

## Custom Skill Registration

<p>
  First, code your skill in CoreTools. For this tutorial, we will be using
  a very simple script; it is the built-in script which ID
  <code>
    script3
  </code>
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
          script3
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          Conditions
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          : []
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          Mechanics
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
          command{c="say Hello I'm Script 3"} @Self
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  Then, open up any YML config file inside the
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
          MY_SKILL_3
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
          'coretools:script3'
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  After reloading both plugins, you can now use the skill
  <code>
    MY_SKILL_3
  </code>
  in MMOItems and MMOCore. You can try to cast it using
  <code>
    /ml debug cast MY_SKILL_3
  </code>
  , and you should see the message appear in the player chat.
</p>

## Skill Modifiers

<p>
  There is currently no way to retrieve skill modifiers when using CoreTools
  skills, unlike when using MythicMobs.
</p>

## Skill conditions

<p>
  Just like MythicMobs, skills registered in MythicLib using CoreTools can
  have conditions. If any of the CoreTools conditions is not met, the skill
  will not be cast, no mana will be consumed, no cooldown will be applied,
  etc.
</p>
