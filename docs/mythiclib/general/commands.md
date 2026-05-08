# 💾 Commands

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Command
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
          /ml reload
        </code>
      </td>
      <td>
        Reloads the plugin and config files.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /ml damage &lt;source&gt; &lt;target&gt; &lt;value&gt;
        </code>
      </td>
      <td>
        Force source player to deal damage to target entity (name or UUID)
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /ml stat [...]
        </code>
      </td>
      <td>
        More information on
        <a href="./../features/stats#using-commands">
          this wiki page
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /ml debug cast &lt;skill_id&gt;
        </code>
      </td>
      <td>
        Debug command to cast skill with given ID.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /ml debug logs
        </code>
      </td>
      <td>
        Dumps latest server logs to
        <code>
          mclo.gs
        </code>
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /ml debug stats &lt;player&gt;
        </code>
      </td>
      <td>
        Open a GUI to explore stats of target player
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /ml debug attributes &lt;player&gt;
        </code>
      </td>
      <td>
        Open a GUI to explore attributes of target player
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /ml debug versions
        </code>
      </td>
      <td>
        Dumps plugin versions to chat
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /ml debug healthscale set &lt;amount&gt; &lt;player&gt;
        </code>
      </td>
      <td>
        Sets health scale of given player
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /ml debug healthscale reset &lt;player&gt;
        </code>
      </td>
      <td>
        Resets health scale of given player
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /ml debug test
        </code>
      </td>
      <td>
        Developer command, do not use
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /ml debug parse
        </code>
      </td>
      <td>
        Developer command, do not use
      </td>
    </tr>
  </tbody>
</table>

## Command Config

<div class="warning custom-block">
  <p class="custom-block-title custom-block-title-default">
    WARNING
  </p>
  <p>
    This is only available for MythicLib and MMOCore at the moment.
  </p>
</div>

<p>MMO plugins allow you to edit basic information of native plugin commands, including their name, description, usage, aliases and permission. All of these options are editable in the <code>commands.yml</code> file located in the main plugin folder.</p>
<p>Here is the content of the <code>MMOCore/commands.yml</code> file as an example:</p>

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
          mmocore
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          verbose
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          PLAYER
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          cast
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
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          cast
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          aliases
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          : []
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          description
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'Enter casting mode'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          permission
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'mmocore.cast'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          verbose
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          ALL
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          player
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
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          player
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          aliases
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          : [
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          p
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ,
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          profile
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ]
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          description
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'Displays player stats'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          permission
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'mmocore.profile'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          verbose
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          ALL
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # [...]
        </span>
      </span>
    </code>
  </pre>
</div>

<p>The <code>main</code> option defines the command name, or label. If set to <code>player</code>, players have to type <code>/player</code> to execute the command. The <code>aliases</code> option allows you to define alternative labels for the same command. In the example above, players can also type <code>/p</code> or <code>/profile</code> to execute the same command as <code>/player</code>.</p>
<p>The <code>permission</code> option defines the permission required to execute the command. In the example above, only players with the <code>mmocore.profile</code> permission can execute the <code>/player</code> command.</p>

## Command Verbose

<div class="warning custom-block">
  <p class="custom-block-title custom-block-title-default">
    WARNING
  </p>
  <p>
    This is only available for MythicLib and MMOCore at the moment.
  </p>
</div>

<p>In the same config file, you can also define a <code>verbose</code> level for each command. This option allows you to control where the command execution messages are sent. There are multiple verbose levels available:</p>

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Level
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
          ALL
        </code>
      </td>
      <td>
        Messages are sent to both the player and the console.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          PLAYER
        </code>
      </td>
      <td>
        Messages are only sent to the player executing the command. This mode
        avoids console spam when using commands like
        <code>
          /ml stat add
        </code>
        .
      </td>
    </tr>
    <tr>
      <td>
        <code>
          CONSOLE
        </code>
      </td>
      <td>
        Messages are only sent to the console.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          REDIRECT_TO_CONSOLE
        </code>
      </td>
      <td>
        All messages are sent to the console instead. This can be useful for logging
        important command executions.
      </td>
    </tr>
    <tr>
      <td>
        <code>
          NONE
        </code>
      </td>
      <td>
        No messages are sent.
      </td>
    </tr>
  </tbody>
</table>

<p>For instance, the following code snippet sets the verbose level of the main <code>/mythiclib</code> command, and all its subcommands, to <code>PLAYER</code>.

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
          # MythicLib/commands.yml
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          mythiclib
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          verbose
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          :
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          PLAYER
        </span>
      </span>
    </code>
  </pre>
</div>
