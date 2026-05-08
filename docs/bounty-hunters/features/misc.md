# 🔧 Miscellaneous

## Bounty Editor

<p>This GUI can be used to edit a current bounty. It can be used to visualize both the players who put money into that bounty and the portion of the bounty that is due to <a href="./auto-bounties">automatic bounties</a>. Use <code>/bounties edit &lt;player&gt;</code> to open up that edition GUI.</p>
<p><img src="/assets/editor.BFxklcBM.gif" alt=""></p>
<p>"Contributors" are all the players who put extra money in that bounty. Using that menu you may change how much money every player has added. Editing this value is done via chat input (everything is explaining in-game when using the GUI).</p>
<p>Coupled with bounty logs, this menu lets you completely manipulate current bounties on your server.</p>

## Cooldowns

<p>You can choose the amount of time players need to wait before either creating a bounty or adding extra money to an existing bounty.</p>

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
          # Time to waiting before using /bounty again. In seconds.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          bounty-set-restriction
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          120
        </span>
      </span>
    </code>
  </pre>
</div>

<p>You can also choose the amount of time players need to wait before targeting again another player using the bounty menu. First of all,</p>

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
          # Player tracking lets player use a tracking compass to hunt
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # down their bounty target. On the one hand, it gives an
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # advantage to the hunters because they can find the player, but
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # it also lets the target know how many players are tracking him.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          player-tracking
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
          # Cooldowns players need to wait before tracking a player.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          cooldown
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          240
        </span>
      </span>
    </code>
  </pre>
</div>

## Bounty Commands

<p>You can configure BountyHunters to perform commands whenever a player claims a bounty and whenever a player receives an automatic bounty. These commands can be configured in the config.yml config file.</p>

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
          # Commands sent by the console when a player claims a bounty.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # {target} returns the target's name and {player} the claimer's
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # name. Commands support PlaceholderAPI placeholders.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          bounty-commands
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # When a player claims a bounty.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          claim
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          : [ ]
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - '/give {player} minecraft:diamond 10'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - '/tell {target} Someone claimed your bounty.'
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # When a bounty is placed. {reward}
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          place
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          player
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          : [ ]
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          console
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          : [ ]
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # When a player kills another player illegaly.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          auto-bounty
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          : [ ]
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # When a bounty is increased by {amount}
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          increase
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          player
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          : [ ]
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          console
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          : [ ]
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # When a player kills another player illegaly.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          auto-bounty
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          : [ ]
        </span>
      </span>
    </code>
  </pre>
</div>

<p>These commands support placeholders from <strong>PlaceholderAPI</strong>, however you may also use <code>%player%</code> which returns the player/sender (the one who claimed/created/increased the bounty) name or %target% which returns the bounty target name.</p>

<p>Bounties can be created either by players, or by the console (or by the <a href="./auto-bounties">auto bounty</a> feature). Different sets of commands can be performed when the bounty creation/increase reason isn't the same.</p>
