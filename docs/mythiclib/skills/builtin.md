# 💫 Built-in Skills

<p>
  MythicLib has a huge registry of about 90 default skills which combines
  MMOItems pre-6.7 abilities and MMOCore pre-1.9 skills.
</p>
<p>
  Skills marked with
  <span class="VPBadge info">
    mmocore
  </span>
  are only available when MMOCore is installed.
</p>
<div class="tip custom-block">
  <p class="custom-block-title custom-block-title-default">
    TIP
  </p>
  <p>
    Use CTRL+F to look for an ability with certain keywords.
  </p>
</div>

## Skills cast onto a location

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Ability
      </th>
      <th>
        Ability Description
      </th>
      <th>
        Ability Modifiers
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        Arcane Hail
      </td>
      <td>
        Arcane projectiles shower target area, dealing damage over time
      </td>
      <td>
        damage, duration, radius
      </td>
    </tr>
    <tr>
      <td>
        Black Hole
      </td>
      <td>
        Casts a black hole which attracts nearby units
      </td>
      <td>
        radius, duration
      </td>
    </tr>
    <tr>
      <td>
        Blink
      </td>
      <td>
        Teleports you to target location in the blink of an eye
      </td>
      <td>
        range
      </td>
    </tr>
    <tr>
      <td>
        Contamination
      </td>
      <td>
        Contaminates target area for Xsec, dealing damage over time
      </td>
      <td>
        damage, duration
      </td>
    </tr>
    <tr>
      <td>
        Corrosion
      </td>
      <td>
        Poisons nearby entities.
      </td>
      <td>
        duration, amplifier, radius
      </td>
    </tr>
    <tr>
      <td>
        Corrupt
      </td>
      <td>
        Corrupts target area, dealing damage and wither
      </td>
      <td>
        damage, duration, amplifier
      </td>
    </tr>
    <tr>
      <td>
        Freeze
      </td>
      <td>
        Freezes nearby mobs for X seconds.
      </td>
      <td>
        duration, amplifier, radius
      </td>
    </tr>
    <tr>
      <td>
        Freezing Curse
      </td>
      <td>
        After a short delay, nearby enemies are frozen within target area
      </td>
      <td>
        duration, damage, radius, amplifier
      </td>
    </tr>
    <tr>
      <td>
        Ice Spikes
      </td>
      <td>
        Ice spikes summon from the ground, damaging and slowing hit enemies.
      </td>
      <td>
        damage, slow
      </td>
    </tr>
    <tr>
      <td>
        Ignite
      </td>
      <td>
        Sets nearby entities on fire.
      </td>
      <td>
        duration, max-ignite, radius
      </td>
    </tr>
    <tr>
      <td>
        Life Ender
      </td>
      <td>
        A devastating fire comet strikes the ground
      </td>
      <td>
        damage, knockback, radius
      </td>
    </tr>
    <tr>
      <td>
        Lightning Beam
      </td>
      <td>
        Lightning strikes the ground and damage nearby enemies.
      </td>
      <td>
        radius, damage
      </td>
    </tr>
    <tr>
      <td>
        Minor Explosion
      </td>
      <td>
        A powerful burst deals damage to nearby enemies.
      </td>
      <td>
        duration, damage, knockback, radius
      </td>
    </tr>
    <tr>
      <td>
        Power Mark
      </td>
      <td>
        A mark spreads around target location. Any damage dealt within marked
        zone accumulates damage. The mark explodes after X seconds, dealing X%
        of accumulated damage, stunning &amp; knocking back nearby enemies. The
        higher the damage, the longer the stun.
      </td>
      <td>
        stun, ratio, duration
      </td>
    </tr>
    <tr>
      <td>
        Snowman Turret
      </td>
      <td>
        Creates a snowman tower that shoots nearby enemies
      </td>
      <td>
        duration, damage, radius
      </td>
    </tr>
  </tbody>
</table>

