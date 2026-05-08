# 🎨 Inventory Textures

<p>
  This page explains how to apply a custom texture to any player inventory
  in MMOInventory.
</p>

## The Problem

<p>
  Below is a screenshot that shows a very barebones setup of a custom inventory.
  As you can see, the vanilla grid pattern is very ugly and we would like
  to hide it.
</p>
<p>
  <img src="/assets/vanilla_grid_pattern.D1rJFJwp.png" alt="">
</p>

## Using custom fonts

<p>
  By default, MMOInventory now makes use of custom fonts to handle inventory
  textures. For this tutorial, we consider the inventory which config is
  stored in
  <code>
    MMOInventory/inventory/default_mmoinventory.yml
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
          ui_layout
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # .....
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          name
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          self
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "&amp;f%mythiclib_space_-17%\u40E0%mythiclib_space_-169%&lt;#3F3F3F&gt;Equipment"
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          other
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "&amp;f%mythiclib_space_-17%\u40E0%mythiclib_space_-169%&lt;#3F3F3F&gt;Equipment
          of {name}"
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  Note that there are two names, one for opening your own inventory, and
  another one when opening the inventory of another player. Also note that:
</p>
<ul>
  <li>
    <code>
      \u40E0
    </code>
    is a custom font character introduced by the default MMOInventory resource
    pack.
  </li>
  <li>
    <code>
      %mythiclib_space_-17%
    </code>
    is a placeholder introduced by MythicLib which inserts 17 negative spaces.
  </li>
  <li>
    <code>
      &lt;#3F3F3F&gt;
    </code>
    is the default Minecraft font color for inventory names (as of 1.21.8).
  </li>
</ul>
<p>
  MMOInventory comes with
  <strong>
    four ready-to-use inventory textures
  </strong>
  . Choose the one you prefer the most! You'll find below a table with all
  built-in inventory textures.
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Texture
      </th>
      <th>
        Row Count
      </th>
      <th>
        Code
      </th>
      <th>
        Screenshot
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        Classic
      </td>
      <td>
        4
      </td>
      <td>
        <code>
          \u40E0
        </code>
      </td>
      <td>
        <img src="/assets/classic_inv_texture.BsztvsGt.png" alt="">
      </td>
    </tr>
    <tr>
      <td>
        Classic
      </td>
      <td>
        6
      </td>
      <td>
        <code>
          \u40E1
        </code>
      </td>
      <td>
        <img src="/assets/classic_6_inv_texture.D3O80WGb.png" alt="">
      </td>
    </tr>
    <tr>
      <td>
        Enhanced
      </td>
      <td>
        6
      </td>
      <td>
        <code>
          \u40E2
        </code>
      </td>
      <td>
        <img src="/assets/enhanced_inv_texture.BivGD2Bs.png" alt="">
      </td>
    </tr>
    <tr>
      <td>
        Oraxen
      </td>
      <td>
        5
      </td>
      <td>
        <code>
          \u40E3
        </code>
      </td>
      <td>
        <img src="/assets/oraxen_inv_texture.BXPbFtRh.png" alt="">
      </td>
    </tr>
  </tbody>
</table>

## 1.20.x and below

<p>
  In 1.20.x and below, there used to be a workaround using the
  <em>
    display.gui.scale
  </em>
  parameter of item models. When using a gray uniform texture as a "filler"
  texture, you could set the
  <em>
    scale
  </em>
  parameter to something like 1.1 (110% apparent texture size), which would
  cause the item texture to overflow and cover up the vanilla inventory grid
  pattern.
</p>
<details class="details custom-block">
  <summary>
    Old Model File
  </summary>
  <p>
    For reference, this is the model file that was used for the filler texture.
    Note that the
    <code>
      item/fill
    </code>
    texture is a gray uniform texture with color code
    <code>
      #C6C6C6
    </code>
    (vanilla inventory background color, as of 1.21.8).
  </p>
  <div class="language-json">
    <button title="Copy Code" class="copy">
    </button>
    <span class="lang">
      json
    </span>
    <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
    tabindex="0" dir="ltr">
      <code>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            {
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            "parent"
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            "item/handheld"
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ,
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            "textures"
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            : {
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            "layer0"
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            "mmoinventory:item/fill"
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            },
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            "display"
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :{
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            "gui"
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            : {
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            "rotation"
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            : [
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            0
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ,
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            0
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ,
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            0
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ],
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            "translation"
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            : [
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            0
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ,
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            0
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ,
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            0
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ],
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            "scale"
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            : [
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            1.1
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ,
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            1.1
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ,
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            1.1
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ]
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
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            }
          </span>
        </span>
      </code>
    </pre>
  </div>
</details>
<p>
  This no longer works in recent versions (1.21 and above). While the scale
  parameter still exists, the texture overflow mecanism was patched. In recent
  versions, we recommend using a custom font to completely override the vanilla
  inventory texture. Good news, this is super easy to do, and you can also
  use this to fully
</p>
