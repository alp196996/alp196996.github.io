# 📦 Custom Data Modules

<p>
  A profile data module corresponds to a plugin that owns profile-dependant
  data. All MMO plugins have their own profile data module. When a player
  selects a profile, MMOProfiles asks to all profile data modules to load
  the profile data of the selected player profile, for the given player.
  MMOProfiles does not let the user play (nor quit the profile selection
  area) before ALL profile data modules have successfully loaded their profile-dependant
  data.
</p>
<p>
  If you have a plugin that owns profile-dependant data (quest progress,
  custom inventories, player leveling, professions, etc...) you will have
  to implement your own
  <code>
    ProfileDataModule
  </code>
  and register it in MMOProfiles.
</p>

## Implement <code>ProfileDataModule</code>

<p>
  The
  <code>
    ProfileDataModule
  </code>
  interface has two methods:
</p>
<ul>
  <li>
    <code>
      #getOwningPlugin()
    </code>
    which should return the main instance of your plugin
  </li>
  <li>
    <code>
      #getId()
    </code>
    which should return a unique name-spaced key. It will be used by MMOProfiles
    to parse profile placeholders (see below).
  </li>
</ul>

### Events to listen to

<p>
  MMOProfiles expects EVERY profile data module to listen to the following
  events. You will find more information about these events in the
  <a href="./events">
    following Wiki page
  </a>
  .
</p>
<ul>
  <li>
    <code>
      ProfileSelectEvent
    </code>
    called when a player selects a profile.
  </li>
  <li>
    <code>
      ProfileUnloadEvent
    </code>
    called when a player unselects a profile.
  </li>
  <li>
    <code>
      ProfileCreateEvent
    </code>
    called when a player creates a new profile.
  </li>
  <li>
    <code>
      ProfileRemoveEvent
    </code>
    called when a player deletes a profile.
  </li>
</ul>
<p>
  These events have a method called
  <code>
    #validate(ProfileDataModule)
  </code>
  which needs to be called (passing your profile data module instance as
  argument) when your plugin is done loading/unloading profile-specific data.
</p>
<div class="tip custom-block">
  <p class="custom-block-title custom-block-title-default">
    TIP
  </p>
  <p>
    A reference implementation of the
    <code>
      ProfileDataModule
    </code>
    interface can be found in MythicLib, in the
    <code>
      DefaultProfileDataModule
    </code>
    class.
  </p>
</div>
<p>
  The following code snippet provides a pseudo-code for what is supposed
  to happen on
  <code>
    ProfileSelectEvent
  </code>
  and
  <code>
    ProfileUnloadEvent
  </code>
  . When a profile is selected, profile data is loaded asynchronously, and
  the
  <code>
    #validate
  </code>
  method is called afterwards. MMOProfiles only lets the player join the
  server when all registered profile data modules have called this method.
  When a profile is unselected, profile data is unloaded and saved asynchronously,
  after which the
  <code>
    #validate
  </code>
  method is called.
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
          Plugin myPlugin;
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ProfileDataModule dataModule;
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          // MMOProfiles API
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          PlayerDataManager manager;
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          // MMO plugin API
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          @
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          EventHandler
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          public
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          void
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          onProfileSelection
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (ProfileSelectEvent event) {
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          PlayerData playerData
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          manager.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          get
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (event.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getPlayer
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ());
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          manager.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          loadData
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (playerData).
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          thenAccept
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (Tasks.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          sync
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (plugin, v
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          -&gt;
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          {
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          // ...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          event.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          validate
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (dataModule);
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          }));
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
          EventHandler
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          public
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          void
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          onProfileUnload
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (ProfileUnloadEvent event) {
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          manager.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          unregister
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (event.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getPlayer
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ()).
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          thenAccept
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (Tasks.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          sync
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (plugin, v
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          -&gt;
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          {
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          // ...
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          event.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          validate
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (dataModule);
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          }));
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

### Why and when to validate player sessions

<p>
  When the player joins the server and selects a profile, MMOProfiles waits
  until all plugins have loaded their player data before teleporting the
  player. In the mean time, they are usually left in a "profile selection
  black box" in order to avoid unwanted interactions during inconsistent
  player data states.
</p>
<p>
  You don't actually need to call the
  <code>
    #validate
  </code>
  method right away. In fact, you are encouraged to defer calling it until
  the player data has been loaded from the database.
</p>
<div class="warning custom-block">
  <p class="custom-block-title custom-block-title-default">
    WARNING
  </p>
  <p>
    The
    <code>
      #validate
    </code>
    method must be called from the main server thread, or it will raise an
    exception.
  </p>
</div>
<p>
  Failure to call the
  <code>
    #validate
  </code>
  (due to a previously unhandled exception, for instance) will result in
  the player's session freezing, and the player being stuck in the profile
  selection limbo. After a few seconds of session inactivity, MythicLib will
  start raising "ghost session" warnings in the console.
</p>

## Register your instance of <code>ProfileDataModule</code>

<p>
  Use the following method in the
  <code>
    #onEnable
  </code>
  of your plugin to register your instance of
  <code>
    ProfileDataModule
  </code>
  . If your module is an instance of
  <code>
    Listener
  </code>
  , MMOProfiles will register its events for you.
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
          ProfileProvider provider
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          /* profile provider */
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ;
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ProfileDataModule yourProfileDataModule
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
          provider.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          registerModule
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (yourProfileDataModule);
        </span>
      </span>
    </code>
  </pre>
</div>
