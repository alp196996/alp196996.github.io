# 🔌 Overview

<p>
  Access the
  <code>
    MMOInventory
  </code>
  plugin singleton instance using Bukkit's plugin manager after making sure
  the plugin is installed.
</p>
<div class="language-java">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
    java
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          MMOInventory plugin
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (MMOInventory) Bukkit.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getPluginManager
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ().
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getPlugin
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "MMOInventory"
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          );
        </span>
      </span>
    </code>
  </pre>
</div>

## Inventories

<p>
  Every inventory has an instance of
  <code>
    Inventory
  </code>
  stored in memory. This abstract interface has two implementations,
  <code>
    CustomInventory
  </code>
  for custom inventories, and
  <code>
    VanillaInventory
  </code>
  for the vanilla inventory. Recall that there can be at most one vanilla
  inventory registered.
</p>
<p>
  The
  <code>
    Inventory
  </code>
  instances contain configuration information about the inventory: items
  and slots inside it, commands bound to them, scripts when opening or closing
  the inventory...
</p>
<p>
  First, access MMOInventory's inventory manager using the following syntax:
</p>
<div class="language-java">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
    java
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          MMOInventory plugin
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          /* see above */
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          InventoryManager inventories
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          plugin.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getInventoryManager
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ();
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  Then access instances of
  <code>
    Inventory
  </code>
  using the following methods:
</p>
<div class="language-java">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
    java
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          CustomInventory someCustomInv
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          inventories.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getCustom
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "custom_inventory_id"
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          );
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          VanillaInventory theVanillaInv
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          inventories.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getVanilla
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ();
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          Collection&lt;
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          Inventory
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          &gt; all
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          inventories.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getAll
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ();
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          Collection&lt;
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          Inventory
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          &gt; customInvs
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          inventories.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getAllCustom
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ();
        </span>
      </span>
    </code>
  </pre>
</div>

## Slots

<p>
  The
  <code>
    Inventory#getSlots
  </code>
  method returns a collection of instances of class
  <code>
    CustomSlot
  </code>
  . A custom slot corresponds to a slot in chest UIs where players can place
  items.
</p>
<p>
  The key feature of these custom slots is their list of restrictions (one
  <code>
    SlotRestriction
  </code>
  object per restriction use). There are multiple implementations of the
  <code>
    SlotRestriction
  </code>
  abstract interface, like
  <code>
    LevelRestriction
  </code>
  or
  <code>
    TypeRestriction
  </code>
  when MMOItems is installed.
</p>

## Registering new restriction types

<p>
  Say you have a custom plugin with player data, and you want to restrict
  certain slots to players who have a specific boolean flag toggled on in
  their player data object,
  <code>
    SomePlayerData
  </code>
  .
</p>
<p>
  First, provide an implementation of
  <code>
    SlotRestriction
  </code>
  :
</p>
<div class="language-java">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
    java
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          public
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          class
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          MyRestriction
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          extends
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          SlotRestriction
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          {
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          public
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          MyRestriction
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (MMOLineConfig
        </span>
        <span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">
          config
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ) {
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          // No config options needed?
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          }
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          @
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          Override
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          public
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          boolean
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          isVerified
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (InventoryData
        </span>
        <span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">
          player
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          , CustomSlot
        </span>
        <span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">
          ignore2
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          , ItemStack
        </span>
        <span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">
          ignore1
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ) {
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          // does not depend on the custom slot in which item is placed.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          // does not depend on the item placed either.
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          SomePlayerData yourPlayerData
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          SomePlayerData.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          get
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (player.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getPlayer
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ());
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          return
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          yourPlayerData.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          canUseThisSlot
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ();
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          }
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          }
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  Then register this slot restriction type with MMOInventory's slot manager.
  Let's call this restriction
  <code>
    my_restriction
  </code>
  .
