# 🪲 Frequent Issues

<p>Use this list of common issues with MythicLib/MMOItems/MMOCore to self-diagnose your issue whenever you feel like something isn't right.</p>
<p>Sometimes support over the Discord server is pretty slow given the amount of tickets and staff availability. Before reporting a bug using a Discord ticket, please make sure your issue is not one of the following. If you can fix it yourself using the following instructions, you will both gain time (that you'd have lost waiting for an answer) and make staff gain time so that they can work on fixing more complex bugs.</p>
<p>Issues specific to one of the MMO plugins are marked with brackets, like <code>Cannot cast abilities (MMOItems)</code>.</p>
<p>Always check your full server logs for plugin error logs because more than half the issues come with logs associated with them. Frequent issues that spawn with error logs are presented in the following list.</p>

## Keep MythicLib up-to-date

<p>Keep in mind MythicLib is necessary to run MMOItems/MMOCore and that it is a plugin too. A MMOItems might be caused by a anterior MythicLib startup issue. Always make sure it's not a bug with MythicLib first.</p>

## Outdated Plugins

<p>Error logs indicating a <code>NoClassDefFoundError</code> or <code>NoSuchMethodError</code> indicate that a plugin cannot find a class or method it was compiled with.

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
          Could not load [...] in folder 'plugins' org.bukkit.plugin.InvalidPluginException:
          java.lang.NoClassDefFoundError: ...
        </span>
      </span>
    </code>
  </pre>
</div>

<p>90% of the time, these errors are due to an outdated version of one of the MMO plugins or MythicLib. Download the latest releases/dev builds of all MMO plugins and try again.</p>
<p>Sometimes, these errors are due to a compatibility issue with external plugins, for instance if an external developer has changed something in their plugin API.</p>

## Plugin loading order issue

<p>Severe plugin compatibility issues can happen when the MMO plugins don't load in a specific predefined order on server startup. It does sometimes happen with circular dependencies (A -&gt; B -&gt; C -&gt; A), forcing Bukkit or Spigot to ignore soft dependencies. <strong>The most common issue is MythicMobs loading after all of the MMO plugins, which shouldn't happen at the required load order is the following:</strong></p>

<p><code>MythicMobs > MythicLib > MMOCore > MMOItems > MMOInventory</code></p>
<p>Recent versions of MythicLib contain a script that fews for circular dependencies. If you are having loading order issues, check the startup logs of MythicLib as they will most likely indicate a message that looks like this:</p>

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
          Found a dependency cycle! Please make sure that the plugins involved load
          with no errors.
        </span>
      </span>
    </code>
  </pre>
</div>

<p>If you get such a message, you can either uninstall one of the plugins in the loop to break it, or try and correct the load order manually using the following fix. You can also contact the developers of the plugins involved as it unfortunately is up to them to fix that dependency cycle.</p>

<p>If you realize that MythicLib loads before MythicMobs for instance, one possible fix is to open the MythicLib.jar file and edit its <code>plugin.yml</code> internal file: by making MythicMobs a hard dependency you are forcing Bukkit to enable MythicMobs before MythicLib.</p>

<p>Previous <code>plugin.yml</code>:</p>

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
          # ....
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          softdepend
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          : [
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          WorldGuard
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ,
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          Residence
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ,
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          Factions
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ,
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          MythicMobs
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ,
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          PlaceholderAPI
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ]
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          # ....
        </span>
      </span>
    </code>
  </pre>
</div>

<p>Fixed <code>plugin.yml</code>:</p>

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
          depend
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          : [
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          MythicMobs
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ]
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          softdepend
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          : [
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          WorldGuard
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ,
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          Residence
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ,
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          Factions
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ,
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          PlaceholderAPI
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          ]
        </span>
      </span>
    </code>
  </pre>
</div>

<p>You can also try using this server start argument if you are running Paper, or a Paper fork on 1.19.2+</p>

<div class="language-bash">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
    bash
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">
          -Dpaper.useLegacyPluginLoading
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          =
        </span>
        <span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">
          true
        </span>
      </span>
    </code>
  </pre>
</div>

## Dependency issue, preventing ML/MI/MC from starting

<p>MMOItems, MMOCore and MMOInv assume that their dependencies had no issues loading. If any of the MMO plugin dependencies fail loading the MMO plugins will most likely disable as well. Always check your startup logs for error prior the MMO plugin error to make sure it's not an issue with a dependency.</p>
<p>For instance, if MythicMobs fails loading - either because of a configuration issue on the user end or a plugin bug -, MythicLib will probably not function properly and throw a startup error.</p>

## <code>java.sql.SQLException: Column 'times_claimed' not found</code>

<p>Your MMOCore database it out of date due to a change in MMOCore 1.9. You can either update to MMOCore >1.9.5 or manually register the missing column. Updating your MySQL data table is fairly easy though, you just have to add a new string column called <code>times_claimed</code> (use the <code>LONGTEXT</code> data type):</p>

<div class="language-sql">
  <button title="Copy Code" class="copy">
  </button>
  <span class="lang">
    sql
  </span>
  <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"
  tabindex="0" dir="ltr">
    <code>
      <span class="line">
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          ALTER
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          TABLE
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          mmocore_playerdata
        </span>
        <span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">
          ADD
        </span>
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          COLUMN times_claimed LONGTEXT;
        </span>
      </span>
    </code>
  </pre>
</div>

## Cannot break any block (MMOCore)

<p>Please carefully read the following <a href="./../mmocore/features/mining">wiki page</a> as you might not have configured your tool permission sets.</p>

## Health bar is stuck to 10 hearts

<p>The health bar uses 10 hearts (equivalent to 20 HP) whatever maximum health you currently have. That option was implemented to allow server owners to utilize very large amount of health points without obstructing the player screen. You can disable this option in the main MythicLib config file. Since MythicLib 1.3.4 this option is now toggled OFF by default to reduce potential confusion.</p>

## <code>Cannot invoke "io.lumine.mythic.core.skills.SkillExecutor.getSkill(String)" because "skillManager" is null</code>

<p>This issue sometimes happen when MythicMobs loads after the MMO plugins. Please refer to the issue above called <em>Plugin loading order issue</em>.</p>

## Color codes not working

<p>MMOItems is currently transitioning to the MiniMessage format. If you have any issues with these please do report them in the issue tracker. Since ML 1.5 the MMO plugins are pretty lenient on what color codes you can use.</p>
<p>Here is a conversion table that indicates what tag corresponds to what color code</p>

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Color Code
      </th>
      <th>
        Tag
      </th>
      <th>
        Alias
      </th>
      <th>
      </th>
      <th>
        Color Code
      </th>
      <th>
        Tag
      </th>
      <th>
        Alias
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>
          &amp;0
        </code>
      </td>
      <td>
        <code>
          &lt;black&gt;
        </code>
      </td>
      <td>
        <code>
          &lt;#000000&gt;
        </code>
      </td>
      <td>
      </td>
      <td>
        <code>
          &amp;a
        </code>
      </td>
      <td>
        <code>
          &lt;green&gt;
        </code>
      </td>
      <td>
        <code>
          &lt;#55FF55&gt;
        </code>
      </td>
    </tr>
    <tr>
      <td>
        <code>
          &amp;1
        </code>
      </td>
      <td>
        <code>
          &lt;dark_blue&gt;
        </code>
      </td>
      <td>
        <code>
          &lt;#0000AA&gt;
        </code>
      </td>
      <td>
      </td>
      <td>
        <code>
          &amp;b
        </code>
      </td>
      <td>
        <code>
          &lt;aqua&gt;
        </code>
      </td>
      <td>
        <code>
          &lt;#55FFFF&gt;
        </code>
      </td>
    </tr>
    <tr>
      <td>
        <code>
          &amp;2
        </code>
      </td>
      <td>
        <code>
          &lt;dark_green&gt;
        </code>
      </td>
      <td>
        <code>
          &lt;#00AA00&gt;
        </code>
      </td>
      <td>
      </td>
      <td>
        <code>
          &amp;c
        </code>
      </td>
      <td>
        <code>
          &lt;red&gt;
        </code>
      </td>
      <td>
        <code>
          &lt;#FF5555&gt;
        </code>
      </td>
    </tr>
    <tr>
      <td>
        <code>
          &amp;3
        </code>
      </td>
      <td>
        <code>
          &lt;dark_aqua&gt;
        </code>
      </td>
      <td>
        <code>
          &lt;#00AAAA&gt;
        </code>
      </td>
      <td>
      </td>
      <td>
        <code>
          &amp;d
        </code>
      </td>
      <td>
        <code>
          &lt;light_purple&gt;
        </code>
      </td>
      <td>
        <code>
          &lt;#FF55FF&gt;
        </code>
      </td>
    </tr>
    <tr>
      <td>
        <code>
          &amp;4
        </code>
      </td>
      <td>
        <code>
          &lt;dark_red&gt;
        </code>
      </td>
      <td>
        <code>
          &lt;#AA0000&gt;
        </code>
      </td>
      <td>
      </td>
      <td>
        <code>
          &amp;e
        </code>
      </td>
      <td>
        <code>
          &lt;yellow&gt;
        </code>
      </td>
      <td>
        <code>
          &lt;#FFFF55&gt;
        </code>
      </td>
    </tr>
    <tr>
      <td>
        <code>
          &amp;5
        </code>
      </td>
      <td>
        <code>
          &lt;dark_purple&gt;
        </code>
      </td>
      <td>
        <code>
          &lt;#AA00AA&gt;
        </code>
      </td>
      <td>
      </td>
      <td>
        <code>
          &amp;f
        </code>
      </td>
      <td>
        <code>
          &lt;white&gt;
        </code>
      </td>
      <td>
        <code>
          &lt;#FFFFFF&gt;
        </code>
      </td>
    </tr>
    <tr>
      <td>
        <code>
          &amp;6
        </code>
      </td>
      <td>
        <code>
          &lt;gold&gt;
        </code>
      </td>
      <td>
        <code>
          &lt;#FFAA00&gt;
        </code>
      </td>
      <td>
      </td>
      <td>
        <code>
          &amp;k
        </code>
      </td>
      <td>
        <code>
          &lt;obfuscated&gt;
        </code>
      </td>
      <td>
        <code>
          &lt;obf&gt;
        </code>
      </td>
    </tr>
    <tr>
      <td>
        <code>
          &amp;7
        </code>
      </td>
      <td>
        <code>
          &lt;gray&gt;
        </code>
      </td>
      <td>
        <code>
          &lt;#AAAAAA&gt;
        </code>
      </td>
      <td>
      </td>
      <td>
        <code>
          &amp;l
        </code>
      </td>
      <td>
        <code>
          &lt;bold&gt;
        </code>
      </td>
      <td>
        <code>
          &lt;b&gt;
        </code>
      </td>
    </tr>
    <tr>
      <td>
        <code>
          &amp;8
        </code>
      </td>
      <td>
        <code>
          &lt;dark_gray&gt;
        </code>
      </td>
      <td>
        <code>
          &lt;#555555&gt;
        </code>
      </td>
      <td>
      </td>
      <td>
        <code>
          &amp;m
        </code>
      </td>
      <td>
        <code>
          &lt;strikethrough&gt;
        </code>
      </td>
      <td>
        <code>
          &lt;st&gt;
        </code>
      </td>
    </tr>
    <tr>
      <td>
        <code>
          &amp;9
        </code>
      </td>
      <td>
        <code>
          &lt;blue&gt;
        </code>
      </td>
      <td>
        <code>
          &lt;#5555FF&gt;
        </code>
      </td>
      <td>
      </td>
      <td>
        <code>
          &amp;n
        </code>
      </td>
      <td>
        <code>
          &lt;underlined&gt;
        </code>
      </td>
      <td>
        <code>
          &lt;u&gt;
        </code>
      </td>
    </tr>
    <tr>
      <td>
        <code>
          &amp;o
        </code>
      </td>
      <td>
        <code>
          &lt;italic&gt;
        </code>
      </td>
      <td>
        <code>
          &lt;i&gt;
        </code>
      </td>
      <td>
      </td>
      <td>
        <code>
          &amp;r
        </code>
      </td>
      <td>
        <code>
          &lt;reset&gt;
        </code>
      </td>
      <td>
        <code>
          &lt;r&gt;
        </code>
      </td>
    </tr>
    <tr>
      <td>
        Line break
      </td>
      <td>
        <code>
          &lt;newline&gt;
        </code>
      </td>
      <td>
        <code>
          \n
        </code>
      </td>
      <td>
      </td>
      <td>
        Rainbow
      </td>
      <td>
        <code>
          &lt;rainbow&gt;
        </code>
      </td>
      <td>
        None
      </td>
    </tr>
  </tbody>
</table>

<p>You may also use <code>&lt;color:#FFFFFF&gt;</code> or <code>&lt;color:black&gt;</code> for colors, while the <code>§</code> character instead of <code>&amp;</code> remains natively supported by Bukkit.</p>

<p>To create a <strong>horizontal</strong> gradient of colors: <code>&lt;gradient:[color1]:[color...]:[phase]&gt;......&lt;/gradient&gt;</code> where <code>[color]</code> is a hex color or simply something like <code>green</code>. To create a <strong>vertical</strong> gradient of colors: <code>&lt;transition:[color1]:[color2]:[phase]&gt;......&lt;/transition&gt;</code></p>
<p><img src="/assets/color_grad_vertical.BVZeuvAl.png" alt="image"></p>

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Example Color Code
      </th>
      <th>
        Picture
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>
          &lt;gradient:#FBEB19:#FD8C30&gt;&lt;bold&gt;MMOITEMS&lt;/gradient&gt;
        </code>
      </td>
      <td>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKsAAAAiCAYAAAAgVykJAAAC8UlEQVR4nO2cPWgUURDHX8Tz0KhRRDkJtzn1yBaGgG1qD9Ja2NmpaGewCxILg9iJdgmSIiGdha2wVwZbJUTk5IKXCyeCSPw4CSoYK/fNygz73uaUm/X/q16G2bl3Ydg3X+8GgqFgxxhjut2u+U2hUDCaKRaL8Rrfq/9x/V57/tmOANglcFagBjgrUAOcFahhLyfcaPE+PFL5ycpd9DdW+SRgZPwHb9NTv/1sPys35jArDSa2eTtPDwp2eIJJmxC0Hw95PSvavPjJ2lw4Kmgd8LN5eStebz44zuqUp96zcm/9OyWvvVXvbqUrGbxZgSLgrEANA1yd9W2nKD7gQ+3Ch3gdLZ7ojc1L9uipz53kda6+Y+XRI/548g0Jajc6rLzRsGFAWP1sP/dembczvcnKEzabNoyRQoLabDvVDqU+ddpLX+L8/TfW5pUqrzO/zu/h2hlWXiL/E9RZgVrgrEANbDUgT6y9SM+aw7M2+2689Mvo6dGfkDf5KoRoR9CXqwGWaCZg5bQC0A80OoPxunzbhmrh8Nd4PVah+ggDgFLgrEANXmEAze4p0ZNjmTdAs/uEzWW+EO3C3Ez2/fQb9Cj3rQaE9EhtHUr9LJrdU+o3T6U+S4912hSQsn4KbQokp66SenizAjXAWYEaMlcDXj9Pz1K9ba4e6Ymd67M2XNn+thOvV5b4JkKecDnuney0/WYkKFKmT6HhQfOW9aXSdJdTN8bgzQoUAWcFash9U2D91WC6Uo6QKgZ/u0EgjQXSkMCFscr3eI2mAFALnBWoQXUYQEf76E0BaRSQIo0RutwUiB4O2z1MytlrL9jNbAAlrHwhf2VvuEhITQGXWwPSGOGf4M0K1ABnBWpgbwrQCe3Rc3wWKTUFXPRHxz/yOkJTwFefjvy5II0FhqGnHWFcMGGT3CBIPOswUpg8yrNDGwdhwIcxUlPAW19oCkistfbFa9wUAGqBswI1pIYBGvnff8BMG/hhNpA74KxADXBWoAY4K1DDL9/H6p+EOCwcAAAAAElFTkSuQmCC"
        alt="image">
      </td>
    </tr>
    <tr>
      <td>
        <code>
          &lt;color:#FF0000&gt;&lt;bold&gt;MMOITEMS or &lt;#FF0000&gt;&lt;bold&gt;MMOITEMS
        </code>
      </td>
      <td>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAAgCAYAAACGqDMBAAAEfElEQVR4nO1cTZbTMAyWUlhDhylcYgp3mMNwKA7DlgN0dlyAN/yvWPR1xGKSVHYsW7KdJm3z8XjjOrYsO58tyz/B25e3BB72+30fbhr0HwNAKK7DQFwij5S+FLXKQ5ZHIxMD8aG4kLzYMytSOuWWUVPHNF7UFWd5+aG0UkOeArU7EAXCvAxrx7dCktXFE6Q7Xml+v+3s9csgqLaQU4+YUjka0ltHRimNJo+m/XKIY0WpbE1+v+3t9ao0gpb3lDIixfLUADfzFuQSrSvvFEQ9FYx1aJsgg6AlRNDmtZp6DaFjciQioPdcixqEugRSCghVjTzL0/4MEvQn/D3+eDoGN83rYHnfn/4E45/TY5vmdzKNK1NKvzbpIEGuS7hcjRyrDrLMYx2t+pTIlNu2TnpRt9UaAFsOeDwtMPHWOUgtUEDulCNWrvlf0ENqvjwTD1CfeHOYay0kmyMwtA76bf+jivB7Fv5cRaJO5r0QL6V3zf2xk0imSpK/YyZvy/Ja9ZRkWvWRMO934U4bGqNOC6JYRuFiIPsP1RfqLwEl040L9rxPBa+PXzxBd9x8C172lsXvBO8+Ln9ITG6aQeHV7go8Yq25tOgzBngdNyyeT4d4eNesFxMvQ2euabHq46FsmWkBQLd8F1r6mgGmPNqggaLJTAS1emRTyfzEf1RaPJ8KmgV2qQ23B9dcAkCUFCXvQtLTySst+K/Wbl/qOhMtXvz1YY4jKblTJcTjxtJCUAH695i7X68QO8NZwxjodzkJANt/AAiImD8H1XjHU8n8yML/WPhLtsQUKjCJ87yA89JqQJEc8/mE8IYFBzf9j2wq8m51AwDHJlicpAAmdXlCZ5rnaJYTqNF+BAtBg5iEnJbz1RbEbpVUhN+XSu8hdDOciyfoV2TTBjoDj95/QzxOAfFo3CrtxZfgUSj3bWuyHRCJ04a7w68+/LC6uXyCng1qDUECmrYA9ZFxRKCxdiFQ30uuxos3tAkATLBD1N3wGMl778hmuh6Hz570VCCi8x5BpdPszuJwZ9Y9wkmL0ppT8Vz+RkyVAWQEagPcw9XoI+Fu5P13bsofmZnmYQmx44JXM4KeA65k2VMNhJkR9NwPXnhHGc0gb0flnNpjlPmqtFD/Bl714Q/8Ap0Abmq30Qt08TSnTM/BNwj4/YL3Cq/fPx4GMHTANQvXHPxdd3kR0fFwS7BhempMPzffMR06kmrTh/Dgef2zmoNONR9HbFiYPTjkyRtj4Ks5Qvm37mvKBMhzyCTMiqBToW/QCT1WxKFJ5+pUtaCIafIQmUeMMVbKgpfm0h8Pk6FRKvV5LUeed8olnrocA8mRl1RrVPOLCNd5+CwpN6fQVE9JgeWNfm9GKdM0glKATdadueC5P+eB20BONTI3yS0bMoMq8hdXIDdaplBE6Qjq14UgYiV4PD9eFFMwJodIHFGRy5Tkts/VBFU1UCKN3zhiff0G6uN5QehG9T+EyrI1Rk1dgkQVFLZ+ukHaHvf14kVKTdLL1JCHyDad6UbTnKmPgqhcr0H29u9/XDCeD+StUg8AAAAASUVORK5CYII="
        alt="image">
      </td>
    </tr>
    <tr>
      <td>
        <code>
          &lt;transition:white:black:red:0.0&gt;&lt;bold&gt;MMOITEMS&lt;/transition&gt;
        </code>
        <br>
        <code>
          &lt;transition:white:black:red:0.1&gt;&lt;bold&gt;MMOITEMS&lt;/transition&gt;
        </code>
        <br>
        <code>
          &lt;transition:white:black:red:0.2&gt;&lt;bold&gt;MMOITEMS&lt;/transition&gt;
        </code>
        <br>
        <code>
          &lt;transition:white:black:red:0.3&gt;&lt;bold&gt;MMOITEMS&lt;/transition&gt;
        </code>
        <br>
        <code>
          &lt;transition:white:black:red:0.4&gt;&lt;bold&gt;MMOITEMS&lt;/transition&gt;
        </code>
        <br>
        <code>
          &lt;transition:white:black:red:0.5&gt;&lt;bold&gt;MMOITEMS&lt;/transition&gt;
        </code>
        <br>
        <code>
          &lt;transition:white:black:red:0.6&gt;&lt;bold&gt;MMOITEMS&lt;/transition&gt;
        </code>
        <br>
        <code>
          &lt;transition:white:black:red:0.7&gt;&lt;bold&gt;MMOITEMS&lt;/transition&gt;
        </code>
        <br>
        <code>
          &lt;transition:white:black:red:0.8&gt;&lt;bold&gt;MMOITEMS&lt;/transition&gt;
        </code>
        <br>
        <code>
          &lt;transition:white:black:red:0.9&gt;&lt;bold&gt;MMOITEMS&lt;/transition&gt;
        </code>
        <br>
        <code>
          &lt;transition:white:black:red:1.0&gt;&lt;bold&gt;MMOITEMS&lt;/transition&gt;
        </code>
      </td>
      <td>
        <img src="/assets/color_grad_vertical.BVZeuvAl.png" alt="image">
      </td>
    </tr>
  </tbody>
</table>

## Issue with FactionsBridge not loading

<p><code>java.lang.NoClassDefFoundError: cc/javajobs/factionsbridge/FactionsBridge</code></p>
<p>You most likely have a Factions plugin installed. You need to install <a href="https://www.spigotmc.org/resources/factionsbridge.89716/" target="_blank" rel="noreferrer">FactionsBridge</a> which is a hard dependency when using any Factions plugin (it's like Vault but for factions). MythicLib has native support for most Factions plugins: you cannot deal skill damage to players within the same faction.</p>

## Mana from AureliumSkills not working on items (MMOItems)

<p>Sometimes AureliumSkills integration will fail with MMOItems. You can diagnose this issue by using <code>/mi debug info</code> which will display most fields (level and mana) to 0 even though AureliumSkills action bar says otherwise.</p>

<p>This sometimes happen when reloading the server, in which case a simple relog will fix the issue on the player side. Just make sure you fully restart the server instead of using <code>/reload</code>, which often ends up messing stuff up with plugins.</p>

## Updating your server from 1.20.4 to 1.20.5+

<p>Minecraft 1.20.5 changes how NBT tags are stored within items. While vanilla Minecraft makes sure to convert items placed inside of player and chest inventories, items stored in non-vanilla/external databases (MMOProfiles, MMOInventory...) are not automatically converted.</p>
<p>If you are updating your server from &lt;1.20.4 to any version above, you have to convert your items stored in your MMOProfiles/MMOInventory databases to a format that does not depend on server version, upgrade your server, and convert the items back. Fortunately, MMOLib has a tool to have this done automatically. This tool comprises of one command and requires NBTAPI to be installed.</p>

<ol>
  <li>
    Download
    <a href="https://www.spigotmc.org/resources/nbt-api.7939/" target="_blank"
    rel="noreferrer">
      NBTAPI
    </a>
    from here and install it on your server.
  </li>
  <li>
    Close your server and
    <strong>
      backup your MMOProfiles/MMOInventory user data
    </strong>
    .
  </li>
  <li>
    Start your server in
    <strong>
      1.20.4 or lower
    </strong>
    and
    <strong>
      make sure no players log in
    </strong>
    while performing the following steps.
    <ol>
      <li>
        Run the commands
        <code>
          mmoprofiles convert-item-nbts
        </code>
        and
        <code>
          mmoinventory convert-item-nbts
        </code>
        from the server console and wait for completion. Your items are now in
        a version-safe data format.
      </li>
      <li>
        Close your server. You can now safely upgrade to 1.20.5+
      </li>
      <li>
        Start your updated server, run the following commands from the server
        console:
        <code>
          mmoprofiles convert-item-nbts from
        </code>
        and
        <code>
          mmoinventory convert-item-nbts from
        </code>
        (notice the second "from" parameter) and wait for completion.
      </li>
    </ol>
  </li>
  <li>
    You can now uninstall NBTAPI from your server. Players can now safely
    login again.
  </li>
</ol>

<p>You can take your time after running the first command batch, just make sure no player logs in after using the commands and before you upgrade your server version. Otherwise, the player who logged in in the meantime will suffer from item NBT corruption.</p>
