# 💫 Skill Casting

<p>
  Make sure you first learn about
  <a href="./intro">
    skills
  </a>
  and
  <a href="./binding#skill-slots">
    skill slots
  </a>
  . MMOCore offers multiple ways of casting skills:
</p>
<ul>
  <li>
    using key combos
    <span class="VPBadge info">
      most popular!
    </span>
  </li>
  <li>
    using the
    <code>
      1
    </code>
    to
    <code>
      9
    </code>
    hotbar keys (
    <em>
      skill bar
    </em>
    )
  </li>
  <li>
    using the mouse scroller
  </li>
  <li>
    using a command
  </li>
</ul>
<p>
  Make sure you restart your server when editing your skill casting configuration.
</p>

## Key Combos

<p>
  Key combos like
  <em>
    Left-Right-Left
  </em>
  can be used to cast skills. Players can start a combo by pressing the
  first key of any of the configured combos, which will temporarily alter
  the player's action bar, and display their current key combo there. As
  soon as MMOCore recognizes a valid key combo that is bound to some skill
  slot, it will cast the corresponding skill.
</p>
<p>
  <img src="/assets/combos.D-UXtaQ4.gif" alt="">
</p>
<p>
  One combo can be used to cast the skill bound to one specific slot. Therefore,
  there are as many valid key combos as there are skill slots. This implies
  that a specific key combo won't make two players cast the same skill (unless
  they have bound the same skill to the same skill slot). A few examples
  (the default configuration):
</p>
<ul>
  <li>
    LEFT -&gt; RIGHT -&gt; LEFT will cast the skill on the 1st slot
  </li>
  <li>
    LEFT -&gt; RIGHT -&gt; RIGHT will cast the skill on the 2nd slot
  </li>
  <li>
    LEFT -&gt; RIGHT -&gt; DROP will cast the skill on the 3rd slot
  </li>
  <li>
    And so on...
  </li>
</ul>
<p>
  <img src="/assets/combos.BYsPp-zr.png" alt="">
</p>

### Keybind List

<p>
  These are the different keybinds that you can use inside of a combo. For
  instance, you can choose to start every combo with a right click, and then
  every combo is a combination or right or left clicks. Bukkit click events
  are canceled when performing a combo, which means you are temporarily unable
  to interact with any item/spell when performing a combo.
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Keybind
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
          LEFT_CLICK
        </code>
      </td>
      <td>
        When left clicking
      </td>
    </tr>
    <tr>
      <td>
        <code>
          RIGHT_CLICK
        </code>
      </td>
      <td>
        When right clicking
      </td>
    </tr>
    <tr>
      <td>
        <code>
          DROP
        </code>
      </td>
      <td>
        Only works when holding an item
      </td>
    </tr>
    <tr>
      <td>
        <code>
          SWAP_HANDS
        </code>
      </td>
      <td>
        When swapping main and off hand items
      </td>
    </tr>
    <tr>
      <td>
        <code>
          CROUCH
        </code>
      </td>
      <td>
        When enabling crouch mode
      </td>
    </tr>
  </tbody>
</table>

### How to use key combos

<p>
  Head to
  <code>
    MMOCore/config.yml
  </code>
  and replace the
  <code>
    skill-casting
  </code>
  config section for the following code snippet:
