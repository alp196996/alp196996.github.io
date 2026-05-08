# 📖 Quests

<p>
  Quests are an essential part of any RPG. They give players goals, challenges,
  and rewards, while guiding them through the world. MMOCore includes a basic
  quest module, but it’s not as complete as popular Spigot quest plugins.
</p>
<p>
  For more complex RPG servers, we recommend sticking to popular, maintained
  quest plugins that are fully supported by MMOCore:
</p>
<ul>
  <li>
    <a href="https://www.spigotmc.org/resources/typewriter-next-generation-questing.107748/"
    target="_blank" rel="noreferrer">
      TypeWriter
    </a>
    <span class="VPBadge info">
      recommended
    </span>
  </li>
  <li>
    <a href="https://www.spigotmc.org/resources/betonquest-all-your-adventure-supplies-versatile-quests-in-depth-conversations.2117/"
    target="_blank" rel="noreferrer">
      BetonQuest
    </a>
    <span class="VPBadge info">
      recommended
    </span>
  </li>
  <li>
    <a href="https://www.spigotmc.org/resources/beautyquests.39255/" target="_blank"
    rel="noreferrer">
      BeautyQuests
    </a>
  </li>
  <li>
    <a href="https://www.spigotmc.org/resources/quests.3711/" target="_blank"
    rel="noreferrer">
      Quests
    </a>
  </li>
  <li>
    <a href="https://www.spigotmc.org/resources/questcreator-new-sqlite-support-and-data-conversion.38734/"
    target="_blank" rel="noreferrer">
      QuestCreator
    </a>
  </li>
</ul>

## Choosing your quest plugin

