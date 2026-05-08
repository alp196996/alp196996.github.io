# 🌟 Vanilla Exp

<p>
  This simple RPG option lets you display the player's current main class
  level on the vanilla experience bar. Players can also see how close/far
  they are from reaching the next level by looking at the actual EXP bar
  progression. This option can be enabled in
  <code>
    config.yml
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
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Enable this open to override vanilla EXP and display
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # level progress on the vanilla experience bar.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Requires a SERVER reload when changed.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          override-vanilla-exp
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
  <img src="/assets/vanilla_exp.CW9qSvtl.png" alt="SbErxxz">
</p>
<p>
  It matches the experience progress and level displayed in the
  <code>
    /p
  </code>
  menu.
</p>
<p>
  <img src="/assets/exp_progress.BKg6SjB0.png" alt="">
</p>

## Vanilla EXP redirection

<p>
  When enabled, a set portion of the EXP you earn via experience orbs is
  redirected to your main MMOCore class exp. You can change this option in
  <code>
    config.yml
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
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Redirects vanilla experience obtained to MMOCore
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # class experience. You can define the % of the vanilla
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # experience that is being transfered as MMOCore exp.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Requires a SERVER reload when changed.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          vanilla-exp-redirection
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          enabled
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
          ratio
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          0.8
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  This feature can be useful for survival or simple RPG servers which do
  not want to spend time on setting up setting up
  <a href="./../level/sources">
    experiences sources
  </a>
  and are okay with relying on vanilla exp dropped by mobs and blocks.
</p>
