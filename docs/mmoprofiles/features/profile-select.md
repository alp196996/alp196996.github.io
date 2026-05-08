# 🦾 Profile Selection

<p>
  The profile selection GUI is the first thing players will see when logging
  into the server. This UI shows all the profiles the player has registered
  and basic information about each one of these profiles. Players can create
  or remove profiles, or choose one. They won't be able to quit this UI until
  they choose a profile.
</p>
<p>
  <img src="/assets/profile_select.D1QJE14M.png" alt="">
</p>
<p>
  You can fully customize this GUI by modifying the file
  <code>
    gui/profile-list.yml
  </code>
  . Below, you can find the complete list of all the placeholders you can
  use to show all the profile information you find relevant. We recommend
  using a server resource pack to improve the look of your GUI, all of this
  is possible with MMOProfiles GUI's.
</p>
<p>
  <img src="/assets/profile_indiv.BvTb022d.png" alt="image">
</p>

## Creating a new profile

<p>
  If the player has enough profile slots, they can create a new profile
  by clicking the emerald. MMOProfiles will ask the profile name, and then
  the new profile will pop up in the list.
</p>
<p>
  <img src="/assets/profile_new_char.BgOzBlZV.png" alt="image">
</p>

## Placeholders

<p>
  These are the placeholders you can use in the
  <code>
    items.profile.lore
  </code>
  config option located inside of the
  <code>
    /MMOCore/language/gui/profile-list.yml
  </code>
  config file. This corresponds to what will be displayed in the profile
  item lore, for every profile in the inventory.
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
          # Default config
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
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          ''
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '&amp;7Class &amp;6{mmocore_class}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '&amp;7Level: &amp;e{mmocore_level}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '&amp;7Exp: &amp;e{mmocore_exp}&amp;7/&amp;e{mmocore_exp_next_level}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '&amp;7World: &amp;e{world}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          ''
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "&amp;e↪ Left click to select this profile."
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "&amp;e↪ Right click to delete it."
        </span>
      </span>
    </code>
  </pre>
</div>

### Vanilla placeholders

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Placeholder
      </th>
      <th>
        Value
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>
          {profile_name}
        </code>
      </td>
      <td>
        The profile name
      </td>
    </tr>
    <tr>
      <td>
        <code>
          {last_time_played}
        </code>
      </td>
      <td>
        Last time the player played with this profile.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          {slot}
        </code>
      </td>
      <td>
        The slot corresponding to the profile
      </td>
    </tr>
    <tr>
      <td>
        <code>
          {health}
        </code>
      </td>
      <td>
        Profile's health.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          {level}
        </code>
      </td>
      <td>
        Profile's level.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          {exp}
        </code>
      </td>
      <td>
        Profile's exp.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          {balance}
        </code>
      </td>
      <td>
        Profile's balance.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          {food}
        </code>
      </td>
      <td>
        Profile's food level.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          {saturation}
        </code>
      </td>
      <td>
        Profile's saturation.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          {air_level}
        </code>
      </td>
      <td>
        Profile's air level.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          {world}
        </code>
      </td>
      <td>
        The world the player will be in if he chooses the profile.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          {spawn_world}
        </code>
      </td>
      <td>
        World of player's bed spawn point.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          {attribute_&lt;name&gt;}
        </code>
      </td>
      <td>
        Profile's vanilla attribute value. For example,
        <code>
          {attribute_max_health}
        </code>
      </td>
    </tr>
  </tbody>
</table>

### MMOCore Placeholders

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Placeholder
      </th>
      <th>
        Value
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>
          {mmocore_class}
        </code>
      </td>
      <td>
        MMOCore class name
      </td>
    </tr>
    <tr>
      <td>
        <code>
          {mmocore_level}
        </code>
      </td>
      <td>
        MMOCore main player level
      </td>
    </tr>
    <tr>
      <td>
        <code>
          {mmocore_attribute_&lt;name&gt;}
        </code>
      </td>
      <td>
        Points spent in a certain attribute. Not to be mistaken for the player's
        vanilla attributes.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          {mmocore_profession_&lt;name&gt;}
        </code>
      </td>
      <td>
        Level in a certain profession
      </td>
    </tr>
    <tr>
      <td>
        <code>
          {mmocore_exp}
        </code>
      </td>
      <td>
        Current player exp
      </td>
    </tr>
    <tr>
      <td>
        <code>
          {mmocore_exp_next_level}
        </code>
      </td>
      <td>
        Amount of exp to reach next level
      </td>
    </tr>
  </tbody>
</table>
