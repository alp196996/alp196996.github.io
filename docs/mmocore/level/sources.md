# 🪴 Experience Sources

<p>
  An experience source gives you experience for certain professions when
  certain events occur. Each experience source has its own specific parameters
  that you can specify in the config with
  <code>
    exp_source_name{param1=P1;param2=p2..}
  </code>
  . You must specify the parameter
  <code>
    amount=min-max
  </code>
  corresponding to the bounds between which the amount of experience will
  be randomly chosen each time.
</p>
<p>
  You can also use experience sources for your main classes.
</p>

## Examples

<p>
  Let's have a look at an example. These are the default experience sources
  for the
  <em>
    Woodcutting
  </em>
  profession. It basically gives the player anywhere from 1 to 3 experience
  points whenever he cuts a log.
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
          exp-sources
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
          'mineblock{type=OAK_LOG;amount=1-3}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'mineblock{type=SPRUCE_LOG;amount=1-3}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'mineblock{type=BIRCH_LOG;amount=1-3}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'mineblock{type=JUNGLE_LOG;amount=1-3}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'mineblock{type=ACACIA_LOG;amount=1-3}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'mineblock{type=BIRCH_LOG;amount=1-3}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'mineblock{type=DARK_OAK_LOG;amount=1-3}'
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  These are the default experience sources for the farming profession, which
  grants some experience points whenever the player harvest any type of crops.
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
          exp-sources
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
          'mineblock{type=CARROTS;amount=1-3;crop=true;player-placed=true}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'mineblock{type=POTATOES;amount=1-3;crop=true;player-placed=true}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'mineblock{type=WHEAT;amount=1-3;crop=true;player-placed=true}'
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  <code>
    crop=true
  </code>
  means that it'll only grant EXP once it's at it's full growth stage.
  <code>
    player-placed=true
  </code>
  means that it'll grant EXP even if the player placed the block
</p>

### Experience Sources Tables (Since 1.9.5)

<p>
  You can create experiences-sources tables in
  <code>
    exp-sources.yml
  </code>
  . It links an id to a list of experiences sources that you will all be
  to reference at once.
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
          #Example
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          test-exp-source
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
          'damagedealt{type=physical;amount=250}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'move{type=WALK;amount=300}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'from{source=test2}'
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          test2
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
          'eat{type=CARROT;amount="50"}'
        </span>
      </span>
    </code>
  </pre>
</div>