</p>
<details class="details custom-block">
  <summary>
    Copy and paste inside
    <code>
      config.yml
    </code>
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
            skill-casting
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            mode
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            KEY_COMBOS
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # General options
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            initializer-key
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            SWAP_HANDS
          </span>
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Optional. Press to enter skill casting, otherwise any combo key will
            automatically have the player enter skill casting.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            quit-key
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            SWAP_HANDS
          </span>
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Optional. Press to quit skill casting. Can be the same as the 'initializer-key'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            stay-in
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            false
          </span>
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # When enabled, player will remain in skill-casting after casting a skill.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            allowed-keys
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Disable some keys here, MMOCore will stop listening to them.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            LEFT_CLICK
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            RIGHT_CLICK
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            DROP
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            SWAP_HANDS
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            CROUCH
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Sound options
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            sound
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            begin-combo
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # When entering combo casting
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            sound
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            BLOCK_END_PORTAL_FRAME_FILL
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            volume
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
            pitch
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            2
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            combo-key
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # The click sound whenever pressing a keybind
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            sound
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            BLOCK_LEVER_CLICK
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            volume
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
            pitch
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            2
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            fail-combo
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # If the keybind sequence does not correspond to any preconfigured combo
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            sound
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            BLOCK_FIRE_EXTINGUISH
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            volume
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
            pitch
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            2
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            fail-skill
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # If you cast a skill but it fails.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            sound
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            BLOCK_FIRE_EXTINGUISH
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            volume
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
            pitch
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            2
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Action bar options
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            action-bar
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            prefix
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            "&amp;c❤ {health}/{max_health} &amp;f| "
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            suffix
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            " &amp;f| {mana_icon} {mana}/{max_mana} &amp;f| &amp;7⛨ {armor}"
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            is-subtitle
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            false
          </span>
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            #If the message is shown as a subtitle rather than in the action-bar.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            separator
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            ' - '
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            no-key
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '****'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            key-name
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            LEFT_CLICK
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'LEFT'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            RIGHT_CLICK
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'RGHT'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            DROP
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'DROP'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            SWAP_HANDS
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'SWAP'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            CROUCH
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'SHFT'
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Edit default combos here
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            combos
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '1'
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
            LEFT_CLICK
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            LEFT_CLICK
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '2'
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
            LEFT_CLICK
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            SWAP_HANDS
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '3'
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
            RIGHT_CLICK
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            LEFT_CLICK
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '4'
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
            SWAP_HANDS
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            RIGHT_CLICK
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '5'
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
            RIGHT_CLICK
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            SWAP_HANDS
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '6'
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
            LEFT_CLICK
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            RIGHT_CLICK
          </span>
        </span>
      </code>
    </pre>
  </div>
</details>
<p>
  The
  <code>
    initializer-key
  </code>
  option is optional. It is the key players need to press first in order
  to start any combo. When unset, pressing the first key of any combo will
  start a new combo.
</p>
<p>
  Similarily, the
  <code>
    quit-key
  </code>
  is optional. This key will cancel the current combo when pressed. Additionally,
  if the
  <code>
    stay-in
  </code>
  option is toggled on, players can cast as many combos as they want in
  a row without leaving skill casting (action bar stays on).
</p>

### Class-Specific Key Combos

<p>
  Every class can have different combo-to-slot mappings. Class mappings
  take precedence over mappings defined in the plugin main config (see above).
  In order to setup class-specific combo mappings, paste the following code
  snippet into your class config file under the
  <code>
    MMOCore/classes
  </code>
  folder, and edit it to your liking:
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
          # MMOCore/classes/&lt;class_name&gt;.yml
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          key-combos
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '1'
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
          RIGHT_CLICK
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          LEFT_CLICK
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          RIGHT_CLICK
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '2'
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
          RIGHT_CLICK
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          RIGHT_CLICK
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '3'
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
          RIGHT_CLICK
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          LEFT_CLICK
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '4'
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
          RIGHT_CLICK
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          SWAP_HANDS
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '5'
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
          RIGHT_CLICK
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          SWAP_HANDS
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '6'
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
          LEFT_CLICK
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          RIGHT_CLICK
        </span>
      </span>
    </code>
  </pre>
</div>

### Action Bar

<p>
  Key combos use the player's action bar to display the current combo. To
  fully disable the casting action bar, delete or uncomment the
  <code>
    action-bar
  </code>
  section altogether. In this section, you can edit the prefix and suffix
  of the action bar as well as other formatting options.
</p>

## Skill Bar

