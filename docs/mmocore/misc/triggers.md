# 🔧 Triggers

<div class="warning custom-block">
  <p class="custom-block-title custom-block-title-default">
    WARNING
  </p>
  <p>
    This feature will be merged in a near future with MythicLib
    <a href="./../../mythiclib/scripts/mechanics/intro">
      script mechanics
    </a>
    (this update will be backwards compatible). This page will be deleted
    and moved over to the MythicLib wiki.
  </p>
</div>
<p>
  <strong>
    This is a very technical feature, you will not learn anything by reading
    this page on its own (out of context). It should only be read if other
    wiki pages redirect you to this page.
  </strong>
</p>
<p>
  Triggers are used by MMOCore to execute actions when certain conditions
  are met. They are used for both quests and professions, and each has a
  set of actions or objectives that can "trigger" them.
</p>

### Trigger Tables (Since 1.9.5)

<p>
  Since 1.9.5, you can define trigger tables in
  <code>
    triggers.yml
  </code>
  . You can reference each trigger list with its id which will fire all
  the corresponding triggers.
</p>
<div class="language-">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span>
          #Example
        </span>
      </span>
      <span class="line">
        <span>
          test-trigger:
        </span>
      </span>
      <span class="line">
        <span>
          - 'command{format="broadcast Triggered!"}'
        </span>
      </span>
      <span class="line">
        <span>
          #Will fire the 2 commands in test-trigger-2
        </span>
      </span>
      <span class="line">
        <span>
          - 'from{source="test-trigger-2"}'
        </span>
      </span>
      <span class="line">
        <span>
        </span>
      </span>
      <span class="line">
        <span>
        </span>
      </span>
      <span class="line">
        <span>
          test-trigger-2:
        </span>
      </span>
      <span class="line">
        <span>
          - 'command{format="mmocore admin skill-points give %player_name% 1"}'
        </span>
      </span>
      <span class="line">
        <span>
          - 'command{format="mmocore admin atr-realloc-points give %player_name%
          3"}'
        </span>
      </span>
    </code>
  </pre>
</div>

## Available Trigger Types

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Trigger
      </th>
      <th>
        Description
      </th>
      <th>
        Format/Example
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        stat
      </td>
      <td>
        Gives a permanent stat to the player. FLAT type just adds the amount to
        the stat. Relative makes it have a % increase for the stat.
      </td>
      <td>
        <code>
          stat{stat=&lt;STAT_NAME&gt;;amount=&lt;amount&gt;;type=FLAT/RELATIVE}
        </code>
      </td>
    </tr>
    <tr>
      <td>
        skill_buff
      </td>
      <td>
        Gives a permanent buff for all the skills matching the formula by changing
        the value of a certain modifier (cooldown, damage, mana...). More info
        on skill buffs
        <a href="./../skills/intro#skill-buffs">
          here
        </a>
        .
      </td>
      <td>
        <code>
          skill_buff{formula="&lt;FORMULA&gt;";modifier=&lt;MODIFIER&gt;;amount=&lt;amount&gt;;type=FLAT/RELATIVE}
        </code>
      </td>
    </tr>
    <tr>
      <td>
        unlock_skill
      </td>
      <td>
        Unlocks a skill for the player. More about skill unlocking
        <a href="./../skills/unlocking">
          here
        </a>
        .
      </td>
      <td>
        <code>
          unlock_skill{skill=FIREBALL}
        </code>
      </td>
    </tr>
    <tr>
      <td>
        unlock_slot
      </td>
      <td>
        Unlocks a specific
        <a href="./../skills/binding#skill-slots">
          skill slot
        </a>
        for the player.
      </td>
      <td>
        <code>
          unlock_slot{slot="&lt;SLOT&gt;"}
        </code>
      </td>
    </tr>
    <tr>
      <td>
        bind_skill
      </td>
      <td>
        Binds a skill to a specific slot.
      </td>
      <td>
        <code>
          bind_skill{skill=FIREBALL;slot=10}
        </code>
      </td>
    </tr>
    <tr>
      <td>
        levelup_skill
      </td>
      <td>
        Increases the player's skill level.
      </td>
      <td>
        <code>
          levelup_skill{skill=&lt;NAME&gt;;amount=1}
        </code>
      </td>
    </tr>
    <tr>
      <td>
        message
      </td>
      <td>
        Sends a message to the player.
      </td>
      <td>
        <code>
          message{format="&amp;aYour message here... "}
        </code>
      </td>
    </tr>
    <tr>
      <td>
        command
      </td>
      <td>
        Makes the console perform a command.
      </td>
      <td>
        <code>
          command{format="tellraw @a {"text":"Hello!"}"}
        </code>
      </td>
    </tr>
    <tr>
      <td>
        experience
      </td>
      <td>
        Gives experience in a profession.
      </td>
      <td>
        <code>
          exp{profession=&lt;PROFESSION&gt;;amount=&lt;AMOUNT&gt;}
        </code>
      </td>
    </tr>
    <tr>
      <td>
        experience
      </td>
      <td>
        Gives main class experience.
      </td>
      <td>
        <code>
          exp{amount=&lt;AMOUNT&gt;}
        </code>
      </td>
    </tr>
    <tr>
      <td>
        sound
      </td>
      <td>
        Broadcasts a sound to the player.
      </td>
      <td>
        <code>
          sound{sound=&lt;SOUND_NAME&gt;;volume=&lt;VOLUME&gt;;pitch=&lt;PITCH&gt;}
        </code>
      </td>
    </tr>
    <tr>
      <td>
        item
      </td>
      <td>
        Gives an item to the player.
      </td>
      <td>
        <code>
          item{type=DIAMOND;amount=3}
        </code>
      </td>
    </tr>
    <tr>
      <td>
        mmoitem
      </td>
      <td>
        Gives an mmoitem to the player.
      </td>
      <td>
        <code>
          mmoitem{type=SWORD;id=FALCON_BLADE;amount=2}
        </code>
      </td>
    </tr>
    <tr>
      <td>
        mana
      </td>
      <td>
        Give/take/set player mana.
      </td>
      <td>
        <code>
          mana{operation=&lt;GIVE/SET/TAKE&gt;;amount=2-3}
        </code>
      </td>
    </tr>
    <tr>
      <td>
        stamina
      </td>
      <td>
        Give/take/set player stamina.
      </td>
      <td>
        <code>
          stamina{operation=&lt;GIVE/SET/TAKE&gt;;amount=2-3}
        </code>
      </td>
    </tr>
    <tr>
      <td>
        stellium
      </td>
      <td>
        Give/take set player stellium.
      </td>
      <td>
        <code>
          stellium{operation=&lt;GIVE/SET/TAKE&gt;;amount=2-3}
        </code>
      </td>
    </tr>
    <tr>
      <td>
        mmskill
      </td>
      <td>
        Cast a MythicMobs skill.
      </td>
      <td>
        <code>
          mmskill{id=MythicMobsSkillInternalName}
        </code>
      </td>
    </tr>
    <tr>
      <td>
        money
      </td>
      <td>
        Give/take/set player balance.
      </td>
      <td>
        <code>
          money{operation=&lt;GIVE/SET/TAKE&gt;;amount=2-3}
        </code>
      </td>
    </tr>
  </tbody>
</table>
<p>
  Most of these types and triggers are shown in the default config with
  how to properly use them. The message and command triggers support placeholders
  from
  <a href="https://www.spigotmc.org/resources/placeholderapi.6245/" target="_blank"
  rel="noreferrer">
    PlaceholderAPI
  </a>
  .
</p>
