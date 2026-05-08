# 💪 Attributes

<p>
  Attributes are super classic RPG "stats" which players can level up to
  unlock new perks. These perks includes additional stats (max health, damage,
  cooldown reduction...) and the ability to use certain items. This very
  classic RPG feature adds more theory crafting material to your server.
</p>
<p>
  <img src="/assets/attribute_ui.wIHIIgQM.gif" alt="">
</p>
<p>
  MMOCore’s attributes are fully integrated with
  <strong>
    MMOItems
  </strong>
  , allowing you to set
  <strong>
    attribute requirements
  </strong>
  for items. This means you can configure an MMOItem so that a player can
  only equip or use it if they have at least a certain number of points in
  a specific MMOCore attribute. For example, you could make a legendary sword
  require
  <strong>
    15 Strength
  </strong>
  before it can be wielded, or a mystical staff require
  <strong>
    20 Intelligence
  </strong>
  before it can be used. This creates a natural progression system where
  players need to invest in the right attributes to unlock access to more
  powerful gear.
</p>
<p>
  <strong>
    Attributes can also grant fully custom perks
  </strong>
  — for example, they can run commands, send messages, or unlock skills
  when leveled up. Using PAPI placeholders you can also get the current value
  of a player's attribute and use these values inside custom conditions anywhere
  you need them (MythicMobs skills, MythicLibs scripts....).
</p>

## Attribute Menu

<p>
  Use
  <code>
    /attributes
  </code>
  to open up the attribute menu. Players can see the current value of their
  stats, spend points to level up their attributes, or reallocate their attribute
  points (also referred to as
  <em>
    respec
  </em>
  ).
</p>
<p>
  You will need one
  <em>
    attribute point
  </em>
  to level up once one single attribute.
</p>
<p>
  To reallocate your attribute points, click the
  <em>
    Reallocate Skill Points
  </em>
  button. You will need one
  <em>
    attribute reallocation point
  </em>
  , that you can give to players using an
  <a href="./../general/commands">
    admin command
  </a>
  .
</p>
<details class="details custom-block">
  <summary>
    Other Looks for the Menu
  </summary>
  <p>
    Check out
    <a href="./../compatibility/rp-plugins">
      this wiki page
    </a>
    to learn about custom GUI textures. Here is a better looking version of
    the same GUI.
  </p>
  <p>
    <img src="/assets/oraxen_ui.DI-xskYP.gif" alt="O0ISYkr">
  </p>
  <p>
    Here is another look for the same GUI using another custom texture.
  </p>
  <p>
    <img src="/assets/attribuite_ui_2.K-5i_koz.png" alt="image">
  </p>
</details>

## Default Attributes & Ideas

<p>
  This section covers the attributes that are provided in the default MMOCore
  attributes configuration file. You are encouraged to edit and balance them
  to your liking, as this should serve as a reference/inspiration for you.
  The default MMOCore attributes are Strength, Dexterity and Intelligence
  which are inspired from the game
  <em>
    Path of exile
  </em>
  .
</p>
<ul>
  <li>
    The
    <strong>
      Strength
    </strong>
    attribute is meant to be leveled up by warriors, tanks, paladins as it
    grants both additional
    <strong>
      weapon damage
    </strong>
    and
    <strong>
      maximum health
    </strong>
    for extra tankiness and survivability.
  </li>
  <li>
    Warriors, rogues or marksmen may focus on leveling up their
    <strong>
      dexterity
    </strong>
    because it increases their movement speed (either to escape for lighter
    classes like rogues or marksmen, or to run in the fight for warriors),
    their
    <strong>
      projectile damage
    </strong>
    for marksmen and their
    <strong>
      physical damage
    </strong>
    (both physical skills and weapons).
  </li>
  <li>
    <strong>
      Intelligence
    </strong>
    is mainly for wizards, mages as it increases damage dealt by magical skills.
    It also reduces cooldowns of skills, which could justify spending some
    points in this attribute even for non-skill oriented classes.
  </li>
</ul>
<p>
  As a reference,
  <em>
    The Elder Scrolls Online
  </em>
  has three "attributes" which are
  <em>
    Health
  </em>
  ,
  <em>
    Stamina
  </em>
  and
  <em>
    Magicka
  </em>
  . Health increases maximum health, Stamina increases max stamina (used
  to cast stamina-based skills), while Magicka is the equivalent of mana
  (used to cast magicka-based skills). Depending on the class chosen, you
  want to focus either on Health (tank classes or bruiser fighters, heavy
  armor), Stamina (medium/light armor, DPS classes) and Magicka (DPS classes,
  medium/light armor, burst magic damage).