<p>
  This way of casting skills utilizes the action bar. Players must press
  some key (
  <code>
    F
  </code>
  by default) which will have them enter
  <em>
    casting mode
  </em>
  . While in casting mode, the player's bound skills are displayed onto
  the action bar, along with their respective cooldown if they happen to
  be on cooldown. Skills that are castable appear green, skills on cooldown
  appear red, and skills which you cannot cast due to low mana appear blue.
</p>
<p>
  While in casting mode, pressing any key from
  <code>
    1
  </code>
  to
  <code>
    6
  </code>
  will cast the skill bound to that slot.
</p>
<p>
  <img src="/assets/skill_bar.BpGkdVfw.png" alt="">
</p>
<p>
  Players can leave casting mode by pressing the same key again. They can't
  enter the casting mode while in creative.
</p>

### How to use

<p>
  Head to
  <code>
    MMOCore/config.yml
  </code>
  and replace the
  <code>
    skill-casting
  </code>
  config section for the following code snippet:
</p>
<details class="details custom-block">
  <summary>
    Copy and paste inside
    <code>
      config.yml
    </code>
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
            skill-casting
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            mode
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            SKILL_BAR
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # General options
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            open
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            SWAP_HANDS
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            ignore-sneak
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
            use-lowest-keybinds
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
            # Messages and sounds
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            message
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            enter
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            message
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;e&amp;l☄ &amp;a&amp;lSKILL CASTING &amp;e&amp;l☄'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            action-bar
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
            duration
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            20
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            priority
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            31
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            sound
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            BLOCK_END_PORTAL_FRAME_FILL,1,2
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            quit
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            message
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;e&amp;l☄ &amp;c&amp;lSKILL CASTING &amp;e&amp;l☄'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            action-bar
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
            priority
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            31
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            sound
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            BLOCK_FIRE_EXTINGUISH,1,2
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Action bar format
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            action-bar
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            split
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;7 &amp;7 - &amp;7 '
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            ready
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;6[{index}] &amp;a&amp;l{skill}'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            on-cooldown
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;6[{index}] &amp;c&amp;l{skill} &amp;6(&amp;c{cooldown}&amp;6)'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            no-mana
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;6[{index}] &amp;9&amp;l{skill}'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            no-stamina
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;6[{index}] &amp;9&amp;l{skill}'
          </span>
        </span>
      </code>
    </pre>
  </div>
</details>
<p>
  <code>
    disable-sneak
  </code>
  prevents the skill bar from opening if the player is sneaking when pressing
  the input keybind.
</p>
<p>
  <code>
    use-lowest-keybinds
  </code>
  makes MMOCore choose the lowest available keybinds for castable skills.
  Since you can leave some skill slots empty or even bind a passive skill
  (uncastable) to a skill slot, the player might have empty slots before
  their first active (castable) skill. By toggling on this option, all active
  skills are "shifted to the left" to use the lowest available keybinds (
  <code>
    1
  </code>
  first, then
  <code>
    2
  </code>
  , etc...)
</p>

### Skill Slot Offset

<p>
  You may notice that the keys shown in the screenshot don't exactly match
  <code>
    1
  </code>
  to
  <code>
    6
  </code>
  . This happens because if your selected hotbar slot is
  <code>
    2
  </code>
  , then skill slots
  <code>
    2
  </code>
  ,
  <code>
    3
  </code>
  ,
  <code>
    4
  </code>
  and all subsequent slots are shifted by 1.
</p>
<p>
  If your selected hotbar slot is
  <code>
    2
  </code>
  , the Minecraft client does not send any packet to the server when pressing
  <code>
    2
  </code>
  , rendering MMOCore unable to detect a slot swap. Generally, the Minecraft
  client avoids sending useless packets to the server.
</p>
<div class="info custom-block">
  <p class="custom-block-title custom-block-title-default">
    INFO
  </p>
  <p>
    If there are only 6 skill slots, and the player is on slot
    <code>
      7
    </code>
    ,
    <code>
      8
    </code>
    or
    <code>
      9
    </code>
    , there will be no offset.
  </p>
