# 🫅 Proxy-Based Profiles

<p>
  This feature allows for profile-specific progress for any type of player
  data, of any plugin. Some proxy-level workarounds allow you to switch the
  player's UUID when switching servers, effectively tricking all plugins
  into thinking that another player joined the server.
</p>
<p>
  This feature has a huge advantage:
  <strong>
    this makes literally any plugin storing player data compatible with MMOProfiles
    without the need of having profile-specific code
  </strong>
  , which is known to be a very tedious task. More on that later.
</p>
<div class="info custom-block">
  <p class="custom-block-title custom-block-title-default">
    INFO
  </p>
  <p>
    <em>
      UUID Spoofing
    </em>
    has already been implemented in some plugins in the past, most of them
    being outdated now. MMOProfiles provides an up-to-date solution, packed
    with all of the other most important MMOProfiles features, namely configurable
    GUI-based profile selection and compatibility with the MMO plugin suite.
  </p>
</div>
<p>
  <strong>
    You'll need at least one proxy and two backend servers in order to use
    this feature.
  </strong>
</p>

## Why such a feature?

<p>
  As you might know, it is hard for MMOProfiles to be compatible with literally
  every plugin out there. Supporting profile-based player data requires some
  heavy modifications to any plugin codebase - it requires the plugin to
  wait for MMOProfiles to provide a UUID, before making a database request
  based on that UUID.
</p>
<p>
  This is quite hard to do for plugins outside of the MMO plugin suite.
  Although we have provided a well structured and open-source profile API
  for other developers to build against MMOProfiles, we of course cannot
  expect other developers to natively support it - which is why we've been
  working on a solution which requires no effort from any other developer.
</p>

## How do I enable it?

<p>
  The following tutorial works on the assumption that you already know about
  proxies and MySQL databases. If that's not the case, you won't be able
  to understand it.
</p>

#### On your Velocity proxy server

<ul>
  <li>
    Install the latest version of
    <a href="https://www.spigotmc.org/resources/mmoprofiles.109942/" target="_blank"
    rel="noreferrer">
      MMOProfiles
    </a>
    . The main JAR file contains both a Spigot plugin and a Velocity plugin.
  </li>
  <li>
    Install the latest version of
    <a href="https://modrinth.com/plugin/packetevents" target="_blank" rel="noreferrer">
      PacketEvents
    </a>
    . It is a hard dependency for proxy-based profile selection.
  </li>
  <li>
    In your Velocity config, set the
    <code>
      force-key-authentication
    </code>
    option to
    <code>
      false
    </code>
    .
  </li>
</ul>

#### On your backend servers

<p>
  Follow these steps on all of your backend servers where you want to enable
  proxy-based profile selection.
</p>
<ul>
  <li>
    Install the latest version of MMOProfiles and
    <a href="https://www.spigotmc.org/resources/mmolib-mythiclib.90306/" target="_blank"
    rel="noreferrer">
      MythicLib
    </a>
    . If you have other MMO plugins installed, make sure they're up to date.
  </li>
  <li>
    Make sure SQL data storage is enabled in your MMOProfiles config, and
    that all of your backend servers point to the same SQL database.
  </li>
  <li>
    On 1.19+, you will also need to install
    <a href="https://modrinth.com/plugin/freedomchat" target="_blank" rel="noreferrer">
      FreedomChat
    </a>
    . These plugins fix an issue with signed chat, preventing players from
    being kicked the moment their send a message in the chat.
  </li>
  <li>
    Set
    <code>
      enforce-secure-profile
    </code>
    to
    <code>
      false
    </code>
    in
    <code>
      server.properties
    </code>
    .
  </li>
</ul>
<div class="info custom-block">
  <p class="custom-block-title custom-block-title-default">
    INFO
  </p>
  <p>
    You do not need MythicLib installed on your proxy server. You do not need
    PacketEvents installed on any of your backend servers.
  </p>
</div>
<p>
  This
  <strong>
    currently only works on Velocity
  </strong>
  (BungeeCord support is planned) and the only supported backend server
  version is 1.20.2+ (1.16-1.19 support is also planned but requires adapting
  the code to older versions of the Minecraft protocol).
</p>

## Config Files

