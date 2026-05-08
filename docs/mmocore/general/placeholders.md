# 🏷️ Placeholders

<p>
  All placeholders automatically register upon plugin load, and require
  <strong>
    PlaceholderAPI
  </strong>
  to work. You do not need to run any commands to initialize the placeholders.
  Keep in mind you can access PAPI placeholders from MVdWPlaceholderAPI using
  <code>
    {placeholderapi_mmocore_...}
  </code>
  .
</p>
<p>
  If you're looking for a placeholder and you can't see it here, remember
  MythicLib also comes with its own set of
  <a href="./../../mythiclib/general/placeholders">
    PAPI placeholders
  </a>
  .
</p>

### Main Placeholders

<table tabindex="0">
  <thead>
    <tr>
      <th>
        <strong>
          Placeholder
        </strong>
      </th>
      <th>
        <strong>
          Description
        </strong>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>
          %mmocore_attribute_&lt;attribute&gt;%
        </code>
      </td>
      <td>
        Current value of a
        <a href="./../features/attributes">
          player attribute
        </a>
        .
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_&lt;health/mana/stamina/stellium&gt;%
        </code>
      </td>
      <td>
        Nicely formatted current resource value
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_&lt;health/mana/stamina/stellium&gt;_bar%
        </code>
      </td>
      <td>
        Nicely formatted current resource value AS A BAR!
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_max_health%
        </code>
      </td>
      <td>
        Nicely formatted shorthand for
        <code>
          %mythiclib_stat_max_mana%
        </code>
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_stat_&lt;stat_name&gt;%
        </code>
      </td>
      <td>
        Returns the formatted player
        <a href="./../features/stats">
          stat
        </a>
        value
      </td>
    </tr>
  </tbody>
</table>

### Points

<table tabindex="0">
  <thead>
    <tr>
      <th>
        <strong>
          Placeholder
        </strong>
      </th>
      <th>
        <strong>
          Description
        </strong>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>
          %mmocore_skill_points%
        </code>
      </td>
      <td>
        More info on
        <a href="./../skills/intro#upgrading-a-skill">
          skill points
        </a>
        .
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_class_points%
        </code>
      </td>
      <td>
        More info on
        <a href="./../features/classes#class-points">
          class points
        </a>
        .
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_attribute_points%
        </code>
      </td>
      <td>
        More info on
        <a href="./../features/attributes">
          attribute points
        </a>
        .
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_attribute_reallocation_points%
        </code>
      </td>
      <td>
        More info on
        <a href="./../features/attributes">
          attribute points
        </a>
        .
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_attribute_points_spent_&lt;attribute_id&gt;%
        </code>
      </td>
      <td>
        The points spent on a specific attribute.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_skill_tree_points_&lt;tree&gt;%
        </code>
      </td>
      <td>
        Unspent skill tree points, for a specific tree. Use
        <code>
          global
        </code>
        for global skill tree points.
      </td>
    </tr>
  </tbody>
</table>

### Class & Professions

<table tabindex="0">
  <thead>
    <tr>
      <th>
        <strong>
          Placeholder
        </strong>
      </th>
      <th>
        <strong>
          Description
        </strong>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>
          %mmocore_level%
        </code>
      </td>
      <td>
        Main RPG player level.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_level_percent%
        </code>
      </td>
      <td>
        Progression to next level in %.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_experience%
        </code>
      </td>
      <td>
        Returns player experience.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_next_level%
        </code>
      </td>
      <td>
        Returns player experience needed for next level. Works well beside %mmocore_experience%.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_profession_&lt;profession&gt;%
        </code>
      </td>
      <td>
        <a href="./../profession/intro">
          Profession
        </a>
        player level.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_profession_experience_&lt;profession&gt;%
        </code>
      </td>
      <td>
        Returns player experience for the specific profession.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_profession_next_level_&lt;profession&gt;%
        </code>
      </td>
      <td>
        Returns player experience needed for next level for the specific profession.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_profession_percent_&lt;profession&gt;%
        </code>
      </td>
      <td>
        Current progression to next profession level in %.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_class%
        </code>
      </td>
      <td>
        Player class name, or name of default class.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_class_id%
        </code>
      </td>
      <td>
        Internal name/ID of current player class
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_mana_icon%
        </code>
      </td>
      <td>
        The mana icon for the players current class
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_mana_name%
        </code>
      </td>
      <td>
        The mana name for the players current class
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_exp_multiplier_&lt;profession&gt;%
        </code>
      </td>
      <td>
        Returns the EXP multiplier for the specific profession ("main" may replace
        the profession name)
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_exp_boost_&lt;profession&gt;%
        </code>
      </td>
      <td>
        Returns how much of the EXP multiplier is provided by boosters for the
        specific profession ("main" may replace the profession name)
      </td>
    </tr>
  </tbody>
</table>

