# 🎣 Fishing

<p>
  MMOCore may be used to override/rewrite default fishing drop tables.
</p>

## Fishing Experience

<p>
  Using the
  <code>
    fishitem
  </code>
  <a href="./../level/sources">
    experience source
  </a>
  , you can make players earn a certain amount of EXP when fishing specific
  items, like fishes, enchanted books, saddles, etc. The rarer the item,
  the more experience players should earn.
</p>
<p>
  Currently, the
  <code>
    fishitem
  </code>
  experience source only supports item materials, which means a player will
  not get extra EXP from looting a mending enchanted book over a Power I
  enchanted book. The only way to bind specific experience amounts to amounts
  is to hook onto MMOItems items using the fishing drop tables which can
  be edited in the fishing.yml profession config file.
</p>
<p>
  <strong>
    If you don't want to utilize professions in general
  </strong>
  , just ignore the fishing experience sources and use the fishing drop
  tables without specifying any experience.
  <strong>
    If you don't want to utilize the MMOCore fishing drop tables
  </strong>
  , just use the fishing experience sources, and delete any default fishing
  drop tables.
</p>

## Configuration

<p>
  The main config file is
  <code>
    professions/fishing.yml
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
          name
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          Fishing
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          experience
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          base
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
          per-level
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
          exp-sources
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          : {}
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Fishing drop tables which override MC default.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # When fishing, the plugin reads through all the drop tables
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # and picks THE first one which all conditions are met!!
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # You must put at first place the drop tables which
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # have the most conditions/which are the most important.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Number of tugs = number of times you need to click to fish.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          on-fish
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          overriding-drop-table
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          conditions
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
          'region{name="swamp,second-region"}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'biome{name=beach}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # When drop table is read, one of these
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # items will be selected randomly.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          items
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Tugs needed: 4 to 5
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Fishing EXP earned: 1 to 6
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'mmoitem{type=CONSUMABLE;id=SUSHI_ROLL;tugs=30-40;experience=1-6} 1 1-1
          9'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Tugs needed: 10 to 20
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Fishing EXP earned: 20 to 30
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'mmoitem{type=GEM_STONE;id=SPITEFUL_OPAQUE_DIAMOND;tugs=10-15;experience=20-30}
          1 1-1 1'
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Default drop table which always apply.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # When removing every drop table, the vanilla
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # fishing mecanism is back.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          default
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          items
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
          'vanilla{type=SALMON;tugs=4-5;experience=1-6} 1 2-5 1'
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  <em>
    As you can see, the default fishing config setup does not utilize fishing
    experience sources although you can add other exp sources to that profession
    if required.
  </em>
  Fishing drop tables are defined by two options: conditions and items.
</p>
<p>
  When a player fishes, MMOCore goes through all the fishing drop tables
  and picks the first one which conditions are all met by the player. The
  two conditions available as of right now are the
  <code>
    region
  </code>
  condition which hooks onto WorldGuard. This condition lets you configure
  specific drop tables for each WorldGuard region. This lets you create specific
  regions where you can fish rarer items. You can use the
  <a href="./../features/waypoints">
    waypoints
  </a>
  system in parallel to create a unique fishing zone with rare drops! The
  other condition is the
  <code>
    biome
  </code>
  condition, which reads the biome your standing in. Biomes must be formatted
  in the
  <code>
    name=&lt;biome&gt;
  </code>
  format to function -- see example above.
</p>
<p>
  If you create a drop table with no condition, make sure it's the last
  one otherwise it will always be chosen by MMOCore. Moreover creating a
  no-condition fishing drop table means that MMOCore fishing drop tables
  <strong>
    always
  </strong>
  override the default vanilla drop tables.
</p>

## Fishing Drop Tables

<p>
  Learn about
  <a href="./../features/drop-tables">
    regular drop tables
  </a>
  first.
</p>
<p>
  Fishing drop tables are slightly different from regular drop tables (used
  by random chests or block drops). The main difference is that a fishing
  drop table always require ONE and only ONE item to be randomly picked and
  dropped.
</p>
<p>
  This changes the way MMOCore picks that one random item. In fact the
  <code>
    chance
  </code>
  option is never used by fishing drop tables. Even if you set the drop
  item chance to 0%, your item might be picked.
</p>
<p>
  Fishing drop tables
  <strong>
    use item weight to determine drop chance
  </strong>
  . Every table item is assigned a weight, which is a number. The higher
  this number, the higher the drop chance. The probability of an item being
  picked and dropped is
  <code>
    &lt;item weight&gt; / &lt;sum of item weights from all the items in that
    drop table&gt;
  </code>
  .
</p>
<p>
  The generic format for a drop item is the following (same as a regular
  drop table item). As explained above, the
  <code>
    &lt;drop-chance&gt;
  </code>
  option is completely useless and can be set to anything.
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
          droptype{&lt;parameter1&gt;=&lt;value1&gt;;&lt;parameter2&gt;=&lt;value2&gt;}
          &lt;drop-chance&gt; &lt;min-max&gt; &lt;weight&gt;
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  There are some advantages to this weight system. First of all, if you
  ever want to add a new item to your fishing drop tables, you don't actually
  have to edit all the previously configured drop chances. Just add some
  new table item with a specific weight, and because of the way the drop
  chances are calculated, this will have the effect of 'updating all the
  other item drop chances'. The second advantage is that it's really adapted
  to fishing tables requiring to have only ONE item dropped at a time.
</p>

### Tugs

<p>
  MMOCore improves the default fishing mechanism by adding
  <strong>
    tugs
  </strong>
  . When a player catches a fish, the fish tries to resist, therefore the
  player must spam-click his fishing rod until it gives up! The tugs dictate
  the amount of clicks needed to catch the fish. If a player stops clicking
  while the fish is resisting, the fish will eventually go away.
</p>
<p>
  To set the amount of tugs required to catch a certain item, add
  <code>
    ;tugs=min-max
  </code>
  to the item line config. You may also use
  <code>
    ;tugs=10
  </code>
  if you want that tugs number to always be the same.
</p>

### Experience

<p>
  To have an item give the player a specific amount of exp when fished,
  add
  <code>
    experience=min-max
  </code>
  to the item line config. A random amount of exp anywhere between the two
  given boundaries will be rolled every time the item is caught by a player.
  You may also use
  <code>
    experience=30
  </code>
  if you want the exp amount to be a constant.
</p>

### Vanilla Experience

<p>
  You can also give vanilla exp when catching a fish by adding
  <code>
    vanilla-exp=min-max
  </code>
  to the item line config. This field is optionnal and works exactly like
  <code>
    experience
  </code>
  .
</p>
