# 📌 Waypoints

<p>
  Waypoints are a way for players to save their world exploration progression.
  Waypoints are configurable spots in your worlds that can link together
  as a player unlocks them to create a form of fast travel system. They can
  be unlocked crouching while standing on them. Each waypoint is linked to
  others waypoints with a cost corresponding to it. You can travel between
  2 waypoints if they are linked and if you unlocked them.
</p>
<p>
  By default a player has no waypoints unlocked, but as the player explores
  the world and discovers waypoints A, B, and D, the player may
  <strong>
    fast travel
  </strong>
  between those waypoints. If the player has not discovered waypoint C,
  then the player will not see it or be able to fast travel to it. When standing
  on/near a waypoint, you simply shift to open up the fast travel menu.
</p>
<p>
  Traveling using waypoints costs
  <strong>
    Stellium
  </strong>
  , which is a resource just like mana but which regenerates much slower.
  Stellium is used to balance waypoints.
</p>

## Waypoint List

<p>
  Players may open the waypoints menu by using
  <code>
    /waypoints
  </code>
  This menu displays all registered waypoints, including locked ones. Unlocked
  waypoints are displayed using an ender eye. This menu can only be used
  to visualize waypoints, indeed waypoints may only be used when standing
  on a waypoint and crouching: the same menu will open, however the waypoint
  you are standing on will be highlighted (using the vanilla glowing effect)
  and you will be able to use your stellium to teleport to any waypoint.
</p>
<p>
  <img src="/assets/waypoint_0.C5QX9ILv.png" alt="PH1gn4w">
</p>
<p>
  There is a
  <strong>
    cool animation
  </strong>
  for unlocking and teleporting to an existing waypoint as well, with sound
  effects.
</p>

## Disabling Waypoints

<p>
  MMOCore waypoints are an optional feature. If you don't want to use it,
  follow these steps:
</p>
<ul>
  <li>
    empty the
    <code>
      /waypoints
    </code>
    folder (do not delete it or it will regenerate),
  </li>
  <li>
    comment out the
    <code>
      /waypoints
    </code>
    command section inside
    <code>
      MMOCore/commands.yml
    </code>
    to disable the waypoint UI command.
  </li>
</ul>

## Waypoint Config Example

<p>
  The
  <code>
    /waypoints
  </code>
  folder is where you can place as many YML files/subfolders as you want
  to register new waypoints.
</p>
<details class="details custom-block">
  <summary>
    Full Config Example
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
            # Waypoint identifier, used as reference for admin commands.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Make sure all the waypoints have different identifiers.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            spawn
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Name of waypoint displayed in the waypoint GUI.
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
            Spawn
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Location of waypoint: &lt;world&gt; &lt;x y z&gt; &lt;yaw&gt; &lt;pitch&gt;
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Yaw and pitch represent where the player will be looking at when teleported.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            location
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'world 69 71 136 136 0'
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Radius of waypoint around the specified location.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            radius
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            2.0
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Time it takes to warp to target location when using
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # the waypoint through the GUI.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            warp-time
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            100
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            cost
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Cost when not standing on any waypoint to dynamically teleport to this
            one.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            dynamic-use
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            5
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            option
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # When enabled, players can unlock the waypoint
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # by sneaking on it (true by default)
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            unlockable
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            true
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # When enabled, opens up the teleportation menu
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # when sneaking (true by default)
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            enable-menu
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            true
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # When set to true (false by default) players don't
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # have to be standing on any waypoint to teleport
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # to that waypoint. This could be a nice option for
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # spawn waypoints alongside with the 'default' option.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            dynamic
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            false
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Should the waypoint be unlocked by default?
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            default
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            true
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # All the waypoints you can teleport to when standing
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # on that waypoint. Each value is associated with the cost of the travel.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            linked
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            spawn1
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
            spawn2
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            3
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            forest
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            4
          </span>
        </span>
      </code>
    </pre>
  </div>
