# 👯 Parties

<p>
  Parties are an essential part of any RPG server. They usually provide
  teleportation perks or buffs to members within the same party.
</p>
<p>
  While MMOCore does provide a decent built-in party system, it is fully
  compatible with the following plugins:
</p>
<ul>
  <li>
    <a href="https://mythiccraft.io/index.php?resources/mythic-dungeons.869/"
    target="_blank" rel="noreferrer">
      MythicDungeons
    </a>
    <span class="VPBadge info">
      recommended
    </span>
  </li>
  <li>
    <a href="https://www.spigotmc.org/resources/official-mcmmo-original-author-returns.64348/"
    target="_blank" rel="noreferrer">
      mcMMO
    </a>
  </li>
  <li>
    <a href="https://www.spigotmc.org/resources/parties-an-advanced-parties-manager.3709/"
    target="_blank" rel="noreferrer">
      Parties
    </a>
    <span class="VPBadge info">
      recommended
    </span>
  </li>
  <li>
    PartyAndFriends (
    <a href="https://www.spigotmc.org/resources/party-and-friends-extended-for-spigot-supports-1-7-1-19.11633/"
    target="_blank" rel="noreferrer">
      Spigot
    </a>
    &amp;
    <a href="https://www.spigotmc.org/resources/party-and-friends-for-bungeecord-supports-1-7-x-to-1-19-x.9531/"
    target="_blank" rel="noreferrer">
      Proxy
    </a>
    )
  </li>
  <li>
    <a href="https://www.spigotmc.org/resources/dungeonsxl.9488/" target="_blank"
    rel="noreferrer">
      DungeonsXL
    </a>
  </li>
  <li>
    <a href="https://www.spigotmc.org/resources/%E2%9A%94-heroes-premium-%E2%9A%94-best-minecraft-spigot-rpg-plugin-ever.24734/"
    target="_blank" rel="noreferrer">
      Heroes
    </a>
  </li>
  <li>
    <a href="https://www.spigotmc.org/resources/obteam.108269/" target="_blank"
    rel="noreferrer">
      OBTeam
    </a>
    (
    <a href="https://www.spigotmc.org/resources/%E2%AD%90-dungeonmmo-%E2%AD%90-dungeon-world-generator-%E2%9C%85-create-your-dungeons-%E2%AD%95-endless-possibilities.106150/"
    target="_blank" rel="noreferrer">
      DungeonMMO
    </a>
    )
  </li>
</ul>

## Choosing your party plugin

<p>
  Go to
  <code>
    MMOCore/config.yml
  </code>
  and set
  <code>
    party-plugin
  </code>
  to whatever plugin you want to use. Make sure you restart your server
  when editing this option.
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
          # Choose the plugin handling parties here.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Supported values (just copy and paste):
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - MMOCORE (Default built-in party system)
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - NONE (Used to fully disable parties)
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - DUNGEONSXL
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - HEROES
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - MCMMO
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - MYTHICDUNGEONS (Make sure `PartyPlugin` is set to `Default` in MythicDungeons)
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - MYTHICDUNGEONS_INJECT (Make sure `PartyPlugin` is set to `MMOCore`
          in MythicDungeons)
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - OBTEAM (Addon for DungeonMMO)
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - PARTY_AND_FRIENDS (When using Party and Friends (Extended) for Spigot)
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - PARTY_AND_FRIENDS_BUNGEECORD_VELOCITY ([When using Party and Friends
          (Extended) Edition for BungeeCord/Velocity. Requires https://www.spigotmc.org/resources/spigot-party-api-for-party-and-friends.39751/
          to be installed])
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - PARTIES
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          party-plugin
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          MMOCORE
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  Using any party plugin that is not MMOCore will disable all party features
  from MMOCore (mostly the
  <code>
    /party
  </code>
  command).
</p>

#### MythicDungeons

<p>
  You can either inject the MythicDungeons party system into MMOCore using
  <code>
    MYTHICDUNGEONS
  </code>
  , or inject the MMOCore party system into MythicDungeons using
  <code>
    MYTHICDUNGEONS_INJECT
  </code>
  .
</p>

## MMOCore Quests

<p>
  MMOCore features a basic built-in party system where you and up to 7 friends
  can party up for extra boosts and perks!