</p>

## Default Config File

<p>
  The default config file is named
  <code>
    default_attributes.yml
  </code>
  and is located in the folder
  <code>
    MMOCore/attributes
  </code>
  . You can add as many YAML config files and subfolders as you like inside
  the main attribute folder for clean file organization.
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
          # Attribute ID
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          strength
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          name
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          Strength
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Maximum amount of points players
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # may spend in this attribute.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          max-points
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          40
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Buffs given every 1 attribute point spent
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # in this specific attribute.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          buff
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          weapon_damage
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
          max_health
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          1%
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          dexterity
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
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
          Dexterity
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          max-points
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          40
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          buff
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          physical_damage
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
          projectile_damage
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
          attack_speed
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          0.5%
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          intelligence
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
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
          Intelligence
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          max-points
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          40
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          buff
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          magical_damage
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
          cooldown_reduction
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          1
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  Every config section corresponds to a player attribute. Remember, you
  can add as many as you want (one config section per attribute), and you
  may also remove the default ones.
</p>
<p>
  You need to specify the attribute name which will be used to display the
  attributes inside GUIs, the maximum amount of
  <strong>
    attribute points
  </strong>
  you can spend in that specific attribute, and the stat buffs the attribute
  gives. These buffs correspond to the stats given to the player for
  <strong>
    every attribute point spent in that attribute.
  </strong>
</p>

## Virtual Attributes (that don't save to player data)

<p>
  There is one last use case for attributes. You might want to create attributes
  that reproduce 1-to-1 an existing stat. In the following example, every
  <em>
    Health
  </em>
  attribute point grants 1% of maximum health is provided to the player.
  If you do not want the attribute to be leveled up by the player and only
  use the stat buff feature, you can toggle off the
  <code>
    save-to-player-data
  </code>
  option. This is purely optional and reduces database cluter.
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
          health
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
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
          Health
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          save-to-player-data
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          false
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # (Not needed) max-points: 40
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          buff
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          max_health
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          1%
        </span>
      </span>
    </code>
  </pre>
</div>

## Disabling attributes

<p>
  If you do not plan on using the MMOCore attribute system, you can disable
  it, and it's super easy to do so.