<p>
  Go to
  <code>
    MMOCore/config.yml
  </code>
  and set
  <code>
    quest-plugin
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
          # Edit the plugin handling quests here.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Supported values (just copy and paste):
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - MMOCORE (Default, built-in quest system)
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - NONE (Used to fully disable quests)
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - BEAUTYQUESTS
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - QUESTCREATOR (https://www.spigotmc.org/resources/questcreator.38734/)
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # - QUESTS (https://www.spigotmc.org/resources/quests.3711/)
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          quest-plugin
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
  Using any quest plugin that is not MMOCore will disable all quest features
  from MMOCore, including the quest registry and the
  <code>
    /quests
  </code>
  command. You will not get any warning for any MMOCore quest config error.
</p>

## MMOCore Quests

<p>
  MMOCore provides a simple objective-based quest solution, though it does
  not provide complex branching storylines with conditional events, tags
  and variables, like what you can achieve with BetonQuest or Typewriter.
</p>
<div class="info custom-block">
  <p class="custom-block-title custom-block-title-default">
    INFO
  </p>
  <p>
    The following paragraphs describe the built-in MMOCore quest module.
  </p>
</div>
<p>
  MMOCore quests are series of objectives the players must complete in order
  to earn some loot and experience. There are various types of objectives,
  like going to a specific location, talking to an NPC, killing X mobs, bringing
  items back to an NPC... Some of these objectives require extra plugins
  like
  <a href="https://www.spigotmc.org/resources/citizens.13811/" target="_blank"
  rel="noreferrer">
    Citizens
  </a>
  for NPC objectives or
  <a href="https://www.mythicmobs.net/index.php" target="_blank" rel="noreferrer">
    MythicMobs
  </a>
  for extra mob objectives.
</p>

## Parent Quests

<p>
  Quests may require that the player has completed some other quest beforehand,
  therefore you can set up some sort of storyline.
</p>
<p>
  Quests have a specific set of actions (these are called
  <em>
    triggers
  </em>
  ), like messages or commands, performed when the player completes an objective.
  These may be used to explain specific things to the player, or to give
  them quest items or rewards.
</p>

## Progression

<p>
  Whenever a player starts a quest, they can keep track of that quest progression
  in the quest GUI and on the bossbar, which displays the current quest objective.
  The bossbar also displays how close the player is from finishing the quest
  (ratio of completed objectives).
</p>
<p>
  <img src="/assets/quest_start.BRpjfvKv.png" alt="SOPzchl">
</p>

## Quest Menu

<p>
  Players can see available and unlocked quests in the quest menu, which
  they can access using
  <code>
    /quests
  </code>
  .
</p>
<p>
  <img src="/assets/quest_ui.Bl7Almx9.gif" alt="If0S5w6">
</p>

## Quest Example

<p>
  The following sections explain how to set up a new quest, using an example
  from the default MMOCore config files.
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
          # Levels players must have in
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # order to unlock this quest.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          level-req
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          main
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          10
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          mining
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          5
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Quest name displayed in the quest menu.
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
          'A Whole New World'
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Quest lore displayed in the quest menu.
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
          'This is the tutorial quest.'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'Lore example...'
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
          '&amp;eRewards:'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '&amp;7► Wooden Tools'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '&amp;7► Leather Armor'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          '&amp;7► 100 EXP'
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Quests the player must finish
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # in order to unlock this one.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          parent
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          : []
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Cooldown in hours. Don't put any
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # to make the quest a one-time quest.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Put it to 0 to make it instantly redoable.
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
          12
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # Objectives the player needs to
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # complete. Once they're all complete,
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # the quest will end.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          objectives
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          1
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          type
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'clickon{world="world";x=56;y=68;z=115;range=5}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          lore
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'Head to the camp.'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          bar-color
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          PURPLE
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          triggers
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
          'message{format="&amp;aGood job, now get some oak logs!"}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'sound{sound=ENTITY_EXPERIENCE_ORB_PICKUP}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          2
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          type
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'mineblock{type="OAK_LOG";amount=3}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          lore
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'Get three oak logs!'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          triggers
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
          'message{format="&amp;aGood job, now give these logs to the blacksmith."}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'sound{sound="ENTITY_EXPERIENCE_ORB_PICKUP"}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          3
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          type
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'getitem{type="OAK_LOG";amount=3;npc=0}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          lore
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'Give these oak logs to the blacksmith.'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          triggers
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
          'message{format="&amp;aGood job, now talk to the blacksmith again to claim
          your weapons!"}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'sound{sound=ENTITY_EXPERIENCE_ORB_PICKUP}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          4
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          type
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'talkto{npc=0}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          lore
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'Get your weapons from the blacksmith!'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          triggers
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
          'message{format="&amp;aNow go kill 5 skeletal knights to finish tutorial!"}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'sound{sound=ENTITY_PLAYER_LEVELUP}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          5
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          type
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'killmythicmob{name="SkeletalKnight";amount=5}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          lore
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'Kill 5 skeletal knights!'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          triggers
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
          'message{format="&amp;a&amp;lYou have successfully finished the tutorial!"}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'sound{sound="ENTITY_PLAYER_LEVELUP"}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'mmoitem{type=SWORD;id=CUTLASS}'
        </span>
      </span>
    </code>
  </pre>
</div>

### Config Breakdown

<p>
  The config above is one of the YAML files you can set up in the quests
  folder (one YAML config per quest). The first config option is
  <code>
    level-req
  </code>
  feature. This determines what level the player needs to be in order to
  unlock the quest. Our default config sets it to level 10 main, and level
  5 mining profession.
</p>
<p>
  After that, you can set the
  <strong>
    name
  </strong>
  of the quest that is displayed in the quest menu. The initial name that
  you set earlier is just for ID purposes in the config.
</p>
<p>
  Next, you can set the
  <strong>
    lore
  </strong>
  of the quest that is displayed in the quest menu. Note that adding rewards
  here won’t actually grant them; it’s just for display.
</p>
<p>
  Next option is the
  <strong>
    parent
  </strong>
  option, this determines if there is another quest the player must finish
  in order to unlock the specific quest.
</p>
<p>
  Next option is the
  <strong>
    cooldown
  </strong>
  on the quest. If you want it to be a one-time quest, you put nothing in
  the option. If you want it to be instantly redoable, set it to 0. Otherwise,
  the cooldown is in hours.
</p>

### Objectives

<p>
  Next, the quest file lets you put in the
  <strong>
    objectives
  </strong>
  . A quest is a series of objectives a player must complete in order to
  earn some rewards. Inside of an objective you have the type, lore, and
  triggers.
</p>
<p>
  <strong>
    Type
  </strong>
  is what determines what the player must do,
  <strong>
    Lore
  </strong>
  defines what the quest tells the player to do, and
  <strong>
    triggers
  </strong>
  determine what happens when the player completes the actual objective.
</p>
<p>
  Since the objective lore is displayed on a bossbar, you can change the
  color of the bar for every objective using
  <code>
    bar-color: &lt;COLOR&gt;
  </code>
  . A list of all the available colors can be found over the
  <a href="https://hub.spigotmc.org/javadocs/spigot/org/bukkit/boss/BarColor.html"
  target="_blank" rel="noreferrer">
    Spigot javadocs
  </a>
  .
</p>
<p>
  Triggers can be either used to give information to the player about the
  RPG storyline or instructions for the next objective, or simply quest rewards.
</p>
<table tabindex="0">
  <thead>
    <tr>
      <th>
        Objective
      </th>
      <th>
        Description
      </th>
      <th>
        Format
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        clickon
      </td>
      <td>
        Player must click somewhere in the map.
      </td>
      <td>
        <code>
          clickon{world=&lt;world-name&gt;;x=&lt;x&gt;;y=&lt;y&gt;;z=&lt;z&gt;;range=&lt;radius&gt;}
        </code>
      </td>
    </tr>
    <tr>
      <td>
        mineblock
      </td>
      <td>
        Player has to mine X blocks of the same type.
      </td>
      <td>
        <code>
          mineblock{type=&lt;MATERIAL&gt;;amount=&lt;amount&gt;}
        </code>
      </td>
    </tr>
    <tr>
      <td>
        killmob
      </td>
      <td>
        Player must kill X vanilla mobs.
      </td>
      <td>
        <code>
          killmob{type=&lt;ENTITY_TYPE&gt;;amount=&lt;AMOUNT&gt;}
        </code>
      </td>
    </tr>
    <tr>
      <td>
        goto
      </td>
      <td>
        Player has to go to some location.
      </td>
      <td>
        <code>
          goto{world=&lt;world-name&gt;;x=&lt;x&gt;;y=&lt;y&gt;;z=&lt;z&gt;;range=&lt;radius&gt;}
        </code>
      </td>
    </tr>
    <tr>
      <td>
        getitem
      </td>
      <td>
        Player has to give a Citizen NPC an item.
      </td>
      <td>
        <code>
          getitem{type=&lt;MATERIAL&gt;;npc=&lt;Citizen_ID&gt;;amount=&lt;AMOUNT&gt;}
        </code>
      </td>
    </tr>
    <tr>
      <td>
        getmmoitem
      </td>
      <td>
        Player has to give a Citizen NPC an item from MMOItems.
      </td>
      <td>
        <code>
          getmmoitem{type=&lt;MI_TYPE&gt;;id=&lt;MI_ID&gt;;npc=&lt;Citizen-ID&gt;;amount=&lt;AMOUNT&gt;}
        </code>
      </td>
    </tr>
    <tr>
      <td>
        talkto
      </td>
      <td>
        Player must talk to an NPC.
      </td>
      <td>
        <code>
          talkto{npc=&lt;Citizen_ID&gt;}
        </code>
      </td>
    </tr>
    <tr>
      <td>
        killmythicmob
      </td>
      <td>
        Player has to kill X mythic mobs.
      </td>
      <td>
        <code>
          killmythicmob{name=&lt;mythicMobsInternalName&gt;;amount=&lt;AMOUNT&gt;}
        </code>
      </td>
    </tr>
  </tbody>
</table>

### Trigger Types

<p>
  A full list of available triggers to be used in conjunction with these
  objectives can be found
  <a href="./../misc/triggers">
    here
  </a>
  .
</p>
