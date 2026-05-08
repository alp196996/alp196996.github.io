# 🏷️ Placeholders

<p>These are placeholders that you can use in both MMOItems and MMOCore.</p>

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
          %mythiclib_stat_&lt;stat_name&gt;%
        </code>
      </td>
      <td>
        Current value of a player stat.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mythiclib_raw_stat_&lt;stat_name&gt;%
        </code>
      </td>
      <td>
        Current value of a player stat with no rounding.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mythiclib_cooldown_&lt;cooldown_key&gt;%
        </code>
      </td>
      <td>
        This placeholder handles cooldowns for MANY things including skills from
        MMOCore/MMOItems, MI items, mitigation mechanics etc. See the list of available
        cooldown keys
        <a href="./../scripts/variables#cooldownmap">
          here
        </a>
        .
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mythiclib_defense_damage_reduction%
        </code>
      </td>
      <td>
        Get damage mitigated by defense when inflicted 100 damage.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          %mythiclib_space_&lt;number&gt;%
        </code>
      </td>
      <td>
        Positive (
        <code>
          10
        </code>
        )/negative (
        <code>
          -10
        </code>
        ) space using
        <a href="https://www.spigotmc.org/threads/negative-space-font-resource-pack.440952/"
        target="_blank" rel="noreferrer">
          Negative Space Font Resource Pack
        </a>
        .
      </td>
    </tr>
  </tbody>
</table>

<p>Some additional placeholders are available only when using the <a href="./../misc/mana-stamina#placeholders">built-in mana/stamina module</a>.</p>