## Skills cast onto an entity

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Ability
      </th>
      <th>
        Ability Description
      </th>
      <th>
        Ability Modifiers
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        Blind
      </td>
      <td>
        Blinds your opponent (vanilla potion effect)
      </td>
      <td>
        duration
      </td>
    </tr>
    <tr>
      <td>
        Bloodbath
      </td>
      <td>
        Takes food points from the target.
      </td>
      <td>
        amount
      </td>
    </tr>
    <tr>
      <td>
        Burn
      </td>
      <td>
        Burns the target down for a few seconds.
      </td>
      <td>
        duration
      </td>
    </tr>
    <tr>
      <td>
        Combo Attack
      </td>
      <td>
        Repeatedly slashes the target for X total damage.
      </td>
      <td>
        damage, count
      </td>
    </tr>
    <tr>
      <td>
        Confuse
      </td>
      <td>
        Turns your opponent's camera by 90°
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        Control
      </td>
      <td>
        Slows the target. When left clicking, knocks him back in target direction.
      </td>
      <td>
        knockback, duration
      </td>
    </tr>
    <tr>
      <td>
        Death Mark
      </td>
      <td>
        The mark deals X damage split on Ysec (+slow).
      </td>
      <td>
        duration, damage, amplifier
      </td>
    </tr>
    <tr>
      <td>
        Deep Wound
      </td>
      <td>
        Punctures target, damaged is increased based on target's missing health
      </td>
      <td>
        damage, extra
      </td>
    </tr>
    <tr>
      <td>
        Furtive Strike
      </td>
      <td>
        Deals damage, greatly increased if target is isolated
      </td>
      <td>
        damage, extra, radius
      </td>
    </tr>
    <tr>
      <td>
        Greater Healings
      </td>
      <td>
        Better version of
        <em>
          Minor Healings
        </em>
      </td>
      <td>
        heal
      </td>
    </tr>
    <tr>
      <td>
        Human Shield
      </td>
      <td>
        Reduces damage taken by ally, and redirects to you a portion of the blocked
        damage.
      </td>
      <td>
        reduction, redirect, duration, low
      </td>
    </tr>
    <tr>
      <td>
        Magma Fissure
      </td>
      <td>
        Casts a targeted magma fissure (sets on fire and deals damage)
      </td>
      <td>
        ignite, damage
      </td>
    </tr>
    <tr>
      <td>
        Minor Healings
      </td>
      <td>
        Heals for X health target/self if crouching.
      </td>
      <td>
        heal
      </td>
    </tr>
    <tr>
      <td>
        Poison
      </td>
      <td>
        Poisons your target for a short period of time.
      </td>
      <td>
        duration, amplifier
      </td>
    </tr>
    <tr>
      <td>
        Regen Ally
      </td>
      <td>
        Gives X health back to an ally over Y seconds
      </td>
      <td>
        heal, duration
      </td>
    </tr>
    <tr>
      <td>
        Shock
      </td>
      <td>
        Rapidly shakes your opponent's camera (useless for mobs)
      </td>
      <td>
        duration
      </td>
    </tr>
    <tr>
      <td>
        Slow
      </td>
      <td>
        Reduces your opponent's movement speed.
      </td>
      <td>
        duration, amplifier
      </td>
    </tr>
    <tr>
      <td>
        Smite
      </td>
      <td>
        Calls lightning upon an evil foe
      </td>
      <td>
        damage
      </td>
    </tr>
    <tr>
      <td>
        Sparkle
      </td>
      <td>
        Sparkles spring from your opponent, damaging nearby entities (capped)
      </td>
      <td>
        damage, radius, limit
      </td>
    </tr>
    <tr>
      <td>
        Starfall
      </td>
      <td>
        Casts a damaging falling star onto your target.
      </td>
      <td>
        damage
      </td>
    </tr>
    <tr>
      <td>
        Stun
      </td>
      <td>
        Makes your opponent unable to move.
      </td>
      <td>
        duration
      </td>
    </tr>
    <tr>
      <td>
        Tactical Grenade
      </td>
      <td>
        Casts a wave of land strikes which eventually hits your target
      </td>
      <td>
        radius, knock-up, damage
      </td>
    </tr>
    <tr>
      <td>
        Targeted Fireball
      </td>
      <td>
        Casts a targeted damaging fireball which ignites your target
      </td>
      <td>
        damage, ignite
      </td>
    </tr>
    <tr>
      <td>
        Telekinesy
      </td>
      <td>
        Target's movement is taken over. Left click to knock him back.
      </td>
      <td>
        duration, knockback
      </td>
    </tr>
    <tr>
      <td>
        Weaken
      </td>
      <td>
        Weakens target, increasing damage taken. Inherited from MMOCore
      </td>
      <td>
        ratio, duration
      </td>
    </tr>
    <tr>
      <td>
        Weaken Target
      </td>
      <td>
        Same as above, inherited from MMOItems.
      </td>
      <td>
        duration, extra-damage
      </td>
    </tr>
    <tr>
      <td>
        Wither
      </td>
      <td>
        Temporarily applies Wither to target entity.
      </td>
      <td>
        duration, amplifier
      </td>
    </tr>
  </tbody>
