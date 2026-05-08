# 📦 Block Types

<p>
  Block types are helpful to determine what happens (item drops, block regen..)
  when you
  <a href="./../features/mining">
    break a block
  </a>
  .
</p>
<p>
  By distinguishing these block types MMOCore can apply different behaviours
  to them. Using player skulls with custom texture, you can setup small ore
  blocks which are a great addition for building. Using MI custom blocks
  you can have blocks with new textures, breaking speed and fully configurable
  drop tables.
</p>

## Available Block Types

<p>
  The following table provides all block types that are supported by the
  MMOCore custom mining system.
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Block Type
      </th>
      <th>
        Description
      </th>
      <th>
        Example
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        MMOItems Custom Block
      </td>
      <td>
        When mining a MMOItems custom block.
      </td>
      <td>
        <code>
          mmoitems{id=6}
        </code>
      </td>
    </tr>
    <tr>
      <td>
        Player Head
      </td>
      <td>
        When mining a player head with a custom texture.
      </td>
      <td>
        <code>
          skull{value="aZd9fE8...48dfQX="}
        </code>
      </td>
    </tr>
    <tr>
      <td>
        Noteblock
      </td>
      <td>
        When mining a noteblock.
      </td>
      <td>
        <code>
          note{note=1;instrument=PIANO}
        </code>
      </td>
    </tr>
    <tr>
      <td>
        Mushroom Block
      </td>
      <td>
        When mining a mushroom block.
      </td>
      <td>
        <code>
          mushroom{type=MUSHROOM_STEM,faces="NORTH,EAST"}
        </code>
      </td>
    </tr>
    <tr>
      <td>
        Vanilla Block
      </td>
      <td>
        When mining any other block. Fallback.
      </td>
      <td>
        <code>
          vanilla{type=DIAMOND_ORE}
        </code>
      </td>
    </tr>
  </tbody>
</table>
<p>
  Notes:
</p>
<ul>
  <li>
    For player heads/skulls with textures, you need to provide the Base64
    texture value of the skull, not the texture URL.
  </li>
  <li>
    For noteblocks, the note is from 1 to 24. The list of intruments can be
    found in the
    <a href="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Instrument.html"
    target="_blank" rel="noreferrer">
      Spigot javadocs
    </a>
    .
  </li>
  <li>
    For mushroom blocks, possible types are
    <code>
      MUSHROOM_STEM
    </code>
    ,
    <code>
      RED_MUSHROOM_BLOCK
    </code>
    and
    <code>
      BROWN_MUSHROOM_BLOCK
    </code>
    . Available faces are
    <code>
      UP
    </code>
    ,
    <code>
      DOWN
    </code>
    ,
    <code>
      NORTH
    </code>
    ,
    <code>
      SOUTH
    </code>
    ,
    <code>
      EAST
    </code>
    ,
    <code>
      WEST
    </code>
    .
  </li>
</ul>

## Example config

<p>
  This is a small part of the default config for the Mining profession.
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
          on-mine:
        </span>
      </span>
      <span class="line">
        <span>
          emerald:
        </span>
      </span>
      <span class="line">
        <span>
          material: vanilla{type=EMERALD_ORE}
        </span>
      </span>
      <span class="line">
        <span>
          drop-table:
        </span>
      </span>
      <span class="line">
        <span>
          items:
        </span>
      </span>
      <span class="line">
        <span>
          - 'vanilla{type=EMERALD} 1 1-9'
        </span>
      </span>
      <span class="line">
        <span>
          vanilla-drops: false
        </span>
      </span>
      <span class="line">
        <span>
          regen:
        </span>
      </span>
      <span class="line">
        <span>
          time: 2000
        </span>
      </span>
      <span class="line">
        <span>
          temp-block: skull{value="long_texture_value_here"}
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  This config makes the vanilla emerald ore block drop 1 to 9 emeralds (and
  cancels vanilla drops), and replace it temporarily (100 seconds = 2.000
  ticks) by a custom textured skull. This means you can also use these block
  types to chose what temporary block should be placed after breaking a specific
  block.
</p>

## Extra Options

<p>
  You may use the
  <code>
    age
  </code>
  vanilla block type option to spawn back fully/partially grown crops using
  block regen. The following example would spawn back fully grown wheat crops
  after a wheat block is broken.
  <code>
    vanilla{type=WHEAT,age=7}
  </code>
</p>
