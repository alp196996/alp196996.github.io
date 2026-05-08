# 🔌 Installation Guide

## Installation

<p>
  MMOProfiles is pretty much usable right of the bat after installation
  with default configuration. When logging in for the first time, players
  who have already played on the server before will see a profile with their
  old data saved inside of it. This is an optional feature and can be disabled
  in the main plugin configuration file.
</p>

## Disable Spigot player data saving

<p>
  Enable this option in your
  <code>
    spigot.yml
  </code>
  config file for the best MMOProfiles experience possible. This option
  tells Spigot to
  <strong>
    stop saving player data
  </strong>
  inside of your world data folder. MMOProfiles already handles all the
  player data saving stuff, so this basically reduces data duplication. It's
  still a dangerous option to play with, so bear that in mind!
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
          players
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          disable-saving
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
  If you're fine with losing your previous player data, you may also clear
  the
  <code>
    /world/playerdata
  </code>
  folder right away after enabling this option. If you enable this option
  and do not clear the
  <code>
    playerdata
  </code>
  folder, MMOProfiles will transfer this data to a new profile the first
  time the player joins.
</p>

## Note for Multiverse-Core users

<p>
  If you happen to use Multiverse-Core, you have to disable this option
  as well in
  <code>
    Multiverse/config.yml
  </code>
  as this option inteferes with the MMOProfiles profile selection feature.
  When toggled on, this option teleports players when joining for the first
  time, overriding MMOProfiles teleportation.
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
          firstspawnoverride
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'false'
        </span>
      </span>
    </code>
  </pre>
</div>