</table>

## Item Skills

<p>
  Skills which require the caster to hold an item.
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Ability
      </th>
      <th>
        Ability Description
      </th>
      <th>
        Ability Modifiers
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        Item Bomb
      </td>
      <td>
        You throw a bomb, damaging and slowing entities hit after a short delay
      </td>
      <td>
        slow-duration, slow-amplifier, damage, radius
      </td>
    </tr>
    <tr>
      <td>
        Item Throw
      </td>
      <td>
        Throws your item, damaging the first enemy it hits
      </td>
      <td>
        damage, force
      </td>
    </tr>
  </tbody>
</table>

## Skills with no target

<p>
  These skills do not require a target entity or location, and can be cast
  at any time.
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Ability
      </th>
      <th>
        Ability Description
      </th>
      <th>
        Ability Modifiers
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        Arcane Rift
      </td>
      <td>
        Casts a damaging void rift which slows enemies on it
      </td>
      <td>
        damage, duration, amplifier, speed
      </td>
    </tr>
    <tr>
      <td>
        Blizzard
      </td>
      <td>
        Casts a flurry of damaging snowballs
      </td>
      <td>
        duration, damage, inaccuracy, force
      </td>
    </tr>
    <tr>
      <td>
        Bouncy Fireball
      </td>
      <td>
        A bouncy Mario fireball which explodes on 3rd impact
      </td>
      <td>
        damage, ignite, speed, radius
      </td>
    </tr>
    <tr>
      <td>
        Bunny Mode
      </td>
      <td>
        You bounce on ground
      </td>
      <td>
        duration, jump-force, speed
      </td>
    </tr>
    <tr>
      <td>
        Burning Hands
      </td>
      <td>
        Summons a cone of deadly flames from the tip of your fingers
      </td>
      <td>
        damage, duration
      </td>
    </tr>
    <tr>
      <td>
        Chicken Wraith
      </td>
      <td>
        Casts a flurry of chicken eggs, dealing damage
      </td>
      <td>
        duration, damage, inaccuracy, force
      </td>
    </tr>
    <tr>
      <td>
        Circular Slash
      </td>
      <td>
        Damages nearby enemies and knocks them back
      </td>
      <td>
        damage, radius, knockback
      </td>
    </tr>
    <tr>
      <td>
        Corrupted Fangs
      </td>
      <td>
        Casts a damaging spell just like the Evoker
      </td>
      <td>
        damage
      </td>
    </tr>
    <tr>
      <td>
        Cursed Beam
      </td>
      <td>
        A deadly cursed projectile which withers nearby enemies.
      </td>
      <td>
        damage, duration
      </td>
    </tr>
    <tr>
      <td>
        Earthquake
      </td>
      <td>
        A seismic wave which damages and slows down hit enemies
      </td>
      <td>
        damage, duration, amplifier
      </td>
    </tr>
    <tr>
      <td>
        Empowered Attack
      </td>
      <td>
        Charges your weapon with lightning. Your next attack deals extra damage
        and spreads onto nearby enemies
      </td>
      <td>
        radius, ratio, extra
      </td>
    </tr>
    <tr>
      <td>
        Evade
      </td>
      <td>
        You become immune to damage till you attack again/end of duration
      </td>
      <td>
        duration
      </td>
    </tr>
    <tr>
      <td>
        Explosive Turkey
      </td>
      <td>
        Summons a chicken which explodes upon block contact
      </td>
      <td>
        damage, radius, knockback
      </td>
    </tr>
    <tr>
      <td>
        Fire Meteor
      </td>
      <td>
        Summons a deadly fire meteor from the sky
      </td>
      <td>
        damage, knockback, radius
      </td>
    </tr>
    <tr>
      <td>
        Fire Rage
      </td>
      <td>
        Slow down and arm your hands with three fire bolts.
      </td>
      <td>
        count, damage, ignite
      </td>
    </tr>
    <tr>
      <td>
        Fire Storm
      </td>
      <td>
        Fire projectiles cast on the target, dealing damage.
      </td>
      <td>
        ignite, damage
      </td>
    </tr>
    <tr>
      <td>
        Fireball
      </td>
      <td>
        Damaging &amp; igniting fireball. Shatters into damaging flame shards
      </td>
      <td>
        damage, ignite, ratio
      </td>
    </tr>
    <tr>
      <td>
        Firebolt
      </td>
      <td>
        Casts a simple damaging firebolt.
      </td>
      <td>
        damage, ignite
      </td>
    </tr>
    <tr>
      <td>
        Firefly
      </td>
      <td>
        Dashes to your cursor, exploding upon contact with an enemy
      </td>
      <td>
        damage, duration, knockback
      </td>
    </tr>
    <tr>
      <td>
        Frog Mode
      </td>
      <td>
        You bounce on water for X seconds
      </td>
      <td>
        duration, jump-force, speed
      </td>
    </tr>
    <tr>
      <td>
        Frozen Aura
      </td>
      <td>
        During X seconds, nearby enemies are slowed down for 2sec
      </td>
      <td>
        duration, amplifier, radius
      </td>
    </tr>
    <tr>
      <td>
        Grand Heal
      </td>
      <td>
        Restores some health to you and nearby players
      </td>
      <td>
        heal, radius
      </td>
    </tr>
    <tr>
      <td>
        Heal
      </td>
      <td>
        Restores some health
      </td>
      <td>
        heal
      </td>
    </tr>
    <tr>
      <td>
        Heavy Charge
      </td>
      <td>
        You charge forward, dealing damage and knockback to the first entity hit
      </td>
      <td>
        damage, knockback
      </td>
    </tr>
    <tr>
      <td>
        Hoearthquake
      </td>
      <td>
        An earthquake hoes grass on its path
      </td>
      <td>
        -
      </td>
    </tr>
    <tr>
      <td>
        Holy Missile
      </td>
      <td>
        Summons a damaging holy missile
      </td>
      <td>
        damage
      </td>
    </tr>
    <tr>
      <td>
        Ice Crystal
      </td>
      <td>
        Casts a damaging ice crystal which slows the first enemy it hits
      </td>
      <td>
        duration, amplifier, damage
      </td>
    </tr>
    <tr>
      <td>
        Leap
      </td>
      <td>
        Powerfully leaps in the air
      </td>
      <td>
        force
      </td>
    </tr>
    <tr>
      <td>
        Light Dash
      </td>
      <td>
        Dashes forwards, dealing damage to hit entities
      </td>
      <td>
        damage, length
      </td>
    </tr>
    <tr>
      <td>
        Magical Path
      </td>
      <td>
        Allows flight for a set period of time
      </td>
      <td>
        duration
      </td>
    </tr>
    <tr>
      <td>
        Magical Shield
      </td>
      <td>
        Reduces damage taken by nearby entities by X% for Y seconds
      </td>
      <td>
        power, radius, duration
      </td>
    </tr>
    <tr>
      <td>
        Overload
      </td>
      <td>
        Summons a lightning shockwave around you, dealing damage
      </td>
      <td>
        damage, radius
      </td>
    </tr>
    <tr>
      <td>
        Present Throw
      </td>
      <td>
        Casts an explosive christmas present
      </td>
      <td>
        damage, radius, force
      </td>
    </tr>
    <tr>
      <td>
        Shadow Veil
      </td>
      <td>
        You vanish for a few seconds (PvP only)
      </td>
      <td>
        duration
      </td>
    </tr>
    <tr>
      <td>
        Shockwave
      </td>
      <td>
        Summons a shockwave which knocks up enemies hit
      </td>
      <td>
        knock-up, length
      </td>
    </tr>
    <tr>
      <td>
        Shulker Missile
      </td>
      <td>
        Casts multiple deadly shulker missiles
      </td>
      <td>
        damage, effect-duration
      </td>
    </tr>
    <tr>
      <td>
        Sky Smash
      </td>
      <td>
        Powerful strikes which damage &amp; knock up hit entities
      </td>
      <td>
        knock-up, damage
      </td>
    </tr>
    <tr>
      <td>
        Swiftness
      </td>
      <td>
        Increases your movement speed temporarily
      </td>
      <td>
        duration, amplifier
      </td>
    </tr>
    <tr>
      <td>
        Throw Up
      </td>
      <td>
        Throw damaging pieces of rotten flesh
      </td>
      <td>
        damage, duration
      </td>
    </tr>
    <tr>
      <td>
        Thrust
      </td>
      <td>
        Thrust forwards with your sword, dealing damage
      </td>
      <td>
        damage
      </td>
    </tr>
    <tr>
      <td>
        TNT Throw
      </td>
      <td>
        (Mind block damage!) Casts a primed TNT
      </td>
      <td>
        force
      </td>
    </tr>
    <tr>
      <td>
        Void Zapper
      </td>
      <td>
        Casts a linear projectile which bounces on surfaces, inflicting damage
        and knockback
      </td>
      <td>
        damage, knockback, length, max, extra
      </td>
    </tr>
    <tr>
      <td>
        Warp
      </td>
      <td>
        Point the ground &amp; teleport to target location.
      </td>
      <td>
        range
      </td>
    </tr>
  </tbody>