<p>
  The MMOProfiles JAR file contains the source codes of two different plugins:
  one for the Velocity proxy server and one for the Spigot/Paper backend
  servers. Therefore, there are now two types of config to setup: one for
  the proxy servers, and one per backend server.
</p>

### Proxy Server Config

<p>
  This config file is located under
  <code>
    &lt;velocity_root&gt;/plugins/mmoprofiles_velocity
  </code>
  .
</p>
<details class="details custom-block">
  <summary>
    Full config snippet
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
            # Players will be kicked (from the server, NOT the network) when
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # trying to join these backend servers with no profile selected.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            #
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # If the player is already connected to the proxy, they will not
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # be kicked from the proxy, and will be redirected to another server.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            kick_if_no_profile
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Backend servers where this option is active
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # !! Server names from the Velocity config.toml !!
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            servers
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
            play
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Message displayed to players
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            kick_message
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'Please first select a profile.'
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # This option is for lobby servers. Players will have their
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # profile unselected when joining these backend servers.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # !! Server names from the Velocity config.toml !!
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            unselect_profile_on_login
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
            lobby
          </span>
        </span>
      </code>
    </pre>
  </div>
</details>
<p>
  <code>
    kick_if_no_profile
  </code>
  is useful to prevent players from joining a server without selecting a
  profile. It is a list of server IDs.
</p>
<p>
  <code>
    unselect_profile_on_login
  </code>
  is useful to have players return to their official UUID when joining a
  lobby server. This way, they are forced to unselect their profile and temporarily
  not use their inventory, profile-specific progress, etc...
</p>

### Backend Server Config

<p>
  This config file is located under
  <code>
    &lt;spigot_root&gt;/plugins/MMOProfiles
  </code>
  .
</p>
<details class="details custom-block">
  <summary>
    Full config snippet
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
            # When enabled, MMOProfiles switches to a proxy-based behaviour, enabling
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # players to switch UUIDs. This tricks other plugins into thinking another
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # player is joining the server, enabling profile-specific progress with
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # literally ANY plugin.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            #
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # !! WARNING risk of data loss !!
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Please check the documentation before enabling this option to understand
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # exactly what you are doing. If misconfigured, you can damage your player
            data.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # !! WARNING !!
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            proxy_based_profiles
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # This option MUST be enabled on every Spigot server.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            enabled
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
            # Servers to where players will be sent to when choosing their profile.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # When using this option, make sure you force profile selection.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            #
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # When option 'back_to_initial_server' is toggled on, this becomes
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # the list for temporary servers where players will be teleported
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # to have their UUID switched.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            #
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Leave empty to NOT teleport the player automatically on profile selection.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # This will leave the player the option to choose the server they would
            like
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # to play on. As soon as they switch servers (as long as the connection
            does
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # not fail), the selected profile will be applied.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            target_servers
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
            'play'
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # When enabled, on profile selection, the player will be sent to the target
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # server before being sent back to the server they came from. Use this
            option
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # if you want players to BOTH choose their profile AND play in the same
            server.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            #
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # You need at least two backend servers to run MMOProfiles proxy-based
            profiles.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # The player UUID switch can only happen when switching servers, this
            is why
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # using such a "temporary" server is necessary.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            back_to_initial_server
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            enabled
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            false
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            delay
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            10
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # This ONLY WORKS IF proxy-based profiles are enabled.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            #
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Make sure you toggle on 'synced-data.permissions' otherwise this option
            is useless.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Make sure you have also installed a permission plugin as well as Vault,
            and that
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # your permission plugin supports Vault.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            #
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # This option dictates how permissions are shared between profiles.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Usually, you'll want to share at least admin/rank permissions in case
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # they want to create switch profiles, otherwise these will be lost.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            shared_permissions
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # By default, you need to provide a list of all the permissions that should
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # be shared between all the different profiles (whitelist behaviour).
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # When toggling on this option, it turns into a blacklist, which means
            all
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # permissions are shared by default, EXCEPT for the permissions which
            are
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # present in the following list.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            blacklist_instead
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
            # Whitelist/blacklist of shared permissions.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            list
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
            'mmocore.admin'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'rank.vip'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'rank.vip_plus'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'rank.mvp'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'rank.mvp_plus'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'group.test'
          </span>
        </span>
      </code>
    </pre>
  </div>
