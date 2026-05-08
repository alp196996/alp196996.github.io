# 💪 Player Stats

<p>
  Player statistics are essential in MMOCore. They can be granted by classes,
  attributes, party buffs, temporary skills, items... For better compatibility,
  MMOItems shares its stat system with MMOCore, so any stat that can be found
  in MMOItems can be used inside of MMOCore.
</p>

## Stats handled with vanilla attribute modifiers

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Stat name
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
          attack_damage
        </code>
      </td>
      <td>
        Damage dealt by melee attacks
      </td>
    </tr>
    <tr>
      <td>
        <code>
          attack_speed
        </code>
      </td>
      <td>
        The player's speed of attacks
      </td>
    </tr>
    <tr>
      <td>
        <code>
          max_health
        </code>
      </td>
      <td>
        Max health of the player
      </td>
    </tr>
    <tr>
      <td>
        <code>
          movement_speed
        </code>
      </td>
      <td>
        Player's walking speed
      </td>
    </tr>
    <tr>
      <td>
        <code>
          knockback_resistance
        </code>
      </td>
      <td>
        Chance of negating knockback (vanilla player attribute) from 0 to 1
      </td>
    </tr>
    <tr>
      <td>
        <code>
          armor
        </code>
      </td>
      <td>
        Reduces damage taken, vanilla player attribute
      </td>
    </tr>
    <tr>
      <td>
        <code>
          armor_toughness
        </code>
      </td>
      <td>
        Vanilla armor toughness, reduces damage taken (see MC wiki)
      </td>
    </tr>
  </tbody>
</table>
<p>
  The default player movement speed is set to 0.1 which is 4.317m/s according
  to the Minecraft wiki. Since one block measures 1m^3, the formula for the
  player move speed is
  <code>
    &lt;attribute_value&gt; * 43.17 m/s
  </code>
  .
</p>

### Minecraft 1.20.2+

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Stat name
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
          max_absorption
        </code>
      </td>
      <td>
        Maximum amount of absorption hearts
      </td>
    </tr>
  </tbody>
</table>

