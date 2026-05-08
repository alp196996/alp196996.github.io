# 🫅 Player Data

<p>
  Once you have retrieved an instance of
  <code>
    ProfileProvider
  </code>
  , you can access data of online players using the following method. The
  player data class is
  <code>
    ProfileList
  </code>
  .
</p>
<div class="language-java">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
    java
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          UUID playerId
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          /* TODO */
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ;
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ProfileProvider provider
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          /* see previous page */
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ;
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          // get player data
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ProfileList playerData
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          provider.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getPlayerData
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (playerId);
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  You can also access the profile list and current profile of a player using
  the following methods. The profile class is
  <code>
    PlayerProfile
  </code>
  .
</p>
<div class="language-java">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
    java
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          // get all profiles from player
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          List&lt;
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          PlayerProfile
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          &gt; profiles
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          playerData.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getProfiles
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ();
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          // get current profile
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          @
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          Nullable
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          PlayerProfile currentProfile
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          playerData.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getCurrent
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ();
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  Once you have an instance of
  <code>
    PlayerProfile
  </code>
  , you can retrieve information about that profile, including its health,
  attribute data, inventories... Most methods are pretty straight-forward
  and close to their Bukkit equivalent.
</p>

## Location maps

<div class="info custom-block">
  <p class="custom-block-title custom-block-title-default">
    INFO
  </p>
  <p>
    Using MMOProfiles on proxied servers comes with a few challenges, including
    correctly handling player locations. Players can log out in a server with
    a specific map, and log back in a server where this map does not exist.
    In other words, there is no one-to-one correspondance between maps across
    backend servers.
  </p>
</div>
<p>
  Where you'd need to store a Bukkit
  <code>
    Location
  </code>
  , MMOProfiles now stores a
  <code>
    LocationMap
  </code>
  instead. Location maps simply bind locations to
  <em>
    servers groups
  </em>
  (see
  <a href="#server-groups">
    below
  </a>
  ). If two servers are in the same group, MMOProfiles will use the same
  locations for these two servers. It is the responsiblity of the admin to
  correctly setup server groups.
</p>
<ul>
  <li>
    <code>
      PlayerProfile#getLocation()
    </code>
    returns the last location of the profile, in the server group of the running
    server. Note that if server groups have not been setup correctly, and MMOProfiles
    finds a non existing world, this method will fallback to the profile selection
    location.
  </li>
  <li>
    <code>
      PlayerProfile#getLocationMap()
    </code>
    returns an instance of
    <code>
      LocationMap
    </code>
    . Location maps are also used for the player's last location, bed spawn
    point and compass target location.
  </li>
</ul>
<p>
  Note that MMOProfiles uses a custom object
  <code>
    WrappedLocation
  </code>
  to store players' locations inside location maps. The only difference
  with the Bukkit counterpart
  <code>
    Location
  </code>
  is that the
  <code>
    World
  </code>
  object is not parsed (world name is saved as a string), to avoid MMOProfiles
  running into an exception.
</p>

### Server Groups

<p>
  By "server group" we refer to all servers on a proxy which share the same
  <strong>
    server identifier
  </strong>
  . The server identifier is a small piece of text that you can configure
  inside your MMOProfiles
  <code>
    config.yml
  </code>
  . Since this config file is server-specific, multiple servers may have
  different server identifiers.
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
          server-identifier
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'default'
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  Two servers with the same identifier are in the same group. By default,
  all servers are within the same group with identifier
  <code>
    default
  </code>
  .
</p>