</details>
<p>
  We will go over this config file in the following section.
</p>

## Specifications

<p>
  In most proxy configs, you'll have lobby servers, where players connect
  when joining your Minecraft proxy, and "play" servers where players will
  play once they choose their profile.
</p>

### For play servers

<ul>
  <li>
    Make sure to include the ID of the server in the
    <code>
      kick_if_no_profile
    </code>
    list. This way, if a player tries to join this server without selecting
    a profile, they will be kicked from the server and redirected to the lobby.
    <ul>
      <li>
        This should be used on full RPG servers where players are required to
        select a profile before playing.
      </li>
      <li>
        This option should be disabled on lobby servers and enabled on all of
        your play servers (it's up to you).
      </li>
    </ul>
  </li>
</ul>

### For lobby servers

<ul>
  <li>
    Include the ID of the server in the
    <code>
      unselect_profile_on_login
    </code>
    list. This way, players will return to their official UUID every time
    they enter this server. This is great for lobby servers which players should
    join with no profile selected.
  </li>
  <li>
    You may specify your play servers using the config option
    <code>
      target_servers
    </code>
    . These are the servers the players will be teleported to, from the lobby
    server, right after profile selection.
    <ul>
      <li>
        This is also the option you need to use if you want to toggle on
        <code>
          back_to_initial_server
        </code>
        (see below), in which case it will be the list of the temporary servers
        MMOProfiles will be using to perform that in-and-out UUID switch.
      </li>
    </ul>
  </li>
  <li>
    By switching on
    <code>
      back_to_initial_server
    </code>
    , players will stay on the profile selection server.
    <ul>
      <li>
        Proxies need at least one server switch in order to properly switch the
        player's UUID, MMOProfiles will first send the player to such "temporary"
        server, and instantly send them back to the initial server. The UUID switch
        will be performed on the second server switch.
      </li>
      <li>
        If you want your players to only play on one specific server (where they
        can both select their profile AND play), you can use this temporary server
        option to have all the players stay on one specific server. You don't need
        a very performant server backend for such temporary servers, as players
        will only be joining for a few seconds at most.
      </li>
      <li>
        Also, you don't need MMOProfiles installed on these temporary UUID-switch
        servers.
      </li>
    </ul>
  </li>
  <li>
    Be sure to use a different
    <code>
      server-identifier
    </code>
    on lobby servers. You need to set a different identifier name for all
    your servers that do not have the same map.
  </li>
</ul>
<p>
  The spawn point for new profiles is specified using the
  <code>
    new-profile-spawn-point
  </code>
  option. Notice that while this option is to be specified in the MMOProfiles
  config file of the lobby server, this location has to have meaning in the
  play server. It is the location where players with a new profile will be
  teleported to.
</p>

## Supported/Tested Plugins

### Permissions

<p>
  We tested LuckPerms, GroupManager, CorePerms.
</p>

#### <a href="https://gitlab.com/ranetdev/CoreTools/-/wikis/features/coreperms" target="_blank" rel="noreferrer">CorePerms</a><span class="VPBadge tip">recommended</span>

<p>
  CorePerms natively supports MMOProfiles and is the recommended plugin.**
  Without any additional setup, you can add permissions and groups that will
  be active both on the selected profile or across all of the player's profiles.
</p>

#### <a href="https://www.spigotmc.org/resources/luckperms.28140/" target="_blank" rel="noreferrer">LuckPerms</a>

<p>
  Official UUID group permission always apply to all Profile UUID. All profile
  permission ignored when using LuckPerms.
  <strong>
    But this may not work for some plugins. When this happens, you need to
    add the permissions directly to the profile uuid.
  </strong>
</p>
<ul>
  <li>
    <p>
      If you want Official UUID group permissions and Profile UUID permissions
      work same time, you can use the
      <a href="https://github.com/CKATEPTb-minecraft/MMOProfilesExtraPerms"
      target="_blank" rel="noreferrer">
        <code>
          MMOProfilesExtraPerms
        </code>
      </a>
      plugin made by
      <a href="https://github.com/CKATEPTb-minecraft" target="_blank" rel="noreferrer">
        <strong>
          CKATEPTb
        </strong>
      </a>
      .
    </p>
  </li>
  <li>
    <p>
      If you want the permissions added to profiles to take effect immediately,
      you need to use the
      <a href="https://modrinth.com/plugin/mmoprofileperms" target="_blank"
      rel="noreferrer">
        <code>
          MMOProfilePerms
        </code>
      </a>
      . Plugin made by
      <a href="https://github.com/call911nowplz" target="_blank" rel="noreferrer">
        <strong>
          call911nowplz
        </strong>
      </a>
      .
    </p>
  </li>
</ul>
<p>
  <strong>
    Important LuckPerms note:
  </strong>
  Since we changed the UUIDs of the players, LuckyPerms shows very long
  errors in the console, thinking that we pulled the offline player's data
  from the database. To avoid seeing these errors, simply set
  <code>
    vault-unsafe-lookups
  </code>
  to
  <code>
    true
  </code>
  in
  <code>
    config.yml
  </code>
  .
</p>

#### Problematic plugins

<ul>
  <li>
    <strong>
      GroupManager:
    </strong>
    If deleted permission exists in another profile, it is added again when
    the server is restarted.
    <strong>
      We do not recommend using GroupManager
    </strong>
    .
  </li>
</ul>

### Money (Vault)

<p>
  Vault has to be installed in order to support most economy plugins. We
  tested CoreTools, PlayerPoints, Economy and XConomy.
</p>
<div class="warning custom-block">
  <p class="custom-block-title custom-block-title-default">
    WARNING
  </p>
  <p>
    <code>
      synced-data.balance
    </code>
    must be set to
    <code>
      false
    </code>
    if you want all profiles to have only one shared balance, leaving it to
    <code>
      true
    </code>
    will make each profile have its own balance.
  </p>
</div>

#### <a href="https://gitlab.com/ranetdev/CoreTools/-/wikis/features/economy" target="_blank" rel="noreferrer">CoreTools</a><span class="VPBadge tip">recommended</span>

<p>
  CoreTools does not require any special configuration and
  <strong>
    supports MMOProfiles natively
  </strong>
  .
</p>

#### <a href="https://www.spigotmc.org/resources/playerpoints.80745/" target="_blank" rel="noreferrer">PlayerPoints</a>

<ul>
  <li>
    The
    <code>
      Vault
    </code>
    config option must be enabled
  </li>
  <li>
    MySQL must be enabled and all servers must be connected to the same database
  </li>
</ul>

#### <a href="https://www.spigotmc.org/resources/economy.87053/" target="_blank" rel="noreferrer">Economy</a>

<ul>
  <li>
    Set
    <code>
      StartingBalance
    </code>
    to
    <code>
      0
    </code>
  </li>
  <li>
    MySQL must be enabled and all servers must be connected to the same database
  </li>
</ul>

#### <a href="https://www.spigotmc.org/resources/xconomy.75669/" target="_blank" rel="noreferrer">XConomy</a>

<ul>
  <li>
    Only work with
    <code>
      synced-data.balance
    </code>
    set to
    <code>
      true
    </code>
  </li>
  <li>
    Set
    <code>
      UUID-mode
    </code>
    to
    <code>
      SemiOnline
    </code>
  </li>
  <li>
    Set
    <code>
      disable-cache
    </code>
    to
    <code>
      true
    </code>
  </li>
  <li>
    MySQL must be enabled and all servers must be connected to the same MySQL
    database
  </li>
</ul>

### Quest Plugins

<p>
  Below you can see the list of quest plugins that we have tested and confirmed
  to work smoothly. You need to activate MySQL and connect all your servers
  to the same database.
</p>
<ul>
  <li>
    <a href="https://www.spigotmc.org/resources/questcreator-new-sqlite-support-and-data-conversion.38734/"
    target="_blank" rel="noreferrer">
      QuestCreator
    </a>
  </li>
  <li>
    <a href="https://www.spigotmc.org/resources/betonquest-all-your-adventure-supplies-versatile-quests-in-depth-conversations.2117/"
    target="_blank" rel="noreferrer">
      BetonQuest
    </a>
  </li>
  <li>
    <a href="https://www.spigotmc.org/resources/quests.3711/" target="_blank"
    rel="noreferrer">
      Quests
    </a>
  </li>
  <li>
    <a href="https://www.spigotmc.org/resources/beautyquests.39255/" target="_blank"
    rel="noreferrer">
      BeautyQuests
    </a>
  </li>
</ul>

### Storing Items, Backpacks

<p>
  Make sure that all servers are connected to the same MySQL server.
</p>
<ul>
  <li>
    <a href="https://www.spigotmc.org/resources/99445/" target="_blank" rel="noreferrer">
      MMOInventory
    </a>
    <span class="VPBadge tip">
      recommended
    </span>
  </li>
  <li>
    <a href="https://gitlab.com/ranetdev/CoreTools/-/wikis/features/playervaults"
    target="_blank" rel="noreferrer">
      CoreTools PlayerVaults
    </a>
    <span class="VPBadge tip">
      recommended
    </span>
    CoreTools does not require any special configuration and supports
    <strong>
      MMOProfiles natively
    </strong>
    .
  </li>
  <li>
    <a href="https://www.spigotmc.org/resources/minepacks-backpack-plugin-mc-1-7-1-20.19286/"
    target="_blank" rel="noreferrer">
      Minepacks
    </a>
  </li>
  <li>
    <a href="https://www.spigotmc.org/resources/%E2%9C%85-epic-backpacks.28981/"
    target="_blank" rel="noreferrer">
      EPIC BackPacks
    </a>
  </li>
  <li>
    <a href="https://www.spigotmc.org/resources/bank-1-20-sale-20-off.3556/"
    target="_blank" rel="noreferrer">
      Bank
    </a>
  </li>
</ul>

### Skyblock

<ul>
  <li>
    <a href="https://www.spigotmc.org/resources/bentobox-bskyblock-acidisland-skygrid-caveblock-aoneblock-boxed.73261/"
    target="_blank" rel="noreferrer">
      BentoBox
    </a>
    <strong>
      Working properly.
    </strong>
    All profiles have separate islands.
    <a href="https://www.youtube.com/watch?v=N2xzzcDeTyU" target="_blank"
    rel="noreferrer">
      https://www.youtube.com/watch?v=N2xzzcDeTyU
    </a>
  </li>
  <li>
    <a href="https://www.spigotmc.org/resources/iridium-skyblock-1-13-1-20.62480/"
    target="_blank" rel="noreferrer">
      Iridium Skyblock
    </a>
    <strong>
      Working properly.
    </strong>
    All profiles have separate islands.
    <a href="https://www.youtube.com/watch?v=iht7P-ac-rI" target="_blank"
    rel="noreferrer">
      https://www.youtube.com/watch?v=iht7P-ac-rI
    </a>
  </li>
  <li>
    <a href="https://www.spigotmc.org/resources/87411/" target="_blank" rel="noreferrer">
      SuperiorSkyblock2
    </a>
    <strong>
      Not working properly.
    </strong>
    All profiles only see you as a same player.
  </li>
</ul>

### Others

<ul>
  <li>
    <a href="https://www.spigotmc.org/resources/1-13-1-20-races-of-thana%E3%83%BBcustom-gui-attributes-day-night-effects-and-more.59110/"
    target="_blank" rel="noreferrer">
      Races of Thana
    </a>
  </li>
  <li>
    <a href="https://gitlab.com/phoenix-dvpmt/CoreTools/-/wikis/home" target="_blank"
    rel="noreferrer">
      CoreTools
    </a>
    <a href="https://gitlab.com/phoenix-dvpmt/CoreTools/-/wikis/features/playervaults"
    target="_blank" rel="noreferrer">
      PlayerVaults
    </a>
    ,
    <a href="https://gitlab.com/phoenix-dvpmt/CoreTools/-/wikis/features/variables"
    target="_blank" rel="noreferrer">
      Variables
    </a>
    and
    <a href="https://gitlab.com/phoenix-dvpmt/CoreTools/-/wikis/features/auctionhouse"
    target="_blank" rel="noreferrer">
      AuctionHouse
    </a>
    features natively support MMOProfiles.
  </li>
</ul>

## Recommendations

<ul>
  <li>
    Make sure your lobby server is in
    <code>
      unselect_profile_on_login
    </code>
    . In this way, players return to the official UUID every time they enter
    this server. The permissions or money you add while the player is not online
    will be updated when the player is online.
    <ul>
      <li>
        If you want players to select profiles on the lobby server but turn off
        teleporting automatically, simply set
        <code>
          target_servers: []
        </code>
      </li>
      <li>
        If you want to not show the character selection in your lobby server,
        you can activate
        <code>
          no-gui-on-login
        </code>
      </li>
      <li>
        Since the player official UUID has returned, sharing the money and permissions
        you sell in in-game stores with other profiles will be seamless.
      </li>
      <li>
        SharedPermissions you added to any profile is not official UUID will be
        lost. Always add SharedPermissions to official UUID only.
      </li>
      <li>
        When the player is not online, the vault money you add outside of the
        official UUID will not be shared with other profiles until the profile
        is selected.
      </li>
    </ul>
  </li>
</ul>

## Usage examples

<p>
  <strong>
    A)
  </strong>
  Multifunctional Lobby. With this installation, there is no need for an
  extra server. The server undertakes both the lobby and Profile selection
  work. In this setup, as in every lobby, it is the server owner's responsibility
  to set up the player teleportation system.
