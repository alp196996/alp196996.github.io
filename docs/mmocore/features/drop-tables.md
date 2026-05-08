# 💰 Drop Tables

<p>
  The
  <code>
    /drop-tables
  </code>
  folder is where you setup all of your custom drop tables for
  <a href="./mining">
    blocks
  </a>
  and
  <a href="./loot-chests">
    loot chests
  </a>
  . Since their use is not limited to block drops, we decided to give them
  a separate folder so that you can setup them there and only use their reference
  in other configs to make them lighter/easier to read and setup.
</p>
<p>
  Drop tables can be used to drop vanilla items, mmoitems or the content
  of another MMOCore drop table. You can encapsulate drop tables inside of
  other drop tables to create complex drop tables.
</p>

## Default Config

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
          # You may create as many drop tables as you want. You can also
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # make drop tables refer to other drop tables.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # DON'T try to create recursive drop tables (drop tables which
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # call themselves to multiply items dropped). It will work, but
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # if you put a probability of 1 it will crash your server
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # instantly. The more the probability, the higher your chance
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # to slow down your server performances. Fun fact though :p
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          diamond-drop-table
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
          'vanilla{type=DIAMOND} 1 1-3'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'mmoitem{type=material;id=RARE_DIAMOND} .1 1-3'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'droptable{id=other-drop-table} .1'
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          other-drop-table
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
          'vanilla{type=STONE} 1 1-3'
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  This default file is pretty self explanatory. The first drop table example
  showcases all the drop items you can use inside of any drop table. In order
  to create a drop table, just add a new section to any file in the
  <code>
    /drop-tables
  </code>
  folder. Then find an ID for your drop table (this identifier must be unique
  and will be used as a reference later).
</p>
<p>
  The
  <code>
    diamond-drop-table
  </code>
  example is the drop table used in the
  <a href="./../features/mining">
    Mining profession
  </a>
  when mining diamond ore. The items it may drop are vanilla diamonds, a
  rare diamond from MMOItems, and all the content from the table called
  <code>
    other-drop-table
  </code>
  (a stone block).
</p>
<p>
  The numbers after the item mean the chance, and then the amount (can be
  an integer range). The format for every drop item is the following:
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
  You don't have to specify any of the three last parameters (drop chance/amount/weight)
  although you will need to specify, for instance, drop chance if you want
  to utilize the weight system (explained at the bottom of the page).
</p>

## Available Drop Types

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Drop Item
      </th>
      <th>
        Format
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        Another Drop Table
      </td>
      <td>
        <code>
          droptable{id=drop-table-id} &lt;chance&gt; &lt;amount&gt;
        </code>
      </td>
    </tr>
    <tr>
      <td>
        Vanilla Item
      </td>
      <td>
        <code>
          vanilla{type=ITEM_MATERIAL} &lt;chance&gt; &lt;amount&gt;
        </code>
      </td>
    </tr>
    <tr>
      <td>
        Gold Coin
      </td>
      <td>
        <code>
          gold{} &lt;chance&gt; &lt;amount&gt;
        </code>
      </td>
    </tr>
    <tr>
      <td>
        Note
      </td>
      <td>
        <code>
          note{min=MIN_WORTH;max=MAX_WORTH} &lt;chance&gt; &lt;amount&gt;
        </code>
      </td>
    </tr>
    <tr>
      <td>
        mmoitem
      </td>
      <td>
        <code>
          mmoitem{type=MMOITEM_TYPE;id=MMOITEM_ID} &lt;chance&gt; &lt;min-max&gt;
        </code>
      </td>
    </tr>
    <tr>
      <td>
        gentemplate
      </td>
      <td>
        <code>
          gentemplate{id=TEMPLATE_ID;tier=TIER_NAME;level=&lt;int&gt;;match-level=&lt;true/false&gt;}
          &lt;chance&gt; &lt;min-max&gt;
        </code>
      </td>
    </tr>
    <tr>
      <td>
        miloot
      </td>
      <td>
        <code>
          miloot{type=ITEM_TYPE_ID;class="Class Name";match-class=&lt;true/false&gt;;tier=TIER_ID;level=&lt;int&gt;;match-level=&lt;true/false&gt;}
          &lt;chance&gt; &lt;min-max&gt;
        </code>
      </td>
    </tr>
  </tbody>