</details>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Option
      </th>
      <th>
        Description
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        Name
      </td>
      <td>
        Name displayed for the waypoint in the
        <code>
          /waypoints
        </code>
        menu. This is different then the internal ID which is only used for config
        purposes.
      </td>
    </tr>
    <tr>
      <td>
        Location
      </td>
      <td>
        This is where you define where the waypoint block is. Your options are
        WORLD, X, Y, Z, PITCH, YAW. Yaw and pitch define the player's camera orientation.
      </td>
    </tr>
    <tr>
      <td>
        Radius
      </td>
      <td>
        This defines how close a player has to be to the source waypoint block
        to shift and unlock it. Radius is in blocks, and 5 blocks means that if
        a player shifts anywhere within 5 blocks of the waypoint, they will unlock
        it. It should somewhere near half the diameter of the monument/shrine/..
        which serves as physical waypoint.
      </td>
    </tr>
    <tr>
      <td>
        Default
      </td>
      <td>
        Whether or not this waypoint is unlocked by default.
      </td>
    </tr>
    <tr>
      <td>
        Dynamic
      </td>
      <td>
        See
        <a href="#dynamic-waypoints">
          below
        </a>
        .
      </td>
    </tr>
    <tr>
      <td>
        Enable Menu
      </td>
      <td>
        When set to
        <code>
          true
        </code>
        , sneaking on the waypoint will open up the waypoint teleportation menu.
      </td>
    </tr>
    <tr>
      <td>
        Unlockable
      </td>
      <td>
        When set to
        <code>
          true
        </code>
        , players will unlock that waypoint by crouching on the waypoint location.
      </td>
    </tr>
    <tr>
      <td>
        Destinations
      </td>
      <td>
        The list of other waypoints you can jump to when standing on your waypoint.
        Each neighbor waypoint is associated with the cost (in stellium) of the
        A -&gt; B waypoint travel.
      </td>
    </tr>
  </tbody>
</table>

### Dynamic Waypoints

<p>
  Dynamic waypoints can be used anywhere on the map when opening the waypoints
  menu. Any player can teleport to a dynamic waypoint at any time, they don't
  need to be standing on any waypoint.
</p>

### Waypoint Link Reciprocity

<p>
  By default, Waypoint A being linked to waypoint B does not mean B is linked
  to A. In other words, waypoint connections are not reciprocal, unless you
  toggle on the following option inside the MMOCore
  <code>
    config.yml
  </code>
  :
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
          waypoints
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # ...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          link_reciprocity
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          true
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  This option applies to all waypoints.
</p>

## Waypoint Books

<p>
  Waypoint books can be given to players using the following command.
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
          /mmocore waypoints item &lt;waypointId&gt; &lt;playerName&gt;
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  When right clicked, the book will be consumed, unlocking the specified
  waypoint. You can change how the item looks in the
  <code>
    items.yml
  </code>
  config file.
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
          WAYPOINT_BOOK
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          item
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          BOOK
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
          '&amp;6Waypoint Book: {waypoint}'
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
          '&amp;7Click to unlock {waypoint}'
        </span>
      </span>
    </code>
  </pre>
</div>

## Waypoint Path Calculation

<p>
  When enabling this option in the main MMOCore plugin config file, MMOCore
  will perform automatic path calculation across the waypoints that the player
  has collected.
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
          waypoints
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # ...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          auto_path_calculation
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          false
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  Let's take the following scenario:
</p>
<ul>
  <li>
    Player is standing at waypoint A. They would like to teleport to waypoint
    C
  </li>
  <li>
    Waypoint A is not directly connected to waypoint C
  </li>
  <li>
    Waypoint A is connected to an intermediate waypoint B, and B is connected
    to C
  </li>
</ul>
<p>
  Even if waypoint A is not directly linked to waypoint C, MMOCore will
  look through the entire waypoint map and find the path A -&gt; B -&gt;
  C, rendering waypoint C accessible. MMOCore always finds the shortest paths
  between waypoints, and takes into account dynamic waypoints.
</p>

## Disabling waypoints

<p>
  If you do not plan on using the MMOCore waypoint system, here is what
  you can do to disable it:
</p>
<ul>
  <li>
    empty the
    <code>
      waypoints
    </code>
    folder,
  </li>
  <li>
    comment out the
    <code>
      waypoints
    </code>
    command in the
    <code>
      commands.yml
    </code>
    config file.
  </li>
</ul>
