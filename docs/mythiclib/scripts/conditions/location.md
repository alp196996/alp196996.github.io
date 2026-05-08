# Location

<div class="warning custom-block">
  <p class="custom-block-title custom-block-title-default">
    WARNING
  </p>
  <p>
    Under construction
  </p>
</div>

## Check for the target script location biome

<p>
  Checks if the script target location (or source location when
  <code>
    source
  </code>
  is set to true) biome is a specific biome. List of biomes
  <a href="https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html"
  target="_blank" rel="noreferrer">
    here
  </a>
  . You can use multiple biome names, separate them using
  <code>
    ,
  </code>
  . Warning, biome names are highly case sensitive.
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
          example_condition:
        </span>
      </span>
      <span class="line">
        <span>
          type: biome
        </span>
      </span>
      <span class="line">
        <span>
          name: 'BIRCH_FOREST,DEEP_COLD_OCEAN,END_HIGHLANDS'
        </span>
      </span>
      <span class="line">
        <span>
          source: false
        </span>
      </span>
    </code>
  </pre>
</div>

## Checking if some location is within block boundaries

<p>
  Checks if the target location of the script (or source location, if
  <code>
    source
  </code>
  is set to true) is within a boundary that is defined by two other positions
  which are
  <code>
    loc1
  </code>
  and
  <code>
    loc2
  </code>
  . These positions must be provided using location targeters.
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
          example_condition:
        </span>
      </span>
      <span class="line">
        <span>
          type: cuboid
        </span>
      </span>
      <span class="line">
        <span>
          loc1: # Location targeter needed here
        </span>
      </span>
      <span class="line">
        <span>
          type: custom
        </span>
      </span>
      <span class="line">
        <span>
          x: 10
        </span>
      </span>
      <span class="line">
        <span>
          y: 67
        </span>
      </span>
      <span class="line">
        <span>
          z: -250
        </span>
      </span>
      <span class="line">
        <span>
          loc2: # Location targeter needed here
        </span>
      </span>
      <span class="line">
        <span>
          type: custom
        </span>
      </span>
      <span class="line">
        <span>
          x: 15
        </span>
      </span>
      <span class="line">
        <span>
          y: 72
        </span>
      </span>
      <span class="line">
        <span>
          z: -246
        </span>
      </span>
      <span class="line">
        <span>
          source: false
        </span>
      </span>
    </code>
  </pre>
</div>

## Check if script target location is close to another location

<p>
  Checks if the script target location (or source location if
  <code>
    source
  </code>
  is set to true) is less than X blocks away from a center location.
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
          example_condition:
        </span>
      </span>
      <span class="line">
        <span>
          type: distance
        </span>
      </span>
      <span class="line">
        <span>
          location: # Location targeter needed here
        </span>
      </span>
      <span class="line">
        <span>
          type: target_location
        </span>
      </span>
      <span class="line">
        <span>
          max: '10' # 10 blocks away max
        </span>
      </span>
      <span class="line">
        <span>
          source: false
        </span>
      </span>
    </code>
  </pre>
</div>

## Check for the script world

<p>
  Checks if the script is ran in a specific world. You can use multiple
  world names, separate them using
  <code>
    ,
  </code>
  . Warning, world names are highly case sensitive.
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
          example_condition:
        </span>
      </span>
      <span class="line">
        <span>
          type: world
        </span>
      </span>
      <span class="line">
        <span>
          name: 'world_the_end'
        </span>
      </span>
    </code>
  </pre>
</div>
