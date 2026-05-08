# 🏷️ Placeholders

<p>All placeholders automatically register upon plugin load, and require <strong>PlaceholderAPI</strong> to work. You do not need to run any commands to initialize the placeholders. Keep in mind you can access PAPI placeholders from MVdWPlaceholderAPI using <code>{placeholderapi_mmoitems_...}</code>.</p>
<p>If you're looking for a placeholder and you can't see it here, do check <a href="./../../mythiclib/general/placeholders"><strong>MYTHICLIB PLACEHOLDERS</strong></a> as well!</p>

### Stats

<table tabindex="0">
    <thead>
        <tr>
            <th><strong>Placeholder</strong></th>
            <th><strong>Description</strong></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>%mmoitems_stat_&lt;stat name&gt;%</code></td>
            <td>Returns the formatted player <a href="./../features/stats/stats">stat</a> value</td>
        </tr>
        <tr>
            <td><code>%mmoitems_stat_&lt;element name&gt;_&lt;damage/damage_percent/weakness/defense/defense-percent&gt;%</code></td>
            <td>Returns the elemental stats</td>
        </tr>
    </tbody>
</table>

### Types

<table tabindex="0">
    <thead>
        <tr>
            <th><strong>Placeholder</strong></th>
            <th><strong>Description</strong></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>%mmoitems_type_&lt;item type&gt;_name%</code></td>
            <td>Returns the name of the specified <a href="./../features/types">item type</a>.</td>
        </tr>
        <tr>
            <td><code>%mmoitems_type_&lt;item type&gt;_total%</code></td>
            <td>Returns the total amount of items in the specified <a href="./../features/types">item type</a>.</td>
        </tr>
    </tbody>
</table>

### Durability

<table tabindex="0">
    <thead>
        <tr>
            <th><strong>Placeholder</strong></th>
            <th><strong>Description</strong></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>%mmoitems_durability%</code></td>
            <td>Returns the durability left of the current item</td>
        </tr>
        <tr>
            <td><code>%mmoitems_durability_max%</code></td>
            <td>Returns the max durability of the current item</td>
        </tr>
        <tr>
            <td><code>%mmoitems_durability_ratio%</code></td>
            <td>Returns the durability of the current item as a percentage</td>
        </tr>
        <tr>
            <td><code>%mmoitems_durability_bar_square%</code></td>
            <td>Returns the durability of the current item as a bar (Squares)</td>
        </tr>
        <tr>
            <td><code>%mmoitems_durability_bar_diamond%</code></td>
            <td>Returns the durability of the current item as a bar (Diamonds)</td>
        </tr>
        <tr>
            <td><code>%mmoitems_durability_bar_thin%</code></td>
            <td>Returns the durability of the current item as a bar (Thin)</td>
        </tr>
    </tbody>
</table>

<p>More information about custom durability on <a href="./../features/custom-durability">this wiki page</a>.</p>

### Misc

<table tabindex="0">
    <thead>
        <tr>
            <th><strong>Placeholder</strong></th>
            <th><strong>Description</strong></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>%mmoitems_tier_&lt;item tier&gt;%</code></td>
            <td>Returns the name of the given tier</td>
        </tr>
        <tr>
            <td><code>%mmoitems_ability_cd_&lt;ability name&gt;%</code></td>
            <td>Returns the current cooldown of the given ability</td>
        </tr>
    </tbody>
</table>
