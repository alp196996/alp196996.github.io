# 🖌️ Create An Item

<p>This wiki page explains the two methods you can use to create items in MMOItems.</p>

## Item Edition GUI

<p>The item editor lets you create and edit items directly in-game without having to tamper with config files. This is a powerful and easy-to-understand method although we recommend advanced users to directly go for manual config file edits which is much faster if you know how all the stats are formatted.</p>
<p><img src="https://docs.phoenixdevt.fr/assets/edition_gui.9FGRG2Fx.gif" alt=""></p>
<ol><li>Open the game and create an item using via this command: <code>/mi create &lt;ITEM_TYPE&gt; &lt;YOUR_ITEM_ID&gt;</code><ol><li>You may use /mi list type to check all the available item types (Sword, Axe, Tool...).</li><li>The item ID will be used in every command/config file to identify the item. It should be something like STEEL_DAGGER to make config setup cleaner.</li></ol></li><li>The edition menu should open up after performing the create command. If you close it, you can still access it using this command: <code>/mi edit &lt;ITEM_TYPE&gt; &lt;YOUR_ITEM_ID&gt;</code><ol><li>On the 5th slot of the inventory, you can see your item and its current stats. You can click the chest item to add it to your inventory.</li><li>Every other item corresponds to an item stat that you can edit. Instructions on how to edit them are displayed directly in-game.</li><li>Once you added all the stats you wanted, get your item and have fun!</li></ol></li></ol>

## Manual Config Editing

<p>Advanced users should consider using this method as it is way faster if you already know the item options you'd like to use and how to format them.</p>
<ol><li>Open up the <code>/MMOItems/item</code> folder.</li><li>Select your item type and open the corresponding YML file using your favourite text editor.</li><li>Here is a config snippet that you can start with:</li></ol>

<div class="language-yml">
    <button title="Copy Code" class="copy"></button>
    <span class="lang">yml</span>
    <pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr">
        <code>
            <span class="line">
                <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">YOUR_ITEM_ID</span>
                <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
                <span class="line">
                    <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  base</span>
                    <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span>
            </span>
                    <span class="line">
                        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    material</span>
                        <span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span>
                        <span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">YOUR_ITEM_MATERIAL</span>
                </span>
        </code>
    </pre>
</div>

<ol start="4">
    <li>The list of available materials can be found in the <a href="https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html" target="_blank" rel="noreferrer">Spigot javadocs</a>. The item material is the first thing to add since it is the only real option an item needs to be able to be generated.</li>
    <li>Add as much item options (Abilities, Attack Damage....) as you want. You can see 'all' of the available item options (and how to configure them) on <a href="./../features/stats/stats">this wiki page</a>.</li>
    <li>Save the file and get back on Minecraft. Use /mi reload to let MMOItems load the item you just added to your config file, and use <code>/mi give &lt;ITEM_TYPE&gt; &lt;YOUR_ITEM_ID&gt;</code> to get your item!</li>
</ol>
