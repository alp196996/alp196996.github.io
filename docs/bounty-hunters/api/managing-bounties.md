# 📜 Bounties

<p>You may use the <code>BountyManager</code> class to register/unregister bounties or to simply check existing bounties. You can access the class instance using the following code snipet:</p>

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
          BountyManager manager
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          BountyHunters.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getInstance
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ().
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getBountyManager
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ();
        </span>
      </span>
    </code>
  </pre>
</div>

## Creating & registering a bounty

<p>To create a bounty, you have to use the <code>Bounty</code> constructor.</p>

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
          Bounty bounty
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          =
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          new
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          Bounty
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (creator, target, reward);
        </span>
      </span>
    </code>
  </pre>
</div>

<ul>
  <li>
    creator - OfflinePlayer
  </li>
  <li>
    target - OfflinePlayer
  </li>
  <li>
    reward - Double
  </li>
</ul>

<p>To register the bounty, <code>bountyManager.registerBounty(bounty)</code>, which calls the <code>BountyCreateEvent</code> event. To unregister a bounty, you need to use <code>bountyManager.unregisterBounty(bounty)</code>. The <code>Bounty</code> class no longer has any register or unregister methods to reduce confusion and potential data glitches.</p>

<p>These methods both reset the bounty hunters. That means players hunting the bounty target will stop their hunt.</p>

## Getting the list of active bounties

<p>Use <code>bountyManager.getBounties()</code> to get a collection of all active bounties, sorted in order of creation.</p>

## Getting a bounty

<p>You can use <code>bountyManager.getBounty(OfflinePlayer)</code> to get the bounty on a player.</p>
<p>You will first have to check if there is any bounty on the player using <code>bountyManager.hasBounty(OfflinePlayer)</code> as the <code>getBounty(OfflinePlayer)</code> method will throw a NPE error if the player does not have any bounty on them.</p>
