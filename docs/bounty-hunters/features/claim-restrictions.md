# 🛑 Bounty Restrictions

<p>A common problem with bounty systems is players abusing bounties on friends or alts in order to farm stats or rewards. BountyHunters provides several ways to restrict how players can create and claim bounties in order to prevent such abuses.</p>

<details class="details custom-block">
  <summary>
    Config Options
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
            # Setting any parameter to 'true' means a new restriction applies.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Make sure you restart your server when changing one of these options.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            claim-restrictions
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Players may not claim their own bounties.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Disabled by default due to the bounty claim tax. If players
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # claim their own bounties, they will lose tax money.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            own-bounties
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
            # Players cannot claim bounties on players who
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # have close bed spawn points (most likely friends).
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            bed-spawn-point
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
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Blocks threshold
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
            100
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Players may not claim bounties if they are in the same team.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            scoreboard-teams
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
            # Players may ONLY claim bounties if
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # they are tracking the bounty target.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            targets-only
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
            # Compatibility with PartyAndFriends and BungeeFriends
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Players may not kill their friends to claim bounties.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            friends
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
            # Compatibility with Towny
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Players may not kill members of the same town to claim bounties.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            town-members
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
            # Compatibility with Lands
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # A player cannot interact with a target bounty
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # if the player's land trusts the target
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            lands
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
            # Compatibility with SimpleClans
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            simple-clans
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
            # Compatibility with UltimateClans
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            ultimate-clans
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
            # Compatibility with FactionsUUID/SaberFactions etc.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            factions
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
            # Compatibility with Guilds
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            guilds
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
            # Compatibility with KingdomsX
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            kingdoms
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
</details>

<p>For instance, you can prevent players from claiming bounties on their friends, guild members, faction members... All supported plugins are listed in the config file above.</p>
<p>You can also prevent players from claiming their own bounties, which may be useful if you disable the bounty claim/creation tax.</p>
<p>BountyHunters can also detect if players have their bed spawn point close to the bounty target player's bed spawn point. If so, they won't be able to claim the bounty. You can configure the detection radius in blocks.</p>