### Quests & Objectives

<table tabindex="0">
  <thead>
    <tr>
      <th>
        <strong>
          Placeholder
        </strong>
      </th>
      <th>
        <strong>
          Description
        </strong>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>
          %mmocore_quest%
        </code>
      </td>
      <td>
        Ongoing
        <a href="./../features/quests">
          quest
        </a>
        , or "None".
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_quest_progress%
        </code>
      </td>
      <td>
        Progress of current quest, or "0" if no quest.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_quest_objective%
        </code>
      </td>
      <td>
        Current quest objective, or "None" if no quest.
      </td>
    </tr>
  </tbody>
</table>

### Social

<table tabindex="0">
  <thead>
    <tr>
      <th>
        <strong>
          Placeholder
        </strong>
      </th>
      <th>
        <strong>
          Description
        </strong>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>
          %mmocore_guild_name%
        </code>
      </td>
      <td>
        Returns the guild name or '' if none
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_guild_tag%
        </code>
      </td>
      <td>
        Returns the guild tag or '' if none
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_guild_leader%
        </code>
      </td>
      <td>
        Returns the guild leader or '' if none
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_guild_members%
        </code>
      </td>
      <td>
        Returns the guild members or '' if none
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_guild_online_members%
        </code>
      </td>
      <td>
        Returns the guild online members or '' if none
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_party_count%
        </code>
      </td>
      <td>
        Counts the number of party members.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_party_member_&lt;n&gt;%
        </code>
      </td>
      <td>
        Name of the n-th party member,
        <code>
          None
        </code>
        if invalid
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_online_friends%
        </code>
      </td>
      <td>
        Number of online friends right now
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_online_friend_&lt;n&gt;%
        </code>
      </td>
      <td>
        Name of n-th online friend,
        <code>
          None
        </code>
        if invalid
      </td>
    </tr>
  </tbody>
</table>

### Skills

<table tabindex="0">
  <thead>
    <tr>
      <th>
        <strong>
          Placeholder
        </strong>
      </th>
      <th>
        <strong>
          Description
        </strong>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>
          %mmocore_skill_level_&lt;skill_name&gt;%
        </code>
      </td>
      <td>
        Returns the level a player has for a specific skill.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_skill_parameter_&lt;param_id&gt;:&lt;skill_id&gt;%
        </code>
      </td>
      <td>
        Returns the value of a skill parameter, you can for instance use
        <code>
          mana
        </code>
        or
        <code>
          cooldown
        </code>
        as parameter.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_bound_skill_parameter_&lt;param_id&gt;:&lt;slot_number&gt;%
        </code>
      </td>
      <td>
        Returns value of skill parameter, of skill bound to slot with given number.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_bound_&lt;slot_idx&gt;%
        </code>
      </td>
      <td>
        Name of skill bound to given skill slot.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_id_bound_&lt;slot_idx&gt;%
        </code>
      </td>
      <td>
        UPPERCASE_ID of skill bound to given skill slot.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_cooldown_bound_&lt;slot_idx&gt;%
        </code>
      </td>
      <td>
        Returns the remaining cooldown time of the skill in the specific skill
        slot.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_is_casting%
        </code>
      </td>
      <td>
        Returns true if the player is skill casting, false otherwise
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_passive_bound_&lt;slot_idx&gt;%
        </code>
      </td>
      <td>
        (true/false) Is a passive skill bound to given slot?
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_cast_slot_offset_&lt;slot_idx&gt;%
        </code>
      </td>
      <td>
        Only when using
        <em>
          skill bar
        </em>
        skill casting. Returns the keybind the player needs to press in order
        to cast the skill on the n-th slot
      </td>
    </tr>
  </tbody>
</table>

### Combat

<table tabindex="0">
  <thead>
    <tr>
      <th>
        <strong>
          Placeholder
        </strong>
      </th>
      <th>
        <strong>
          Description
        </strong>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>
          %mmocore_in_combat%
        </code>
      </td>
      <td>
        Returns true if the player is in combat, false otherwise
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_pvp_mode%
        </code>
      </td>
      <td>
        True if the player has enabled PVP mode, false otherwise
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_since_last_hit%
        </code>
      </td>
      <td>
        Returns time in seconds since last combat hit (or -1 if not in combat).
        Since MMOCore 1.11.2 snapshots
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_since_enter_combat%
        </code>
      </td>
      <td>
        Returns time in sec since FIRST combat hit (or -1 if not in combat). Since
        MMOCore 1.11.2 snapshots
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mmocore_invulnerability_left%
        </code>
      </td>
      <td>
        Time left before being vulnerable (when changing region/using the PvpMode
        command)
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mythiclib_cooldown_pvpmode%
        </code>
      </td>
      <td>
        Cooldown of
        <code>
          /pvpmode
        </code>
      </td>
    </tr>
  </tbody>
</table>
