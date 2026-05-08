# 🏹 MMOItems

<p>
  MMOCore is built to be used with MMOItems (
  <a href="https://polymart.org/product/3413/mmoitems" target="_blank" rel="noreferrer">
    Polymart
  </a>
  /
  <a href="https://www.spigotmc.org/resources/mmoitems-premium.39267" target="_blank"
  rel="noreferrer">
    Spigot
  </a>
  ) although it is not a dependency. MMOCore features a lot of compatibility
  options for MMOItems, here is the detailed list.
</p>

### Extra MMOItems Stats

<p>
  When using both MMOCore and MMOItems, extra item stats will automatically
  enable and will be added to the MMOItems item edition GUI.
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Stat
      </th>
      <th>
        Description
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        Max Mana
      </td>
      <td>
        Default stat, but it does support MMOCore
      </td>
    </tr>
    <tr>
      <td>
        Max Stamina
      </td>
      <td>
        Gives extra MMOCore stamina.
      </td>
    </tr>
    <tr>
      <td>
        Max Stellium
      </td>
      <td>
        Gives extra MMOCore stellium.
      </td>
    </tr>
    <tr>
      <td>
        Resource* Regeneration
      </td>
      <td>
        Increases flat resource* regen.
      </td>
    </tr>
    <tr>
      <td>
        Max Resource* Regeneration
      </td>
      <td>
        Regens a % of max resource* every second.
      </td>
    </tr>
    <tr>
      <td>
        Additional Experience
      </td>
      <td>
        Increases exp earned.
      </td>
    </tr>
    <tr>
      <td>
        Skill Cooldown Reduction
      </td>
      <td>
        Default stat, but it does support MMOCore
      </td>
    </tr>
  </tbody>
</table>
<p>
  *Resource stands for either health, mana, stamina or stellium.
</p>

### Quest Objectives & Triggers

<p>
  MMOItems add new quest
  <a href="./../features/quests">
    objectives
  </a>
  to MMOCore quests, where players have to get an item and give it to a
  specific Citizen NPC. You can also setup quest
  <a href="./../features/quests">
    triggers
  </a>
  which give an MMOItem when a specific quest objective is completed.
</p>

### MMOCore Drop Tables

<p>
  You may add items from MI to MMOCore
  <a href="./../features/drop-tables">
    drop tables
  </a>
  .
</p>

### Item Restrictions, Mana

<p>
  MMOItems features item restrictions, including level and class restrictions
  which
  <strong>
    do work
  </strong>
  with MMOCore. MMOItems abilities wand weapons may also use mana or stamina/stellium
  which is also supported by MMOCore.
</p>

### Extra features for MMOItems Crafting

<p>
  In MMOItems, some recipes have specific conditions which must be met for
  the player to be able to use the crafting recipe. MMOCore adds profession
  level crafting restrictions i.e players must be at least Lvl X in some
  profession like smithing or mining, in order to use the recipes. More info
  on MMOItems recipe conditions
  <a href="./../../mmoitems/stations/conditions">
    in the MMOItems wiki
  </a>
  .
</p>
<p>
  <strong>
    Recipe example
  </strong>
  , where the player must be at least Lvl 5 in
  <em>
    Smithing
  </em>
  .
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
          steel-sword:
        </span>
      </span>
      <span class="line">
        <span>
          output:
        </span>
      </span>
      <span class="line">
        <span>
          type: SWORD
        </span>
      </span>
      <span class="line">
        <span>
          id: STEEL_SWORD
        </span>
      </span>
      <span class="line">
        <span>
          conditions:
        </span>
      </span>
      <span class="line">
        <span>
          - 'profession{profession=smithing,level=5}'
        </span>
      </span>
      <span class="line">
        <span>
          ingredients:
        </span>
      </span>
      <span class="line">
        <span>
          - 'vanilla{type=STICK,amount=2}'
        </span>
      </span>
      <span class="line">
        <span>
          - 'mmoitem{type=MATERIAL,id=STEEL_INGOT,amount=4}'
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  MMOCore also adds a new type of crafting trigger (actions made when a
  recipe is used), which can be used to give experience to a player (either
  main experience, or experience in a specific profession). More information
  on MMOItems recipe triggers
  <a href="./../../mmoitems/stations/triggers">
    in the MMOItems wiki
  </a>
  .
</p>
<p>
  <strong>
    Same example
  </strong>
  , which grants 10 Smithing EXP when used
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
          steel-sword:
        </span>
      </span>
      <span class="line">
        <span>
          output:
        </span>
      </span>
      <span class="line">
        <span>
          type: SWORD
        </span>
      </span>
      <span class="line">
        <span>
          id: STEEL_SWORD
        </span>
      </span>
      <span class="line">
        <span>
          ...
        </span>
      </span>
      <span class="line">
        <span>
          triggers:
        </span>
      </span>
      <span class="line">
        <span>
          - 'exp{profession=smithing,amount=10}'
        </span>
      </span>
    </code>
  </pre>
</div>
