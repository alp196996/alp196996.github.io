# 📚 Variables

<p>
  When provided mechanics do not provide enough configurability you can
  always use variables to recode some more complex script. Variables can
  be used to store temporary data or even do complex numeric or vector computations
  for advanced particle effects for instance.
</p>

## Internal & Custom Variables

<p>
  There are two types of variables. First,
  <strong>
    internal variables
  </strong>
  or
  <strong>
    reserved variables
  </strong>
  have names which are reserved by MythicLib. They are used all of the time
  by MythicLib, and you cannot create custom variables with reserved variables
  names. You can access these variables using
  <code>
    &lt;caster&gt;
  </code>
  or
  <code>
    &lt;target_location&gt;
  </code>
  for instance.
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Variable
      </th>
      <th>
        Type
      </th>
      <th>
        Usage
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>
          source
        </code>
      </td>
      <td>
        position
      </td>
      <td>
        Location where the script was cast
      </td>
    </tr>
    <tr>
      <td>
        <code>
          target_location
        </code>
      </td>
      <td>
        position
      </td>
      <td>
        The target location
        <strong>
          if it exists
        </strong>
      </td>
    </tr>
    <tr>
      <td>
        <code>
          caster
        </code>
      </td>
      <td>
        player
      </td>
      <td>
        Player who cast the script
      </td>
    </tr>
    <tr>
      <td>
        <code>
          attack
        </code>
      </td>
      <td>
        attackMetadata
      </td>
      <td>
        The attack which triggered the skill
        <strong>
          if it exists
        </strong>
      </td>
    </tr>
    <tr>
      <td>
        <code>
          stat
        </code>
      </td>
      <td>
        statMap
      </td>
      <td>
        The stat map of the caster BY THE TIME he cast the script
      </td>
    </tr>
    <tr>
      <td>
        <code>
          target
        </code>
      </td>
      <td>
        entity
      </td>
      <td>
        The skill target
        <strong>
          if it exists
        </strong>
      </td>
    </tr>
    <tr>
      <td>
        <code>
          random
        </code>
      </td>
      <td>
        random
      </td>
      <td>
        An extra module to generate random numbers. See below
      </td>
    </tr>
  </tbody>
</table>
<p>
  On the other hand,
  <strong>
    custom variables
  </strong>
  are initialized and can be manipulated by the user. You can access them
  using
  <code>
    &lt;your_variable_name&gt;
  </code>
  , use them in numeric formulas or just like PAPI placeholders in any mechanic
  or condition. MythicLib comes with many mechanics that let you initialize
  and edit your custom variables. The full list is available
  <a href="./mechanics/intro">
    here
  </a>
  .
</p>
<p>
  You cannot use a
</p>

## Scopes

<p>
  Custom variables have
  <strong>
    scopes
  </strong>
  . This feature is very important since it determines if the variable is
  specific to the player, if it should be accessible by any player and if
  it should be saved when a script eventually runs its last mechanic.
</p>
<p>
  Internal variables don't need scopes.
</p>
<p>
  There are three variables scopes available:
</p>
<ul>
  <li>
    <code>
      SERVER
    </code>
    (a server variable is the same for all players and all scripts)
  </li>
  <li>
    <code>
      PLAYER
    </code>
    (a player variable is the same for all scripts ran by a specific player)
  </li>
  <li>
    <code>
      SKILL
    </code>
    (the default scope. A skill/script variable will be lost when the script
    runs its last mechanic).
  </li>
</ul>
<p>
  You only need to provide the scope of your variable when editing or initializing
  it. When fetching the value of a custom variable using
  <code>
    &lt;var.custom_var_name&gt;
  </code>
  , there might be multiple variables with the same name but different scopes
  (one per scope, at most). In this case, priority is
  <code>
    SKILL
  </code>
  &gt;
  <code>
    PLAYER
  </code>
  &gt;
  <code>
    SERVER
  </code>
  (lowest scopes first).
</p>

