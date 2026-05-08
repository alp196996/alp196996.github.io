# 💾 Commands

## Item Commands

<table tabindex="0">
<thead>
<tr>
<th>Command</th>
<th>Usage</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>/mmoitems create &lt;type&gt; &lt;id&gt;</code></td>
<td>Creates a new item with the specified item type and item ID. ID is NOT the display name.</td>
</tr>
<tr>
<td><code>/mi copy &lt;type&gt; &lt;current-id&gt; &lt;new-id&gt;</code></td>
<td>Copies the item you are holding into a new item with a different ID. Useful if mass producing.</td>
</tr>
<tr>
<td><code>/mi delete &lt;type&gt; &lt;id&gt;</code></td><td>Deletes the specified item.</td>
</tr>
<tr>
<td><code>/mi edit &lt;type&gt; &lt;id&gt;</code></td>
<td>Opens up the item editor.</td>
</tr>
<tr>
<td><code>/updateitem</code></td>
<td>Updates the item you are holding.</td>
</tr>
<tr>
<td><code>/updateitem &lt;type&gt; &lt;id&gt;</code></td>
<td>Turns on the automatic <a href="./../items/revision-id">Item Updater</a> for a specific item. It is not totally recommended to leave this on constantly as always updating items may eventually cause lag if you have enough.</td>
</tr>
<tr>
<td><code>/mi drop &lt;type&gt; &lt;item-id&gt; &lt;world&gt; &lt;x&gt; &lt;y&gt; &lt;x&gt;</code></td>
<td>Generates and drops (essentially spawn in an item without putting it in a player inventory).</td>
</tr>
<tr>
<td><code>/mi item identify</code></td>
<td>Manually identifies the item you are holding.</td>
</tr>
<tr>
<td><code>/mi item repair</code></td>
<td>Manually repairs the item you are holding.</td>
</tr>
<tr>
<td><code>/mi item unidentify</code></td>
<td>Manually UNidentifies the item you are holding.</td>
</tr>
<tr>
<td><code>/mi item deconstruct</code></td>
<td>Manually deconstructs the item you are holding.</td>
</tr>
<tr>
<td><code>/mi give &lt;type&gt; &lt;item&gt; (player) (min-max) (unident-chance) (drop-chance) (soulbound-chance) (silent)</code></td>
<td>Gives an item to a player</td>
</tr>
</tbody>
</table>

## Item Management

<table tabindex="0">
    <thead>
        <tr>
            <th>Command</th>
            <th>Usage</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>/mi browse</code></td>
            <td>Pulls up an interactable library of ALL of our created items, sorted by item types. (Recommended for most item creation!)</td>
        </tr>
        <tr>
            <td><code>/mi itemlist &lt;type&gt;</code></td>
            <td>Lists all items from a specific item type.</td>
        </tr>
        <tr>
            <td><code>/mi allitems</code></td>
            <td>Lists all created items, not as useful as /mi browse.</td>
        </tr>
        <tr>
            <td><code>/mi giveall &lt;type&gt; &lt;item&gt; &lt;min-max&gt; &lt;unident-chance&gt;</code></td>
            <td>Gives an item to all online players.</td>
        </tr>
    </tbody>
</table>

## Crafting Stations

<table tabindex="0">
    <thead>
        <tr>
            <th>Command</th>
            <th>Usage</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>/mi stations list</code></td>
            <td>Lists all current crafting stations.</td>
        </tr>
        <tr>
            <td><code>/mi stations open &lt;station&gt; (player)</code></td>
            <td>This opens the specified station, for the specified player. This is the command you would use to bind stations to blocks.</td>
        </tr>
    </tbody>
</table>

## Miscellaneous

<table tabindex="0">
    <thead>
        <tr>
            <th>Command</th>
            <th>Usage</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>/mi ability &lt;ability&gt; (player) (mod1) (val1) (mod2) (val2)</code></td>
            <td>Cast an MMOItems ability (works with MM skills as well). There is arguments to select the ability, the player who casts it, and modify the values like damage and cooldown etc.</td>
        </tr>
        <tr>
            <td><code>/mi heal</code></td>
            <td>Similar to essentials/CMI heal, this heals you and removes all negative effects.</td>
        </tr>
        <tr>
            <td><code>/mi debug info (player)</code></td>
            <td>Opens up a useful chat menu with information about the player. This includes stats like class and mana (if applicable).</td>
        </tr>
        <tr>
            <td><code>/mi list (type/spirit/ability)</code></td>
            <td>Shows all available types for weapons,staff spirits, entities etc.</td>
        </tr>
    </tbody>
</table>

## General

<table tabindex="0">
    <thead>
        <tr>
            <th>Command</th>
            <th>Usage</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>/mmoitems reload</code></td>
            <td>Reloads the entire plugin, after editing config files. No need to restart your server!</td>
        </tr>
        <tr>
            <td><code>/mi reload (adv-recipes/stations)</code></td>
            <td>Reloads the plugin or reloads the advanced recipes/crafting stations if applicable.</td>
        </tr>
    </tbody>
</table>

## Item Generation

<table tabindex="0">
    <thead>
        <tr>
            <th>Command</th>
            <th>Usage</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>/mi generate &lt;player&gt; (extra-args)</code></td>
            <td>Check <a href="./../items/obtain-item">Obtaining an item</a> for more info</td>
        </tr>
    </tbody>
</table>
