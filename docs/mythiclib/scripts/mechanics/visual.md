# 🎨 Visual

<div class="warning custom-block">
  <p class="custom-block-title custom-block-title-default">
    WARNING
  </p>
  <p>
    Under construction
  </p>
</div>

## Send a message to a player

<p>
  This supports PAPI placeholders and color codes.
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
          example_mechanic
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
          tell
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
          'Hello world!'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          target
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
          caster
        </span>
      </span>
    </code>
  </pre>
</div>

## Play a sound at target location

<p>
  For sound names, you can either use Bukkit/Paper sound names from the
  <a href="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html"
  target="_blank" rel="noreferrer">
    Bukkit javadocs
  </a>
  or use the Minecraft
  <a href="https://minecraft.wiki/w/Sounds.json/Java_Edition_values" target="_blank"
  rel="noreferrer">
    vanilla sound names
  </a>
  . Pitch ranges from 0.5 (low) to 2 (high).
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
          example_mechanic
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
          sound
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
          ENTITY_ENDER_DRAGON_FLAP
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
          target
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
          target_location
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  This mechanics also supports custom sound.
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
          #Custom Sound
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          example_mechanic
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
          sound
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
          minecraft:custom.effects.sound
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
          target
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
          target_location
        </span>
      </span>
    </code>
  </pre>
</div>

## Spawn a particle

<p>
  Particle list
  <a href="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Particle.html"
  target="_blank" rel="noreferrer">
    here
  </a>
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
          example_mechanic
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
          particle
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          target
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
          circle
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          radius
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          3
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          particle
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          FLAME
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          amount
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          30
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          speed
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          0.2
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          x
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          0
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          y
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          0
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          z
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          0
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  Particles can be summoned with initial velocity by setting amount to 0.
  You can also use this to summon colored particles (
  <code>
    REDSTONE
  </code>
  particles notably). Integers provided in the
  <code>
    color
  </code>
  config section are in RGB format, from 0 to 255.
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
          example_mechanic
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
          particle
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          target
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
          circle
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          radius
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          3
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          particle
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          REDSTONE
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          amount
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
          speed
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          0
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          x
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          0
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          y
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          0
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          z
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          0
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          color
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Color goes here.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          red
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          255
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          green
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          220
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          blue
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          0
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  Or particles requiring block data (
  <code>
    BLOCK_CRACK
  </code>
  ,
  <code>
    BLOCK_DUST
  </code>
  and
  <code>
    BLOCK_MARKER notably)
  </code>
  . You can find the list of materials that you can use in the
  <code>
    block
  </code>
  option
  <a href="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html"
  target="_blank" rel="noreferrer">
    here
  </a>
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
          example_mechanic
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
          particle
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          target
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
          circle
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          radius
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          3
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          particle
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          BLOCK_CRACK
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          amount
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
          speed
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          0
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          x
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          0
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          y
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          0
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          z
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          0
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          block
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          PACKED_ICE
        </span>
      </span>
    </code>
  </pre>
</div>

## Send an action bar message

<p>
  This supports PAPI placeholders and color codes. For message priority
  and duration, please refer to the
  <a href="./../../misc/player-messages#send-to-action-bar">
    Messages
  </a>
  wiki page.
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
          example_script
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          mechanics
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
          'action_bar{target=caster;format="&amp;aYou have been hit for &amp;c&lt;damage&gt;
          &amp;adamage!";priority=30;duration=30}'
        </span>
      </span>
    </code>
  </pre>
</div>
