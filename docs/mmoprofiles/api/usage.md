# 🪣 API Usage

<p>
  The main API class is
  <code>
    ProfileProvider
  </code>
  . You can access the MMOProfiles implementation of this interface using
  Bukkit's service provider.
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
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          Bukkit.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getServicesManager
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ().
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getRegistration
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (ProfileProvider.class).
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getProvider
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ();
        </span>
      </span>
    </code>
  </pre>
</div>
<p>
  This service is provided by MMOProfiles when the plugin enables. If you
  want to access this service from inside your plugin's
  <code>
    onEnable
  </code>
  , you need to declare MMOProfiles as a soft (or hard) dependency in your
  plugin
  <code>
    plugin.yml
  </code>
  .
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
          softdepend
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          : [
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          ...
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ,
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          MMOProfiles
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ]
        </span>
      </span>
    </code>
  </pre>
</div>

## Check if Proxy-mode profiles is on

<p>
  The following code snippet can be used to check if MMOProfiles is currently
  running proxy-mode profiles.
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
          // possible values: PROXY, LEGACY, NONE
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          // are proxy-mode profiles enabled?
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          boolean
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          proxyMode
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          MythicLib.plugin.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getProfileMode
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ()
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          ==
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ProfileMode.PROXY;
        </span>
      </span>
    </code>
  </pre>
</div>
