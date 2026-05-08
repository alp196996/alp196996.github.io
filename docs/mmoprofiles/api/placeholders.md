# 🏷️ Adding Placeholders

<p>
  Plugins like MMOCore implement custom profile placeholders like profile
  class, level and experience. Such placeholders depend on the player profile,
  so a little bit of extra work is required compared to regular PAPI placeholders.
</p>
<p>
  <img src="/assets/placeholders.Ju2RzU_3.png" alt="image">
</p>

## Implement <code>PlaceholderProcessor</code>

<p>
  The
  <code>
    PlaceholderProcessor
  </code>
  interface has two methods:
</p>
<ul>
  <li>
    <code>
      #getDataModule()
    </code>
    which should return your profile data module.
  </li>
  <li>
    <code>
      #processPlaceholderRequest(PlaceholderRequest)
    </code>
    which is the most important method of the interface. This should asynchronously
    fetch profile data, extract information from it and register its placeholders,
    and eventually call the
    <code>
      #validate()
    </code>
    method on the
    <code>
      PlaceholderRequest
    </code>
    instance.
  </li>
</ul>
<p>
  For example, here is the MMOCore implementation of the
  <code>
    #processPlaceholderRequest
  </code>
  method.
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
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          void
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          processPlaceholderRequest
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (PlaceholderRequest placeholderRequest) {
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          final
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          PlayerData fictiveData
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          new
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          PlayerData
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          new
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          MMOPlayerData
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (placeholderRequest.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getProfile
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ().
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getUniqueId
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ()));
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          MMOCore.plugin.playerDataManager.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          loadData
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (fictiveData).
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          thenRun
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (()
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          -&gt;
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          {
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          placeholderRequest.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          addPlaceholder
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "class"
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          , fictiveData.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getProfess
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ().
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getName
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ());
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          placeholderRequest.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          addPlaceholder
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "level"
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          , fictiveData.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getLevel
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ());
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          placeholderRequest.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          addPlaceholder
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "exp"
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          , MythicLib.plugin.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getMMOConfig
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ().decimal.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          format
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (fictiveData.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getExperience
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ()));
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          placeholderRequest.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          addPlaceholder
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          "exp_next_level"
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          , MythicLib.plugin.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getMMOConfig
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ().decimal.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          format
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (fictiveData.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getLevelUpExperience
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ()));
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          // Skipping some of the placeholders.....
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          placeholderRequest.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          validate
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ();
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          });
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
  Here is how your
  <code>
    #processPlaceholderRequest
  </code>
  should look like:
</p>
<ul>
  <li>
    Use
    <code>
      phRequest.getProfile().getUniqueId()
    </code>
    to access the UUID of the profile,
  </li>
  <li>
    Load your profile data asynchronously (using async Bukkit tasks!),
  </li>
  <li>
    Once data is loaded, register as many placeholders as needed using
    <code>
      phRequest.addPlaceholder(String, String)
    </code>
    . The first argument should be the placeholder key, like
    <code>
      class
    </code>
    or
    <code>
      level
    </code>
    , the second argument should be the placeholder string value. If your
    profile data module identifier is
    <code>
      mmocore
    </code>
    , and the placeholder key is
    <code>
      class
    </code>
    then the final placeholder would be
    <code>
      mmocore_class
    </code>
    ,
  </li>
  <li>
    Inform MMOProfiles you are done registering placeholders using
    <code>
      phRequest.validate()
    </code>
    .
  </li>
</ul>

## Register your instance of <code>PlaceholderProcessor</code>

<p>
  Use the following method to register your placeholder processor, this
  must be done when registering your profile data module.
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
          PlaceholderProcessor yourPlaceholderProcessor
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
          registerPlaceholders
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (yourPlaceholderProcessor);
        </span>
      </span>
    </code>
  </pre>
</div>
