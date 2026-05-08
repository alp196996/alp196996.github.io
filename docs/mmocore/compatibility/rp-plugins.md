# 💎 Resource Pack Plugins

<p>
  By resource pack plugins we refer to plugins which automate the creation
  and deployment of a resource pack for your server, the most popular being:
</p>
<ul>
  <li>
    <a href="https://www.spigotmc.org/resources/%E2%9C%A8itemsadder%E2%AD%90emotes-mobs-items-armors-hud-gui-emojis-blocks-wings-hats-liquids.73355/"
    target="_blank" rel="noreferrer">
      ItemsAdder
    </a>
  </li>
  <li>
    <a href="https://polymart.org/product/6901/nexo" target="_blank" rel="noreferrer">
      Nexo
    </a>
  </li>
  <li>
    <a href="https://www.spigotmc.org/resources/%E2%98%84%EF%B8%8F-oraxen-custom-items-blocks-emotes-furniture-resourcepack-and-gui-1-18-1-21-8.72448/"
    target="_blank" rel="noreferrer">
      Oraxen
    </a>
  </li>
</ul>
<p>
  With little to no effort, you can apply custom UI textures to any inventory
  in MMOCore using one of these plugins. In fact, you don't need any of these
  plugins to have custom UI textures for MMOCore, but it's a little easier
  when using one of these.
</p>

## Custom GUI Textures

<p>
  The following example makes use of Oraxen to apply a custom texture to
  the
  <a href="./../features/attributes">
    attribute
  </a>
  GUI. The following syntax snippet is to be used inside the
  <code>
    gui/attribute-view.yml
  </code>
  config file.
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
          # GUI display name
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
          '&amp;f%oraxen_shift_16%%oraxen_shift_2%%oraxen_mmocore_attr%'
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #.......
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  The
  <code>
    %oraxen_&lt;glyph_id&gt;%
  </code>
  placeholder has the effect of overlaping the default GUI texture with
  the newly configured glyph texture. Using
  <code>
    shift
  </code>
  placeholders you can also correct the small horizontal offsets you might
  get when using the glyph placeholder alone (try it and see).
</p>
<p>
  <img src="/assets/oraxen_ui.DI-xskYP.gif" alt="O0ISYkr">
</p>
