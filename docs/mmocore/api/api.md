# 🔧 Plugin API

## Player data

<p>
  Player data is stored inside
  <code>
    PlayerData
  </code>
  instances which can be manipulated and accessed using the static
  <code>
    get
  </code>
  methods from that class:
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
          PlayerData playerData
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          PlayerData.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          get
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          /* player UUID or Player instance */
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          );
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          playerData.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          setLevel
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          10
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          );
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          // Sets player level to 10
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          playerData.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          giveExperience
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          500
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          );
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          // Gives 500 experience to the player
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  You can modify the player class, level, party, skill data, quest data
  and anything else. Player data is loaded sync when the player joins, on
  event priority NORMAL.
</p>

## Adding extra quest conditions/triggers/drop table items/conditions

<p>
  In order to improve compatibility with other drop table or quest plugins,
  you may need to register extra options like drop table items, conditions,
  or quest conditions/triggers.
</p>
<p>
  Loading these options are made using instances of
  <code>
    MMOLoader
  </code>
  . The more loaders MMOCore has, the more of these options it can recognize
  (just like skill mecanics or drop table items in MythicMobs). First, you
  need to setup your
  <code>
    MMOLoader
  </code>
  so it loads any extra option. For example, here is the default
  <code>
    MMOLoader
  </code>
  :
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
          @
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          Override
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          public
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          Trigger
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          loadTrigger
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (MMOLineConfig config) {
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          if
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (config.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getKey
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ().
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          equals
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "message"
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ))
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          return
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          new
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          MessageTrigger
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (config);
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          if
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (config.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getKey
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ().
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          equals
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "sound"
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ))
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          return
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          new
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          SoundTrigger
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (config);
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          if
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (config.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getKey
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ().
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          equals
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "command"
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ))
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          return
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          new
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          CommandTrigger
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (config);
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          if
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (config.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getKey
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ().
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          equals
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "item"
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ))
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          return
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          new
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          ItemTrigger
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (config);
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          if
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (config.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getKey
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ().
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          equals
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "exp"
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ))
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          return
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          new
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          ExperienceTrigger
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (config);
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          return
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          null
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ;
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          }
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          @
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          Override
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          public
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          DropItem
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          loadDropItem
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (MMOLineConfig config, DropTableManager tables) {
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          if
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (config.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getKey
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ().
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          equals
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "droptable"
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ))
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          return
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          new
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          DropTableDropItem
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (tables, config);
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          if
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (config.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getKey
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ().
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          equals
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "vanilla"
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ))
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          return
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          new
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          VanillaDropItem
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (config);
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          if
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (config.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getKey
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ().
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          equals
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "note"
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ))
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          return
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          new
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          NoteDropItem
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (config);
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          if
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (config.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getKey
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ().
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          equals
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "gold"
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ))
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          return
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          new
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          GoldDropItem
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (config);
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          return
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          null
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ;
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          }
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          @
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          Override
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          public
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          Objective
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          loadObjective
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (MMOLineConfig config, ConfigurationSection section) {
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          if
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (config.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getKey
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ().
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          equals
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "goto"
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ))
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          return
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          new
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          GoToObjective
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (section, config);
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          if
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (config.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getKey
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ().
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          equals
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "mine"
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ))
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          return
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          new
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          MineBlockObjective
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (section, config);
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          if
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (config.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getKey
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ().
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          equals
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "kill"
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ))
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          return
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          new
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          KillMobObjective
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (section, config);
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          if
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (config.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getKey
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ().
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          equals
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "getitem"
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ))
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          return
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          new
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          GetItemObjective
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (section, config);
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          if
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (config.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getKey
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ().
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          equals
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "clickon"
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ))
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          return
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          new
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          ClickonObjective
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (section, config);
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          return
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          null
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ;
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          }
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          @
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          Override
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          public
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          Condition
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          loadCondition
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (MMOLineConfig config) {
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          // TODO Auto-generated method stub
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          return
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          null
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ;
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          }
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  As you can see, you must override one method from the MMOLoader superclass
  for each option type (trigger/condition/drop item...).
  <code>
    config
  </code>
  returns an object which lets you get info about line configs like
  <code>
    vanilla{type=DIAMOND} 0.5 1-3
  </code>
  (similar to MythicMobs API).
</p>
<p>
  Once your MMOLoader is setup, you must register it in MMOCore using
  <code>
    MMOCore.plugin.loadManager.registerLoader(yourMMOLoader)
  </code>
  . Make sure you register it before
  <strong>
    MMOCore is enabled
  </strong>
  . Either make your plugin load before MMOCore and register it when it
  enables, or don't risk any loading order issue and register it when your
  plugin is
  <strong>
    loading
  </strong>
  after MMOCore has been loaded.
</p>
<div class="info custom-block">
  <p class="custom-block-title custom-block-title-default">
    INFO
  </p>
  <p>
    In the future, drop tables and items will be moved to MythicLib in order
    to unify MMOItems and MMOCore drop tables. Quest triggers/conditions from
    MMOCore will be merged into the MythicLib scripting system as well.
  </p>
</div>