</div>

### Action Bar

<p>
  This casting mode uses the action bar too. To fully disable the casting
  action bar, delete or uncomment the
  <code>
    action-bar
  </code>
  section altogether. In this section, you can edit formatting options of
  the player's action bar while in casting mode.
</p>

## Skill Scroller

<p>
  The player first presses a specific key (set to
  <code>
    F
  </code>
  by default) to enter casting mode. From there, they use the mouse scroller
  to navigate through their skill list. The skill currently selected appears
  on the player's action bar. They then press another key (set to
  <code>
    R
  </code>
  by default) to cast the selected skill.
</p>

### How to setup

<p>
  Head to
  <code>
    MMOCore/config.yml
  </code>
  and replace the
  <code>
    skill-casting
  </code>
  config section for the following code snippet:
</p>
<details class="details custom-block">
  <summary>
    Copy and paste inside
    <code>
      config.yml
    </code>
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
            skill-casting
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            mode
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            SKILL_SCROLLER
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # General options
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            action-bar-format
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'CLICK TO CAST: {selected}'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            quit-on-cast
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            false
          </span>
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Should the player quit casting mode when skill is cast?
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            quit-on-switch-empty-hand
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            false
          </span>
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Player quits casting mode when switching to an empty hand
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            ignore-sneak
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            false
          </span>
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Ignore pressed keys when player is sneaking
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Keybinds
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            enter-key
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            SWAP_HANDS
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            cast-key
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            LEFT_CLICK
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            scroll-key
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            key
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            RIGHT_CLICK
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            sneak
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            false
          </span>
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # No sneak + right click
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            scroll-back-key
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            key
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            RIGHT_CLICK
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            sneak
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            true
          </span>
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Sneak + right click
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Edit sounds here
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            sound
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            enter
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            sound
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            BLOCK_END_PORTAL_FRAME_FILL
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            volume
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
            pitch
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            2
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            change
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            sound
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            BLOCK_LEVER_CLICK
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            volume
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
            pitch
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            2
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            change-back
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            sound
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            BLOCK_LEVER_CLICK
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            volume
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
            pitch
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            1.5
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            leave
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            sound
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            BLOCK_FIRE_EXTINGUISH
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            volume
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
            pitch
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            2
          </span>
        </span>
      </code>
    </pre>
  </div>
</details>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Parameter
      </th>
      <th>
        Optional
      </th>
      <th>
        Description
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>
          scroll-key
        </code>
      </td>
      <td>
        Yes
      </td>
      <td>
        Optional: comment the line to disable. When set, the mouse scroller no
        longer scrolls through the skill list, and the player has to press this
        keybind to scroll through their skill list.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          scroll-back-key
        </code>
      </td>
      <td>
        Yes
      </td>
      <td>
        Optional: comment the line to disable. When set, the mouse scroller no
        longer scrolls through the skill list, and the player has to press this
        keybind to scroll through their skill list.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          cast-key
        </code>
      </td>
      <td>
      </td>
      <td>
        Keybind you need to press in order to cast the currently selected skill.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          quit-on-cast
        </code>
      </td>
      <td>
        Yes
      </td>
      <td>
        When enabled, players quit casting mode when casting the selected skill.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          quit-on-switch-empty-hand
        </code>
      </td>
      <td>
        Yes
      </td>
      <td>
        When enabled, players quit casting mode when scrolling to an empty hotbar
        slot.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          ignore-sneak
        </code>
      </td>
      <td>
        Yes
      </td>
      <td>
        When enabled, keys pressed while crouching are ignored.
      </td>
    </tr>
  </tbody>
</table>

### Action Bar

<p>
  This casting mode uses the action bar too. To fully disable the casting
  action bar, delete or uncomment the
  <code>
    action-bar
  </code>
  section altogether. In this section, you can edit formatting options of
  the player's action bar while in casting mode.
