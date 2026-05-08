# ‼️ Damage Indicators

<p>
  You can edit damage and regen indicators in the config file
  <code>
    indicators.yml
  </code>
  . MythicLib can use a wide range of popular holograms plugins to display
  regen/attack indicators around the target entity.
</p>
<p>
  MythicLib can use a wide range of hologram plugins to display these indicators.
  Please see
  <a href="./compatibility#hologram-plugins">
    this wiki page
  </a>
  for the list of hologram plugins supported by MythicLib.
</p>

## Basic Config

<details class="details custom-block">
  <summary>
    Default Config
  </summary>
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
            damage_indicators
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Enable/disable damage indicators alltogether
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
            true
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Under 0.1 damage, no indicator will show
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            min_damage
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            0.1
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Use format: 'ᜌ{icon} &amp;f{value}ᜌ' along with the resource pack
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # provided in the wiki in order to remove the gray background
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            format
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '{icon} &amp;f{value}'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            decimal_format
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '0.#'
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            custom_font
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
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
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            normal
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '0'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'ᜀ'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '1'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'ᜁ'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '2'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'ᜂ'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '3'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'ᜃ'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '4'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'ᜄ'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '5'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'ᜅ'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '6'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'ᜆ'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '7'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'ᜇ'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '8'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'ᜈ'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '9'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'ᜉ'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'dot'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'ᜊ'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'inter'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'ᜍ'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            crit
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '0'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'ᜐ'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '1'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'ᜑ'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '2'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'ᜒ'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '3'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'ᜓ'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '4'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '᜔'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '5'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '᜕'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '6'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '᜖'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '7'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '᜗'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '8'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '᜘'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '9'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '᜙'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'dot'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'ᜋ'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'inter'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'ᜍ'
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # single =&gt; one indicator only
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # packet =&gt; one indicator per damage packet (!!)
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # type =&gt; one indicator per damage type
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            group_by
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            packet
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            damage_type_splits
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            : [
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            weapon
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ,
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            skill
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ]
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            damage_type_icon_join
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            ''
          </span>
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Join by space character
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            icon
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            weapon
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            normal
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;c🗡'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            crit
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;c&amp;l🗡'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            skill
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            normal
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;6☄'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            crit
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;6&amp;l☄'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            projectile
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            normal
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;a➶'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            crit
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;a&amp;l➶'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            physical
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            normal
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;4✘'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            crit
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;4&amp;l✘'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            magic
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            normal
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;9✩'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            crit
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;9&amp;l✩'
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            split_holograms
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            true
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            holograms_join
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            ' '
          </span>
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Split by space character
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            move
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            true
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            radial_velocity
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            1
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            gravity
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            1
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            initial_upward_velocity
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            1
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            y_offset
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            0.1
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            entity_height_percent
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            0.75
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            r_offset
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            0.5
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            entity_width_percent
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            0.75
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            tick_period
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            3
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            lifespan
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            20
          </span>
        </span>
      </code>
    </pre>
  </div>
</details>
<p>
  You can edit the indicator formats using the
  <code>
    format
  </code>
  option. The
  <code>
    icon
  </code>
  section lets you configure the icons that correspond to every damage type.
</p>

### Physics Options