</p>
<div class="info custom-block">
  <p class="custom-block-title custom-block-title-default">
    INFO
  </p>
  <p>
    The following wiki sections describe the built-in MMOCore party module.
  </p>
</div>
<p>
  To begin, enter the
  <code>
    /party
  </code>
  command. If you are not already in a party, it will ask you if you want
  to create one.
</p>
<p>
  After that, you will be shown the main party GUI, where you can see current
  party members and invite new people. By default, parties give a slight
  regeneration and experience boost. The more players in your party, the
  higher the buff (see below).
</p>
<p>
  <img src="/assets/party_ui.HXPtgxen.png" alt="7Vx1Ld2">
</p>

## Party Chat

<p>
  Players can talk via party chat using
  <code>
    @
  </code>
  at the beginning of their message. This chat prefix can be edited in the
  main MMOCore config file (
  <code>
    party.chat-prefix
  </code>
  ):
</p>
<p>
  <img src="/assets/party_chat.GJ2XiZcZ.png" alt="3zFCOei">
</p>

## Party Buffs

<p>
  Party buffs are extra statistics that everyone in a party will get as
  long, as they are more than 2 members in the party. A party with one solo
  player will not get any buffs. The buffs increase proportionally to the
  number of players in the party. For example, a party of 4 players will
  get 3 times the buff amount configured (as the first player does not count
  towards buffs).
</p>
<p>
  These buffs are configurable in the main MMOCore
  <code>
    config.yml
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
          party
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Edit party buffs here. You may
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # add as many stats as you want.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          buff
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          health-regeneration
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
          additional-experience
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          5
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Prefix you need to put in the chat
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # to talk in the party chat.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          chat-prefix
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '@'
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  These buffs are displayed on a cake icon when opening the player stats
  menu, that you can configure under the
  <code>
    /gui/player-stats.yml
  </code>
  config file:
</p>
<p>
  <img src="/assets/party_morale.BinBfJgm.png" alt="CX0lIKA">
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
          party
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          slots
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          : [
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          16
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ]
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          function
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          party
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
          CAKE
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
          '&amp;aParty Morale'
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
          '&amp;7&amp;oPlaying with your friends'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '&amp;7&amp;ogreatly encourages you!'
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
          '&amp;7Party Bonuses ({count}):'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '&amp;8- +{buff_additional_experience}% Experience Earned!'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '&amp;8- +{buff_health_regeneration}% Health Regeneration'
        </span>
      </span>
    </code>
  </pre>
</div>

## Exp splitting

<p>
  Since MMOCore 1.9.3, the experience earned by any player is evenly split
  over all the party members. If your party has a total of 4 members you
  will only earn 25% of the exp you'd get with no party. This makes sure
  all the party members level up at the same time.
</p>
<p>
  This feature creates an issue where low level players can join the party
  of high level players and get huge amounts of exp. This can be fixed by
  using the
  <code>
    max-level-difference
  </code>
  in the MMOCore main config file. For instance, setting this option to
  5 will prevent level-1's from joining parties of level-7's or more. The
  level of the party is determined by the initial party owner's level.
</p>
<p>
  That feature stays operational even if you are using another party plugin.
  It also supports profession experience.
</p>

## Using other party plugins

<p>
  Just go in your main MMOCore config file and change this option to whatever
  plugin you have installed:
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
          # Edit the plugin handling parties here.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Supported values (just copy and paste):
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - mmocore
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - dungeonsxl
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - parties
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - party_and_friends (Use this one if you are using Party and Friends
          Extended for Spigot)
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - party_and_friends_bungeecord_velocity (Use this one if you are using
          Party and Friends For Bungeecord, Party and Friends For Velocity or Party
          and Friends Extended Edition for Bungeecord/Velocity. This one requires
          https://www.spigotmc.org/resources/spigot-party-api-for-party-and-friends.39751/
          to be installed)
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - mcmmo
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - obteam (addon for DungeonMMO)
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - mythicdungeons (only when using default party handler)
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          party-plugin
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          mmocore
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  The exp splitting mechanism will work exactly in the same way as described
  above for all the plugins listed. The party buff system works for all of
  them except party-and-friends(PAF).
</p>