</p>

## Using commands

<p>
  MMOCore features commands to cast skills. These commands work anytime
  even if skill casting is disabled, if WorldGuard/Residence flags prevent
  players from casting skills...
</p>
<p>
  The following command will cast the n-th castable skill of the given player.
</p>
<div class="language-cmd">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
    cmd
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          /mmocore cast first
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          &lt;
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          player
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          &gt;
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          &lt;
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          slot
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          &gt;
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  The following command will have the given player cast the skill on their
  n-th skill slot.
</p>
<div class="language-cmd">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
    cmd
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          /mmocore cast specific
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          &lt;
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          player
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          &gt;
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          &lt;
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          slot
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          &gt;
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  For example, let's say a player has four skill slots and the corresponding
  skill bindings:
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Slot 1
      </th>
      <th>
        Slot 2
      </th>
      <th>
        Slot 3
      </th>
      <th>
        Slot 4
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        -
      </td>
      <td>
        Passive Skill
      </td>
      <td>
        Active Skill n1
      </td>
      <td>
        Active Skill n2
      </td>
    </tr>
  </tbody>
</table>
<p>
  <code>
    /mmocore cast first &lt;player&gt; 1
  </code>
  will cast the 1st castable skill, hence on slot 3. The skill on slot 2
  cannot be cast since it is passive, it is therefore ignored by this command.
  <code>
    /mmocore cast first &lt;player&gt; 2
  </code>
  will cast the 2nd castable skill, hence on slot 4.
  <code>
    /mmocore cast first &lt;player&gt; 3
  </code>
  and higher indices will return an error.
</p>
<p>
  <code>
    /mmocore cast specific &lt;player&gt; 1
  </code>
  will result in an error as there is no castable skill currently in slot
  1.
  <code>
    /mmocore cast specific &lt;player&gt; 2
  </code>
  will also result in an error because the skill on slot 2 is not castable
  (as it is a passive skill).
  <code>
    /mmocore cast specific &lt;player&gt; 3
  </code>
  will cast the skill on slot 3.
</p>

## Disable skill casting

<p>
  If you are not using class skills or if you are not planning on adding
  active skills, you can just disable skill casting by using the following
  config syntax snippet inside
  <code>
    config.yml
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
          skill-casting
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          mode
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          NONE
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  This will disable skill casting altogether. We generally recommend using
  this if you plan on either not using skill casting at all, or if you only
  want to cast skills through commands.
</p>

## Editing the skill casting particle effect

<p>
  By default, MMOCore displays a small helix particle effect around players
  that are currently in casting mode. You can edit the particle used, size
  and color. Add the following code snippet to your MMOCore class config
  file.
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
          # Particles displayed around players when in casting mode.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          cast-particle
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          particle
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          CRIT
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Mandatory
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Mandatory for colored particles (DUST)
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #size: 2
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #color:
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # red:
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # green:
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # blue:
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Mandatory for block-based particles (BLOCK, FALLING_DUST, DUST_PILLAR,
          BLOCK_CRUMBLE, BLOCK_MARKER)
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #material: DIRT
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  In order to disable the skill casting particle effect, you need to delete/comment
  out the
  <code>
    cast-particle
  </code>
  configuration section from your MMOCore class configuration file.
</p>

## Timeout for skill casting

<p>
  Since MMOCore 1.12.1 development builds, you can add a timeout to skill
  casting. If no activity is detected for more than X seconds, skill casting
  will end instantly. It's very simple to setup, just add the following option
  to your existing
  <code>
    skill-casting
  </code>
  config section. This option supports all casting modes.
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
          skill-casting
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # ...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          time-out
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          200
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # 10 seconds (in ticks)
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  If you do not plan on using skill casting timeout, simply do not use this
  parameter inside the
  <code>
    skill-casting
  </code>
  config section.
</p>
