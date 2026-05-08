# 🔨 Smithing

<p>
  Smithing is a specific type of profession where players can earn EXP when
  repairing items using the vanilla anvil. The experience earned by the player
  depends on the item the player is repairing, and on the amount of durability
  the player is repairing.
</p>
<p>
  The config file is pretty self explanatory: you can setup how much smithing
  experience you want the player to earn when repairing 100 durability points
  of a specific item using the vanilla anvil.
</p>

## Configuration

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
          # Experience given by repairing 100
        </span>
      </span>
      <span class="line">
        <span>
          # durability points from a specific material.
        </span>
      </span>
      <span class="line">
        <span>
        </span>
      </span>
      <span class="line">
        <span>
          # Warning, diamonds/iron ingots/&lt;any material
        </span>
      </span>
      <span class="line">
        <span>
          # which repairs a specific type of tool&gt; do
        </span>
      </span>
      <span class="line">
        <span>
          # not repair the same amount of durability!
        </span>
      </span>
      <span class="line">
        <span>
          repair-exp:
        </span>
      </span>
      <span class="line">
        <span>
        </span>
      </span>
      <span class="line">
        <span>
          # Swords
        </span>
      </span>
      <span class="line">
        <span>
          DIAMOND_SWORD: 1.923 # Max durability: 1561
        </span>
      </span>
      <span class="line">
        <span>
          GOLDEN_SWORD: 62.5 # Max durability: 32
        </span>
      </span>
      <span class="line">
        <span>
          IRON_SWORD: 8 # Md: 250
        </span>
      </span>
      <span class="line">
        <span>
          STONE_SWORD: 7.634 # Md: 131
        </span>
      </span>
      <span class="line">
        <span>
          WOODEN_SWORD: 13.56 # Md: 59
        </span>
      </span>
      <span class="line">
        <span>
        </span>
      </span>
      <span class="line">
        <span>
          # Picks
        </span>
      </span>
      <span class="line">
        <span>
          DIAMOND_PICKAXE: 1.923
        </span>
      </span>
      <span class="line">
        <span>
          GOLDEN_PICKAXE: 62.5
        </span>
      </span>
      <span class="line">
        <span>
          IRON_PICKAXE: 8
        </span>
      </span>
      <span class="line">
        <span>
          STONE_PICKAXE: 7.634
        </span>
      </span>
      <span class="line">
        <span>
          WOODEN_PICKAXE: 13.56
        </span>
      </span>
      <span class="line">
        <span>
        </span>
      </span>
      <span class="line">
        <span>
          # Add as many as you want: bows, shields..
        </span>
      </span>
    </code>
  </pre>
</div>

## Note

<p>
  All items do not have the same amount of maximum durability however repairing
  a tool in the anvil
  <strong>
    always repairs 25% of that maximum amount!
  </strong>
  This is why the experience values look a bit weird. When repairing a diamond
  pickaxe using a diamond in the anvil, you are repairing 25% of these 1561
  durability points which is about 390 durability points corresponding to
  <code>
    390 / 100 * 1,923 = 7.6 EXP
  </code>
  .
</p>
<p>
  When repairing a golden sword, you are only repairing 25% of 32 durability
  points i.e 8 durability points which represents
  <code>
    8 / 100 * 62.5 = 5 EXP
  </code>
  . Repairing a diamond sword using the vanilla anvil gives more experience
  that repairing a golden sword.
</p>