</p>
<div class="language-java">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
    java
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          MMOInventory plugin
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          /* see above */
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          InventoryManager inventories
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          plugin.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getInventoryManager
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ();
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
    Make sure you call this code after MMOInventory loads, but before it enables.
    You can either put this in your
    <code>
      #onLoad
    </code>
    if you make MMOInventory a
    <em>
      (soft)depend
    </em>
    , or in
    <code>
      #onEnable
    </code>
    if you make MMOInventory a
    <em>
      loadbefore
    </em>
    .
  </p>
</div>
<p>
  You can then use this restriction inside inventory configs to create slots
  that are only usable when a certain condition is met. This can be combined
  with other existing restrictions to create interesting perks for players.
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
          slots
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
          SPECIAL_RING_SLOT
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
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
          accessory
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          material
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          GOLD_NUGGET
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          custom_model_data_string
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "ring1"
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
          "&amp;6Special Ring Slot"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          slot
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          34
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          restrictions
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
          "mmoitemstype{type=RING}"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "my_restriction{}"
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # &lt;&lt;==== HERE!
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
          'Drag &amp; drop an item to equip it.'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          ''
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'This slot is only available after'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'completing the quest XXXXX.'
        </span>
      </span>
    </code>
  </pre>
</div>

## Player Data

<p>
  First, access player data objects using the following syntax:
</p>
<div class="language-java">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
    java
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          Player yourPlayer
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          /* see above */
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          MMOInventory plugin
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          /* see above */
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          PlayerDataManager manager
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          plugin.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getDataManager
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ();
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          PlayerData playerData
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          manager.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          get
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (yourPlayer);
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  Each player has a
  <code>
    PlayerData
  </code>
  object stored in memory, and an
  <code>
    InventoryData
  </code>
  object for each registered inventory. The
  <code>
    InventoryData
  </code>
  abstract interface is implemented for both custom inventories (
  <code>
    CustomInventoryData
  </code>
  ) and vanilla inventories (
  <code>
    VanillaInventoryData
  </code>
  ).
</p>
<p>
  You can obtain instances of
  <code>
    InventoryData
  </code>
  using the following methods:
</p>
<div class="language-java">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
    java
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          PlayerData playerData
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          /* see above */
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          CustomInventory customInv
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          /* see above */
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          Inventory someInv
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          /* see above */
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          VanillaInventoryData vanillaInvData
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          playerData.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getVanilla
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ();
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          CustomInventoryData customInvData
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          playerData.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getCustom
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (customInv);
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          InventoryData invData
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          playerData.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          get
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (someInv);
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          // either custom or vanilla
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  You can obtain the current list of equipped items of a player using the
  following method. Using lookup mode
  <code>
    NORMAL
  </code>
  will ignore items that have been placed in an invalid inventory slot.
  Using lookup mode
  <code>
    IGNORE_RESTRICTIONS
  </code>
  will return all items, including the items present in the player's vanilla
  inventory.
</p>
<div class="language-java">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
    java
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          List&lt;
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          InventoryItem
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          &gt; items
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          playerData.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getItems
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (InventoryLookupMode.NORMAL);
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  The
  <code>
    InventoryData
  </code>
  abstract interface exposes mainly two important methods for getting and
  updating inventory content. Note that calls to
  <code>
    #setItem
  </code>
  trigger an
  <code>
    InventoryUpdateEvent
  </code>
  .
</p>
<div class="language-java">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
    java
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          InventoryData invData
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          /* see above */
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          CustomSlot someSlot
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          /* ... */
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          invData.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          setItem
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (someSlot,
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          new
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          ItemStack
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (Material.DIAMOND_SWORD));
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          invData.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          setItem
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (someSlot,
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          null
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          );
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          // remove item
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          Collection&lt;
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          InventoryItem
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          &gt; content
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          invData.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          retrieveItems
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ();
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  The class
  <code>
    InventoryItem
  </code>
  stores information about the item and its position in the inventory.
</p>
