# 👨‍🚀 Player Data

## Obtaining player data

<p>Since 2.3, player data is now mapped inside a <code>PlayerDataManager</code> instance that you can access using <code>BountyHunters.getInstance().getPlayerDataManager()</code>. Using the right method you can retrieve the corresponding <code>PlayerData</code> instance.</p>

## Methods

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Getter
      </th>
      <th>
        Setter
      </th>
      <th>
        Description
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>
          getLevel()
        </code>
      </td>
      <td>
        <code>
          setLevel(int)
        </code>
      </td>
      <td>
        The hunter's [[level
      </td>
    </tr>
    <tr>
      <td>
        <code>
          getClaimedBounties()
        </code>
      </td>
      <td>
        <code>
          setClaimed..(int)
        </code>
      </td>
      <td>
        How many bounties the player claimed.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          getSuccessfulBounties()
        </code>
      </td>
      <td>
        <code>
          setSuccessful(int)
        </code>
      </td>
      <td>
        How many successful bounties the player created.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          getTitle()
        </code>
      </td>
      <td>
        <code>
          setTitle(Title)
        </code>
      </td>
      <td>
        The player's [[current title
      </td>
    </tr>
    <tr>
      <td>
        <code>
          getAnimation()
        </code>
      </td>
      <td>
        <code>
          setAnimation(Quote)
        </code>
      </td>
      <td>
        The player's current [[bounty animation
      </td>
    </tr>
    <tr>
      <td>
        <code>
          getIllegalKills()
        </code>
      </td>
      <td>
        <code>
          setIllegalKills(int)
        </code>
      </td>
      <td>
        Amount of illegal kills he performed.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          getIllegalKillStreak()
        </code>
      </td>
      <td>
        <code>
          setIllegalKillStreak(int)
        </code>
      </td>
      <td>
        Amount of illegal kills made since last respawn.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          getRedeemableHeads()
        </code>
      </td>
      <td>
        <code>
          add/remove...(UUID)
        </code>
      </td>
      <td>
        UUIDs of players whose heads the player may redeem.
      </td>
    </tr>
  </tbody>
</table>

<p>You can also access the player profile item using <code>data.getProfileItem()</code> (be careful, that skull item does <strong>NOT</strong> have any skull texture), the level progress bar using <code>data.getProgressBar()</code> and the number of bounties needed to level up using <code>data.getBountiesNeededToLevelUp()</code>.</p>

### Extra

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Method
      </th>
      <th>
        Usage
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>
          addLevels(int)
        </code>
      </td>
      <td>
        Give extra levels to the player with no level up message
      </td>
    </tr>
    <tr>
      <td>
        <code>
          addClaimedBounties(int)
        </code>
      </td>
      <td>
        Give extra claimed bounties
      </td>
    </tr>
    <tr>
      <td>
        <code>
          addSuccessfulBounties(int)
        </code>
      </td>
      <td>
        Increases count of bounties created by the player, and claimed by others.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          addIllegalKills(int)
        </code>
      </td>
      <td>
        Add kills to the illegal kill streak &amp; total counter
      </td>
    </tr>
    <tr>
      <td>
        <code>
          hasUnlocked(LevelUpItem)
        </code>
      </td>
      <td>
        Checks if a player has unlocked an item
      </td>
    </tr>
  </tbody>
</table>

## Player Hunting

<p>Learn about player hunting on this <a href="./../features/player-hunting">wiki page</a>.</p>

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Method
      </th>
      <th>
        Usage
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>
          setHunting(Bounty)
        </code>
      </td>
      <td>
        Forces the player to hunt a player
      </td>
    </tr>
    <tr>
      <td>
        <code>
          isHunting()
        </code>
      </td>
      <td>
        True if the player is on a hunt
      </td>
    </tr>
    <tr>
      <td>
        <code>
          stopHunting()
        </code>
      </td>
      <td>
        Quits player hunting
      </td>
    </tr>
  </tbody>
</table>

## Manipulating the player level

<p>Keep in mind the <code>PlayerData</code> instance does <strong>NOT</strong> store what items (quotes/titles) the player unlocked. These are recalculated every time the player is prompted the item list. You may check if a player has unlocked an item using <code>hasUnlocked(LevelUpItem)</code> where <code>LevelUpItem</code> is an abstract class which <code>Quote</code> and <code>Title</code> both extend.</p>

## Plugin Inventories

<p>The following code can be used to open the bounty list to a player.</p>

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
          BountyHunters.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getInstance
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ().
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getPlayerDataManager
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ().
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          getPlayerData
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (
        </span>
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          /* player UUID */
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          );
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          PlayerGUI.BOUNTY_LIST.
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          build
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          (playerData).
        </span>
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          open
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ();
        </span>
      </span>
    </code>
  </pre>
</div>

<p>Available GUIs are <code>BOUNTY_LIST</code>, <code>HUNTER_LEADERBOARD</code> and <code>REDEEMABLE_HEADS</code>.</p>