## Types

<p>
  Variables are typed:
  <code>
    &lt;source&gt;
  </code>
  is a location (where the script is ran from) whereas
  <code>
    &lt;target&gt;
  </code>
  is an entity (the skill target, if it exists). Variables also have
  <strong>
    subvariables
  </strong>
  : for instance, you can access the location of an entity using
  <code>
    &lt;entity_variable.location&gt;
  </code>
  which has the effect of transforming an entity variable into a location
  variable.
</p>
<p>
  A subvariable is also a variable which means you can use multiple dots
  to access subvariables of subvariables etc. to get the data wanted:
  <code>
    &lt;caster.location.world.name&gt;
  </code>
</p>
<p>
  Here is the list of all the currently supported variable types, as well
  as their subvariables
</p>

## Variable types

### AttackMetadata

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Subvariable
      </th>
      <th>
        Type
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
          damage
        </code>
      </td>
      <td>
        double
      </td>
      <td>
        Amount of damage being dealt
      </td>
    </tr>
    <tr>
      <td>
        <code>
          damage_&lt;type&gt;
        </code>
      </td>
      <td>
        double
      </td>
      <td>
        Amount of damage being dealt, with given damage type
      </td>
    </tr>
  </tbody>
</table>

### AttributeMap

<p>
  This is useful if you want to access some player's vanila attribute values.
  Example use:
  <code>
    &lt;caster.attribute.max_health&gt;
  </code>
  .
</p>
<p>
  Vanilla attributes shall not be mistaken for player stats which are added
  by the MMO plugins. Some of these stats are based on vanilla attributes,
  but not all of them. For instance, weapon crit chance is a custom stat
  which isn't based on any vanilla attribute so you can't access it using
  this variable type. You'll need to use the
  <code>
    statMap
  </code>
  variable type:
  <code>
    &lt;caster.stat.critical_strike_chance&gt;
  </code>
  . However since attack damage is based on a vanilla attribute,
  <code>
    &lt;caster.stat.attack_damage&gt;
  </code>
  will NOT return the correct value, because it only takes into account
  stat modifiers registered in MythicLib and not external attribute modifiers!
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Subvariable
      </th>
      <th>
        Type
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
          max_health
        </code>
      </td>
      <td>
        double
      </td>
      <td>
        Player attribute value
      </td>
    </tr>
    <tr>
      <td>
        <code>
          follow_range
        </code>
      </td>
      <td>
        double
      </td>
      <td>
        Player attribute value
      </td>
    </tr>
    <tr>
      <td>
        <code>
          knockback_resistance
        </code>
      </td>
      <td>
        double
      </td>
      <td>
        Player attribute value
      </td>
    </tr>
    <tr>
      <td>
        <code>
          movement_speed
        </code>
      </td>
      <td>
        double
      </td>
      <td>
        Player attribute value
      </td>
    </tr>
    <tr>
      <td>
        <code>
          flying_speed
        </code>
      </td>
      <td>
        double
      </td>
      <td>
        Player attribute value
      </td>
    </tr>
    <tr>
      <td>
        <code>
          attack_damage
        </code>
      </td>
      <td>
        double
      </td>
      <td>
        Player attribute value
      </td>
    </tr>
    <tr>
      <td>
        <code>
          attack_knockback
        </code>
      </td>
      <td>
        double
      </td>
      <td>
        Player attribute value
      </td>
    </tr>
    <tr>
      <td>
        <code>
          attack_speed
        </code>
      </td>
      <td>
        double
      </td>
      <td>
        Player attribute value
      </td>
    </tr>
    <tr>
      <td>
        <code>
          armor
        </code>
      </td>
      <td>
        double
      </td>
      <td>
        Player attribute value
      </td>
    </tr>
    <tr>
      <td>
        <code>
          armor_toughness
        </code>
      </td>
      <td>
        double
      </td>
      <td>
        Player attribute value
      </td>
    </tr>
    <tr>
      <td>
        <code>
          luck
        </code>
      </td>
      <td>
        double
      </td>
      <td>
        Player attribute value
      </td>
    </tr>
    <tr>
      <td>
        <code>
          armor_toughness
        </code>
      </td>
      <td>
        double
      </td>
      <td>
        Player attribute value
      </td>
    </tr>
  </tbody>
