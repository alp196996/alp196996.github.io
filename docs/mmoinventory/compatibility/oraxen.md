# 💎 Oraxen

<p>
  This pages describes the built-in compatibility features between MMOInventory
  and
  <a href="https://oraxen.com/" target="_blank" rel="noreferrer">
    Oraxen
  </a>
  . Note that it does not mean that other item plugins are not supported,
  it just means that Oraxen has some exclusive features.
</p>

## Custom Textures

<p>
  MMOInventory 1.6.5 introduces native Oraxen support. Since MMOInventory
  requires the use of a custom resource pack, MMOInventory will detect Oraxen
  on startup and inject the required items into its registry. The only thing
  you
  <strong>
    MUST
  </strong>
  do is to place all of your item textures into one specific folder, that
  is
  <code>
    Oraxen/pack/textures/items/mmoinventory
  </code>
  . Your textures must be .PNG files, and the name must follow the
  <code>
    lower_case_format
  </code>
  . There must be a perfect ONE-TO-ONE matching between your
  <code>
    slots.yml
  </code>
  configuration and your Oraxen texture folder! If there is any error, Oraxen
  will probably output a texture error. Example with the default MMOInventory
  <code>
    slots.yml
  </code>
  config:
</p>
<p>
  <img src="/assets/oraxen_folder.cjdfbYhQ.png" alt="image">
</p>
<p>
  If you see a file named
  <code>
    mmoinventory-hook.yml
  </code>
  located in the
  <code>
    Oraxen/items/
  </code>
  folder, do
  <strong>
    NOT
  </strong>
  touch it! It's generated automatically by MMOInventory and handles all
  the Oraxen compatibility stuff by registering the items in your resource
  pack.
</p>

## Custom GUI Textures

<p>
  Using Oraxen you can also setup glyphs which let you add a custom texture
  to your inventory. To use a glyph, remember you can use the PAPI placeholder
  <code>
    %oraxen_&lt;glyph_id&gt;%
  </code>
  . Also make sure you remove the filler item config section from the
  <code>
    items.yml
  </code>
  config section when using a custom GUI texture.
</p>
<p>
  <img src="/assets/oraxen_inv.DV4VHorx.png" alt="oraxen_inv">
</p>
<p>
  It's super easy to use Oraxen glyphs inside the inventory name. Head to
  the
  <code>
    language.yml
  </code>
  config file:
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
          inventory-name
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
          '&amp;f%oraxen_shift_16%%oraxen_shift_2%%oraxen_mmoinv_default%'
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  If you have never heard about custom emojis/GUI textures/icons before
  but are hyped by the previous screenshot, you should definitely learn more
  about it. Oraxen basically automates the use of custom item/GUI/emoji textures.
</p>
