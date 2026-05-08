# ✅ Conditions

<div class="warning custom-block">
  <p class="custom-block-title custom-block-title-default">
    WARNING
  </p>
  <p>
    This feature will be merged in a near future with MythicLib
    <a href="./../../mythiclib/scripts/conditions/intro">
      script conditions
    </a>
    (this update will be backwards compatible). This page will be deleted
    and moved over to the MythicLib wiki.
  </p>
</div>
<p>
  Every drop table has the ability to be restricted with various conditions.
  This means that only players that meet all the requirements on a drop table
  will actually access it when performing an action. Here is a list of available
  conditions.
</p>

### Conditions tables (Since 1.9.5)

<p>
  You can create condition tables in
  <code>
    conditions.yml
  </code>
  . You will then be able to reference an entire set of conditions at once
  using the
  <code>
    from
  </code>
  condition.
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
          #Example
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          test-condition
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
          'level{amount=10}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">
          #Will load the 2 conditions from test-condition-2.
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'from{source=test-condition-2}'
        </span>
      </span>
      <span class="line">
      </span>
      <span class="line">
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">
          test-condition-2
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
          'world{name=world}'
        </span>
      </span>
      <span class="line">
        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">
          -
        </span>
        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">
          'level{profession=mining;amount=3}'
        </span>
      </span>
    </code>
  </pre>
</div>

## Available Conditions

<table tabindex="0">
  <thead>
    <tr>
      <th>
        Condition
      </th>
      <th>
        Format
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        From
      </td>
      <td>
        <code>
          from{source=condition-id}
        </code>
      </td>
    </tr>
    <tr>
      <td>
        Main Level
      </td>
      <td>
        <code>
          level{amount=LEVEL_HERE}
        </code>
      </td>
    </tr>
    <tr>
      <td>
        Profession Level
      </td>
      <td>
        <code>
          level{profession=PROFESSION_NAME;amount=LEVEL_HERE}
        </code>
      </td>
    </tr>
    <tr>
      <td>
        Current Biome
      </td>
      <td>
        <code>
          biome{name=BIOMES}
        </code>
      </td>
    </tr>
    <tr>
      <td>
        Current World
      </td>
      <td>
        <code>
          world{name=WORLD_NAME}
        </code>
      </td>
    </tr>
    <tr>
      <td>
        Permission
      </td>
      <td>
        <code>
          permission{node=PERMISSION_NODE}
        </code>
      </td>
    </tr>
  </tbody>
</table>