</table>

### CooldownMap

<p>
  Cooldown maps are used to store a player's cooldown values. Cooldowns
  are used by MythicLib for damage mitigation (block, parrying, dodging)
  and for skill cooldowns, and by MMOItems for item cooldowns. You can access
  the cooldown map of the player casting the script using
  <code>
    &lt;caster.cooldown&gt;
  </code>
  .
</p>
<p>
  Using subvariable
  <code>
    some_key
  </code>
  will return a double corresponding to the remaining cooldown for the given
  cooldown key. For instance,
  <code>
    &lt;caster.cooldown.mmoitem_small_mana_pot&gt;
  </code>
  returns the remaining cooldown for the MMOItem with ID
  <code>
    SMALL_MANA_POT
  </code>
  ,
  <code>
    &lt;caster.cooldown.hello&gt;
  </code>
  returns the remaining cooldown for the skill/item/etc. with cooldown key
  <code>
    hello
  </code>
  .
</p>
<p>
  The following table lists all the keys used by MMOCore and MMOItems. You
  can use virtually any cooldown key inside your scripts or plugins, you
  can also mess/interfere with the cooldown keys used internally by MMOItems
  and MMOCore if you want to.
</p>
<div class="info custom-block">
  <p class="custom-block-title custom-block-title-default">
    INFO
  </p>
  <p>
    You can also use
    <code>
      %mythiclib_cooldown_&lt;cooldown_key&gt;%
    </code>
    to retrieve the player's current cooldown using placeholders from PlaceholderAPI.
    Example:
    <code>
      %mythiclib_cooldown_skill_fireball%
    </code>
  </p>
</div>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Subvariable
      </th>
      <th>
        Type
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
          mmoitem_&lt;lower_case_item_id&gt;
        </code>
      </td>
      <td>
        double
      </td>
      <td>
        Remaining item cooldown or 0
      </td>
    </tr>
    <tr>
      <td>
        <code>
          &lt;cooldown_reference&gt;
        </code>
      </td>
      <td>
        double
      </td>
      <td>
        If the MMOItem has a cooldown reference, use it instead of the above.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          skill_&lt;lower_case_skill_id&gt;
        </code>
      </td>
      <td>
        double
      </td>
      <td>
        Remaining skill cooldown or 0
      </td>
    </tr>
    <tr>
      <td>
        <code>
          dodge
        </code>
      </td>
      <td>
        double
      </td>
      <td>
        Remaining dodging cooldown or 0
      </td>
    </tr>
    <tr>
      <td>
        <code>
          parry
        </code>
      </td>
      <td>
        double
      </td>
      <td>
        Remaining parrying cooldown or 0
      </td>
    </tr>
    <tr>
      <td>
        <code>
          block
        </code>
      </td>
      <td>
        double
      </td>
      <td>
        Remaining dodge cooldown or 0
      </td>
    </tr>
    <tr>
      <td>
        <code>
          weapon_crit
        </code>
      </td>
      <td>
        double
      </td>
      <td>
        Remaining weapon crit strike cooldown or 0
      </td>
    </tr>
    <tr>
      <td>
        <code>
          skill_crit
        </code>
      </td>
      <td>
        double
      </td>
      <td>
        Remaining skill crit strike cooldown or 0
      </td>
    </tr>
  </tbody>
</table>

### Double

<p>
  Numeric value.
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Subvariable
      </th>
      <th>
        Type
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
          int
        </code>
      </td>
      <td>
        integer
      </td>
      <td>
        The whole part of that number
      </td>
    </tr>
    <tr>
      <td>
        <code>
          round.xxx
        </code>
      </td>
      <td>
        string
      </td>
      <td>
        Round the double up to N decimal places
      </td>
    </tr>
  </tbody>