<p>
  When increasing
  <code>
    radial_velocity
  </code>
  the holo will fly farther away (if the holo plugin you're using supports
  moving holograms - some just don't -). Increasing the
  <code>
    gravity
  </code>
  option will make your holo fly faster to the ground. Conversely increasing
  <code>
    initial_upward_velocity
  </code>
  will make your holo fly higher.
  <code>
    y_offset
  </code>
  can be used if you want to apply a flat Y offset to the location where
  you're displaying the damage indicators. Last but not least, setting
  <code>
    entity_height_percent
  </code>
  to
  <code>
    .75
  </code>
  - for instance - will have the holo display at 75% of the target entity's
  height (this then stacks up with the flat Y coordinate offset), and setting
  it to 100% will have it display at the top of the entity's bounding box.
</p>
<p>
  <img src="/assets/damage_indicators.CqYqRaSc.png" alt="">
</p>
<p>
  When toggling off
  <code>
    move
  </code>
  , holograms will be static and won't move from their initial position.
</p>

### Holograms

<p>
  When toggling on
  <code>
    split_holograms
  </code>
  , each icon will be displayed in its own hologram rather than all icons
  being displayed in the same hologram. When set to
  <code>
    false
  </code>
  , you can configure how the icons are joined together using the
  <code>
    holograms_join
  </code>
  config option. For instance, if you set it to a comma followed by a space
  <code>
    " "
  </code>
  , an indicator displaying both weapon and skill damage will show the weapon
  icon, then a comma and a space, then the skill icon. This would look like
  this:
  <code>
    🗡, ☄
  </code>
  (followed by the indicator damage value).
</p>

## Using a custom font

<p>
  Enable custom fonts by toggling on the
  <code>
    custom_fonts.enabled
  </code>
  config option. MythicLib will then replace any numeric character (0-9)
  with the character you specified in the config. You can also configure
  the character that ML is going to use for the decimal separator (
  <code>
    dot
  </code>
  ) as well as a character that will be planed in between all the other
  characters.
</p>
<p>
  Using custom textures you can then use a resource pack to have damage
  indicators with fully custom characters. Here is a
  <a href="https://www.dropbox.com/s/yih3hsdq6o6eak0/Font.zip?dl=1" target="_blank"
  rel="noreferrer">
    resource pack
  </a>
  that works with the default MythicLib config that you can check to understand
  how to use custom fonts within ML indicators.
</p>

## <code>groupby</code>

<p>
  The parameter
  <code>
    group_by
  </code>
  lets you choose how damage packets together to form indicators. There
  are three available options:
</p>
<ul>
  <li>
    <code>
      single
    </code>
    : groups all damage packets to the entity in one single indicator
  </li>
  <li>
    <code>
      packet
    </code>
    : creates one indicator per damage packet, where each indicator displays
    the total damage of the packet and its list of damage types (one icon per
    damage type).
    <strong>
      This is the option most people would expect by default.
    </strong>
  </li>
  <li>
    <code>
      type
    </code>
    : you choose what damage types are displayed. With this option, you need
    to specify the damage types to split by in the
    <code>
      damage_type_splits
    </code>
    config option. For each damage type specified, one indicator will be created
    displaying the total damage of that type. If a damage type is not present
    in the damage packet, no indicator will be created for it.
  </li>
</ul>
<p>
  In case a single hologram contains multiple damage type icons, you can
  configure how the icons are joined together using the
  <code>
    damage_type_icon_join
  </code>
  config option. For instance, if you set it to a comma followed by a space
  <code>
    " "
  </code>
  , an indicator displaying both weapon and skill damage will show the weapon
  icon, then a space, then the skill icon. This would look like this:
  <code>
    🗡 ☄
  </code>
  (followed by the indicator damage value).
</p>

### Example

<p>
  Let's say that a player just hit a mob with a 100 Atk Damage weapon (
  <em>
    Physical, Weapon
  </em>
  damage). An on-hit skill triggers, dealing 30
  <em>
    Skill, Magic
  </em>
  damage. Finally, elemental stats present on the item deal an additional
  20
  <em>
    Fire-Weapon
  </em>
  damage.
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Mode
      </th>
      <th>
        Resulting Indicators
      </th>
      <th>
        Comment
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>
          single
        </code>
      </td>
      <td>
        <code>
          🗡☄✘ 150
        </code>
      </td>
      <td>
        One single indicator
      </td>
    </tr>
    <tr>
      <td>
        <code>
          packet
        </code>
      </td>
      <td>
        <code>
          🗡✘ 100
        </code>
        ,
        <code>
          ☄✩ 30
        </code>
        ,
        <code>
          🔥🗡 20
        </code>
      </td>
      <td>
        One per packet
      </td>
    </tr>
    <tr>
      <td>
        <code>
          type
        </code>
      </td>
      <td>
        <code>
          🗡 120
        </code>
        ,
        <code>
          ☄ 30
        </code>
      </td>
      <td>
        One per damage type specified
      </td>
    </tr>
  </tbody>
</table>

## Regen/Heal Indicators

<p>
  They share most of their options with damage indicators. These appear
  when regenerating health through potions, natural regeneration, skills...
  You can also apply custom fonts to regen indicators following the same
  syntax as with damage indicators.
</p>
<details class="details custom-block">
  <summary>
    Default Config
  </summary>
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
            regen_indicators
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Enable/disable damage indicators alltogether
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
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Under 0.1 health regen, no indicator will show
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            min_regen
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            0.1
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Use format: 'ᜌ{icon} &amp;f{value}ᜌ' along with the resource pack
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # provided in the wiki in order to remove the gray background
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            format
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;a+{value}'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            decimal_format
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '0.#'
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            custom_font
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
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
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '0'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'ᜀ'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '1'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'ᜁ'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '2'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'ᜂ'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '3'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'ᜃ'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '4'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'ᜄ'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '5'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'ᜅ'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '6'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'ᜆ'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '7'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'ᜇ'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '8'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'ᜈ'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '9'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'ᜉ'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'dot'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'ᜊ'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'inter'
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'ᜍ'
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            move
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            true
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            radial_velocity
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            1
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            gravity
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            1
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            initial_upward_velocity
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            1
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            y_offset
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            0.1
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            entity_height_percent
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            0.75
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            r_offset
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            0.5
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            entity_radius_percent
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            0.75
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            tick_period
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            3
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            lifespan
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            20
          </span>
        </span>
      </code>
    </pre>
  </div>
</details>
<p>
  <img src="/assets/regen_indicator.CagtvlJ1.png" alt="regen_indic">
</p>
