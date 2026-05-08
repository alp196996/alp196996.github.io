# 🎒 Vanilla Inventory

<p>
  The player's vanilla inventory can be directly used to place accessory
  slots and buttons. This feature is fully compatible with the use of zero,
  one or more
  <a href="./custom-inventory">
    custom inventories
  </a>
  .
</p>
<p>
  <img src="/assets/vanilla_inventory.COYiXQnH.png" alt="">
</p>

## Configuration

<p>
  Toggle off the
  <code>
    enabled
  </code>
  option, or remove the
  <code>
    vanilla_inventory.yml
  </code>
  config file altogether to disable the use of the player's vanilla inventory.
  It is disabled by default so you don't actually need to do anything if
  you don't plan on using it.
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
          # For the vanilla inventory, this option is not very important,
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # it only has to be different from other inventories
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          id
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          vanilla_inventory
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Will place items in the player's vanilla 3x9 inventory grid
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Either 'vanilla' or 'custom'
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
          vanilla
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Toggle on/off for temporary disabling this inventory.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Vanilla inventory is disabled by default.
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
    </code>
  </pre>
</div>
<div class="warning custom-block">
  <p class="custom-block-title custom-block-title-default">
    WARNING
  </p>
  <p>
    Make sure you set the
    <code>
      type
    </code>
    option to
    <code>
      vanilla
    </code>
    . Also make sure that you only have one inventory config with the
    <code>
      type
    </code>
    option set to
    <code>
      vanilla
    </code>
    .
  </p>
</div>

## Item Slots

<p>
  Any slot that you configure in the
  <code>
    slots
  </code>
  config section file will appear in the vanilla player's inventory. It
  works just like with the inventory GUI: players can drag &amp; drop items
  onto custom slots to equip items. Slot items appear on player login, so
  make sure you restart your
</p>
<div class="info custom-block">
  <p class="custom-block-title custom-block-title-default">
    INFO
  </p>
  <p>
    Note that you cannot use vanilla slot types such as
    <code>
      helmet
    </code>
    or
    <code>
      off_hand
    </code>
    in the vanilla inventory, as they are already there.
  </p>
</div>
<p>
  If a player connects and they already happen to have items placed in their
  vanilla inventoryn and MMOInventory tries to put a slot item there, it
  will first try to move the item somewhere else first. The player's items
  will not be lost.
</p>