</p>
<p>
  <strong>
    Lobby:
  </strong>
</p>
<ul>
  <li>
    Set target servers to
    <code>
      target_servers: []
    </code>
    (Cancels the player from auto-teleporting after profile select)
  </li>
  <li>
    Include lobby server ID in
    <code>
      unselect_profile_on_login
    </code>
    (It forces the player to use real UUID every time they enter this server.)
  </li>
</ul>
<p>
  <strong>
    All other servers:
  </strong>
</p>
<ul>
  <li>
    Include this server ID in
    <code>
      kick_if_no_profile
    </code>
    (If the player is teleported to this server without selecting a profile
    due to an error, it will not allow entry.)
  </li>
  <li>
    Do not include server ID in
    <code>
      unselect_profile_on_login
    </code>
    .
  </li>
  <li>
    Set target servers to your lobby in all other servers.
    <img src="/assets/proxy_setup_a1.CGuA2qdl.png" alt="mmoprofile_proxy_setup-04">
  </li>
</ul>
<p>
  <strong>
    B)
  </strong>
  Force profile all or selected servers.
  <code>
    back_to_initial_server
  </code>
  set to
  <code>
    true
  </code>
  for every profile except lobby.
</p>
<ul>
  <li>
    <code>
      No need to install MMOProfiles on Profile Select Server.
    </code>
  </li>
  <li>
    To control Vault money and SharedPermissions in profiles, it is recommended
    to install MMOProfiles in the lobby and turn off forced profile selection.
    <code>
      no-gui-on-login
    </code>
    to
    <code>
      true
    </code>
  </li>
