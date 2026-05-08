# 🛡️ Guilds

<p>
  Guilds (also called factions, kingdoms...) are a common feature for RPG
  servers. They allow players to team up, share resources, and work together
  toward common goals.
</p>
<p>
  MMOCore does not provide a guild system, but is compatible with the following
  guild plugins:
</p>
<ul>
  <li>
    Any plugin supported by
    <a href="https://www.spigotmc.org/resources/factionsbridge.89716/" target="_blank"
    rel="noreferrer">
      FactionsBridge
    </a>
    (&gt;15 plugins)
  </li>
  <li>
    <a href="https://polymart.org/resource/ultimate-clans-v6.1162" target="_blank"
    rel="noreferrer">
      UltimateClans V6
    </a>
  </li>
  <li>
    <a href="https://www.spigotmc.org/resources/guilds-30-sale.66176/" target="_blank"
    rel="noreferrer">
      Guilds
    </a>
  </li>
</ul>
<p>
  Note that you need FactionsBridge installed when running MMOCore with
  any guild plugin supported by FactionsBridge.
</p>

## Choosing your guild plugin

<p>
  Go to
  <code>
    MMOCore/config.yml
  </code>
  and set
  <code>
    guild-plugin
  </code>
  to whatever plugin you want to use. Make sure you restart your server
  when editing this option.
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
          # Edit the plugin handling guilds here.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Supported values (just copy and paste):
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - FACTIONSBRIDGE (and any supported Factions/Guild plugin)
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - MMOCORE (Default built-in guild system)
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - NONE (Used to fully disable guilds)
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - GUILDS (by Glare)
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - ULTIMATE_CLANS
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          guild-plugin
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          MMOCORE
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  Using any guild plugin that is not MMOCore will disable all guild features
  from MMOCore, including the guild registry and the
  <code>
    /guild
  </code>
  command.
</p>

## MMOCore Guilds

<p>
  Note that MMOCore does technically have a dummy guild system implemented,
  though it has little to no features, and we do not have any plans of pursuing
  its development.
</p>