### Minecraft 1.20.5+

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Stat name
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
          block_break_speed
        </code>
      </td>
      <td>
        Player's block breaking speed
      </td>
    </tr>
    <tr>
      <td>
        <code>
          block_interaction_range
        </code>
      </td>
      <td>
        How far the player can break or interact with blocks
      </td>
    </tr>
    <tr>
      <td>
        <code>
          entity_interaction_range
        </code>
      </td>
      <td>
        How far the player can hit or interact with entities
      </td>
    </tr>
    <tr>
      <td>
        <code>
          fall_damage_multiplier
        </code>
      </td>
      <td>
        Increases/decreases fall damage
      </td>
    </tr>
    <tr>
      <td>
        <code>
          gravity
        </code>
      </td>
      <td>
        How strong gravity is
      </td>
    </tr>
    <tr>
      <td>
        <code>
          jump_strength
        </code>
      </td>
      <td>
        How high the player can jump (basically Jump Boost)
      </td>
    </tr>
    <tr>
      <td>
        <code>
          safe_fall_distance
        </code>
      </td>
      <td>
        How high the player can fall from without taking fall damage
      </td>
    </tr>
    <tr>
      <td>
        <code>
          scale
        </code>
      </td>
      <td>
        How big the player is (increases player's size and offsets camera location)
      </td>
    </tr>
    <tr>
      <td>
        <code>
          step_height
        </code>
      </td>
      <td>
        How many blocks the player can climb when walking without having to jump
      </td>
    </tr>
  </tbody>
</table>

### Minecraft 1.21+

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Stat name
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
          burning_time
        </code>
      </td>
      <td>
        Amount of time how long an entity remains on fire after being ignited
        as a multiplier.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          explosion_knockback_resistance
        </code>
      </td>
      <td>
        Resistance to knockback due to explosions.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          mining_efficiency
        </code>
      </td>
      <td>
        Factor for increasing/reducing mining speed
      </td>
    </tr>
    <tr>
      <td>
        <code>
          movement_efficiency
        </code>
      </td>
      <td>
        Movement speed factor when walking on blocks that slow down movement.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          oxygen_bonus
        </code>
      </td>
      <td>
        Determines the chance not to use up air when underwater.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          sneaking_speed
        </code>
      </td>
      <td>
        Movement speed when sneaking.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          submerged_mining_speed
        </code>
      </td>
      <td>
        Mining speed factor when submerged.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          sweeping_damage_ratio
        </code>
      </td>
      <td>
        Percentage of damage transferred by sweep attacks.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          water_movement_efficiency
        </code>
      </td>
      <td>
        Movement speed factor when submerged.
      </td>
    </tr>
  </tbody>
</table>

## Resources

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Stat name
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
          max_mana
        </code>
      </td>
      <td>
        Maximum mana the player may have.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          max_stamina
        </code>
      </td>
      <td>
        Maximum stamina the player may have.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          max_stellium
        </code>
      </td>
      <td>
        Stellium is a resource used to travel using waypoints.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          health_regeneration
        </code>
      </td>
      <td>
        Health
        <a href="./../features/combat">
          regeneration
        </a>
        in pts/sec.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          mana_regeneration
        </code>
      </td>
      <td>
        Mana regen in pts/sec
      </td>
    </tr>
    <tr>
      <td>
        <code>
          stamina_regeneration
        </code>
      </td>
      <td>
        Stamina regen in pts/sec
      </td>
    </tr>
    <tr>
      <td>
        <code>
          stellium_regeneration
        </code>
      </td>
      <td>
        Stellium regen in pts/sec
      </td>
    </tr>
    <tr>
      <td>
        <code>
          max_health_regeneration
        </code>
      </td>
      <td>
        Health regen in % of max health/sec
      </td>
    </tr>
    <tr>
      <td>
        <code>
          max_mana_regeneration
        </code>
      </td>
      <td>
        Mana regen in % of max mana/sec
      </td>
    </tr>
    <tr>
      <td>
        <code>
          max_stamina_regeneration
        </code>
      </td>
      <td>
        Stamina regen in % of max stamina/sec
      </td>
    </tr>
    <tr>
      <td>
        <code>
          max_stellium_regeneration
        </code>
      </td>
      <td>
        Stellium regen in % of max stellium/sec
      </td>
    </tr>
  </tbody>
</table>

## Utility

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Stat name
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
          additional_experience
        </code>
      </td>
      <td>
        Extra experience the player earns.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          cooldown_reduction
        </code>
      </td>
      <td>
        Reduces skills cooldowns by a specific %
      </td>
    </tr>
    <tr>
      <td>
        <code>
          speed_malus_reduction
        </code>
      </td>
      <td>
        Reduces (in %) slow debuffs.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          luck
        </code>
      </td>
      <td>
        Greater chance to have rare items in loot chest and with fishing drop
        tables. An item with a drop chance of 1% will in truth, have drop chance
        of 10% with 100 LUCK.
      </td>
    </tr>
  </tbody>
</table>
<p>
  Speed malus reduction doesn't directly increase the player's movement
  speed. It decrease by a certain amount speed debuffs like debuffs due to
  MMOItems. By registering a negative movement speed buff on MMOItems, you
  can create the feeling that items are heavy and reduce the player's move
  speed when worn/held. Speed malus reduction reduces such slow debuffs.
</p>

## Critical Strikes

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Stat name
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
          critical_strike_chance
        </code>
      </td>
      <td>
        Chance to deal crits with weapons.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          critical_strike_power
        </code>
      </td>
      <td>
        Extra damage dealt by weapon crits.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          skill_critical_strike_chance
        </code>
      </td>
      <td>
        Chance to deal crits with skills.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          skill_critical_strike_power
        </code>
      </td>
      <td>
        Extra damage dealt by skill crits.
      </td>
    </tr>
  </tbody>
</table>

## Damage Stats

<p>
  The following stats are damage multiplier
  <em>
    e.g
  </em>
  when set to 50, specified attack damage is increased by 50%.
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Stat name
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
          magic_damage
        </code>
      </td>
      <td>
        Additional magical skill damage.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          physical_damage
        </code>
      </td>
      <td>
        Additional physical skill/weapon damage.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          projectile_damage
        </code>
      </td>
      <td>
        Additional projectile based weapon &amp; skill damage.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          weapon_damage
        </code>
      </td>
      <td>
        Additional weapon based attack damage.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          skill_damage
        </code>
      </td>
      <td>
        Additional skill (magical/physical) damage.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          undead_damage
        </code>
      </td>
      <td>
        Additional damage against undead creatures.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          pvp_damage
        </code>
      </td>
      <td>
        Additional damage against players.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          pve_damage
        </code>
      </td>
      <td>
        Additional damage against anything but players.
      </td>
    </tr>
  </tbody>
</table>
