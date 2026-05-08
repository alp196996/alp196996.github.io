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
          /mmoinv reload
        </code>
      </td>
      <td>
        Reload the plugin
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmoinv export-data
        </code>
      </td>
      <td>
        Export player data from YAML flat storage to SQL database
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmoinv open &lt;inventory&gt; &lt;owner&gt;
        </code>
      </td>
      <td>
        Open a custom inventory to a player
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmoinv open &lt;inventory&gt; &lt;owner&gt; &lt;player&gt; &lt;can_edit&gt;
        </code>
      </td>
      <td>
        Open
        <code>
          owner
        </code>
        's custom inventory to player
        <code>
          player
        </code>
        .
        <code>
          can_edit
        </code>
        can be set to
        <code>
          true
        </code>
        (permission to equip/unequip items) or
        <code>
          false
        </code>
        (cannot equip/unequip items)
      </td>
    </tr>
    <tr>
      <td>
        <code>
          /mmoinv inspect &lt;inventory&gt; &lt;owner&gt;
        </code>
      </td>
      <td>
        Inspect a player's custom inventory
      </td>
    </tr>
  </tbody>
</table>
<p>
  The following command aliases also work:
  <code>
    /mmoinv
  </code>
  ,
  <code>
    /rpginv
  </code>
  ,
  <code>
    /rpginventory
  </code>
  .
</p>