</table>

### Entity

<p>
  Any entity that
  <strong>
    is NOT a player
  </strong>
  . Players share many subvariables with the Entity variable type but have
  a few extra properties.
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Subvariable
      </th>
      <th>
        Type
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
          id
        </code>
      </td>
      <td>
        integer
      </td>
      <td>
        The entity id
      </td>
    </tr>
    <tr>
      <td>
        <code>
          uuid
        </code>
      </td>
      <td>
        string
      </td>
      <td>
        The entity UUID
      </td>
    </tr>
    <tr>
      <td>
        <code>
          type
        </code>
      </td>
      <td>
        string
      </td>
      <td>
        The entity type (ZOMBIE, GHAST etc.
        <a href="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html"
        target="_blank" rel="noreferrer">
          full list
        </a>
        )
      </td>
    </tr>
    <tr>
      <td>
        <code>
          location
        </code>
      </td>
      <td>
        position
      </td>
      <td>
        The entity current loc
      </td>
    </tr>
    <tr>
      <td>
        <code>
          bb_center
        </code>
      </td>
      <td>
        position
      </td>
      <td>
        The center position of that entity given its bounding box
      </td>
    </tr>
    <tr>
      <td>
        <code>
          eye_location
        </code>
      </td>
      <td>
        position
      </td>
      <td>
        The position of the eyes of the entity
      </td>
    </tr>
    <tr>
      <td>
        <code>
          health
        </code>
      </td>
      <td>
        double
      </td>
      <td>
        The current entity health bar
      </td>
    </tr>
    <tr>
      <td>
        <code>
          looking
        </code>
      </td>
      <td>
        position
      </td>
      <td>
        A vector pointing towards where the entity is looking
      </td>
    </tr>
    <tr>
      <td>
        <code>
          velocity
        </code>
      </td>
      <td>
        position
      </td>
      <td>
        The instantaneous entity velocity
      </td>
    </tr>
    <tr>
      <td>
        <code>
          height
        </code>
      </td>
      <td>
        double
      </td>
      <td>
        The entity height
      </td>
    </tr>
    <tr>
      <td>
        <code>
          attribute
        </code>
      </td>
      <td>
        attributeMap
      </td>
      <td>
        The entity attribute map
      </td>
    </tr>
    <tr>
      <td>
        <code>
          fire_ticks
        </code>
      </td>
      <td>
        int
      </td>
      <td>
        The amount of ticks during which the entity will be on fire (0 if not
        on fire)
      </td>
    </tr>
  </tbody>
</table>

### Integer

<p>
  A round number. No subvariables!
</p>

### Player

<p>
  A player entity. Players share many subvariables with the
  <code>
    Entity
  </code>
  variable type but have a few extra properties.
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Subvariable
      </th>
      <th>
        Type
      </th>
      <th>
        Description
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        -
      </td>
      <td>
        -
      </td>
      <td>
        Any from the
        <code>
          Entity
        </code>
        variable type
      </td>
    </tr>
    <tr>
      <td>
        <code>
          stat
        </code>
      </td>
      <td>
        statMap
      </td>
      <td>
        The player's stat map
      </td>
    </tr>
    <tr>
      <td>
        <code>
          cooldown
        </code>
      </td>
      <td>
        cooldownMap
      </td>
      <td>
        The player's cooldown map
      </td>
    </tr>
    <tr>
      <td>
        <code>
          name
        </code>
      </td>
      <td>
        string
      </td>
      <td>
        The player name
      </td>
    </tr>
  </tbody>
</table>

### Position

