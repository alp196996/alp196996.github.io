# 📜 Bounties

## Creating a bounty

<p>Any player with the permission <code>bountyhunters.add</code> can use the /bounty command to set a bounty onto someone's head. The sender has to specify the target name: <code>/addbounty &lt;target&gt; &lt;reward&gt;</code>.</p>
<p>You can also do the exact same command even if the player already has a bounty on him, it will just increase the bounty by a certain amount and display a message in the chat again. This can be used by players to get someone else killed faster by other bounty hunters.</p>
<p>If you have the <code>bountyhunters.immunity</code> permission node, players who do not have the <code>bountyhunters.immunity.bypass</code> perm node will not be able to set a bounty on you. This feature may be used by admins to prevent other players from setting bounties onto them.</p>
<p>The bounty list can be accessed using <code>/bounties</code>.</p>
<p><img src="/assets/menu_0.NlMeIaxF.png" alt=""></p>

## Bounty List UI

<p>By hovering the different player heads in the GUI, you can see information about all the current bounties. You can see what the current reward is, how many players are currently tracking the bounty target. You can also determine by reading the first line, the creator of the bounty, if the bounty was created by a player or if the bounty was generated automatically due to an illegal kill.</p>
<p><img src="/assets/menu_1.a2AzJVFU.png" alt=""></p>
<p>This menu will also display some of your statistics, like your level, claimed/successful bounties, level progress, etc. You can see these stats by hovering the player head on the bottom left corner of the GUI. All the stats that are displayed there can also be accessed using placeholders.</p>
<p><img src="/assets/menu_2.D9tiGzXj.png" alt=""></p>

## Editing this menu

<p>Item names, lores, materials, slots... are completely editable in the <code>gui/bounty-list.yml</code> config file.</p>

<details class="details custom-block" open="">
  <summary>
    Default Config (might be outdated)
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
            # GUI display name
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
            'Bounties ({page}/{max_page})'
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Number of slots in your inventory. Must be
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # between 9 and 54 and must be a multiple of 9.
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            slots
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            54
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            items
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            display_bounty
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
            10
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ,
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            11
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ,
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            12
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ,
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            13
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ,
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            14
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ,
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            15
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ,
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            16
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ,
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            19
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ,
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            20
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ,
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            21
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ,
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            22
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ,
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            23
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ,
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            24
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ,
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            25
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ,
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            28
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ,
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            29
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ,
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            30
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ,
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            31
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ,
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            32
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ,
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            33
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ,
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            34
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
            bounty
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # When there is no bounty in the given slot
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            no_bounty
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
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
            GRAY_STAINED_GLASS_PANE
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
            '&amp;cNo Bounty'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            hide_tooltip
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
            # General language options
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            last_update_date_format
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'dd/M/yyyy'
          </span>
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Date format used for date placeholders
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            no_creator_placeholder
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;cServer'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            creator_line
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            self
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;7You created this bounty.'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            other
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;7{creator} created this bounty.'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            none
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;cThis player is a criminal!'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            action_line
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            target
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;cPeople are looking for you.'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            contributor
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;eRight click to take away your contribution.'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            none
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;eKill them to claim the bounty.'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            hunter_line
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            target
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
            null
          </span>
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # Hide line for target of bounty
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            hunter
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;7▸ Click to stop &amp;ctracking &amp;7them.'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            none
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;7▸ Click to &amp;ctrack &amp;7them for ${target_tax}.'
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            item
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            PLAYER_HEAD
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
            '&amp;6{target}'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # You can set custom model data int and string here
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            #custom_model_data_string: 'something'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            #custom_model_data: 1234
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
            ''
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            #- '{creator_line}'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;f 💵&amp;7 Reward of &amp;f${reward}'
          </span>
          <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
            # claim tax can be accessed {claim_tax}
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;f ⚔&amp;7 Contributors: &amp;f{contributors}'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;f ☠ &amp;7Hunters: &amp;f{hunters}'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;f ⏳ &amp;7Last Update: &amp;f{last_update}'
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
            '{action_line}'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '{hunter_line}'
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            buy_bounty_compass
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
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
            bounty_compass
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
            51
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ]
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            item
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            COMPASS
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
            '&amp;6Bounty Compass'
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
            ''
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;eClick to buy the bounty compass for &amp;6${price}'
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            how_to_create_bounty
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
            49
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ]
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            name
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;6How to create a bounty?'
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
            WRITABLE_BOOK
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
            'Use /bounty &lt;player&gt; &lt;reward&gt;'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'to create a bounty on a player.'
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
            '&amp;6How to increase a bounty?'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'Use /bounty &lt;player&gt; &lt;amount&gt;'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'to increase an existing bounty.'
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
            '&amp;6How to remove a bounty?'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'Take off your contribution by right'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'clicking the bounty item in this menu.'
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            player_profile_item
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
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
            player_profile
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
            47
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ]
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            no_title_placeholder
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            '&amp;cNo Title'
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            item
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            PLAYER_HEAD
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
            '&amp;6[{level}] {name}'
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
            ''
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'Claimed Bounties: &amp;f{claimed_bounties}'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'Head Collection: &amp;f{successful_bounties}'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'Level: &amp;f{level}'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'Level Progress: {level_progress}'
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
            'Current Title: &amp;f{current_title}'
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
            'Use /bounties titles to check your hunter titles.'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            -
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            'Use /bounties animations to check your death animations.'
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            next_page_item
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
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
            next_page
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
            26
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ]
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            item
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            PLAYER_HEAD
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            texture
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMTliZjMyOTJlMTI2YTEwNWI1NGViYTcxM2FhMWIxNTJkNTQxYTFkODkzODgyOWM1NjM2NGQxNzhlZDIyYmYifX19
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
            '&amp;6Next Page'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            lore
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            : { }
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            prev_page_item
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
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
            previous_page
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
            18
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            ]
          </span>
        </span>
        <span class="line">
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            item
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            PLAYER_HEAD
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            texture
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            :
          </span>
          <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
            eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYmQ2OWUwNmU1ZGFkZmQ4NGU1ZjNkMWMyMTA2M2YyNTUzYjJmYTk0NWVlMWQ0ZDcxNTJmZGM1NDI1YmMxMmE5In19fQ==
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
            '&amp;6Previous Page'
          </span>
        </span>
        <span class="line">
          <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
            lore
          </span>
          <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
            : { }
          </span>
        </span>
      </code>
    </pre>
  </div>
</details>