## Every experience source

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Source
      </th>
      <th>
        Usage
      </th>
      <th>
        Description
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        From
      </td>
      <td>
        <code>
          from{source=exp-source-id}
        </code>
      </td>
      <td>
        Loads all the experience source in
        <code>
          exp-sources.yml
        </code>
        matching to
        <code>
          exp-source-id
        </code>
        .
      </td>
    </tr>
    <tr>
      <td>
        Mine Block
      </td>
      <td>
        <code>
          mineblock{type=BLOCK_MATERIAL}
        </code>
      </td>
      <td>
        More info on
        <a href="./../features/mining">
          Mining
        </a>
        .
      </td>
    </tr>
    <tr>
      <td>
        Kill Mob
      </td>
      <td>
        <code>
          killmob{type=MOB_ENTITY_TYPE;amount=1-3}
        </code>
      </td>
      <td>
        Killing a mob grants exp
      </td>
    </tr>
    <tr>
      <td>
        Kill Mythic Mob
      </td>
      <td>
        <code>
          killmythicmob{type=MobInternalName;amount=1-3}
        </code>
      </td>
      <td>
        Killing a MythicMob grants exp
      </td>
    </tr>
    <tr>
      <td>
        Fish Item
      </td>
      <td>
        <code>
          fishitem{type=ITEM_MATERIAL}
        </code>
      </td>
      <td>
        Fishing an item of the specified type grants exp.
      </td>
    </tr>
    <tr>
      <td>
        Smelt Item
      </td>
      <td>
        <code>
          smeltitem{type=ITEM_MATERIAL}
        </code>
      </td>
      <td>
        When an item is smelted (furnaces)
      </td>
    </tr>
    <tr>
      <td>
        Craft Item
      </td>
      <td>
        <code>
          craftitem{type=ITEM_MATERIAL}
        </code>
      </td>
      <td>
        When an item is crafted
      </td>
    </tr>
    <tr>
      <td>
        Brew potion
      </td>
      <td>
        <code>
          brewpotion{effect=SPEED,REGEN,...}
        </code>
      </td>
      <td>
        <a href="./../profession/alchemy">
          More info on Alchemy
        </a>
      </td>
    </tr>
    <tr>
      <td>
        Place Block
      </td>
      <td>
        <code>
          placeblock{type=BLOCK_MATERIAL}
        </code>
      </td>
      <td>
        Placing a block of the specified type grants xp.
      </td>
    </tr>
    <tr>
      <td>
        Repair Item
      </td>
      <td>
        <code>
          repairitem{type=ITEM_MATERIAL}
        </code>
      </td>
      <td>
        You can define on sithing.yml the amount of xp for each material. Check
        <a href="./../profession/smithing">
          here
        </a>
        the info about smithing..
      </td>
    </tr>
    <tr>
      <td>
        Enchant Item
      </td>
      <td>
        <code>
          enchantitem{type=...}
        </code>
      </td>
      <td>
        <a href="./../profession/enchanting">
          More info on Enchanting
        </a>
      </td>
    </tr>
    <tr>
      <td>
        Climb
      </td>
      <td>
        <code>
          climb{type=CLIMB_TYPE}
        </code>
      </td>
      <td>
        When you climb one block. The type can be ladder, vines, weeping-vines,
        twisting-vines. If you don't specify any type it will trigger for all types.
      </td>
    </tr>
    <tr>
      <td>
        Eat
      </td>
      <td>
        <code>
          eat{type=ITEM_MATERIAL}
        </code>
      </td>
      <td>
        Give experience when some specific food is eaten. If you don't specify
        a material for the type it will give exp disregarding what you eat.
      </td>
    </tr>
    <tr>
      <td>
        Move
      </td>
      <td>
        <code>
          move{type=MOVING_TYPE}
        </code>
      </td>
      <td>
        Give experience for each block travelled the type can be sneak, fly, swim,
        sprint or walk.If it is not specified will trigger all the time.
      </td>
    </tr>
    <tr>
      <td>
        Resource
      </td>
      <td>
        <code>
          resource{type=RESOURCE_TYPE}
        </code>
      </td>
      <td>
        Gives exp for each resource of type "RESOURCE_TYPE" consumed. Resource
        type can be mana, stamina or stellium.
      </td>
    </tr>
    <tr>
      <td>
        Ride
      </td>
      <td>
        <code>
          ride{type=ENTITY_TYPE}
        </code>
      </td>
      <td>
        When you move riding a certain entity. Check the
        <a href="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html"
        target="_blank" rel="noreferrer">
          EntityType
        </a>
        enum to specify the type.
      </td>
    </tr>
    <tr>
      <td>
        Tame
      </td>
      <td>
        <code>
          tame{}
        </code>
      </td>
      <td>
        Exp given for each damage your wolves make.
      </td>
    </tr>
    <tr>
      <td>
        Damage Taken
      </td>
      <td>
        <code>
          damagetaken{type=DAMAGE_CAUSE}
        </code>
        or all damage cause
        <code>
          damagetaken{amount=1}
        </code>
      </td>
      <td>
        Exp given for each damage a player takes damage from a certain cause.
        You can do for instance DROWNING, FALL, FIRE or BLOCK_EXPLOSION, Check
        <a href="https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDamageEvent.DamageCause.html"
        target="_blank" rel="noreferrer">
          here
        </a>
        the documentation of DamageCause.
      </td>
    </tr>
    <tr>
      <td>
        Damage Dealt
      </td>
      <td>
        <code>
          damagedealt{type=DAMAGE_TYPE}
        </code>
        or all damage types
        <code>
          damagedealt{amount=1}
        </code>
      </td>
      <td>
        Exp given per damage dealt of a certain mmo damage type.The damage type
        can be magic, physical, weapon, skill, projectile,unarmed, on-hit, minion
        or dot.
      </td>
    </tr>
  </tbody>
</table>