<p>
  Positions/locations/vectors are all
  <em>
    pretty much
  </em>
  synonyms. A position is defined by a world + three coordinates (X, Y and
  Z). Positions are both used to describe player location (in that case you
  are using the
  <code>
    world
  </code>
  subvariable) and to make vector computation (the
  <code>
    world
  </code>
  subvariable is therefore useless).
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Subvariable
      </th>
      <th>
        Type
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
          world
        </code>
      </td>
      <td>
        world
      </td>
      <td>
        Position world
      </td>
    </tr>
    <tr>
      <td>
        <code>
          x
        </code>
      </td>
      <td>
        double
      </td>
      <td>
        X coordinate
      </td>
    </tr>
    <tr>
      <td>
        <code>
          y
        </code>
      </td>
      <td>
        double
      </td>
      <td>
        Y coordinate
      </td>
    </tr>
    <tr>
      <td>
        <code>
          z
        </code>
      </td>
      <td>
        double
      </td>
      <td>
        Z coordinate
      </td>
    </tr>
    <tr>
      <td>
        <code>
          length
        </code>
      </td>
      <td>
        double
      </td>
      <td>
        Vector length computation
      </td>
    </tr>
    <tr>
      <td>
        <code>
          biome
        </code>
      </td>
      <td>
        string
      </td>
      <td>
        Biome name
      </td>
    </tr>
    <tr>
      <td>
        <code>
          altitude
        </code>
      </td>
      <td>
        double
      </td>
      <td>
        Computes altitude of position
      </td>
    </tr>
  </tbody>
</table>

### StatMap

<p>
  Stat maps are used to store all the stat modifiers from a specific player.
  You can access the script runner's stat map using
  <code>
    &lt;caster.stat&gt;
  </code>
  . Then retrieve the stat value using
  <code>
    &lt;caster.stat.skill_critical_strike_chance&gt;
  </code>
  for instance.
</p>
<p>
  Vanilla attributes shall not be mistaken for player stats which are added
  by the MMO plugins. Some of these stats are based on vanilla attributes,
  but not all of them. For instance, weapon crit chance is a custom stat
  which isn't based on any vanilla attribute so you can't access it using
  this variable type. You'll need to use the
  <code>
    StatMap
  </code>
  variable type:
  <code>
    &lt;caster.stat.critical_strike_chance&gt;
  </code>
  . However since attack damage is based on a vanilla attribute,
  <code>
    &lt;caster.stat.attack_damage&gt;
  </code>
  will NOT return the correct value, because it only takes into account
  stat modifiers registered in MythicLib and not external attribute modifiers!
</p>

### String

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Subvariable
      </th>
      <th>
        Type
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
          uppercase
        </code>
      </td>
      <td>
        string
      </td>
      <td>
        Same string in upper case
      </td>
    </tr>
    <tr>
      <td>
        <code>
          lowercase
        </code>
      </td>
      <td>
        double
      </td>
      <td>
        Same string in lower case
      </td>
    </tr>
  </tbody>
</table>

### Random

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Subvariable
      </th>
      <th>
        Type
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
          uniform
        </code>
      </td>
      <td>
        double
      </td>
      <td>
        Decimal number sampled uniformly between 0 and 1
      </td>
    </tr>
    <tr>
      <td>
        <code>
          int
        </code>
      </td>
      <td>
        int
      </td>
      <td>
        A random integer
      </td>
    </tr>
    <tr>
      <td>
        <code>
          bool
        </code>
      </td>
      <td>
        boolean
      </td>
      <td>
        A random boolean (true or false), uniformly
      </td>
    </tr>
    <tr>
      <td>
        <code>
          gaussian
        </code>
      </td>
      <td>
        double
      </td>
      <td>
        Decimal number sampled from a standard gaussian distribution
      </td>
    </tr>
  </tbody>
</table>

### World

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Subvariable
      </th>
      <th>
        Type
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
          time
        </code>
      </td>
      <td>
        int
      </td>
      <td>
        Current time in the world
      </td>
    </tr>
    <tr>
      <td>
        <code>
          name
        </code>
      </td>
      <td>
        string
      </td>
      <td>
        World name
      </td>
    </tr>
  </tbody>
</table>
