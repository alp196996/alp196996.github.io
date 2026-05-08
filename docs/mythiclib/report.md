# 🐜 Reporting a bug

<p>With the important amount of plugin users it is more important than ever to spend some time on properly drafting issue tickets. Even with limited config/dev experience, most of the following instructions will take you at most a few minutes of your time, and might spare you and the support & dev team several hours.</p>

<div class="warning custom-block">
  <p class="custom-block-title custom-block-title-default">
    WARNING
  </p>
  <p>
    Do not use Gitlab tickets for support requests. Your ticket will be closed
    and you will be asked to join the
    <a href="https://phoenixdevt.fr/discord" target="_blank" rel="noreferrer">
      Discord
    </a>
    server for community &amp; staff assistance.
  </p>
</div>

## Use up-to-date plugin builds

<p>Unless staff specifically told you to temporarily downgrade to a lower plugin version, always make sure you are using the latest version available for MythicLib, MMOItems, MMOCore <strong>AND</strong> MythicMobs. MythicLib is a hard dependency for any MMO plugin and also needs to be kept up-to-date. Due to plugin code dependencies and frequent code updates, you might have to simultaneously update all of the MMO plugins. These plugin requirements are <strong>ALWAYS</strong> indicated in the plugin changelogs.</p>
<p><img src="/assets/spigot_changelog.UYEhkzg0.png" alt=""></p>
<p>When using development builds (available on the official website), keep in mind there might be several weeks/months worth of work between the latest dev build and spigot release. Therefore, <strong>when using a dev build for any of the MMO plugins, you have to use dev builds for all the plugins simultaneously</strong>. More information <a href="./faq#keep-mythiclib-up-to-date">here</a>.</p>

## Look for your issue in the <a href="./faq">Frequent Issues</a> wiki page

<p>There are bugs due to your specific server or plugin configuration which you can fix on your own. This will not only save you some time waiting for an answer on the Discord server, but this will also save us some time.</p>

## Look for similar issues in the <a href="https://gitlab.com/phoenix-dvpmt/mythiclib/-/issues">Issue Tracker</a>

<p>All closed issue tickets are archived, though you can still access them. Look for similar issues that have already been solved by other users, you might find your solution there. If you are reporting an existing issue, look for existing open tickets and provide more information there in order to reduce duplicates. Otherwise, open a new ticket!</p>

## Read your console error logs

<p>This might sound dumb but if everyone read plugin error logs the <em>Use up-to-date plugin builds</em> section would be pretty much useless, as every time a startup bug occurs with any plugin, Bukkit displays <code>[..] [Server thread/ERROR]: Error occurred while enabling ... (Is it up to date?)</code> in the console.</p>
<p>While most of the time error logs are 99% stack trace which you won't be able to read, error messages developers leave here and there might help you fix your issue on your own.</p>

<p>Something you should do every time when seeing a plugin error stack trace is use CTRL+F and look for <strong>plugin startup error logs</strong> which always start with <code>Error occurred while enabling ...</code>. If you see any of these startup errors, you are pretty much guaranteed the plugin will NOT function properly as it failed to enable, given your server and plugin configurations. These startup issues should be reported in priority if you don't see them in the <em>Frequent Issues</em> wiki page.</p>

## How to report a bug

<p>If all of this didn't help you can open an issue ticket on Gitlab, or come talk to us on our Discord server as this could definitely be a plugin bug. When reporting an issue, please try to provide as much information as possible:</p>

<ul>
  <li>
    Provide a concise description of your problem
  </li>
  <li>
    Find an (easy) way to reproduce your issue and provide the steps
  </li>
  <li>
    Pastebin relevant server logs (specific startup issues or full logs if
    you're unsure)
  </li>
  <li>
    Provide MMO/Mythic plugin builds used ("All latest spigot builds" or "All
    latest dev builds" is sufficient)
  </li>
  <li>
    Provide any related plugin configuration file (MMOItems item configs,
    MMOCore class config, ML/MI/MM skill configs etc.)
  </li>
</ul>

<p>What you can do to make our lives easier:</p>

<ul>
  <li>
    Provide videos or screenshots; these are definitely appreciated when reproducing
    or describing complex issues.
  </li>
  <li>
    Give the plugin a try on a fresh server setup. This will wipe out most
    of the issues due to your plugin or server configuration.
  </li>
  <li>
    Do
    <strong>
      NOT
    </strong>
    just say "... doesn't work" because it's insufficient 90% of the time.
    Specify everything that you have tried to get it working, and provide relevant
    configs or logs.
  </li>
  <li>
    Do not provide huge configuration files where 90% is unrelated to the
    issue you're dealing with. Find the
    <strong>
      SIMPLEST
    </strong>
    config setup which efficiently isolates the bugged feature
  </li>
  <li>
    Do NOT use screenshots to provide console logs
  </li>
</ul>

<table tabindex="0">
  <thead>
    <tr>
      <th>
        MMOItems
      </th>
      <th>
        MMOCore
      </th>
      <th>
        MMOProfiles
      </th>
      <th>
        MMOInventory
      </th>
      <th>
        MythicLib
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="https://gitlab.com/phoenix-dvpmt/mmoitems/-/issues" target="_blank"
        rel="noreferrer">
          Issue Tracker
        </a>
      </td>
      <td>
        <a href="https://gitlab.com/phoenix-dvpmt/mmocore/-/issues" target="_blank"
        rel="noreferrer">
          Issue Tracker
        </a>
      </td>
      <td>
        <a href="https://gitlab.com/phoenix-dvpmt/mmoprofiles/-/issues" target="_blank"
        rel="noreferrer">
          Issue Tracker
        </a>
      </td>
      <td>
        <a href="https://gitlab.com/phoenix-dvpmt/mmoinventory/-/issues" target="_blank"
        rel="noreferrer">
          Issue Tracker
        </a>
      </td>
      <td>
        <a href="https://gitlab.com/phoenix-dvpmt/mythiclib/-/issues" target="_blank"
        rel="noreferrer">
          Issue Tracker
        </a>
      </td>
    </tr>
  </tbody>
</table>

## Requesting a new feature

<p>You should try and follow the previous guidelines as much as possible when asking for a new plugin feature. Admittedly most of the time a simple description will be sufficient if it is clear enough (like if you're asking for a new PAPI placeholder or anything pretty simple), yet for more complex features it is better to provide as much information as possible:</p>

<ul>
  <li>
    quickly give some context
  </li>
  <li>
    highlight what the plugin is lacking (why something needs to be changed/added)
  </li>
  <li>
    provide a solution (suggest as many ideas as possible and explain them
    precisely)
  </li>
  <li>
    try and explain how useful it would be (this will make the devs more likely
    to implement it quickly)
  </li>
</ul>

<p>Similarly images, videos or simple schemes can help you explain what exactly you want added.</p>
<p>Make sure your feature hasn't already been suggested using the search bar! This will also reduce dupe tickets.</p>
