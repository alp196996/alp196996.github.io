# 💾 Commands

<p>
  Below is a list of all available commands in MMOCore. You can also explore
  these in-game as tab-completion is fully supported.
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Command
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
          /mmocore
        </code>
      </td>
      <td>
        Displays the main help page.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmocore reload
        </code>
      </td>
      <td>
        Reloads the entire plugin, after editing config files. No need to restart
        your server!
      </td>
    </tr>
  </tbody>
</table>

### Currency

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Command
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
          /mmocore note
        </code>
      </td>
      <td>
        Gives players a note worth $X. Can be
        <a href="./../misc/economy">
          deposited
        </a>
        into banks.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmocore coins
        </code>
      </td>
      <td>
        Gives players gold coins based on the amount input. Can be deposited into
        banks.
      </td>
    </tr>
  </tbody>
</table>

### Quests

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Command
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
          /mmocore quest start
        </code>
      </td>
      <td>
        Force start a quest for a player.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmocore quest cancel
        </code>
      </td>
      <td>
        Force cancel a player's current quest.
      </td>
    </tr>
  </tbody>
</table>

### Waypoints

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Command
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
          /mmocore waypoints unlock
        </code>
      </td>
      <td>
        Manually unlocks a waypoint for a set player.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmocore waypoints lock
        </code>
      </td>
      <td>
        Manually locks a waypoint for a set player.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmocore waypoints teleport
        </code>
      </td>
      <td>
        Manually teleports a player to a set waypoint.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmocore waypoints open
        </code>
      </td>
      <td>
        Opens the waypoint menu AND checks if a player is standing on a waypoint
      </td>
    </tr>
  </tbody>
</table>

### Admin

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Command
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
          /mmocore admin exportdata
        </code>
      </td>
      <td>
        Exports all the existing player data from the yml files to the sql database.
        So you can can then change you data storage to SQL while keeping all your
        player data.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmocore admin attr-realloc-points &lt;give/set&gt;
        </code>
      </td>
      <td>
        Manually gives attribute reallocation points to a player.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmocore admin attribute-points &lt;give/set&gt;
        </code>
      </td>
      <td>
        Manually gives attribute points to a player.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmocore admin attribute &lt;give/take&gt;
        </code>
      </td>
      <td>
        Increases a player's attribute
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmocore admin force-class
        </code>
      </td>
      <td>
        Sets a player's class by force. This means their level, skills, etc. won't
        update as well. Make sure your classes have the same skills/skill-trees
        if you plan on using this command.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmocore admin class-points
        </code>
      </td>
      <td>
        Gives
        <a href="./../features/classes#class-points">
          class points
        </a>
        to a player.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmocore admin exp give &lt;player&gt; &lt;profession/main&gt; &lt;value&gt;
          &lt;split&gt;
        </code>
      </td>
      <td>
        Gives profession/class experience to a player.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmocore admin exp set &lt;player&gt; &lt;profession/main&gt; &lt;value&gt;
        </code>
      </td>
      <td>
        Sets the profession/class exp of a player.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmocore admin exp take &lt;player&gt; &lt;profession/main&gt; &lt;value&gt;
        </code>
      </td>
      <td>
        Take off class/profesion exp from a player.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmocore admin hideab &lt;player&gt; &lt;ticks&gt;
        </code>
      </td>
      <td>
        Hides the action bar for a player for X ticks.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmocore admin info
        </code>
      </td>
      <td>
        See summary of levels for a player.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmocore admin level &lt;profession/main&gt;
        </code>
      </td>
      <td>
        Same parameters as the EXP command, gives X levels.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmocore admin nocd
        </code>
      </td>
      <td>
        Used by admins to test skills without beign affected by skill cooldown
        or mana usage.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmocore admin reset &lt;player&gt;
        </code>
      </td>
      <td>
        HARD RESETS a player's info i.e class, level, EXP...
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmocore admin resource-health &lt;give/set/take&gt;
        </code>
      </td>
      <td>
        Modify a player's health.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmocore admin resource-mana &lt;give/set/take&gt;
        </code>
      </td>
      <td>
        Modify a player's mana.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmocore admin resource-stamina &lt;give/set/take&gt;
        </code>
      </td>
      <td>
        Modify a player's stamina.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmocore admin resource-stellium &lt;give/set/take&gt;
        </code>
      </td>
      <td>
        Modify a player's stellium.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmocore admin skill-points &lt;give/set&gt;
        </code>
      </td>
      <td>
        Gives
        <a href="./../skills/intro#upgrading-a-skill">
          skill points
        </a>
        to a player so they can upgrade their skills.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmocore admin skill-realloc-points &lt;give/set&gt;
        </code>
      </td>
      <td>
        Gives skill reallocation points to a player.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmocore admin skill &lt;give/set&gt;
        </code>
      </td>
      <td>
        Gives points directly to a skill for a player.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmocore admin skill &lt;lock/unlock&gt;
        </code>
      </td>
      <td>
        Locks/unlocks a
        <a href="./../skills/intro#unlocking-skills">
          skill
        </a>
        for a certain player.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmocore admin slot &lt;lock/unlock&gt;
        </code>
      </td>
      <td>
        Locks/unlock a
        <a href="./../features/classes#skill-slots">
          slot
        </a>
        for a player.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmocore admin slot bind &lt;slot&gt; &lt;skill&gt;
        </code>
      </td>
      <td>
        Binds a skill to a certain slot. This will work even if the designated
        skill is not unlocked for the player but won't unlock it.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmocore admin slot unbind &lt;slot&gt;
        </code>
      </td>
      <td>
        Unbinds a skill from a certain slot.
      </td>
    </tr>
  </tbody>
</table>

### Classes

<p>
  |
  <code>
    /mmocore class force &lt;player&gt; &lt;class&gt;
  </code>
  | Forcefully sets a player's class without loading class data | |
  <code>
    /mmocore class select &lt;player&gt; &lt;class&gt;
  </code>
  | Sets the player's class and loads their class data | |
  <code>
    /mmocore class check &lt;player&gt;
  </code>
  | Prints the current class of a player |
</p>

### EXP Boosts

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Command
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
          /mmocore booster create &lt;profession/main&gt; (player)
        </code>
      </td>
      <td>
        Creates an
        <a href="./../level/boosters">
          EXP booster
        </a>
        with specified power and length.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmocore booster list
        </code>
      </td>
      <td>
        Displays active EXP boosters.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmocore booster remove
        </code>
      </td>
      <td>
        Removes a booster with specified ID.
      </td>
    </tr>
  </tbody>
</table>