</ul>
<p>
  <img src="/assets/proxy_setup_b1.DmXj1bFv.png" alt="mmoprofile_proxy_setup-01">
</p>
<p>
  <strong>
    C)
  </strong>
  Forcing a profile on a particular server with profile selection before
  join.
</p>
<ul>
  <li>
    <code>
      back_to_initial_server
    </code>
    set to
    <code>
      true
    </code>
    for every RPG servers.
  </li>
  <li>
    No need to install MMOProfiles on other servers.
  </li>
  <li>
    To control Vault money and SharedPermissions in profiles, it is recommended
    to install MMOProfiles in the lobby and turn off forced profile selection.
    <code>
      no-gui-on-login
    </code>
    to
    <code>
      true
    </code>
  </li>
</ul>
<p>
  <img src="/assets/proxy_setup_c1.D7Os-NzP.png" alt="mmoprofile_proxy_setup-02">
</p>
<p>
  <strong>
    D)
  </strong>
  Forcing a profile on the whole network when player enter the server.
</p>
<ul>
  <li>
    Include server ID in
    <code>
      kick_if_no_profile
    </code>
    to make sure players always have a profile.
  </li>
  <li>
    It is mandatory to install MMOProfiles on all servers.
  </li>
</ul>
<p>
  <img src="/assets/proxy_setup_d1.F8m7MQ2T.png" alt="mmoprofile_proxy_setup-03">
</p>