</table>

## Passive Skills

<p>
  These skills cannot be actively cast - they are passively triggered by
  specific events, like player attacks.
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Skill
      </th>
      <th>
        Description
      </th>
      <th>
        Modifiers
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        Ambers
      </td>
      <td>
        Ambers drop when dealing magic damage. Grants X%
        <a href="./../../mmocore/misc/resources">
          max mana
        </a>
        back when picked up.
        <span class="VPBadge info">
          mmocore
        </span>
      </td>
      <td>
        percent
      </td>
    </tr>
    <tr>
      <td>
        Backstab
      </td>
      <td>
        Backstabs deal X% extra damage.
      </td>
      <td>
        extra
      </td>
    </tr>
    <tr>
      <td>
        Fire Berserker
      </td>
      <td>
        Passively deals increased damage when on fire.
      </td>
      <td>
        extra
      </td>
    </tr>
    <tr>
      <td>
        Neptune's Gift
      </td>
      <td>
        <a href="./../../mmocore/misc/resources">
          Resource
        </a>
        regeneration is increased when standing in water.
        <span class="VPBadge info">
          mmocore
        </span>
      </td>
      <td>
        extra
      </td>
    </tr>
    <tr>
      <td>
        Sneaky Picky
      </td>
      <td>
        Deal additional damage when delivering the first blow during a fight (when
        entering
        <a href="./../../mmocore/features/combat">
          Combat Logging
        </a>
        ).
        <span class="VPBadge info">
          mmocore
        </span>
      </td>
      <td>
        extra
      </td>
    </tr>
    <tr>
      <td>
        Vampirism
      </td>
      <td>
        10% of the attack damage is given back as health.
      </td>
      <td>
        drain
      </td>
    </tr>
  </tbody>
</table>