</table>
<p>
  <code>
    mmoitem
  </code>
  ,
  <code>
    gentemplate
  </code>
  and
  <code>
    miloot
  </code>
  are only available when using MMOItems. For the
  <code>
    gentemplate
  </code>
  and
  <code>
    miloot
  </code>
  drop table items, please refer to
  <a href="./../../mmoitems/items/obtain-item">
    this MMOItems wiki page
  </a>
  .
</p>

## Table Capacity, Items Weights

<p>
  Item weights and table capacity fix the problem of having a drop table
  with two items that are both too rare to drop at the same time. Using item
  weight you can define how 'heavy' each drop is compared to others, in order
  to limit extreme drops where one player has enough luck and drops every
  single rare item from a boss.
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
          weighted-drop-table
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
          'vanilla{type=DIAMOND} .33 1-3 1'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'vanilla{type=EMERALD} .5 1-3 1'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'vanilla{type=GOLD_INGOT} 1 1-3 1'
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  Example scenario: you want ONLY one of these three items to drop and every
  item has 1/3 chance to be selected.
</p>
<p>
  Every drop item has an item weight of 1, meaning that if this drop table
  is utilized by a loot chest (or any other system that supports MMOCore
  drop tables) with a capacity of 1, only one item will be selected.
</p>
<p>
  <strong>
    When a drop table is called to generate random loot, the sum of all selected
    drop items WEIGHTS cannot exceed the given CAPACITY.
  </strong>
  The same drop table can be used with different capacities (for practical
  reasons). If you use the drop table setup above with a capacity of 3, you
  can drop the three items at the same time. If you use it with a capacity
  of 2, 2 items will spawn at most.
</p>
<p>
  Keep in mind you can use any value for the item weights. You can also
  have items with 0 weight along with weighted items in the same drop table
  (in fact, this is the setup you will be probably using to setup rare boss
  drops).
</p>
<p>
  When a drop table is called, drop items are read in the order given by
  the config setup. You must keep that in mind when setting up your item
  drop chances, as this is why items towards the ends have a higher chance
  of being picked. The last item always has probability 1 because it's guaranteed
  to be picked, if all the previous item rolls failed.
</p>

### Where to configure the loot table capacity

<p>
  If you are using drop tables inside of loot chests, please refer to
  <a href="./loot-chests#loot-chest-tiers">
    this page
  </a>
  to configure the chest loot table capacity.
</p>
<p>
  Otherwise, you can specify the default capacity for any loot table using
  the
  <code>
    capacity
  </code>
  option:
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
          some-drop-table
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          capacity
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
          'vanilla{type=DIAMOND} .33 1-3 1'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'vanilla{type=EMERALD} .5 1-3 1'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'vanilla{type=GOLD_INGOT} 1 1-3 1'
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  If absolutely no capacity is specified, MMOCore will use a default capacity
  of 100.
</p>

## Drop Table Conditions

<p>
  Conditions are added to the drop table using the following syntax. Learn
  more about the conditions system
  <a href="./../misc/conditions">
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
          diamond-drop-table
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
          'vanilla{type=DIAMOND} 1 1-3'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'mmoitem{type=material;id=RARE_DIAMOND} .1 1-3'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'droptable{id=other-drop-table} .1'
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
          'level{profession=mining;amount=10}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          ...
        </span>
      </span>
    </code>
  </pre>
</div>

## Extra Options

<p>
  Toggling on the
  <code>
    shuffle
  </code>
  option will shuffle the order in which items are looted inside the drop
  table. This can be used to easily increase the randomness of drop tables.
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
          some-drop-table
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          shuffle
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
          'vanilla{type=DIAMOND} 1 1-3'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'mmoitem{type=material;id=RARE_DIAMOND} .1 1-3'
        </span>
      </span>
    </code>
  </pre>
</div>