</p>
<ul>
  <li>
    Empty the
    <code>
      MMOCore/attributes
    </code>
    folder (don't delete it, or it will regenerate)
  </li>
  <li>
    Comment out/delete the
    <code>
      /attributes
    </code>
    command inside the
    <code>
      commands.yml
    </code>
    file
  </li>
</ul>

## Editing the Attributes GUI

<p>
  The
  <code>
    /attributes
  </code>
  folder is for defining the attributes and their buffs. However, you also
  need to edit the
  <code>
    /gui/attribute-view.yml
  </code>
  config file to make sure players can see and interact with the attributes
  you have defined in the previous config file.
</p>
<div class="tip custom-block">
  <p class="custom-block-title custom-block-title-default">
    TIP
  </p>
  <p>
    We recommend opening this file with a text editor on the side while reading
    the rest of this section.
  </p>
</div>
<p>
  First, please refer to this
  <a href="./../../mythiclib/misc/ui-syntax">
    wiki page
  </a>
  to learn about the general MMOCore UI syntax.
</p>
<p>
  Under the
  <code>
    items
  </code>
  config section, there should be one config section per attribute. By default,
  their names are
  <code>
    dex
  </code>
  ,
  <code>
    str
  </code>
  and
  <code>
    int
  </code>
  for
  <em>
    Dexterity
  </em>
  ,
  <em>
    Strength
  </em>
  and
  <em>
    Intelligence
  </em>
  respectively. Each correspond to the clickable items inside the GUI, as
  seen on the GIF above.
</p>

### Adding a new attribute

<p>
  In order to add a new attribute:
</p>
<ol>
  <li>
    Add a new config section in of the config files inside the
    <code>
      /attributes
    </code>
    folder as described in the previous sections,
  </li>
  <li>
    Add a new config section in the
    <code>
      attribute-view.yml
    </code>
    GUI config, and make sure to set the item function to
    <code>
      attribute_&lt;attribute_id&gt;
    </code>
    (for instance,
    <code>
      attribute_vigour
    </code>
    for an attribute with id
    <code>
      vigour
    </code>
    ) so that MMOCore can apply the correct placeholders in the item lore
    and make the item behave correctly when clicked.
  </li>
</ol>
<div class="warning custom-block">
  <p class="custom-block-title custom-block-title-default">
    WARNING
  </p>
  <p>
    If you forget the second step, your attribute will exist but players won't
    be able to see, or interact with it in the attribute menu.
  </p>
</div>

### Adding a buff to an attribute

<p>
  In order to add a buff to an existing attribute:
</p>
<ol>
  <li>
    Add the buff to the attribute config section in the
    <code>
      /attributes
    </code>
    folder,
  </li>
  <li>
    Optionally, update the lore of the item corresponding to that attribute
    in the
    <code>
      attribute-view.yml
    </code>
    file to display the new buff. If you don't do that, players will get the
    buff but won't be aware of it. You can somehow display it elsewhere, but
    most users would want to display it here.
  </li>
</ol>

### Common issue with lore placeholders

<p>
  The lore placeholders
  <code>
    {buff_xxx}
  </code>
  and
  <code>
    {total_xxx}
  </code>
  are only defined for the set of stats provided by the attribute. If these
  placeholders seem to not be parsing correctly, double check that your attribute
  does provide a buff for that stat.
</p>
<p>
  For instance, the following configs match:
</p>
<details class="details custom-block">
  <summary>
    Example 1
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
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # attributes/default_attributes.yml
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            intelligence
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            #...
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            buff
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            magical_damage
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
            cooldown_reduction
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            1
          </span>
        </span>
      </code>
    </pre>
  </div>
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
            # gui/attribute-view.yml
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
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            #...
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            int
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            #...
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            lore
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            ...
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;8When Leveled Up:'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;7 +{buff_magic_damage}% Magic Damage (&amp;a+{total_magic_damage}%&amp;7)'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;7 +{buff_cooldown_reduction}% Cooldown Reduction (&amp;a+{total_cooldown_reduction}%&amp;7)'
          </span>
        </span>
      </code>
    </pre>
  </div>
</details>
<p>
  But these two don't match, a projectile damage buff was registered in
  the
  <code>
    attributes.yml
  </code>
  config, but it was not added to the item lore, so there is no way for
  the player to know that this attribute grants extra projectile damage.
  The plugin will not fail, but players will be confused.
</p>
<details class="details custom-block">
  <summary>
    Example 2
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
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # attributes/default_attributes.yml
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            dexterity
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # [...]
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            buff
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            physical_damage
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
            projectile_damage
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
            attack_speed
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            0.5%
          </span>
        </span>
      </code>
    </pre>
  </div>
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
            # gui/attribute-view.yml
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
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # [...]
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            int
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # [...]
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            lore
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            ...
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;8When Leveled Up:'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;7 +{buff_physical_damage}% Physical Damage (&amp;a+{total_physical_damage}%&amp;7)'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;7 +{buff_attack_speed} Attack Speed (&amp;a+{total_attack_speed}&amp;7)'
          </span>
        </span>
      </code>
    </pre>
  </div>
</details>
<p>
  These two don't match either. The
  <code>
    {buff_projectile_damage}
  </code>
  placeholder doesn't exist because projectile damage was not defined as
  a buff from the
  <em>
    Dexterity
  </em>
  attribute. The plugin will fail at parsing placeholders.
</p>
<details class="details custom-block">
  <summary>
    Example 3
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
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # attributes/default_attributes.yml
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            dexterity
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            #...
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            buff
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            physical_damage
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
            attack_speed
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            0.5%
          </span>
        </span>
      </code>
    </pre>
  </div>
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
            # gui/attribute-view.yml
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
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            #...
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            int
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            #...
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            lore
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            #...
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;8When Leveled Up:'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;7 +{buff_physical_damage}% Physical Damage (&amp;a+{total_physical_damage}%&amp;7)'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;7 +{buff_projectile_damage}% Projectile Damage (&amp;a+{total_projectile_damage}%&amp;7)'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;7 +{buff_attack_speed} Attack Speed (&amp;a+{total_attack_speed}&amp;7)'
          </span>
        </span>
      </code>
    </pre>
  </div>
</details>
